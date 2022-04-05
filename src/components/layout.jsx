
  
import React from 'react';
import { EmailFooter } from './footer';
import { EmailHeader } from './header';

export const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        margin: '0',
        backgroundColor: '#f9fafb',
        padding: '12px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "'Lato', Arial, sans-serif",
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#344054',
        width: '100%',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          display: 'block',
          padding: '24px',
          flexDirection: 'column',
          width: '576px',
          margin: '0 auto',
        }}
      >
        <EmailHeader />

        {children}

        <EmailFooter />
      </div>
    </div>
  );
};
