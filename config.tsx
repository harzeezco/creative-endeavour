import Image from 'next/image';

export type ConfigProps = {
  appDescription: string;
  appName: string;
  domainName: string;
};

export const config: ConfigProps = {
  appName: 'sanaam',
  appDescription: '.We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth.',
  domainName: 'https://sanaam.sa',
};

export const MyComponent = () => {
  return (
    <div>
      <h1>{config.appName}</h1>
      <p>{config.appDescription}</p>
      <a href={config.domainName}>Visit Us</a>
      <Image
        alt="logo"
        src="/icons/logo.svg"  // Correct path to your logo
        width={70}
        height={40}
      />
    </div>
  );
};

export default config;
