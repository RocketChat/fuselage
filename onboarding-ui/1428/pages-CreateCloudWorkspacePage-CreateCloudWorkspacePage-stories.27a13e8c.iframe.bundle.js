"use strict";(self.webpackChunk_rocket_chat_onboarding_ui=self.webpackChunk_rocket_chat_onboarding_ui||[]).push([[2809],{"./src/pages/CreateCloudWorkspacePage/CreateCloudWorkspacePage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_CreateCloudWorkspacePage:()=>_CreateCloudWorkspacePage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CreateCloudWorkspacePage_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),fuselage=__webpack_require__("../fuselage/index.js"),esm=__webpack_require__("../layout/dist/esm/index.js"),useTranslation=__webpack_require__("../../node_modules/react-i18next/dist/es/useTranslation.js"),Trans=__webpack_require__("../../node_modules/react-i18next/dist/es/Trans.js"),FormPageLayout=__webpack_require__("./src/common/FormPageLayout.tsx"),CreateCloudWorkspaceForm=__webpack_require__("./src/forms/CreateCloudWorkspaceForm/CreateCloudWorkspaceForm.tsx"),colors=__webpack_require__("../fuselage-tokens/colors.json"),react=__webpack_require__("../../node_modules/react/index.js"),server_browser=__webpack_require__("../../node_modules/react-dom/server.browser.js"),PlanFeatureIcon=__webpack_require__("./src/common/PlanFeatureIcon.tsx");const CreateCloudWorkspacePage_Description=()=>{const color=esm.L8.useDarkMode()?colors.ON:colors.Ir,{t}=(0,useTranslation.B)(),featuresList=[t("page.createCloudWorkspace.auditing"),t("page.createCloudWorkspace.numberOfIntegrations"),t("page.createCloudWorkspace.ldap"),t("page.createCloudWorkspace.omnichannel"),t("page.createCloudWorkspace.sla"),t("page.createCloudWorkspace.push"),t("page.createCloudWorkspace.engagement")],icon=(0,react.useMemo)((()=>encodeURIComponent((0,server_browser.renderToStaticMarkup)((0,jsx_runtime.jsx)(PlanFeatureIcon.A,{color})))),[color]);return(0,jsx_runtime.jsx)(fuselage.Box,{children:(0,jsx_runtime.jsx)(fuselage.Box,{children:(0,jsx_runtime.jsx)(esm.B8,{color,spacing:"x16",icon,children:featuresList.map(((text,id)=>((text,id)=>(0,jsx_runtime.jsxs)(esm.B8.Item,{fontScale:"p1",children:[(0,jsx_runtime.jsx)(fuselage.Icon,{name:"check",size:"x24",mie:12}),text]},id))(text,id)))})})})},CreateCloudWorkspacePage_TitleCreateCloudPage=()=>(0,jsx_runtime.jsxs)(Trans.x,{i18nKey:"page.createCloudWorkspace.title",children:["Launch new workspace and",(0,jsx_runtime.jsx)(esm.Ak.$o,{children:"30-day trial"})]}),CreateCloudWorkspacePage=props=>{const{t}=(0,useTranslation.B)();return(0,jsx_runtime.jsx)(esm.su,{children:(0,jsx_runtime.jsxs)(FormPageLayout.A,{title:(0,jsx_runtime.jsx)(CreateCloudWorkspacePage_TitleCreateCloudPage,{}),description:(0,jsx_runtime.jsx)(CreateCloudWorkspacePage_Description,{}),subtitle:t("page.createCloudWorkspace.tryGold"),children:[(0,jsx_runtime.jsx)(CreateCloudWorkspaceForm.A,{...props}),(0,jsx_runtime.jsx)(fuselage.Box,{mbs:28,display:"inline",textAlign:"center",children:(0,jsx_runtime.jsxs)(Trans.x,{i18nKey:"page.alreadyHaveAccount",children:["Already have an account?",(0,jsx_runtime.jsx)(fuselage.Box,{is:"a",color:"primary-400",textDecorationLine:"none",href:"https://cloud.rocket.chat/login",target:"_blank",rel:"noopener noreferrer",children:"Manage your workspaces."})]})})]})})},CreateCloudWorkspacePage_CreateCloudWorkspacePage=CreateCloudWorkspacePage;try{CreateCloudWorkspacePage.displayName="CreateCloudWorkspacePage",CreateCloudWorkspacePage.__docgenInfo={description:"",displayName:"CreateCloudWorkspacePage",props:{defaultValues:{defaultValue:null,description:"",name:"defaultValues",required:!1,type:{name:"CreateCloudWorkspaceFormPayload"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"SubmitHandler<CreateCloudWorkspaceFormPayload>"}},serverRegionOptions:{defaultValue:null,description:"",name:"serverRegionOptions",required:!0,type:{name:"SelectOption[]"}},languageOptions:{defaultValue:null,description:"",name:"languageOptions",required:!0,type:{name:"SelectOption[]"}},domain:{defaultValue:null,description:"",name:"domain",required:!0,type:{name:"string"}},onBackButtonClick:{defaultValue:null,description:"",name:"onBackButtonClick",required:!1,type:{name:"(() => void)"}},validateUrl:{defaultValue:null,description:"",name:"validateUrl",required:!0,type:{name:"Validate<string>"}},validateEmail:{defaultValue:null,description:"",name:"validateEmail",required:!0,type:{name:"Validate<string>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/CreateCloudWorkspacePage/CreateCloudWorkspacePage.tsx#CreateCloudWorkspacePage"]={docgenInfo:CreateCloudWorkspacePage.__docgenInfo,name:"CreateCloudWorkspacePage",path:"src/pages/CreateCloudWorkspacePage/CreateCloudWorkspacePage.tsx#CreateCloudWorkspacePage"})}catch(__react_docgen_typescript_loader_error){}const CreateCloudWorkspacePage_stories={title:"pages/CreateCloudWorkspacePage",component:CreateCloudWorkspacePage_CreateCloudWorkspacePage,parameters:{actions:{argTypesRegex:"^on.*"},layout:"fullscreen"},args:{serverRegionOptions:[["us","US"],["br","BR"]],languageOptions:[["en","English"],["pt","Português"]],domain:"rocket.chat",validateUrl:async url=>"rocket"!==url||"invalid url",validateEmail:async email=>"rocket@rocket.chat"!==email||"invalid email"}},_CreateCloudWorkspacePage=args=>(0,jsx_runtime.jsx)(CreateCloudWorkspacePage_CreateCloudWorkspacePage,{...args});_CreateCloudWorkspacePage.storyName="CreateCloudWorkspacePage";const __namedExportsOrder=["_CreateCloudWorkspacePage"];_CreateCloudWorkspacePage.parameters={..._CreateCloudWorkspacePage.parameters,docs:{..._CreateCloudWorkspacePage.parameters?.docs,source:{originalSource:"args => <CreateCloudWorkspacePage {...args} />",..._CreateCloudWorkspacePage.parameters?.docs?.source}}}},"./src/common/FormPageLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../layout/dist/esm/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-i18next/dist/es/useTranslation.js");const __WEBPACK_DEFAULT_EXPORT__=({title,subtitle,description,children})=>{const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.B)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__.OO,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__.w3,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__.Kj,{children:title||t("page.form.title")}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__.Se,{children:subtitle}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__.WX,{children:description})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__.XP,{children})]})};try{FormPageLayout.displayName="FormPageLayout",FormPageLayout.__docgenInfo={description:"",displayName:"FormPageLayout",props:{logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},styleProps:{defaultValue:null,description:"",name:"styleProps",required:!1,type:{name:"FormPageLayoutStyleProps"}},tag:{defaultValue:null,description:"",name:"tag",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/FormPageLayout.tsx#FormPageLayout"]={docgenInfo:FormPageLayout.__docgenInfo,name:"FormPageLayout",path:"src/common/FormPageLayout.tsx#FormPageLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/common/PlanFeatureIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const PlanFeatureIcon=({color})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:"13",height:"auto",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M1 7L5 11L15 1",stroke:color,strokeWidth:"2"})}),__WEBPACK_DEFAULT_EXPORT__=PlanFeatureIcon;try{PlanFeatureIcon.displayName="PlanFeatureIcon",PlanFeatureIcon.__docgenInfo={description:"",displayName:"PlanFeatureIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/PlanFeatureIcon.tsx#PlanFeatureIcon"]={docgenInfo:PlanFeatureIcon.__docgenInfo,name:"PlanFeatureIcon",path:"src/common/PlanFeatureIcon.tsx#PlanFeatureIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);