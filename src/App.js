import { AccountVerificationTemplate } from './components/templates/accountVerificationTemplate';
import { PasswordResetRequestTemplate } from './components/templates/passwordResetRequest';
import { PasswordChangedTemplate } from './components/templates/passwordChanged';
import { LoginTemplate } from './components/templates/login';
import { WelcomeToTamborinTemplate } from './components/templates/welcomeToTamborin';
import React from 'react';
import './App.css';

const allTemplates = {
  accountVerification: AccountVerificationTemplate,
  passwordResetRequest: PasswordResetRequestTemplate,
  passwordChanged: PasswordChangedTemplate,
  login: LoginTemplate,
  welcomeToTamborin: WelcomeToTamborinTemplate,
};

function App() {
  return (
    <>
      {Object.entries(allTemplates).map(([key, component], index) => {
        return (
          <React.Fragment key={index}>
            <div
              style={{
                margin: '32px 0',
                padding: 20,
                background: '#eee',
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              {key}
            </div>
            {component()}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default App;
