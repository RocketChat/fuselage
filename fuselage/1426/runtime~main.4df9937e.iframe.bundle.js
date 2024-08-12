(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({15:"components-Popover-Popover-stories",39:"components-Sidebar-Sidebar-stories",234:"components-Sidebar-TopBar-TopBar-stories",271:"components-Scrollable-Scrollable-stories",291:"components-Badge-Badge-stories",299:"components-Box-typography-stories",369:"components-Bubble-Bubble-stories",531:"components-PasswordInput-PasswordInput-stories",555:"components-Contextualbar-Contextualbar-stories",671:"components-Field-Field-stories",763:"components-PaginatedSelect-PaginatedMultiSelectFiltered-stories",807:"components-Option-Option-stories",946:"components-Box-props-stories",1150:"components-Menu-V2-Menu-stories",1249:"components-Grid-Grid-stories",1363:"components-ContextualbarV2-Contextualbar-stories",1497:"components-Throbber-Throbber-stories",1519:"components-Message-MessageMetrics-MessageMetrics-stories",1641:"components-NavBar-NavBar-stories",2151:"components-FieldGroup-FieldGroup-stories",2175:"components-Skeleton-Skeleton-stories",2303:"components-Message-MessageToolbar-MessageToolbar-stories",2513:"components-Card-Card-stories",2625:"components-TelephoneInput-TelephoneInput-stories",2851:"components-Accordion-Accordion-stories",2877:"components-Tile-Tile-stories",2925:"components-Select-Select-stories",2943:"components-Callout-Callout-stories",2978:"components-Message-Messages-stories",3103:"components-TextAreaInput-TextAreaInput-stories",3247:"components-MultiSelect-MultiSelect-stories",3375:"components-Slider-Slider-stories",3432:"components-Sidebar-Item-stories",3543:"components-SearchInput-SearchInput-stories",3851:"components-Margins-Margins-stories",4105:"components-Tabs-Tabs-stories",4391:"components-RadioButton-RadioButton-stories",4423:"components-Chevron-Chevron-stories",4449:"components-StatusBullet-StatusBullet-stories",4607:"components-Modal-Modal-stories",4639:"components-TextInput-TextInput-stories",4695:"components-Position-Position-stories",4847:"components-UrlInput-UrlInput-stories",4985:"components-Message-MessageSystem-MessageSystem-stories",5013:"components-Message-MessageGenericPreview-MessageGenericPreview-stories",5122:"components-Button-IconButton-stories",5131:"components-SelectInput-SelectInput-stories",5301:"components-AutoComplete-AutoComplete-stories",5427:"components-ProgressBar-ProgressBar-stories",5447:"components-AnimatedVisibility-AnimatedVisibility-stories",5477:"components-CardGrid-CardGrid-stories",5633:"components-Banner-Banner-stories",5707:"components-PaletteStyleTag-PaletteStyleTag-stories",5823:"components-Divider-Divider-stories",6035:"components-AudioPlayer-AudioPlayer-stories",6213:"components-ToastBar-ToastBar-stories",6249:"components-PositionAnimated-PositionAnimated-stories",6287:"components-InputBox-InputBox-stories",6343:"components-CodeSnippet-CodeSnippet-stories",6521:"components-ToggleSwitch-ToggleSwitch-stories",6623:"components-Table-Table-stories",6649:"components-Flex-Flex-mdx",6730:"components-PaginatedSelect-PaginatedSelectFiltered-stories",6747:"components-Label-Label-stories",6807:"components-Avatar-Avatar-stories",6956:"components-Box-colors-stories",6959:"components-Message-MessageStatusIndicator-MessageStatusIndicator-stories",6967:"components-CheckBox-CheckBox-stories",7003:"components-Menu-Menu-stories",7018:"components-Box-richContentInline-stories",7721:"components-Button-Button-stories",7837:"components-Chip-Chip-stories",7874:"components-Box-layout-stories",7968:"components-Box-richContentBlock-stories",8311:"components-Icon-Icon-stories",8355:"components-NumberInput-NumberInput-stories",8511:"components-Tag-Tag-stories",8581:"components-EmailInput-EmailInput-stories",8619:"components-Flex-Flex-stories",8707:"components-Message-MessageDivider-MessageDivider-stories",8875:"components-ButtonGroup-ButtonGroup-stories",8957:"components-Box-Box-mdx",9103:"components-OptionsPaginated-OptionsPaginated-stories",9215:"components-Dropdown-Dropdown-stories",9273:"components-FramedIcon-FramedIcon-stories",9355:"components-Options-Options-stories",9459:"components-Tooltip-Tooltip-stories",9461:"components-States-States-stories",9861:"components-Message-MessageReactions-MessageReactions-stories",9871:"components-CardGroup-CardGroup-stories",9889:"components-Pagination-Pagination-stories",9993:"components-Message-ThreadMessage-ThreadMessage-stories"}[chunkId]||chunkId)+"."+{15:"19028152",39:"add3a35e",234:"f40e862d",271:"39923bf1",291:"16647857",299:"ea488c6b",369:"6ac0e120",531:"7ecbf1d0",555:"1971a4f7",671:"ff56266b",763:"e8e7a54b",807:"265e3d52",814:"1bb6bda9",946:"b9b142fb",1150:"7b085ab6",1249:"df5ecc08",1363:"8bcd66ee",1497:"976f0735",1519:"39b72520",1641:"66b2a031",2151:"d44ba72e",2175:"e162b41d",2221:"7e948b53",2303:"617ae95b",2513:"be58ca18",2625:"82985188",2851:"38c79e3e",2877:"b9819a3b",2925:"04da71ca",2943:"a3fbc391",2978:"dcdd2461",3103:"64fe324c",3247:"110325ad",3375:"0919eef2",3432:"410278c5",3543:"f7fda85d",3851:"8e02cbe0",4105:"61db7a8c",4391:"d9daf1f6",4423:"065adb5e",4449:"a3744c14",4607:"80cc46fe",4639:"29d6007c",4695:"738e5ac9",4847:"8fe14204",4985:"76ca01a4",5013:"17399f89",5122:"76256747",5131:"fd194863",5301:"f2ff39a3",5427:"6a36dce1",5447:"9f0b4c83",5458:"0b6b242a",5477:"b7a23d19",5633:"98feb8bf",5707:"0057f01c",5823:"c6a420a4",6035:"620ee89b",6213:"4313121a",6249:"f30ff305",6287:"f396f5e2",6343:"ae4b369d",6521:"7b6cb6fd",6623:"f368edfd",6649:"ff5685e1",6730:"8d706df1",6747:"0b14a09e",6807:"5a16abba",6956:"b6ab06de",6959:"3b1bf08f",6967:"c8760d26",7003:"8bc05bd0",7018:"c8c29e56",7721:"dcdcb1e9",7837:"4876e99b",7874:"dc80eea8",7968:"4e27622a",8311:"f69a87f4",8355:"82e8d81f",8511:"475116a1",8581:"de026a5a",8619:"9992579d",8707:"f60098d4",8875:"73180551",8957:"8ac776b6",8977:"ab008d40",9103:"123b6768",9215:"341707f5",9273:"e4369095",9355:"888d31cd",9459:"cb336626",9461:"4534fcfa",9626:"6058cd3a",9791:"29d7017d",9861:"55b5e904",9871:"53a60976",9889:"3c909da3",9993:"8b82a6cf"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@rocket.chat/fuselage:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@rocket.chat/fuselage:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_rocket_chat_fuselage=self.webpackChunk_rocket_chat_fuselage||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();