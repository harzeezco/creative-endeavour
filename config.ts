import Image from 'next/image';
import React from 'react';

export type ConfigProps = {
  appDescription: string;
  appName: string;
  domainName: string;
  logo: string;
};

export const config: ConfigProps = {
  appName: 'Miro',
  appDescription: 'Miro is a visual workspace for innovation where teams manage projects, design products, and build the future.',
  domainName: 'https://miro.com/app/dashboard/',
  logo: '/icons/logo.svg',  // Replace with the correct path to your logo
};

export const LinkPreviewCard = () => (
  <div style={{
    border: '1px solid #ddd', 
    borderRadius: '8px', 
    overflow: 'hidden', 
    width: '500px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  }}>
    <div style={{ backgroundColor: '#FFD700', padding: '16px', textAlign: 'center' }}>
      <Image 
        alt="Logo"
        src={config.logo}
        width={50}
        height={50}
        style={{ marginBottom: '8px' }}
      />
    </div>
    <div style={{ padding: '16px' }}>
      <h2 style={{ fontSize: '20px', margin: '0 0 8px 0' }}>{config.appName}</h2>
      <p style={{ fontSize: '14px', color: '#666' }}>{config.appDescription}</p>
      <a href={config.domainName} style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold', display: 'block', marginTop: '12px' }}>
        {config.domainName}
      </a>
    </div>
  </div>
);

export default config;
