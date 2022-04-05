import { Button } from '../button';
import { MainLayout } from '../layout';

export const PasswordChangedTemplate = () => {
  return (
    <MainLayout>
      <div>
        <h1>Did you change your password?</h1>
        <p>
          We noticed the password for your Tamborin account was recently changed.
          If you didn't do this, please review your account now. If this was
          you, you can safely disregard this email.
        </p>
        <p>
          <a href="{{review_account_link}}" target="_blank">
            <Button text="Review my account" />
          </a>
        </p>
      </div>
    </MainLayout>
  );
};