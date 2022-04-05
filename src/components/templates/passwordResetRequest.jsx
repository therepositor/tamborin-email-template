import { Button } from '../button';
import { MainLayout } from '../layout';

export const PasswordResetRequestTemplate = () => {
  return (
    <MainLayout>
      <div>
        <p>Hi {'{{recipient_name}}'},</p>
        <p>
          We received your request to reset the password to your Tamborin account.
          Please click on the button below to reset your password.
        </p>
        <p>
          <a href="{{reset_link}}" target="_blank">
            <Button text="Reset Password" />
          </a>
        </p>
        <p>
          If you are unable to click the link above, please copy and paste the
          link below into your browser:
          <br />
          <a href="{{reset_link}}" target="_blank">
            {'{{reset_link}}'}
          </a>
        </p>
        <p>
          <strong>
            If you have not made this request, please ignore this message.
            Should you feel your account has been compromised, please contact us
            at <strong>{'{{support_email}}'}</strong>.
          </strong>
        </p>
      </div>
    </MainLayout>
  );
};