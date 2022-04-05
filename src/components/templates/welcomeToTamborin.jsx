import { Button } from '../button';
import { MainLayout } from '../layout';

export const WelcomeToTamborinTemplate = () => {
  return (
    <MainLayout>
      <div>
        <h1>Search! Apply! Congratulations!!</h1>
        <p>Welcome to Tamborin!</p>
        <p>
        Finding your dream remote job just got easier. We curate and deliver top remote jobs in tech across the globe straight to your inbox.
        </p>
        <p>
          <a href="{{explore_link}}" target="_blank">
            <Button text="Explore tamborin" />
          </a>
        </p>
      </div>
    </MainLayout>
  );
};