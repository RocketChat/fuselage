import Form from './Form';
import FormContainer from './FormContainer';
import FormFooter from './FormFooter';
import FormHeader from './FormHeader';
import FormSteps from './FormSteps';
import FormSubtitle from './FormSubtitle';
import FormTitle from './FormTitle';

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
};
