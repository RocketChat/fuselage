"use strict";(self.webpackChunk_rocket_chat_layout=self.webpackChunk_rocket_chat_layout||[]).push([[301],{"./src/TooltipWrapper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithElement:()=>WithElement,WithRenderProp:()=>WithRenderProp,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TooltipWrapper_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),fuselage=__webpack_require__("../fuselage/index.js"),index_module=__webpack_require__("../fuselage-hooks/dist/index.module.js"),react=__webpack_require__("../../node_modules/react/index.js");const InnerTooltip=(0,react.forwardRef)((function InnerTooltip({style,...props},ref){return(0,jsx_runtime.jsx)("div",{ref,style,children:(0,jsx_runtime.jsx)(fuselage.Tooltip,{...props})})})),TooltipWrapper=({children,text})=>{const anchorRef=(0,react.useRef)(null),[open,setOpen]=(0,index_module.useDebouncedState)(!1,460),toggle=(0,react.useCallback)((open=>{setOpen(open),open&&setOpen.flush()}),[setOpen]),id=(0,index_module.useUniqueId)(),anchor=((children,params)=>"function"==typeof children?children(params):(0,react.cloneElement)(children,{ref:params.ref,onMouseEnter:()=>params.toggle(!0),onMouseLeave:()=>params.toggle(!1),onFocus:()=>params.toggle(!0),onBlur:()=>params.toggle(!1),"aria-describedby":params.id}))(children,(0,react.useMemo)((()=>({ref:anchorRef,toggle,id})),[id,toggle]));return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[anchor,open&&(0,jsx_runtime.jsx)(fuselage.PositionAnimated,{anchor:anchorRef,placement:"top-middle",margin:8,visible:fuselage.AnimatedVisibility.UNHIDING,children:(0,jsx_runtime.jsx)(InnerTooltip,{id,"aria-hidden":"false",onMouseEnter:()=>setOpen(!0),onMouseLeave:()=>setOpen(!1),children:text})})]})},src_TooltipWrapper=TooltipWrapper;try{TooltipWrapper.displayName="TooltipWrapper",TooltipWrapper.__docgenInfo={description:"",displayName:"TooltipWrapper",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TooltipWrapper.tsx#TooltipWrapper"]={docgenInfo:TooltipWrapper.__docgenInfo,name:"TooltipWrapper",path:"src/TooltipWrapper.tsx#TooltipWrapper"})}catch(__react_docgen_typescript_loader_error){}const TooltipWrapper_stories={title:"common/TooltipWrapper",component:src_TooltipWrapper},WithRenderProp=()=>(0,jsx_runtime.jsx)(src_TooltipWrapper,{text:"A example tooltip",children:({ref,toggle,id})=>(0,jsx_runtime.jsx)(fuselage.Box,{ref,onMouseEnter:()=>toggle(!0),onMouseLeave:()=>toggle(!1),onFocus:()=>toggle(!0),onBlur:()=>toggle(!1),tabIndex:0,"aria-describedby":id,children:"Text"})});WithRenderProp.parameters={layout:"centered"};const WithElement=()=>(0,jsx_runtime.jsx)(src_TooltipWrapper,{text:"A example tooltip",children:(0,jsx_runtime.jsx)(fuselage.Box,{tabIndex:0,children:"Text"})});WithElement.parameters={layout:"centered"};const __namedExportsOrder=["WithRenderProp","WithElement"];WithRenderProp.parameters={...WithRenderProp.parameters,docs:{...WithRenderProp.parameters?.docs,source:{originalSource:"() => <TooltipWrapper text='A example tooltip'>\n    {({\n    ref,\n    toggle,\n    id\n  }) => <Box ref={ref} onMouseEnter={() => toggle(true)} onMouseLeave={() => toggle(false)} onFocus={() => toggle(true)} onBlur={() => toggle(false)} tabIndex={0} aria-describedby={id}>\n        Text\n      </Box>}\n  </TooltipWrapper>",...WithRenderProp.parameters?.docs?.source}}},WithElement.parameters={...WithElement.parameters,docs:{...WithElement.parameters?.docs,source:{originalSource:"() => <TooltipWrapper text='A example tooltip'>\n    <Box tabIndex={0}>Text</Box>\n  </TooltipWrapper>",...WithElement.parameters?.docs?.source}}}}}]);