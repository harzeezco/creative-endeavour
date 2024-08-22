import Logo from '../public/icons/logo.svg';
export type ConfigProps = {
  appDescription: string;
  appName: string;
  domainName: string;
  appImage: string; 

};

const config = {
  appName: 'sanaam',
  appDescription: 'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth.',
  domainName: 'sanaam.sa',
  appImage:Logo,
} as ConfigProps;

export default config;
