"use strict";(self.webpackChunk_rocket_chat_fuselage=self.webpackChunk_rocket_chat_fuselage||[]).push([[3247],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("../../node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/MultiSelect/MultiSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomEmpty:()=>CustomEmpty,Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,WithFilter:()=>WithFilter,WithValue:()=>WithValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_MultiSelect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/MultiSelect/MultiSelect.tsx"),_MultiSelectFiltered__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/MultiSelect/MultiSelectFiltered.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/MultiSelect",component:_MultiSelect__WEBPACK_IMPORTED_MODULE_2__.K,subcomponents:{MultiSelectFiltered:_MultiSelectFiltered__WEBPACK_IMPORTED_MODULE_3__.R}},options=[["1","a teste 1"],["2","b teste 2",!0],["3","c teste 3"],["4","d teste 4"],["5","d teste 5"],["6","d teste 6"],["7","d teste 7"],["8","d teste 8"],["9","d teste 9"],["10","d teste 10"]],Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MultiSelect__WEBPACK_IMPORTED_MODULE_2__.K,{...args}),Default=Template.bind({});Default.args={placeholder:"Placeholder here...",options};const WithValue=Template.bind({});WithValue.args={placeholder:"Placeholder here...",options,value:["1","2"]};const Error=Template.bind({});Error.args={error:"Error",placeholder:"Placeholder here...",options};const Disabled=Template.bind({});Disabled.args={disabled:!0,placeholder:"Placeholder here...",options};const CustomEmpty=Template.bind({});CustomEmpty.args={customEmpty:"Custom Empty Placeholder",placeholder:"Placeholder here...",options:[]};const WithFilter=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MultiSelectFiltered__WEBPACK_IMPORTED_MODULE_3__.R,{...args})).bind({});WithFilter.args={placeholder:"Placeholder here...",onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("change"),options};const __namedExportsOrder=["Default","WithValue","Error","Disabled","CustomEmpty","WithFilter"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...Default.parameters?.docs?.source}}},WithValue.parameters={...WithValue.parameters,docs:{...WithValue.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...WithValue.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...Error.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...Disabled.parameters?.docs?.source}}},CustomEmpty.parameters={...CustomEmpty.parameters,docs:{...CustomEmpty.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...CustomEmpty.parameters?.docs?.source}}},WithFilter.parameters={...WithFilter.parameters,docs:{...WithFilter.parameters?.docs,source:{originalSource:"args => <MultiSelectFiltered {...args} />",...WithFilter.parameters?.docs?.source}}}}}]);