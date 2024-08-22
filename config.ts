
import Image from 'next/image';

export type ConfigProps = {
  appDescription: string;
  appName: string;
  domainName: string;
  logo: string;  // Change this to a string to use with next/image
};

const config: ConfigProps = {
  appName: 'sanaam',
  appDescription: 'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth.',
  domainName: 'https://sanaam.sa',
  logo: '/icons/logo.svg',  // Set this as a path for next/image
};

export default config;

export const MyComponent = () => (
  <div>
    <h1>{config.appName}</h1>
    <p>{config.appDescription}</p>
    <a href={config.domainName}>Visit Us</a>
    <Image
      alt="image"
      className="object-cover"
      height={30}
      src={config.logo}
      width={30}
    />
  </div>
);
