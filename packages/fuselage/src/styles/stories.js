import { storiesOf } from '@storybook/react';
import cssVars from 'css-vars-ponyfill';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Button } from '../components/Button';
import { ButtonGroup } from '../components/ButtonGroup';
import { Document, TextSection, ShowCaseSection } from '../helpers/storybook';


function ThemingTest() {
  useEffect(() => {
    cssVars({
      onlyLegacy: true,
      watch: true,
    });
  }, []);

  return <>
    <Helmet>
      <style type='text/css'>{`
      :root {
        --rcx-button-basic-color: white;
        --rcx-button-basic-background-color: olive;
        --rcx-button-primary-background-color: navy;
        --rcx-button-danger-background-color: tomato;
      }
      `}</style>
    </Helmet>
    <ButtonGroup>
      <Button>One</Button>
      <Button primary>Two</Button>
      <Button primary danger>Three</Button>
    </ButtonGroup>
  </>;
}

storiesOf('Styles|Theming/tests', module)
  .add('Theme overrides', () => <ThemingTest />);

function ThemingReadme() {
  return <Document>
    <TextSection>
      <h1>Theming</h1>
      <p>
      Currently, Fuselage uses the same method for theming applied on Rocket.Chat: <strong>global CSS custom
      properties/variables</strong>. These properties are prefixed by <code>rcx-</code> (to distinguish them from the
      already existing <code>rc-</code> ones from Rocket.Chat's UI) followed by the name of the component affected by
      them (e.g. <code>rcx-check-box-</code> variables refer to the <code>CheckBox</code> component) and the property
      name (e.g. <code>color</code>, <code>hover-background-color</code> etc.).
      </p>
      <p>For instance, the following CSS code</p>
      <pre>{`:root {
        --rcx-button-primary-background-color: navy;
      }`}</pre>
      <p>
        will enable <code>Button</code> elements which are decorated by <code>primary</code> property to show a
        background of <span style={{ color: 'navy' }}>navy</span> color:
      </p>
    </TextSection>
    <ShowCaseSection>
      <>
        <Helmet>
          <style type='text/css'>{`
          :root {
            --rcx-button-primary-background-color: navy;
          }`}</style>
        </Helmet>
        <ButtonGroup>
          <Button primary>Yes</Button>
          <Button>Maybe</Button>
          <Button danger>No</Button>
        </ButtonGroup>
      </>
    </ShowCaseSection>
    <TextSection>
      <p>
      We recommend <a href='https://www.npmjs.com/package/react-helmet' target='_blank'>react-helmet</a> to set theming,
      as it follows:
      </p>
      <pre>{`
      <Helmet>
        <style type='text/css'>{\`
        :root {
          --rcx-button-primary-background-color: navy;
        }
        \`}</style>
      </Helmet>
      `}</pre>
    </TextSection>
  </Document>;
}

storiesOf('Styles|Theming', module)
  .lokiSkip('Theme overrides', () => <ThemingReadme />);
