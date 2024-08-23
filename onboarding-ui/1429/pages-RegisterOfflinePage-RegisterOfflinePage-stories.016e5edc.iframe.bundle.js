"use strict";(self.webpackChunk_rocket_chat_onboarding_ui=self.webpackChunk_rocket_chat_onboarding_ui||[]).push([[3665],{"./src/pages/RegisterOfflinePage/RegisterOfflinePage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_RegisterOfflinePage:()=>_RegisterOfflinePage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_RegisterOfflinePage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/pages/RegisterOfflinePage/RegisterOfflinePage.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"pages/RegisterOfflinePage",component:_RegisterOfflinePage__WEBPACK_IMPORTED_MODULE_2__.A,parameters:{actions:{argTypesRegex:"^on.*"},layout:"fullscreen"},args:{onSubmit:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("onSubmit"),onBackButtonClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("onBackButtonClick")}},_RegisterOfflinePage=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RegisterOfflinePage__WEBPACK_IMPORTED_MODULE_2__.A,{...args}),__namedExportsOrder=["_RegisterOfflinePage"];_RegisterOfflinePage.parameters={..._RegisterOfflinePage.parameters,docs:{..._RegisterOfflinePage.parameters?.docs,source:{originalSource:"args => <RegisterOfflinePage {...args} />",..._RegisterOfflinePage.parameters?.docs?.source}}}},"./src/common/AgreeTermsField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../fuselage/index.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-hook-form/dist/index.esm.mjs"),react_i18next__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react-i18next/dist/es/useTranslation.js"),react_i18next__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react-i18next/dist/es/Trans.js");const AgreeTermsField=({agreementField,termsHref,policyHref,control,errors})=>{const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.B)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Field,{mbs:"24px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldRow,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.xI,{name:"agreement",control,rules:{required:String(t("component.form.requiredField"))},render:({field:{ref,name,onBlur,onChange,value}})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.CheckBox,{ref,id:agreementField,onChange,onBlur,name,checked:value,"aria-describedby":`${agreementField}-error`,"aria-invalid":Boolean(errors.agreement),"aria-required":"true"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldLabel,{display:"inline",htmlFor:agreementField,withRichContent:!0,required:!0,fontScale:"c1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_i18next__WEBPACK_IMPORTED_MODULE_4__.x,{i18nKey:"component.form.termsAndConditions",children:["I agree with",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Box,{is:"a",href:termsHref,target:"_blank",rel:"noopener noreferrer",children:"Terms and Conditions"}),"and",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Box,{is:"a",href:policyHref,target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})})]}),errors.agreement&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldError,{"aria-live":"assertive",id:`${agreementField}-error`,children:t("component.form.requiredField")})]})},__WEBPACK_DEFAULT_EXPORT__=AgreeTermsField;try{AgreeTermsField.displayName="AgreeTermsField",AgreeTermsField.__docgenInfo={description:"",displayName:"AgreeTermsField",props:{agreementField:{defaultValue:null,description:"",name:"agreementField",required:!0,type:{name:"string"}},termsHref:{defaultValue:null,description:"",name:"termsHref",required:!0,type:{name:"string"}},policyHref:{defaultValue:null,description:"",name:"policyHref",required:!0,type:{name:"string"}},control:{defaultValue:null,description:"",name:"control",required:!0,type:{name:"any"}},errors:{defaultValue:null,description:"",name:"errors",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/AgreeTermsField.tsx#AgreeTermsField"]={docgenInfo:AgreeTermsField.__docgenInfo,name:"AgreeTermsField",path:"src/common/AgreeTermsField.tsx#AgreeTermsField"})}catch(__react_docgen_typescript_loader_error){}},"./src/common/FormPageLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../layout/dist/esm/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-i18next/dist/es/useTranslation.js");const __WEBPACK_DEFAULT_EXPORT__=({title,subtitle,description,children})=>{const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.B)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__.OO,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__.w3,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__.Kj,{children:title||t("page.form.title")}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__.Se,{children:subtitle}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__.WX,{children:description})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_1__.XP,{children})]})};try{FormPageLayout.displayName="FormPageLayout",FormPageLayout.__docgenInfo={description:"",displayName:"FormPageLayout",props:{logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},styleProps:{defaultValue:null,description:"",name:"styleProps",required:!1,type:{name:"FormPageLayoutStyleProps"}},tag:{defaultValue:null,description:"",name:"tag",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/FormPageLayout.tsx#FormPageLayout"]={docgenInfo:FormPageLayout.__docgenInfo,name:"FormPageLayout",path:"src/common/FormPageLayout.tsx#FormPageLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/forms/RegisterOfflineForm/RegisterOfflineForm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Steps,A:()=>RegisterOfflineForm_RegisterOfflineForm});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../layout/dist/esm/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),index_esm=__webpack_require__("../../node_modules/react-hook-form/dist/index.esm.mjs"),useTranslation=__webpack_require__("../../node_modules/react-i18next/dist/es/useTranslation.js"),fuselage=__webpack_require__("../fuselage/index.js"),index_module=__webpack_require__("../fuselage-hooks/dist/index.module.js"),Trans=__webpack_require__("../../node_modules/react-i18next/dist/es/Trans.js"),AgreeTermsField=__webpack_require__("./src/common/AgreeTermsField.tsx");const CopyStep=({termsHref="https://rocket.chat/terms",policyHref="https://rocket.chat/privacy",clientKey,setStep,onCopySecurityCode,onBackButtonClick})=>{const{t}=(0,useTranslation.B)(),agreementField=(0,index_module.useUniqueId)(),isMobile=!(0,index_module.useBreakpoints)().includes("md"),{control,formState:{isValid,errors}}=(0,index_esm.xW)(),clipboard=(0,index_module.useClipboard)(clientKey);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(esm.lV.Container,{children:[(0,jsx_runtime.jsx)(fuselage.Box,{mbe:"24px",fontScale:"p2",children:(0,jsx_runtime.jsxs)(Trans.x,{children:["If for any reason your workspace can’t be connected to the internet, follow these steps:",(0,jsx_runtime.jsx)(fuselage.Box,{mbe:"24px"}),"1. Go to: ",(0,jsx_runtime.jsx)("strong",{children:"cloud.rocket.chat > Workspaces"})," and click “",(0,jsx_runtime.jsx)("strong",{children:"Register self-managed"}),"”",(0,jsx_runtime.jsx)("br",{}),"2. Click “",(0,jsx_runtime.jsx)("strong",{children:"Continue offline"}),"”",(0,jsx_runtime.jsx)("br",{}),"3. In the ",(0,jsx_runtime.jsx)("strong",{children:"Register offline workspace"})," dialog in cloud.rocket.chat, paste the token in the box below"]},"form.registerOfflineForm.copyStep.description")}),(0,jsx_runtime.jsxs)(fuselage.Box,{display:"flex",flexDirection:"column",alignItems:"stretch",padding:16,flexGrow:1,backgroundColor:"dark",children:[(0,jsx_runtime.jsx)(fuselage.Scrollable,{vertical:!0,children:(0,jsx_runtime.jsx)(fuselage.Box,{height:"x108",fontFamily:"mono",fontScale:"p2",color:"white",style:{wordBreak:"break-all"},children:clientKey})}),(0,jsx_runtime.jsx)(fuselage.Button,{icon:"copy",primary:!0,onClick:()=>{onCopySecurityCode(),clipboard.copy()}})]}),(0,jsx_runtime.jsx)(AgreeTermsField.A,{agreementField,termsHref,policyHref,control,errors})]}),(0,jsx_runtime.jsx)(esm.lV.Footer,{children:(0,jsx_runtime.jsx)(fuselage.Box,{display:"flex",flexDirection:"column",children:(0,jsx_runtime.jsxs)(fuselage.ButtonGroup,{vertical:isMobile,children:[(0,jsx_runtime.jsx)(fuselage.Button,{type:"button",primary:!0,disabled:!isValid,onClick:()=>{setStep(Steps.PASTE)},children:t("component.form.action.next")}),(0,jsx_runtime.jsx)(fuselage.Button,{type:"button",onClick:onBackButtonClick,children:t("component.form.action.back")})]})})})]})},steps_CopyStep=CopyStep;try{CopyStep.displayName="CopyStep",CopyStep.__docgenInfo={description:"",displayName:"CopyStep",props:{termsHref:{defaultValue:{value:"https://rocket.chat/terms"},description:"",name:"termsHref",required:!1,type:{name:"string"}},policyHref:{defaultValue:{value:"https://rocket.chat/privacy"},description:"",name:"policyHref",required:!1,type:{name:"string"}},clientKey:{defaultValue:null,description:"",name:"clientKey",required:!0,type:{name:"string"}},onCopySecurityCode:{defaultValue:null,description:"",name:"onCopySecurityCode",required:!0,type:{name:"() => void"}},onBackButtonClick:{defaultValue:null,description:"",name:"onBackButtonClick",required:!0,type:{name:"() => void"}},setStep:{defaultValue:null,description:"",name:"setStep",required:!0,type:{name:"(step: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/forms/RegisterOfflineForm/steps/CopyStep.tsx#CopyStep"]={docgenInfo:CopyStep.__docgenInfo,name:"CopyStep",path:"src/forms/RegisterOfflineForm/steps/CopyStep.tsx#CopyStep"})}catch(__react_docgen_typescript_loader_error){}const PasteStep=({setStep})=>{const{t}=(0,useTranslation.B)(),isMobile=!(0,index_module.useBreakpoints)().includes("md"),{register,formState:{isSubmitting,isValidating,isSubmitSuccessful}}=(0,index_esm.xW)();return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(esm.lV.Container,{children:[(0,jsx_runtime.jsx)(fuselage.Box,{mbe:"24px",fontScale:"p2",children:(0,jsx_runtime.jsxs)(Trans.x,{children:["1. In ",(0,jsx_runtime.jsx)("strong",{children:"cloud.rocket.chat"})," get the generated text and paste below to complete your registration process"]},"form.registerOfflineForm.pasteStep.description")}),(0,jsx_runtime.jsx)(fuselage.Box,{display:"flex",flexDirection:"column",alignItems:"stretch",padding:16,flexGrow:1,backgroundColor:"dark",children:(0,jsx_runtime.jsx)(fuselage.Scrollable,{vertical:!0,children:(0,jsx_runtime.jsx)(fuselage.Box,{...register("token",{required:!0}),is:"textarea",backgroundColor:"dark",height:"x108",fontFamily:"mono",fontScale:"p2",color:"white",style:{wordBreak:"break-all",resize:"none"},placeholder:t("component.form.action.pasteHere"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"})})})]}),(0,jsx_runtime.jsx)(esm.lV.Footer,{children:(0,jsx_runtime.jsx)(fuselage.Box,{display:"flex",flexDirection:"column",children:(0,jsx_runtime.jsxs)(fuselage.ButtonGroup,{vertical:isMobile,children:[(0,jsx_runtime.jsx)(fuselage.Button,{type:"submit",primary:!0,loading:isSubmitting||isValidating,disabled:isSubmitSuccessful,children:t("component.form.action.completeRegistration")}),(0,jsx_runtime.jsx)(fuselage.Button,{type:"button",onClick:()=>setStep(Steps.COPY),children:t("component.form.action.back")})]})})})]})},steps_PasteStep=PasteStep;try{PasteStep.displayName="PasteStep",PasteStep.__docgenInfo={description:"",displayName:"PasteStep",props:{setStep:{defaultValue:null,description:"",name:"setStep",required:!0,type:{name:"(step: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/forms/RegisterOfflineForm/steps/PasteStep.tsx#PasteStep"]={docgenInfo:PasteStep.__docgenInfo,name:"PasteStep",path:"src/forms/RegisterOfflineForm/steps/PasteStep.tsx#PasteStep"})}catch(__react_docgen_typescript_loader_error){}const Steps={COPY:"copy",PASTE:"paste"},RegisterOfflineForm=({termsHref,policyHref,clientKey,onSubmit,onCopySecurityCode,onBackButtonClick})=>{const{t}=(0,useTranslation.B)(),[step,setStep]=(0,react.useState)(Steps.COPY),form=(0,index_esm.mN)({mode:"onChange",defaultValues:{token:"",agreement:!1}}),{handleSubmit}=form;return(0,jsx_runtime.jsx)(index_esm.Op,{...form,children:(0,jsx_runtime.jsxs)(esm.lV,{onSubmit:handleSubmit(onSubmit),children:[(0,jsx_runtime.jsx)(esm.lV.Header,{children:(0,jsx_runtime.jsx)(esm.lV.Title,{children:t("form.registerOfflineForm.title")})}),step===Steps.COPY?(0,jsx_runtime.jsx)(steps_CopyStep,{termsHref,policyHref,clientKey,setStep,onCopySecurityCode,onBackButtonClick}):(0,jsx_runtime.jsx)(steps_PasteStep,{setStep})]})})},RegisterOfflineForm_RegisterOfflineForm=RegisterOfflineForm;try{RegisterOfflineForm.displayName="RegisterOfflineForm",RegisterOfflineForm.__docgenInfo={description:"",displayName:"RegisterOfflineForm",props:{termsHref:{defaultValue:null,description:"",name:"termsHref",required:!0,type:{name:"string"}},policyHref:{defaultValue:null,description:"",name:"policyHref",required:!0,type:{name:"string"}},clientKey:{defaultValue:null,description:"",name:"clientKey",required:!0,type:{name:"string"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"SubmitHandler<RegisterOfflinePayload>"}},onCopySecurityCode:{defaultValue:null,description:"",name:"onCopySecurityCode",required:!0,type:{name:"() => void"}},onBackButtonClick:{defaultValue:null,description:"",name:"onBackButtonClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/forms/RegisterOfflineForm/RegisterOfflineForm.tsx#RegisterOfflineForm"]={docgenInfo:RegisterOfflineForm.__docgenInfo,name:"RegisterOfflineForm",path:"src/forms/RegisterOfflineForm/RegisterOfflineForm.tsx#RegisterOfflineForm"})}catch(__react_docgen_typescript_loader_error){}},"./src/pages/RegisterOfflinePage/RegisterOfflinePage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RegisterOfflinePage_RegisterOfflinePage});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../layout/dist/esm/index.js"),FormPageLayout=__webpack_require__("./src/common/FormPageLayout.tsx"),RegisterOfflineForm=__webpack_require__("./src/forms/RegisterOfflineForm/RegisterOfflineForm.tsx");const pageLayoutStyleProps={justifyContent:"center"},RegisterOfflinePage=props=>(0,jsx_runtime.jsx)(esm.su,{children:(0,jsx_runtime.jsx)(FormPageLayout.A,{styleProps:pageLayoutStyleProps,children:(0,jsx_runtime.jsx)(RegisterOfflineForm.A,{...props})})}),RegisterOfflinePage_RegisterOfflinePage=RegisterOfflinePage;try{RegisterOfflinePage.displayName="RegisterOfflinePage",RegisterOfflinePage.__docgenInfo={description:"",displayName:"RegisterOfflinePage",props:{termsHref:{defaultValue:null,description:"",name:"termsHref",required:!0,type:{name:"string"}},policyHref:{defaultValue:null,description:"",name:"policyHref",required:!0,type:{name:"string"}},clientKey:{defaultValue:null,description:"",name:"clientKey",required:!0,type:{name:"string"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"SubmitHandler<RegisterOfflinePayload>"}},onCopySecurityCode:{defaultValue:null,description:"",name:"onCopySecurityCode",required:!0,type:{name:"() => void"}},onBackButtonClick:{defaultValue:null,description:"",name:"onBackButtonClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/RegisterOfflinePage/RegisterOfflinePage.tsx#RegisterOfflinePage"]={docgenInfo:RegisterOfflinePage.__docgenInfo,name:"RegisterOfflinePage",path:"src/pages/RegisterOfflinePage/RegisterOfflinePage.tsx#RegisterOfflinePage"})}catch(__react_docgen_typescript_loader_error){}}}]);