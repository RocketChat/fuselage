"use strict";(self.webpackChunk_rocket_chat_fuselage=self.webpackChunk_rocket_chat_fuselage||[]).push([[2943],{"./src/components/Callout/Callout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomIcon:()=>CustomIcon,Danger:()=>Danger,Default:()=>Default,Info:()=>Info,Success:()=>Success,Warning:()=>Warning,WithActions:()=>WithActions,WithDescriptionOnly:()=>WithDescriptionOnly,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Callout_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),src=__webpack_require__("./src/index.ts");const setStoryDescription=description=>({docs:{description:{story:description}}}),Callout_stories={title:"Feedback/Callout",component:src.PqE},Template=args=>(0,jsx_runtime.jsx)(src.PqE,{...args,children:args.children||"This is a generic description."}),Default=Template.bind({});Default.args={title:"This is a generic title"};const WithDescriptionOnly=Template.bind({}),Info=Template.bind({});Info.args={type:"info",title:"This is a info message"};const Success=Template.bind({});Success.args={type:"success",title:"This is a success message"},Success.parameters=setStoryDescription("Communicates that an important aspect of the system is working as expected.");const Warning=Template.bind({});Warning.args={type:"warning",title:"This is a warning message"},Warning.parameters=setStoryDescription("Communicates that an important aspect of the system needs attention.");const Danger=Template.bind({});Danger.args={type:"danger",title:"This is a danger message"},Danger.parameters=setStoryDescription("Communicates that an important aspect of the system is not working as expected and requires urgent action.");const CustomIcon=Template.bind({});CustomIcon.args={title:"This is a message with custom icon",icon:"hash"};const WithActions=args=>(0,jsx_runtime.jsx)(src.PqE,{...args});WithActions.args={title:"This is a generic title",children:"This is a generic description.",actions:(0,jsx_runtime.jsxs)(src.e2v,{children:[(0,jsx_runtime.jsx)(src.$nd,{small:!0,children:"Button"}),(0,jsx_runtime.jsx)(src.$nd,{small:!0,children:"Button"})]})};const __namedExportsOrder=["Default","WithDescriptionOnly","Info","Success","Warning","Danger","CustomIcon","WithActions"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Callout {...args}>\n    {args.children || 'This is a generic description.'}\n  </Callout>",...Default.parameters?.docs?.source}}},WithDescriptionOnly.parameters={...WithDescriptionOnly.parameters,docs:{...WithDescriptionOnly.parameters?.docs,source:{originalSource:"args => <Callout {...args}>\n    {args.children || 'This is a generic description.'}\n  </Callout>",...WithDescriptionOnly.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"args => <Callout {...args}>\n    {args.children || 'This is a generic description.'}\n  </Callout>",...Info.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"args => <Callout {...args}>\n    {args.children || 'This is a generic description.'}\n  </Callout>",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"args => <Callout {...args}>\n    {args.children || 'This is a generic description.'}\n  </Callout>",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"args => <Callout {...args}>\n    {args.children || 'This is a generic description.'}\n  </Callout>",...Danger.parameters?.docs?.source}}},CustomIcon.parameters={...CustomIcon.parameters,docs:{...CustomIcon.parameters?.docs,source:{originalSource:"args => <Callout {...args}>\n    {args.children || 'This is a generic description.'}\n  </Callout>",...CustomIcon.parameters?.docs?.source}}},WithActions.parameters={...WithActions.parameters,docs:{...WithActions.parameters?.docs,source:{originalSource:"args => <Callout {...args} />",...WithActions.parameters?.docs?.source}}}}}]);