import React from 'react';
import { Button } from '../button';
import { MainLayout } from '../layout';

export const LoginTemplate = () => {
  return (
    <MainLayout>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        
        <p>Hi {`{{ recipient}}`},</p>
        <p style={{ color: '#344054' }}>
          We’re glad to have you onboard! You’re already on your way to getting the job you deserve, you've worked so hard, we know!
        </p>
        <p style={{ color: '#344054' }}>
          Whether you’re here looking for talents, or looking for a job, or just for the ecosystem —
          welcome! If there’s anything you need, we’ll be here every step of the
          way.
        </p>
        <p style={{ color: '#344054' }}>
          Thanks,
          <br />
          The team
        </p>
        <div style={{}}>
          <a href="{{verification_link}}" target="_blank">
            <Button text="Log in" />
          </a>
        </div>
      </div>
    </MainLayout>
  );
};