import Form from './Form';
import FormContainer from './FormContainer';
import FormFooter from './FormFooter';
import FormSteps from './FormSteps';
import FormSubtitle from './FormSubtitle';
import FormTitle from './FormTitle';

export default Object.assign(Form, {
  Steps: FormSteps,
  Title: FormTitle,
  Subtitle: FormSubtitle,
  Container: FormContainer,
  Footer: FormFooter,
});
