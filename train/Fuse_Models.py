#!/usr/bin/env python
# coding: utf-8

import os
from glob import glob

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from keras.utils.np_utils import to_categorical # convert to one-hot-encoding

from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras import layers
from tensorflow.keras import Model, Input
from tensorflow.keras.applications.inception_v3 import InceptionV3
from tensorflow.keras.applications.densenet import DenseNet201
from tensorflow.keras.applications.xception import Xception

from tensorflow.keras.optimizers import Adam
from tensorflow.keras.callbacks import ReduceLROnPlateau, EarlyStopping


import matplotlib.pyplot as plt


X_val = np.load("/home/ricsc/ML/Data/baseline/256_192_val.npy")
X_test = np.load("/home/ricsc/ML/Data/baseline/256_192_test.npy")
y_val = np.load("/home/ricsc/ML/Data/baseline/val_labels.npy")
y_test = np.load("/home/ricsc/ML/Data/baseline/test_labels.npy")

y_val = to_categorical(y_val)
y_test = to_categorical(y_test)

X_val.shape, X_test.shape, y_val.shape, y_test.shape

input_shape = X_val[0,:,:,:].shape
model_input = Input(shape=input_shape)


inception = InceptionV3(input_shape=input_shape, input_tensor=model_input, include_top=False, weights=None)

for layer in inception.layers:
    layer.trainable = True


x_incept = layers.GlobalMaxPooling2D(name="avg_pool_incept")(inception.output)
x_incept = layers.Dense(512, activation='relu')(x_incept)
x_incept = layers.Dropout(0.5)(x_incept)
x_incept = layers.Dense(7, activation="softmax", name="pred_incept")(x_incept)

inception_model = Model(model_input, x_incept)
optimizer = Adam(learning_rate=0.0001, beta_1=0.9, beta_2=0.999, epsilon=None, decay=0.0, amsgrad=True)
inception_model.compile(loss='categorical_crossentropy',
              optimizer=optimizer,
              metrics=['accuracy'])

inception_model.load_weights("InceptionV3.h5")

densenet = DenseNet201(input_shape=input_shape, input_tensor=model_input, include_top=False, weights=None)

for layer in densenet.layers:
    layer.trainable = True

x_dense = layers.GlobalMaxPooling2D(name="avg_pool_dense")(densenet.output)
x_dense = layers.Dense(512, activation='relu')(x_dense)
x_dense = layers.Dropout(0.5)(x_dense)
x_dense = layers.Dense(7, activation="softmax", name="pred_dense")(x_dense)


densenet_model = Model(model_input, x_dense)
optimizer = Adam(learning_rate=0.0001, beta_1=0.9, beta_2=0.999, epsilon=None, decay=0.0, amsgrad=True)
densenet_model.compile(loss='categorical_crossentropy',
              optimizer=optimizer,
              metrics=['accuracy'])

densenet_model.load_weights("DenseNet201.h5")

def fuse(models, model_input):
    outputs = [model.outputs[0] for model in models]
    y = layers.Average()(outputs)
    model = Model(model_input, y, name='fuse')
    return model


fused_model = fuse([densenet_model, inception_model], model_input)


fused_model.compile(loss='categorical_crossentropy',
              optimizer=optimizer,
              metrics=['accuracy'])


loss_val, acc_val = fusion_model.evaluate(X_val, y_val, verbose=1)
print("Validation: accuracy = %f  ;  loss_v = %f" % (acc_val, loss_val))

loss_test, acc_test = fused_model.evaluate(X_test, y_test, verbose=1)
print("Test: accuracy = %f  ;  loss = %f" % (acc_test, loss_test))

fused_model.save("skin_cancer.h5")




