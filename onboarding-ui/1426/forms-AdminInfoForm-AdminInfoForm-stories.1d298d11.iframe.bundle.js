"use strict";(self.webpackChunk_rocket_chat_onboarding_ui=self.webpackChunk_rocket_chat_onboarding_ui||[]).push([[2516],{"./src/forms/AdminInfoForm/AdminInfoForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_AdminInfoForm:()=>_AdminInfoForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_AdminInfoForm__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/forms/AdminInfoForm/AdminInfoForm.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"forms/AdminInfoForm",component:_AdminInfoForm__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{actions:{argTypesRegex:"^on.*"},layout:"centered"},argTypes:{validateUsername:{action:"validateUsername"},validateEmail:{action:"validateEmail"},validatePassword:{action:"validatePassword"}},args:{currentStep:1,stepCount:1,passwordRulesHint:"Password rules description goes here"}},_AdminInfoForm=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AdminInfoForm__WEBPACK_IMPORTED_MODULE_1__.A,{...args});_AdminInfoForm.storyName="AdminInfoForm";const __namedExportsOrder=["_AdminInfoForm"];_AdminInfoForm.parameters={..._AdminInfoForm.parameters,docs:{..._AdminInfoForm.parameters?.docs,source:{originalSource:"args => <AdminInfoForm {...args} />",..._AdminInfoForm.parameters?.docs?.source}}}},"./src/forms/AdminInfoForm/AdminInfoForm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../fuselage/index.js"),_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../fuselage-hooks/dist/index.module.js"),_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../layout/dist/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/index.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/react-hook-form/dist/index.esm.mjs"),react_i18next__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/react-i18next/dist/es/useTranslation.js");const AdminInfoForm=({currentStep,stepCount,passwordRulesHint,initialValues,validateUsername,validateEmail,validatePassword,keepPosted=!1,onSubmit})=>{const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.B)(),formId=(0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(),fullnameField=(0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(),usernameField=(0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(),emailField=(0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(),passwordField=(0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(),adminInfoFormRef=(0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),{register,handleSubmit,formState:{isValidating,isSubmitting,errors},control}=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.mN)({defaultValues:{...initialValues,password:""},mode:"onBlur"});return(0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)((()=>{adminInfoFormRef.current&&adminInfoFormRef.current.focus()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_3__.lV,{ref:adminInfoFormRef,tabIndex:-1,"aria-labelledby":`${formId}-title`,"aria-describedby":`${formId}-description`,onSubmit:handleSubmit(onSubmit),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_3__.lV.Header,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_3__.lV.Steps,{currentStep,stepCount}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_3__.lV.Title,{id:`${formId}-title`,children:t("form.adminInfoForm.title")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_3__.lV.Subtitle,{id:`${formId}-description`,children:t("form.adminInfoForm.subtitle")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_3__.lV.Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Field,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldLabel,{required:!0,htmlFor:fullnameField,children:t("form.adminInfoForm.fields.fullName.label")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldRow,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.xI,{name:"fullname",control,rules:{required:String(t("component.form.requiredField"))},render:({field})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.TextInput,{...field,"aria-describedby":`${fullnameField}-error}`,"aria-required":"true","aria-invalid":Boolean(errors.fullname),placeholder:t("form.adminInfoForm.fields.fullName.placeholder"),id:fullnameField})})}),errors.fullname&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldError,{"aria-live":"assertive",id:`${fullnameField}-error}`,children:errors.fullname.message})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Field,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldLabel,{required:!0,htmlFor:usernameField,children:t("form.adminInfoForm.fields.username.label")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldRow,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.xI,{name:"username",control,rules:{required:String(t("component.form.requiredField")),validate:validateUsername},render:({field})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.TextInput,{...field,"aria-describedby":`${usernameField}-error}`,"aria-required":"true","aria-invalid":Boolean(errors.username),placeholder:t("form.adminInfoForm.fields.username.placeholder"),id:usernameField})})}),errors.username&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldError,{"aria-live":"assertive",id:`${usernameField}-error}`,children:errors.username.message})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Field,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldLabel,{required:!0,htmlFor:emailField,children:t("form.adminInfoForm.fields.email.label")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldRow,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.xI,{name:"email",control,rules:{required:String(t("component.form.requiredField")),validate:validateEmail},render:({field})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.EmailInput,{...field,"aria-required":"true","aria-invalid":Boolean(errors.email),"aria-describedby":`${emailField}-error}`,placeholder:t("form.adminInfoForm.fields.email.placeholder"),id:emailField})})}),errors.email&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldError,{"aria-live":"assertive",id:`${emailField}-error}`,children:errors.email.message})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Field,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldLabel,{required:!0,htmlFor:passwordField,children:t("form.adminInfoForm.fields.password.label")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldRow,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.xI,{name:"password",control,rules:{required:String(t("component.form.requiredField")),validate:validatePassword},render:({field})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.PasswordInput,{...field,"aria-required":"true","aria-invalid":Boolean(errors.password),"aria-describedby":`${passwordField}-hint ${passwordField}-error}`,placeholder:t("form.adminInfoForm.fields.password.placeholder"),id:passwordField})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldHint,{id:`${passwordField}-hint`,children:passwordRulesHint}),errors.password&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.FieldError,{"aria-live":"assertive",id:`${passwordField}-error}`,children:errors.password.message})]}),keepPosted&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Box,{mbe:8,display:"block",color:"info",fontScale:"c1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.CheckBox,{id:"keepPosted",mie:8,...register("keepPosted")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"keepPosted",children:t("form.adminInfoForm.fields.keepPosted.label")})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_layout__WEBPACK_IMPORTED_MODULE_3__.lV.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Button,{type:"submit",primary:!0,loading:isValidating||isSubmitting,children:t("component.form.action.next")})})})]})},__WEBPACK_DEFAULT_EXPORT__=AdminInfoForm;try{AdminInfoForm.displayName="AdminInfoForm",AdminInfoForm.__docgenInfo={description:"",displayName:"AdminInfoForm",props:{currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"number"}},stepCount:{defaultValue:null,description:"",name:"stepCount",required:!0,type:{name:"number"}},passwordRulesHint:{defaultValue:null,description:"",name:"passwordRulesHint",required:!0,type:{name:"string"}},keepPosted:{defaultValue:{value:"false"},description:"",name:"keepPosted",required:!1,type:{name:"boolean"}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:'Omit<AdminInfoPayload, "password">'}},validateUsername:{defaultValue:null,description:"",name:"validateUsername",required:!0,type:{name:"Validate<string>"}},validateEmail:{defaultValue:null,description:"",name:"validateEmail",required:!0,type:{name:"Validate<string>"}},validatePassword:{defaultValue:null,description:"",name:"validatePassword",required:!0,type:{name:"Validate<string>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"SubmitHandler<AdminInfoPayload>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/forms/AdminInfoForm/AdminInfoForm.tsx#AdminInfoForm"]={docgenInfo:AdminInfoForm.__docgenInfo,name:"AdminInfoForm",path:"src/forms/AdminInfoForm/AdminInfoForm.tsx#AdminInfoForm"})}catch(__react_docgen_typescript_loader_error){}}}]);