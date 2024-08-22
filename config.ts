import Image from 'next/image';

export type ConfigProps = {
  appDescription: string;
  appName: string;
  domainName: string;
  logo: string;
};

export const config: ConfigProps = {
  appName: 'sanaam',
  appDescription: 'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth.',
  domainName: 'https://sanaam.sa',
  logo: '/icons/logo.svg',  // Direct path to the logo image
};

export const MyComponent = () => {
  return (
    <div>
      <h1>{config.appName}</h1>
      <p>{config.appDescription}</p>
      <a href={config.domainName}>Visit Us</a>
      <Image
        alt="Logo"
        src="/icons/logo.svg"  // Direct path usage here
        width={30}
        height={30}
        className="object-cover"
      />
    </div>
  );
};

export default config;
