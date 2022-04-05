import React from 'react'
import { Button } from '../button'
import { MainLayout } from '../layout'

export const AccountVerificationTemplate = () => {
  return (
    <MainLayout>
      <div>
        <p>Hi {'{{recipient_name}}'},</p>
        <p>
          Welcome to Tamborin! To continue, please verify your account by clicking
          the button below:
        </p>
        <p>
          <a href="{{verification_link}}" target="_blank">
            <Button text="Verify Email" />
          </a>
        </p>
        <p>
          Thanks,
          <br />
          The Tamborin Team
        </p>
      </div>
    </MainLayout>
  )
}

