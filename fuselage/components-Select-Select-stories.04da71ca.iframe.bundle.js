"use strict";(self.webpackChunk_rocket_chat_fuselage=self.webpackChunk_rocket_chat_fuselage||[]).push([[2925],{"./src/components/Select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,NoPlaceholder:()=>NoPlaceholder,States:()=>States,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Select_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),Box=__webpack_require__("./src/components/Box/index.tsx");function PropsVariation({component:Component,common={},xAxis={},yAxis={}}){return(0,jsx_runtime.jsxs)(Box.A,{is:"table",marginBlock:16,marginInline:"auto",style:{borderCollapse:"collapse"},children:[(0,jsx_runtime.jsx)(Box.A,{is:"thead",children:(0,jsx_runtime.jsxs)(Box.A,{is:"tr",children:[(0,jsx_runtime.jsx)(Box.A,{is:"th"}),Object.keys(xAxis).map(((xVariation,key)=>(0,jsx_runtime.jsx)(Box.A,{is:"th",color:"hint",fontScale:"c1",children:xVariation},key)))]})}),(0,jsx_runtime.jsx)(Box.A,{is:"tbody",children:Object.entries(yAxis).map((([yVariation,yProps],y)=>(0,jsx_runtime.jsxs)(Box.A,{is:"tr",children:[(0,jsx_runtime.jsx)(Box.A,{is:"th",color:"hint",fontScale:"c1",children:yVariation}),Object.values(xAxis).map(((xProps,x)=>(0,jsx_runtime.jsx)(Box.A,{is:"td",margin:"none",paddingBlock:8,paddingInline:16,children:(0,jsx_runtime.jsx)(Box.A,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,jsx_runtime.jsx)(Component,{...common,...xProps,...yProps})})},x)))]},y)))})]})}const _storybook_PropsVariation=PropsVariation;try{PropsVariation.displayName="PropsVariation",PropsVariation.__docgenInfo={description:"",displayName:"PropsVariation",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"ComponentType"}},common:{defaultValue:{value:"{}"},description:"",name:"common",required:!1,type:{name:"Record<string, unknown>"}},xAxis:{defaultValue:{value:"{}"},description:"",name:"xAxis",required:!1,type:{name:"Record<string, Record<string, unknown>>"}},yAxis:{defaultValue:{value:"{}"},description:"",name:"yAxis",required:!1,type:{name:"Record<string, Record<string, unknown>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/PropsVariation.tsx#PropsVariation"]={docgenInfo:PropsVariation.__docgenInfo,name:"PropsVariation",path:".storybook/PropsVariation.tsx#PropsVariation"})}catch(__react_docgen_typescript_loader_error){}var Select=__webpack_require__("./src/components/Select/Select.tsx");const Select_stories={title:"Inputs/Select",component:Select.l},options=Array.from({length:12}).map(((_,i)=>[`${i+1}`,`a test ${i+1}`])),Template=args=>(0,jsx_runtime.jsx)(Select.l,{"aria-label":"select",...args}),Default=Template.bind({});Default.args={placeholder:"Placeholder here...",options,"aria-label":"Select"};const Controlled=(args=>{const[value,setValue]=(0,react.useState)("3");return(0,jsx_runtime.jsx)(Select.l,{"aria-label":"select",...args,value,onChange:setValue})}).bind({});Controlled.args={"aria-label":"Controlled select",options};const Error=Template.bind({});Error.args={"aria-label":"Error select",error:"Error",placeholder:"Placeholder here...",options};const Disabled=Template.bind({});Disabled.args={"aria-label":"Disabled select",disabled:!0,placeholder:"Placeholder here...",options};const NoPlaceholder=Template.bind({});NoPlaceholder.args={"aria-label":"No placeholder select",options};const States=()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(_storybook_PropsVariation,{component:props=>(0,jsx_runtime.jsx)(Select.l,{options,"aria-label":"select",...props}),common:{onChange:()=>{}},xAxis:{default:{},"with placeholder":{placeholder:"Placeholder"},small:{small:!0},"small with placeholder":{small:!0,placeholder:"Placeholder"}},yAxis:{default:{},hover:{className:"hover"},active:{className:"active"},focus:{className:"focus"},disabled:{disabled:!0},errored:{error:"Error"},"errored + hover":{className:"hover",error:"Error"},"errored + active":{className:"active",error:"Error"},"errored + focus":{className:"focus",error:"Error"}}})}),__namedExportsOrder=["Default","Controlled","Error","Disabled","NoPlaceholder","States"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Select aria-label='select' {...args} />",...Default.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState<Key>('3');\n  return <Select aria-label='select' {...args} value={value} onChange={(setValue as any)} />;\n}",...Controlled.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => <Select aria-label='select' {...args} />",...Error.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <Select aria-label='select' {...args} />",...Disabled.parameters?.docs?.source}}},NoPlaceholder.parameters={...NoPlaceholder.parameters,docs:{...NoPlaceholder.parameters?.docs,source:{originalSource:"args => <Select aria-label='select' {...args} />",...NoPlaceholder.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:"() => <>\n    <PropsVariationSection component={props => <Select options={options} aria-label='select' {...props} />} common={{\n    onChange: () => {}\n  }} xAxis={{\n    'default': {},\n    'with placeholder': {\n      placeholder: 'Placeholder'\n    },\n    'small': {\n      small: true\n    },\n    'small with placeholder': {\n      small: true,\n      placeholder: 'Placeholder'\n    }\n  }} yAxis={{\n    'default': {},\n    'hover': {\n      className: 'hover'\n    },\n    'active': {\n      className: 'active'\n    },\n    'focus': {\n      className: 'focus'\n    },\n    'disabled': {\n      disabled: true\n    },\n    'errored': {\n      error: 'Error'\n    },\n    'errored + hover': {\n      className: 'hover',\n      error: 'Error'\n    },\n    'errored + active': {\n      className: 'active',\n      error: 'Error'\n    },\n    'errored + focus': {\n      className: 'focus',\n      error: 'Error'\n    }\n  }} />\n  </>",...States.parameters?.docs?.source}}}}}]);