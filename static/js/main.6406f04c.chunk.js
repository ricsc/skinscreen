(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t){},101:function(e,t){},102:function(e,t){},103:function(e,t){},104:function(e,t,a){},109:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(14),s=a(15),o=a(17),i=a(16),r=a(18),l=a(1),c=a.n(l),d=a(34),u=a.n(d),m=a(28),p=(a(76),a(77),a(23)),h=a(117),f=a(120),b=a(68),g=a(121),v=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.show?c.a.createElement(g.a,{variant:this.props.variant||"danger",onClose:this.props.onClose,dismissible:!0},this.props.title&&c.a.createElement("h5",null,c.a.createElement("strong",null,this.props.title)),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.message}})):null}}]),t}(l.Component),w=(a(90),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"About container"},c.a.createElement("h1",null,"About"),c.a.createElement("p",null,"This is a TensorFlow.js web application where users can classify images selected locally or taken with their device's camera. The app uses TensorFlow.js and a pre-trained model converted to the TensorFlow.js format to provide the inference capabilities. This model is saved locally in the browser using IndexedDB. A service worker is also used to provide offline capabilities."))}}]),t}(l.Component)),E=a(7),y=a.n(E),x=a(9),k=a(116),O=a(115),j=a(63),C=a(122),S=a(118),A=a(119),N=a(123),U=a(48),M=a(69),T=a(62),L=a.n(T),I=a(10),D=a(70),W=function(e){var t=e.isLoading,a=e.text,n=e.loadingText,s=e.className,o=void 0===s?"":s,i=e.disabled,r=void 0!==i&&i,l=Object(D.a)(e,["isLoading","text","loadingText","className","disabled"]);return c.a.createElement(O.a,Object.assign({className:"LoadButton ".concat(o),disabled:r||t},l),t&&c.a.createElement(k.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ",t?n:a)},P={0:"Actinic Keratoses - Danger",1:"Basal Cell Carcinoma - Danger",2:"Benign Keratosis like Lesion - Harmless",3:"Dermatofibroma - Harmless",4:"Melanocytic Nevi - Caution",5:"Vascular Lesion - Harmless",6:"Melanoma - Danger"},F={API_ENDPOINT:"https://ricsc.github.io/api"},B=(a(104),a(105),"/model/model.json"),_=256,K=192,z=256,R=5,H="web-model",G=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).initWebcam=Object(x.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.b.webcam(a.refs.webcam,{resizeWidth:z,resizeHeight:z,facingMode:"environment"});case 3:a.webcam=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a.refs.noWebcam.style.display="block";case 9:case"end":return e.stop()}},e,null,[[0,6]])})),a.startWebcam=Object(x.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.webcam&&a.webcam.start();case 1:case"end":return e.stop()}},e)})),a.stopWebcam=Object(x.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.webcam&&a.webcam.stop();case 1:case"end":return e.stop()}},e)})),a.getModelInfo=Object(x.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(F.API_ENDPOINT,"/model_info"),{method:"GET"}).then(function(){var e=Object(x.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json().then(function(e){a.modelLastUpdated=e.last_updated}).catch(function(e){console.log("Unable to get parse model info.")});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log("Unable to get model info")});case 2:case"end":return e.stop()}},e)})),a.updateModel=Object(x.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Updating the model: "+H),a.setState({isDownloadingModel:!0}),e.next=4,I.d(B);case 4:return a.model=e.sent,e.next=7,a.model.save("indexeddb://"+H);case 7:a.setState({isDownloadingModel:!1,modelUpdateAvailable:!1,showModelUpdateAlert:!1,showModelUpdateSuccess:!0});case 8:case"end":return e.stop()}},e)})),a.classifyLocalImage=Object(x.a)(y.a.mark(function e(){var t,n,s,o,i,r,l,c,d,u,m;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isClassifying:!0}),t=a.refs.cropper.getCroppedCanvas(),n=I.e(function(){return I.a.fromPixels(t).toFloat()}),e.next=5,a.processImage(n);case 5:return s=e.sent,o=I.c.resizeBilinear(s,[K,_]),i=a.model.predict(o),e.next=10,i.data();case 10:return r=e.sent,e.next=13,a.getTopKClasses(r,R);case 13:l=e.sent,a.setState({predictions:l,isClassifying:!1,photoSettingsOpen:!a.state.photoSettingsOpen}),c=a.refs.canvas.getContext("2d"),d=z/t.width,u=z/t.height,m=Math.min(d,u),c.clearRect(0,0,z,z),c.drawImage(t,0,0,t.width*m,t.height*m),n.dispose(),s.dispose(),o.dispose(),i.dispose();case 25:case"end":return e.stop()}},e)})),a.classifyWebcamImage=Object(x.a)(y.a.mark(function e(){var t,n,s,o,i,r,l;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isClassifying:!0}),e.next=3,a.webcam.capture();case 3:return t=e.sent,n=I.c.resizeBilinear(t,[K,_]),e.next=7,a.processImage(n);case 7:return s=e.sent,o=a.model.predict(s),e.next=11,o.data();case 11:return i=e.sent,e.next=14,a.getTopKClasses(i,R);case 14:return r=e.sent,a.setState({predictions:r,isClassifying:!1,photoSettingsOpen:!a.state.photoSettingsOpen}),l=I.e(function(){return t.toFloat().div(255)}),e.next=19,I.a.toPixels(l,a.refs.canvas);case 19:n.dispose(),t.dispose(),s.dispose(),o.dispose(),l.dispose();case 24:case"end":return e.stop()}},e)})),a.processImage=function(){var e=Object(x.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.e(function(){return t.expandDims(0).toFloat().div(127).sub(1)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getTopKClasses=function(){var e=Object(x.a)(y.a.mark(function e(t,a){var n,s,o,i,r,l,c;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],s=0;s<t.length;s++)n.push({value:t[s],index:s});for(n.sort(function(e,t){return t.value-e.value}),o=new Float32Array(a),i=new Int32Array(a),r=0;r<a;r++)o[r]=n[r].value,i[r]=n[r].index;for(l=[],c=0;c<i.length;c++)l.push({className:P[i[c]],probability:(100*o[c]).toFixed(2)});return e.abrupt("return",l);case 9:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.handlePanelClick=function(e){a.setState({photoSettingsOpen:!a.state.photoSettingsOpen})},a.handleFileChange=function(e){e.target.files&&e.target.files.length>0&&a.setState({file:URL.createObjectURL(e.target.files[0]),filename:e.target.files[0].name})},a.handleTabSelect=function(e){switch(e){case"camera":a.startWebcam();break;case"localfile":a.setState({filename:null,file:null}),a.stopWebcam()}},a.webcam=null,a.model=null,a.modelLastUpdated=null,a.state={modelLoaded:!1,filename:"",isModelLoading:!1,isClassifying:!1,predictions:[],photoSettingsOpen:!0,modelUpdateAvailable:!1,showModelUpdateAlert:!1,showModelUpdateSuccess:!1,isDownloadingModel:!1},a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(x.a)(y.a.mark(function e(){var t,a,n,s=this;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!("indexedDB"in window)){e.next=36;break}return e.prev=1,e.next=4,I.d("indexeddb://"+H);case 4:return this.model=e.sent,e.prev=5,e.next=8,Object(M.a)("tensorflowjs",1);case 8:return t=e.sent,e.next=11,t.transaction("model_info_store").objectStore("model_info_store").get(H);case 11:return a=e.sent,n=new Date(a.modelArtifactsInfo.dateSaved),e.next=15,this.getModelInfo();case 15:console.log(this.modelLastUpdated),!this.modelLastUpdated||n>=new Date(this.modelLastUpdated).getTime()?console.log("Using saved model"):this.setState({modelUpdateAvailable:!0,showModelUpdateAlert:!0}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(5),console.warn(e.t0),console.warn("Could not retrieve when model was saved.");case 23:e.next=34;break;case 25:return e.prev=25,e.t1=e.catch(1),console.log("Not found in IndexedDB. Loading and saving..."),console.log(e.t1),e.next=31,I.d(B);case 31:return this.model=e.sent,e.next=34,this.model.save("indexeddb://"+H);case 34:e.next=40;break;case 36:return console.warn("IndexedDB not supported."),e.next=39,I.d(B);case 39:this.model=e.sent;case 40:this.setState({modelLoaded:!0}),this.initWebcam(),I.e(function(){return s.model.predict(I.f([null,K,_,3]))}).dispose();case 44:case"end":return e.stop()}},e,this,[[1,25],[5,19]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(x.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.webcam&&this.webcam.stop();try{this.model.dispose()}catch(t){}case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Classify container"},!this.state.modelLoaded&&c.a.createElement(l.Fragment,null,c.a.createElement(k.a,{animation:"border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))," ",c.a.createElement("span",{className:"loading-model-text"},"Loading Model")),this.state.modelLoaded&&c.a.createElement(l.Fragment,null,c.a.createElement(O.a,{onClick:this.handlePanelClick,className:"classify-panel-header","aria-controls":"photo-selection-pane","aria-expanded":this.state.photoSettingsOpen},"Take or Select a Photo to Classify",c.a.createElement("span",{className:"panel-arrow"},this.state.photoSettingsOpen?c.a.createElement(U.b,null):c.a.createElement(U.c,null))),c.a.createElement(j.a,{in:this.state.photoSettingsOpen},c.a.createElement("div",{id:"photo-selection-pane"},this.state.modelUpdateAvailable&&this.state.showModelUpdateAlert&&c.a.createElement(h.a,null,c.a.createElement(g.a,{variant:"info",show:this.state.modelUpdateAvailable&&this.state.showModelUpdateAlert,onClose:function(){return e.setState({showModelUpdateAlert:!1})},dismissible:!0},"An update for the ",c.a.createElement("strong",null,this.state.modelType)," model is available.",c.a.createElement("div",{className:"d-flex justify-content-center pt-1"},!this.state.isDownloadingModel&&c.a.createElement(O.a,{onClick:this.updateModel,variant:"outline-info"},"Update"),this.state.isDownloadingModel&&c.a.createElement("div",null,c.a.createElement(k.a,{animation:"border",role:"status",size:"sm"},c.a.createElement("span",{className:"sr-only"},"Downloading..."))," ",c.a.createElement("strong",null,"Downloading..."))))),this.state.showModelUpdateSuccess&&c.a.createElement(h.a,null,c.a.createElement(g.a,{variant:"success",onClose:function(){return e.setState({showModelUpdateSuccess:!1})},dismissible:!0},"The ",c.a.createElement("strong",null,this.state.modelType)," model has been updated!")),c.a.createElement(C.a,{defaultActiveKey:"camera",id:"input-options",onSelect:this.handleTabSelect,className:"justify-content-center"},c.a.createElement(S.a,{eventKey:"camera",title:"Take Photo"},c.a.createElement("div",{id:"no-webcam",ref:"noWebcam"},c.a.createElement("span",{className:"camera-icon"},c.a.createElement(U.a,null)),"No camera found. ",c.a.createElement("br",null),"Please use a device with a camera, or upload an image instead."),c.a.createElement("div",{className:"webcam-box-outer"},c.a.createElement("div",{className:"webcam-box-inner"},c.a.createElement("video",{ref:"webcam",autoPlay:!0,playsInline:!0,muted:!0,id:"webcam",width:"448",height:"448"}))),c.a.createElement("div",{className:"button-container"},c.a.createElement(W,{variant:"primary",size:"lg",onClick:this.classifyWebcamImage,isLoading:this.state.isClassifying,text:"Classify",loadingText:"Classifying..."}))),c.a.createElement(S.a,{eventKey:"localfile",title:"Select Local File"},c.a.createElement(A.a.Group,{controlId:"file"},c.a.createElement(A.a.Label,null,"Select Image File"),c.a.createElement("br",null),c.a.createElement(A.a.Label,{className:"imagelabel"},this.state.filename?this.state.filename:"Browse..."),c.a.createElement(A.a.Control,{onChange:this.handleFileChange,type:"file",accept:"image/*",className:"imagefile"})),this.state.file&&c.a.createElement(l.Fragment,null,c.a.createElement("div",{id:"local-image"},c.a.createElement(L.a,{ref:"cropper",src:this.state.file,style:{height:400,width:"100%"},guides:!0,aspectRatio:1,viewMode:2})),c.a.createElement("div",{className:"button-container"},c.a.createElement(W,{variant:"primary",size:"lg",disabled:!this.state.filename,onClick:this.classifyLocalImage,isLoading:this.state.isClassifying,text:"Classify",loadingText:"Classifying..."}))))))),this.state.predictions.length>0&&c.a.createElement("div",{className:"classification-results"},c.a.createElement("h3",null,"Predictions"),c.a.createElement("canvas",{ref:"canvas",width:z,height:z}),c.a.createElement("br",null),c.a.createElement(N.a,null,this.state.predictions.map(function(e){return c.a.createElement(N.a.Item,{key:e.className},c.a.createElement("strong",null,e.className)," ",e.probability,"%")})))))}}]),t}(l.Component),J=(a(109),function(){return c.a.createElement("div",{className:"NotFound"},c.a.createElement("h1",null,"404"),c.a.createElement("h3",null,"The page you were looking for is not here."),c.a.createElement("a",{href:"/"},"Go Home"))}),V=function(e){var t=e.childProps;return c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/",exact:!0,component:G,props:t}),c.a.createElement(p.a,{path:"/about",exact:!0,component:w,props:t}),c.a.createElement(p.a,{component:J}))},$=(a(112),function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).dismissUpdateAlert=function(e){a.setState({showUpdateAlert:!1})};return a.state={showUpdateAlert:!0,reloadMsg:"\n      New content is available.<br />\n      Please <a href='javascript:location.reload();'>reload</a>.<br />\n      <small>If reloading doesn't work, close all tabs/windows of this web application,\n      and then reopen the application.</small>\n    "},a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h.a,null,c.a.createElement(f.a,{collapseOnSelect:!0,className:"app-nav-bar",variant:"dark",expand:"lg"},c.a.createElement(f.a.Brand,{href:"/"},"Skinscreen"),c.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(b.a,{className:""},c.a.createElement(m.b,{className:"nav-link",to:"/"},"Classify"),c.a.createElement(m.b,{className:"nav-link",to:"/about"},"About")))),this.props.updateAvailable&&this.state.showUpdateAlert&&c.a.createElement("div",{style:{paddingTop:"10px"}},c.a.createElement(v,{title:"",variant:"info",message:this.state.reloadMsg,show:this.props.updateAvailable&&this.state.showUpdateAlert,onClose:this.dismissUpdateAlert}))),c.a.createElement(h.a,null,c.a.createElement(V,null)))}}]),t}(l.Component)),q=Object(p.f)($),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e){if("serviceWorker"in navigator){if(new URL("/skinscreen",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/skinscreen","/service-worker.js");Q?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Y(t,e)})}}function Y(e,t){navigator.serviceWorker.register(e).then(function(e){function a(a){console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA2-PWA."),t&&t.onUpdate&&t.onUpdate(e,a)}e.waiting&&e.active&&a(e.waiting),e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?a(n):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Z=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={contentCached:!1,updateAvailable:!1},a.handleUpdate=function(e){var t=e.waiting;t&&t.postMessage({type:"SKIP_WAITING"}),a.setState({updateAvailable:!0})},a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){X({onUpdate:this.handleUpdate})}},{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement(q,{updateAvailable:this.state.updateAvailable}))}}]),t}(l.Component);u.a.render(c.a.createElement(Z,null),document.getElementById("root"))},71:function(e,t,a){e.exports=a(113)},77:function(e,t,a){},90:function(e,t,a){},98:function(e,t){},99:function(e,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.6406f04c.chunk.js.map