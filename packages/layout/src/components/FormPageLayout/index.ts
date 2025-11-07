import Form from './Form.js';
import FormContainer from './FormContainer.js';
import FormFooter from './FormFooter.js';
import FormHeader from './FormHeader.js';
import * as FormPageLayout from './FormPageLayout.styles.js';
import FormSteps from './FormSteps.js';
import FormSubtitle from './FormSubtitle.js';
import FormTitle from './FormTitle.js';

export default Object.assign(Form, {
  /**
   * @deprecated prefer using named imports
   * */
  Header: FormHeader,
  /**
   * @deprecated prefer using named imports
   * */
  Steps: FormSteps,
  /**
   * @deprecated prefer using named imports
   * */
  Title: FormTitle,
  /**
   * @deprecated prefer using named imports
   * */
  Subtitle: FormSubtitle,
  /**
   * @deprecated prefer using named imports
   * */
  Container: FormContainer,
  /**
   * @deprecated prefer using named imports
   * */
  Footer: FormFooter,
});

export {
  Form,
  FormContainer,
  FormHeader,
  FormFooter,
  FormSteps,
  FormSubtitle,
  FormTitle,
  FormPageLayout,
};
