(window.webpackJsonprelabeler=window.webpackJsonprelabeler||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),l=a(86),c=a(33),s=a(15),p=a(69),u=a.n(p),d=a(35),b=a(70),m=a(24),h=a(71),y=a.n(h).a.scale("Set2").colors(10),f="FETCH_DATA_BEGIN",g="FETCH_DATA_SUCCESS",v="FETCH_DATA_FAILURE",O="SET_LABEL",j="UPDATE_DATA",E=function(){return{type:f}},w=function(e,t,a){return{type:g,payload:{fData:e,labels:t,label:a}}},k=function(e){return{type:v,payload:{error:e}}};function x(e){if(!e.ok)throw Error(e.statusText);return e}function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var D={data:{},loading:!0,error:null,labels:[]};var I="CHANGE_OPACITY",L="DOWNLOAD_FILE",P=function(e){return{type:L,payload:{download:e}}};function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var V={opacity:50,downloadFile:!1};var N="SELECTED_FEATURE",z=function(e){return{type:N,payload:{feature:e}}};function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var A={feature:null};var _=Object(d.c)({geojsonData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return S({},e,{loading:!0,error:null});case g:return S({},e,{loading:!1,data:t.payload.fData,labels:t.payload.labels,label:t.payload.label});case v:return S({},e,{loading:!1,error:t.payload.error,data:{}});case O:return S({},e,{label:t.payload.label});case j:return S({},e,{data:t.payload.fData});default:return e}},control:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return T({},e,{opacity:t.payload.opacity});case L:return T({},e,{downloadFile:t.payload.download});default:return e}},tile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{feature:Object.assign({},t.payload.feature)});default:return e}}}),R=Object(d.d)(_,Object(d.a)(b.a)),Q=a(12),B=a(13),Z=a(16),G=a(14),M=a(17),U=(a(100),a(153)),H=a(85),X=a(82),q=a.n(X),W=a(83),Y=a.n(W),K=a(148),$=a(11),ee=a(3),te=a(110),ae=a(149),ne=a(141),re=a(140),oe=a(146),ie=a(42),le=a(81),ce=a.n(le),se=a(138),pe=a(139),ue=a(142),de=a(74),be=a.n(de);function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function he(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ye=function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexGrow:1},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},toolbar:Object(m.a)({minHeight:56},e.breakpoints.up("sm"),{minHeight:50}),menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:he({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"space-between",backgroundColor:e.palette.primary.main,minHeight:"50px !important",height:"50px !important"}),content:{flexGrow:1,marginLeft:-240,width:"calc(100% - ".concat(240,"px)")},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},button:{position:"absolute",right:"5px",color:"#fff !important",textTransform:"uppercase",textDecoration:"none",background:"#ed3330",display:"inline-block",border:"none",textAlign:"center",width:"180px"}}},fe=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(Z.a)(this,Object(G.a)(t).call(this))).downloadFile=e.downloadFile.bind(Object($.a)(e)),e}return Object(M.a)(t,e),Object(B.a)(t,[{key:"downloadFile",value:function(){this.props.dispatch(P(!0))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.open,n=e.handleDrawerOpen;return r.a.createElement(se.a,{position:"fixed",className:Object(ee.a)(t.appBar,Object(m.a)({},t.appBarShift,a))},r.a.createElement(pe.a,{className:t.toolbar},r.a.createElement(re.a,{color:"inherit","aria-label":"open drawer",onClick:n,edge:"start",className:Object(ee.a)(t.menuButton,a&&t.hide)},r.a.createElement(be.a,null)),r.a.createElement(ne.a,{variant:"h6",noWrap:!0},"Relabeler"),r.a.createElement(ue.a,{className:t.button,color:"inherit",onClick:this.downloadFile},"Download")))}}]),t}(n.Component),ge=Object(ie.a)(Object(s.b)(function(e){return{labels:e.geojsonData.labels,currentlabel:e.geojsonData.label}}),Object(te.a)(ye))(fe),ve=a(75),Oe=a.n(ve),je=a(76),Ee=a.n(je),we=a(77),ke=a(143),xe=function(e){return e.loading?r.a.createElement("div",{style:{marginLeft:"calc(50% - 5px)",marginTop:"calc(100vh/2 - 65px)"}},r.a.createElement(ke.a,{size:80,color:"secondary"})):r.a.createElement("div",null)};function Ce(e){var t=e.properties.label.filter(function(e){return 0===e}).length,a=e.properties.label.map(function(e,t){return 1===e?{index:t}:null}).filter(function(e){return null!==e});return e.properties.label.length===t||1===e.properties.label[0]&&a.length>1?e.properties.conflict="yes":e.properties.conflict="no",e}var Se=a(32),De={id:"labels",source:"labels",type:"fill",paint:{"fill-opacity":.5}},Ie={id:"reviewLayer",source:"labels",type:"line",paint:{"line-width":["match",["get","status"],"no",1,"yes",1,1],"line-color":["match",["get","status"],"no","#30ff07","yes","#30ff07","white"],"line-gap-width":["match",["get","status"],"no",6,"yes",6,0],"line-opacity":.5}},Le={id:"conflictLayer",source:"labels",type:"line",paint:{"line-width":["match",["get","conflict"],"yes",2,0],"line-color":["match",["get","conflict"],"yes","#ff0000","no","white","white"],"line-dasharray":[10,10],"line-opacity":.5}},Pe={id:"activeFeature",source:"activeFeature",type:"line",paint:{"line-width":2,"line-gap-width":6,"line-color":"#ffff00","line-opacity":.8}},Fe=function(e){function t(e){var a;return Object(Q.a)(this,t),(a=Object(Z.a)(this,Object(G.a)(t).call(this,e))).state={loading:!0},a.onLabelClick=a.onLabelClick.bind(Object($.a)(a)),a.save=a.save.bind(Object($.a)(a)),a.loadExtraStyles=a.loadExtraStyles.bind(Object($.a)(a)),a}return Object(M.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={version:8,sources:{"raster-tiles":{type:"raster",tiles:Se.layers,tileSize:256}},layers:[{id:"tmsLayer",type:"raster",source:"raster-tiles",minzoom:0,maxzoom:22}]},a={container:this.node,style:t,center:[0,0],zoom:0,attributionControl:!0,transformRequest:function(e,t){if(e.startsWith("https://evwhs.digitalglobe.com"))return console.log("------------------------------------"),console.log("oooo"),console.log("------------------------------------"),{url:e,headers:{Authorization:"Basic "+btoa("devseed:31Fc8m4cVWR6p4*")}}}};this.hoverId=0;var n=new Oe.a.Map(a);this.onMapRender=function(t){t.target&&t.target.loaded()&&e.setState({loading:!1})},n.on("render",this.onMapRender),n.on("load",function(){n.on("click","labels",e.onLabelClick),e.loadExtraStyles()}),n.on("mouseover","labels",function(e){n.getCanvas().style.cursor=e?"pointer":""}),this.map=n}},{key:"componentWillReceiveProps",value:function(e){e.data&&e.currentlabel&&this.initLabels(e.data,e.currentlabel,e.opacity),e.feature&&(this.updateFeature(e.feature),this.activeStyle(e.feature)),e.downloadFile&&(this.save(),this.props.dispatch(P(!1)))}},{key:"updateFeature",value:function(e){var t=this.props.data;t.features=this.props.data.features.map(function(t){return t.properties.index===e.properties.index&&(t.properties=Object.assign({},e.properties)),t}),this.map.getSource("labels").setData(t)}},{key:"activeStyle",value:function(e){this.map.getSource("activeFeature")?this.map.getSource("activeFeature").setData({type:"FeatureCollection",features:[e]}):(this.map.addSource("activeFeature",{type:"geojson",data:{type:"FeatureCollection",features:[e]}}),this.map.addLayer(Pe))}},{key:"onLabelClick",value:function(e){var t=this,a=e.features[0],n=this.props.currentlabel,r=this.props.data;r.features=this.props.data.features.map(function(e){return e.properties.index===a.properties.index&&(e.properties.label[n.id]=e.properties.label[n.id]?0:1,e.properties.status=e.properties.status&&"no"!==e.properties.status?"no":"yes",e=Ce(e),t.props.dispatch(z(e))),e}),this.map.getSource("labels").setData(r)}},{key:"save",value:function(){var e=this.map.getSource("labels")._data,t=new Blob([JSON.stringify(e)],{type:"application/json;charset=utf-8"});Object(we.saveAs)(t,"labels.geojson")}},{key:"loadExtraStyles",value:function(){var e=this;Se.classes.forEach(function(t){t.layers.length>0&&(e.map.addLayer({id:t.name,type:"raster",source:{type:"raster",tiles:t.layers,minzoom:0,maxzoom:22}}),e.map.setLayoutProperty(t.name,"visibility","none"))})}},{key:"initLabels",value:function(e,t,a){var n=this,r=[["==",["number",["at",t.id,["array",["get","label"]]]],1],t.color],o=["case"].concat(r).concat(["black"]);if(this.map.getSource("labels"))this.map.setPaintProperty("labels","fill-color",o),this.map.setPaintProperty("labels","fill-opacity",a/100),this.map.setPaintProperty("reviewLayer","line-opacity",a/100),this.map.setPaintProperty("conflictLayer","line-opacity",a/100),Se.classes.forEach(function(e,a){var r=e.name;n.map.getLayer(r)&&(n.map.setLayoutProperty(r,"visibility","none"),t.id===a&&n.map.setLayoutProperty(r,"visibility","visible"))});else{De.paint["fill-color"]=o,e.features=e.features.map(function(e,t){return e.properties.index=t,e=Ce(e)}),this.map.addSource("labels",{type:"geojson",data:e});var i=Ee()(e);this.map.fitBounds([[i[0],i[1]],[i[2],i[3]]]),this.map.addLayer(De),this.map.addLayer(Ie),this.map.addLayer(Le)}}},{key:"render",value:function(){var e=this,t=this.state.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"map",style:{position:"absolute",top:0,rigt:0,left:0,zIndex:99,bottom:0,width:"100%",overflow:"hidden"},ref:function(t){return e.node=t}}),r.a.createElement(xe,{loading:t}))}}]),t}(n.Component),Te=Object(s.b)(function(e){return{data:e.geojsonData.data,loading:e.geojsonData.loading,error:e.geojsonData.error,labels:e.geojsonData.labels,currentlabel:e.geojsonData.label,opacity:e.control.opacity,downloadFile:e.control.downloadFile,feature:e.tile.feature}})(Fe),Ve=a(5),Ne=a(155),ze=a(154),Je=a(145),Ae=a(147),_e=a(78),Re=a.n(_e),Qe=a(109),Be=function(e){function t(e){var a;return Object(Q.a)(this,t),(a=Object(Z.a)(this,Object(G.a)(t).call(this,e))).onFilesChange=a.onFilesChange.bind(Object($.a)(a)),a}return Object(M.a)(t,e),Object(B.a)(t,[{key:"onFilesChange",value:function(e){this.props.dispatch(function(e){return function(t){t(E());var a=new FileReader;a.onload=function(e){var n=JSON.parse(a.result),r=n.features[0].properties.label.map(function(e,t){return{id:t,class:"Class ".concat(t+1),color:y[t%10]}});t(w(n,r,r[0]))},a.readAsText(e[0])}}(e))}},{key:"onFilesError",value:function(e,t){console.err("error code "+e.code+": "+e.message)}},{key:"render",value:function(){return r.a.createElement("div",{style:{padding:10}},r.a.createElement(ne.a,{variant:"caption",display:"block",gutterBottom:!0},"Load label-maker geojson file"),r.a.createElement(Qe.a,null,r.a.createElement(Re.a,{className:"files-dropzone-list",onChange:this.onFilesChange,onError:this.onFilesError,accepts:[".geojson",".json"],maxFiles:1,maxFileSize:1e9,minFileSize:0,clickable:!0},r.a.createElement("input",{type:"submit",value:"Choose a file",style:{width:"210px",margin:"5px"}}))))}}]),t}(n.Component),Ze=Object(s.b)(null)(Be),Ge=a(156),Me=a(151);function Ue(e){var t=e.children,a=e.open,n=e.value,o=r.a.useRef(null);return r.a.useEffect(function(){o.current&&o.current.update()}),r.a.createElement(Me.a,{PopperProps:{popperRef:o},open:a,enterTouchDelay:0,placement:"top",title:n},t)}var He=function(e){function t(e){var a;return Object(Q.a)(this,t),(a=Object(Z.a)(this,Object(G.a)(t).call(this,e))).changeOpacityControl=a.changeOpacityControl.bind(Object($.a)(a)),a}return Object(M.a)(t,e),Object(B.a)(t,[{key:"changeOpacityControl",value:function(e,t){this.props.dispatch({type:I,payload:{opacity:t}})}},{key:"render",value:function(){var e=this.props.opacity;return r.a.createElement("div",{style:{width:"210px",margin:"1px"}},r.a.createElement(ne.a,{variant:"caption",display:"block",gutterBottom:!0},"Label opacity"),r.a.createElement(Qe.a,{style:{padding:"3px"}},r.a.createElement(Ge.a,{ValueLabelComponent:Ue,"aria-label":"label",defaultValue:e,onChange:this.changeOpacityControl})))}}]),t}(n.Component),Xe=Object(s.b)(function(e){return{opacity:e.control.opacity}})(He),qe=a(150),We=a(80),Ye=a.n(We),Ke=function(e){function t(){return Object(Q.a)(this,t),Object(Z.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(B.a)(t,[{key:"setLabelIn0",value:function(e){var t=this.props.feature;t.properties.label[e]=0,t=Ce(t),this.props.dispatch(z(t))}},{key:"render",value:function(){var e=this,t=this.props,a=t.feature,n=t.labels;return r.a.createElement("div",{style:{width:"210px",margin:"1px"}},r.a.createElement(ne.a,{variant:"caption",display:"block",gutterBottom:!0},"Labels on the tile"),a?a.properties.label.map(function(t,a){return 1===t?r.a.createElement(qe.a,{key:"chip-".concat(a),icon:r.a.createElement(Ye.a,null),label:Se.classes[a].name||n[a],onDelete:function(){e.setLabelIn0(a)},style:{backgroundColor:n[a].color}}):null}):null)}}]),t}(n.Component),$e=Object(s.b)(function(e){return{feature:e.tile.feature,labels:e.geojsonData.labels}})(Ke),et=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(Z.a)(this,Object(G.a)(t).call(this))).contentEditable=r.a.createRef(),e.choseLabel=e.choseLabel.bind(Object($.a)(e)),e}return Object(M.a)(t,e),Object(B.a)(t,[{key:"choseLabel",value:function(e,t){this.props.dispatch(function(e){return{type:O,payload:{label:e}}}(e))}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.labels,o=t.currentlabel;return r.a.createElement("div",null,r.a.createElement(Ne.a,null,n.map(function(t,n){return r.a.createElement("div",{key:n.toString()},r.a.createElement(ze.a,{selected:t.id===o.id,onClick:function(){e.choseLabel(t,n)},style:{paddingBottom:"2px",paddingTop:"2px"}},r.a.createElement(Je.a,{item:!0,xs:12},r.a.createElement(Je.a,{container:!0,justify:"center"},r.a.createElement(Je.a,{item:!0,xs:8},r.a.createElement(ne.a,{className:a.title,color:"textSecondary",gutterBottom:!0},Se.classes[n].name||t.class)),r.a.createElement(Je.a,{item:!0,xs:4},r.a.createElement("span",{style:{background:t.color,marginLeft:"5px"},className:a.legendSpan}))))),r.a.createElement(oe.a,null))})),0===n.length?r.a.createElement(Ze,null):null,r.a.createElement(oe.a,null),r.a.createElement(Ae.a,null,n.length>0?r.a.createElement("div",null,r.a.createElement(Xe,null)):null),r.a.createElement(oe.a,null),r.a.createElement(Ae.a,null,r.a.createElement($e,null)),r.a.createElement(oe.a,null))}}]),t}(n.Component),tt=Object(ie.a)(Object(s.b)(function(e){return{labels:e.geojsonData.labels,currentlabel:e.geojsonData.label}}),Object(Ve.a)(function(e){return{title:{fontSize:12,alignItems:"center",marginTop:"5px"},legendSpan:{display:"block",height:"25px",width:"60px",textAlign:"center",alignItems:"center",color:"#808080"}}}))(et),at=function(e){function t(e){var a;Object(Q.a)(this,t),(a=Object(Z.a)(this,Object(G.a)(t).call(this,e))).handleDrawerOpen=a.handleDrawerOpen.bind(Object($.a)(a)),a.handleDrawerClose=a.handleDrawerClose.bind(Object($.a)(a)),a.state={open:!0};var n=window.location.href.split("?url=")[1];return a.props.dispatch(function(e){return function(t){return t(E()),fetch(e).then(x).then(function(e){return e.json()}).then(function(e){var a=e.features[0].properties.label.map(function(e,t){return{id:t,class:"Class ".concat(t+1),color:y[t%10]}});return t(w(e,a,a[0])),e}).catch(function(e){return t(k(e))})}}(n)),a}return Object(M.a)(t,e),Object(B.a)(t,[{key:"handleDrawerOpen",value:function(){this.setState({open:!0})}},{key:"handleDrawerClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.open;return r.a.createElement("div",{className:e.root},r.a.createElement(ge,{handleDrawerOpen:this.handleDrawerOpen,open:t}),r.a.createElement(ae.a,{className:e.drawer,variant:"persistent",anchor:"left",open:t,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(ne.a,{gutterBottom:!0,component:"h3"},"Classes"),r.a.createElement(re.a,{onClick:this.handleDrawerClose},r.a.createElement(ce.a,null))),r.a.createElement(oe.a,null),r.a.createElement(tt,null)),r.a.createElement(Te,{className:Object(ee.a)(e.content)}))}}]),t}(n.Component),nt=Object(ie.a)(Object(s.b)(function(e){return{}}),Object(te.a)(ye))(at),rt=Object(H.a)({palette:{primary:q.a,secondary:Y.a}}),ot=function(e){function t(){return Object(Q.a)(this,t),Object(Z.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return r.a.createElement(K.a,{theme:rt},r.a.createElement(U.a,null),r.a.createElement(nt,null))}}]),t}(n.Component);i.a.render(r.a.createElement(u.a,null,r.a.createElement(s.a,{store:R},r.a.createElement(l.a,{basename:"/relabeler"},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,component:ot,path:"/"}))))),document.getElementById("root"))},32:function(e){e.exports=JSON.parse('{"layers":["https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.jpg?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q","https://evwhs.digitalglobe.com/mapservice/wmsaccess?connectid=cf37fdda-50bd-4c35-a546-da0514037160&FORMAT=image/png&TRANSPARENT=TRUE&VERSION=1.1.1&SERVICE=WMS&REQUEST=GetMap&LAYERS=DigitalGlobe:FoundationGEOINT&STYLES=&SRS=EPSG:3857&WIDTH={width}&HEIGHT={height}&BBOX={bbox}"],"classes":[{"name":"background","layers":[]},{"name":"hospital","layers":["https://a.tiles.mapbox.com/styles/v1/devseed/ck1m8u6etaioh1cqpvqybzo7q/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q"]},{"name":"university","layers":["https://a.tiles.mapbox.com/styles/v1/devseed/ck1mb4xu84p511cn3rgphhaf4/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q"]},{"name":"school","layers":["https://a.tiles.mapbox.com/styles/v1/devseed/ck1kthmph0c831clkebqdv1a6/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q"]},{"name":"place_of_worship","layers":["https://a.tiles.mapbox.com/styles/v1/devseed/ck1mc3rjp1j5o1cm3hbiuw81q/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q"]},{"name":"government","layers":["https://a.tiles.mapbox.com/styles/v1/devseed/ck1m8jad18u221cl6dbww317q/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q"]},{"name":"transportation","layers":["https://a.tiles.mapbox.com/styles/v1/devseed/ck1mayd0i3c7c1cp80c3dqnqe/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q"]},{"name":"commercial","layers":["https://a.tiles.mapbox.com/styles/v1/devseed/ck1l7bkkz0dz91clmhvzw0086/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q"]},{"name":"industry","layers":["https://a.tiles.mapbox.com/styles/v1/devseed/ck1majhp23btn1cp8elw5bgbo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q"]},{"name":"sports","layers":["https://a.tiles.mapbox.com/styles/v1/devseed/ck1masnggal8a1cld82vstk2l/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q"]},{"name":"residential","layers":[]}]}')},91:function(e,t,a){e.exports=a(108)}},[[91,1,2]]]);
//# sourceMappingURL=main.a375d20b.chunk.js.map