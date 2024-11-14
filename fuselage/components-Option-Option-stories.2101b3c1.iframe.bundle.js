"use strict";(self.webpackChunk_rocket_chat_fuselage=self.webpackChunk_rocket_chat_fuselage||[]).push([[807],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("../../node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/Option/Option.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsSkeleton:()=>AsSkeleton,AsUserItem:()=>AsUserItem,Default:()=>Default,Disabled:()=>Disabled,WithAndWithoutIcon:()=>WithAndWithoutIcon,WithAvatar:()=>WithAvatar,WithIcon:()=>WithIcon,WithMenu:()=>WithMenu,WithPresence:()=>WithPresence,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/helpers.tsx"),_Avatar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Avatar/index.ts"),_Box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Box/index.tsx"),_Menu__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Menu/index.ts"),_StatusBullet__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/StatusBullet/index.tsx"),_Tile__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Tile/index.ts"),_Option__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Option/Option.tsx"),_OptionAvatar__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/Option/OptionAvatar.tsx"),_OptionColumn__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/Option/OptionColumn.tsx"),_OptionContent__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/Option/OptionContent.tsx"),_OptionDescription__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/Option/OptionDescription.tsx"),_OptionIcon__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/Option/OptionIcon.tsx"),_OptionMenu__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/Option/OptionMenu.tsx"),_OptionSkeleton__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/Option/OptionSkeleton.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/Option",component:_Option__WEBPACK_IMPORTED_MODULE_8__.A,decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tile__WEBPACK_IMPORTED_MODULE_7__.A,{position:"relative",maxWidth:250,pi:"0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]},Default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("click"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:"Lorem Ipsum Lorem"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:"Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:["Lorem Ipsum Lorem"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionDescription__WEBPACK_IMPORTED_MODULE_12__.A,{children:"Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem"})]})})]}),WithAvatar=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("click"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionAvatar__WEBPACK_IMPORTED_MODULE_9__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.eu,{url:_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__.KQ,size:"x28"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:"Lorem Ipsum Lorem"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionAvatar__WEBPACK_IMPORTED_MODULE_9__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.eu,{url:_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__.KQ,size:"x28"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:"Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionAvatar__WEBPACK_IMPORTED_MODULE_9__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.eu,{url:_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__.KQ,size:"x28"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:["Lorem Ipsum Lorem"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionDescription__WEBPACK_IMPORTED_MODULE_12__.A,{children:"Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem"})]})]})]}),WithPresence=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("click"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionColumn__WEBPACK_IMPORTED_MODULE_10__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StatusBullet__WEBPACK_IMPORTED_MODULE_6__.H,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:"Lorem Ipsum Lorem"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionAvatar__WEBPACK_IMPORTED_MODULE_9__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.eu,{url:_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__.KQ,size:"x28"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionColumn__WEBPACK_IMPORTED_MODULE_10__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StatusBullet__WEBPACK_IMPORTED_MODULE_6__.H,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:"Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem"})]})]}),WithMenu=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("click"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:"Lorem Ipsum Lorem"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionMenu__WEBPACK_IMPORTED_MODULE_14__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Menu__WEBPACK_IMPORTED_MODULE_5__.W1,{options:_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__.CO})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionAvatar__WEBPACK_IMPORTED_MODULE_9__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.eu,{url:_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__.KQ,size:"x28"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionColumn__WEBPACK_IMPORTED_MODULE_10__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StatusBullet__WEBPACK_IMPORTED_MODULE_6__.H,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:"Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionMenu__WEBPACK_IMPORTED_MODULE_14__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Menu__WEBPACK_IMPORTED_MODULE_5__.W1,{options:_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__.CO})})]})]}),WithIcon=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("click"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionIcon__WEBPACK_IMPORTED_MODULE_13__.A,{name:"bell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:"Lorem Ipsum Lorem"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionMenu__WEBPACK_IMPORTED_MODULE_14__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Menu__WEBPACK_IMPORTED_MODULE_5__.W1,{options:_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__.CO})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionAvatar__WEBPACK_IMPORTED_MODULE_9__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.eu,{url:_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__.KQ,size:"x28"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionIcon__WEBPACK_IMPORTED_MODULE_13__.A,{name:"bell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionColumn__WEBPACK_IMPORTED_MODULE_10__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StatusBullet__WEBPACK_IMPORTED_MODULE_6__.H,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:"Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionMenu__WEBPACK_IMPORTED_MODULE_14__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Menu__WEBPACK_IMPORTED_MODULE_5__.W1,{options:_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__.CO})})]})]}),WithAndWithoutIcon=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("click"),icon:"star",label:"Lorem Ipsum Lorem"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("click"),icon:"user",label:"Lorem Ipsum Lorem"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("click"),icon:"hashtag",label:"Lorem Ipsum Lorem"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("click"),gap:!0,label:"Lorem Ipsum Lorem"})]});WithAndWithoutIcon.parameters={docs:{description:{story:" When using `Option`, you can also use the `gap` prop to add spacing to the left. If the list is mixed with items **with and without** icons, it's recommended to add the gap."}}};const Disabled=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("click"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:"Enabled"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{disabled:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:"Disabled"})})]}),AsUserItem=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Option__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("click"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionAvatar__WEBPACK_IMPORTED_MODULE_9__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.eu,{url:_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__.KQ,size:"x28"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionColumn__WEBPACK_IMPORTED_MODULE_10__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StatusBullet__WEBPACK_IMPORTED_MODULE_6__.H,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionContent__WEBPACK_IMPORTED_MODULE_11__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_4__.A,{children:["carla.culhane ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_4__.A,{children:"(carla hune)"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionMenu__WEBPACK_IMPORTED_MODULE_14__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Menu__WEBPACK_IMPORTED_MODULE_5__.W1,{options:_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__.CO})})]})}),AsSkeleton=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionSkeleton__WEBPACK_IMPORTED_MODULE_15__.A,{}),__namedExportsOrder=["Default","WithAvatar","WithPresence","WithMenu","WithIcon","WithAndWithoutIcon","Disabled","AsUserItem","AsSkeleton"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <>\n    <Option onClick={action('click')}>\n      <OptionContent>Lorem Ipsum Lorem</OptionContent>\n    </Option>\n    <Option>\n      <OptionContent>\n        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem\n      </OptionContent>\n    </Option>\n    <Option>\n      <OptionContent>\n        Lorem Ipsum Lorem{' '}\n        <OptionDescription>\n          Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem\n        </OptionDescription>\n      </OptionContent>\n    </Option>\n  </>",...Default.parameters?.docs?.source}}},WithAvatar.parameters={...WithAvatar.parameters,docs:{...WithAvatar.parameters?.docs,source:{originalSource:"() => <>\n    <Option onClick={action('click')}>\n      <OptionAvatar>\n        <Avatar url={exampleAvatar} size='x28' />\n      </OptionAvatar>\n      <OptionContent>Lorem Ipsum Lorem</OptionContent>\n    </Option>\n    <Option>\n      <OptionAvatar>\n        <Avatar url={exampleAvatar} size='x28' />\n      </OptionAvatar>\n      <OptionContent>\n        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem\n      </OptionContent>\n    </Option>\n    <Option>\n      <OptionAvatar>\n        <Avatar url={exampleAvatar} size='x28' />\n      </OptionAvatar>\n      <OptionContent>\n        Lorem Ipsum Lorem{' '}\n        <OptionDescription>\n          Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem\n        </OptionDescription>\n      </OptionContent>\n    </Option>\n  </>",...WithAvatar.parameters?.docs?.source}}},WithPresence.parameters={...WithPresence.parameters,docs:{...WithPresence.parameters?.docs,source:{originalSource:"() => <>\n    <Option onClick={action('click')}>\n      <OptionColumn>\n        <StatusBullet />\n      </OptionColumn>\n      <OptionContent>Lorem Ipsum Lorem</OptionContent>\n    </Option>\n    <Option>\n      <OptionAvatar>\n        <Avatar url={exampleAvatar} size='x28' />\n      </OptionAvatar>\n      <OptionColumn>\n        <StatusBullet />\n      </OptionColumn>\n      <OptionContent>\n        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem\n      </OptionContent>\n    </Option>\n  </>",...WithPresence.parameters?.docs?.source}}},WithMenu.parameters={...WithMenu.parameters,docs:{...WithMenu.parameters?.docs,source:{originalSource:"() => <>\n    <Option onClick={action('click')}>\n      <OptionContent>Lorem Ipsum Lorem</OptionContent>\n      <OptionMenu>\n        <Menu options={menuOptions} />\n      </OptionMenu>\n    </Option>\n    <Option>\n      <OptionAvatar>\n        <Avatar url={exampleAvatar} size='x28' />\n      </OptionAvatar>\n      <OptionColumn>\n        <StatusBullet />\n      </OptionColumn>\n      <OptionContent>\n        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem\n      </OptionContent>\n      <OptionMenu>\n        <Menu options={menuOptions} />\n      </OptionMenu>\n    </Option>\n  </>",...WithMenu.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"() => <>\n    <Option onClick={action('click')}>\n      <OptionIcon name='bell' />\n      <OptionContent>Lorem Ipsum Lorem</OptionContent>\n      <OptionMenu>\n        <Menu options={menuOptions} />\n      </OptionMenu>\n    </Option>\n    <Option>\n      <OptionAvatar>\n        <Avatar url={exampleAvatar} size='x28' />\n      </OptionAvatar>\n      <OptionIcon name='bell' />\n      <OptionColumn>\n        <StatusBullet />\n      </OptionColumn>\n      <OptionContent>\n        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem\n      </OptionContent>\n      <OptionMenu>\n        <Menu options={menuOptions} />\n      </OptionMenu>\n    </Option>\n  </>",...WithIcon.parameters?.docs?.source}}},WithAndWithoutIcon.parameters={...WithAndWithoutIcon.parameters,docs:{...WithAndWithoutIcon.parameters?.docs,source:{originalSource:"() => <>\n    <Option onClick={action('click')} icon='star' label='Lorem Ipsum Lorem' />\n    <Option onClick={action('click')} icon='user' label='Lorem Ipsum Lorem' />\n    <Option onClick={action('click')} icon='hashtag' label='Lorem Ipsum Lorem' />\n    <Option onClick={action('click')} gap label='Lorem Ipsum Lorem' />\n  </>",...WithAndWithoutIcon.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"() => <>\n    <Option onClick={action('click')}>\n      <OptionContent>Enabled</OptionContent>\n    </Option>\n    <Option disabled={true}>\n      <OptionContent>Disabled</OptionContent>\n    </Option>\n  </>",...Disabled.parameters?.docs?.source}}},AsUserItem.parameters={...AsUserItem.parameters,docs:{...AsUserItem.parameters?.docs,source:{originalSource:"() => <>\n    <Option onClick={action('click')}>\n      <OptionAvatar>\n        <Avatar url={exampleAvatar} size='x28' />\n      </OptionAvatar>\n      <OptionColumn>\n        <StatusBullet />\n      </OptionColumn>\n      <OptionContent>\n        <Box>\n          carla.culhane <Box>(carla hune)</Box>\n        </Box>\n      </OptionContent>\n      <OptionMenu>\n        <Menu options={menuOptions} />\n      </OptionMenu>\n    </Option>\n  </>",...AsUserItem.parameters?.docs?.source}}},AsSkeleton.parameters={...AsSkeleton.parameters,docs:{...AsSkeleton.parameters?.docs,source:{originalSource:"() => <OptionSkeleton />",...AsSkeleton.parameters?.docs?.source}}}}}]);