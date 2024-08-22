import { FC, SVGProps } from 'react';
import Logo from '../public/icons/logo.svg';

export type ConfigProps = {
  appDescription: string;
  appName: string;
  domainName: string;
  logo: FC<SVGProps<SVGSVGElement>>;  // Correctly typed as a React component
};

const config: ConfigProps = {
  appName: 'sanaam',
  appDescription: 'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth.',
  domainName: 'https://sanaam.sa',
  logo: Logo,  // This is correctly set as a React component
};

export default config;
