import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

export const Footer = () => (
  <footer className='mt-20 py-16'>
    <div className='mx-auto mb-3 grid max-w-[1250px] grid-cols-[auto_auto_auto_auto_auto] px-3 text-[#181A2E]'>
      <div>
        <Link href='/'>
          <Image
            alt='logo'
            height={40}
            src='/icons/logo-footer.svg'
            width={70}
          />
        </Link>

        <p className='mt-3 max-w-md'>
          Create your digital legacy on the market. Sanam is your
          launchpad for creativity and technical mastry.
        </p>
      </div>

      <div className='flex gap-2'>
        {SOCIALS.map(({ href, icon }) => (
          <Link
            className='h-fit bg-[#FAFAFA] p-2 text-2xl'
            href={href}
          >
            {icon}
          </Link>
        ))}
      </div>

      <div>
        <h3 className='mb-3 text-xl font-bold'>Pages</h3>
        <div className='grid grid-cols-2 gap-y-3'>
          {Links.map(({ href, label }) => (
            <Link href={href}>{label}</Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className='mb-3 text-xl font-bold'>Contact</h3>
        <Link className='border-b border-solid' href='/'>
          Info@sanam.sa
        </Link>
      </div>

      <div className='flex flex-col items-end'>
        <div className='mb-3 flex items-center gap-2'>
          <span>العربية</span>

          <Image
            alt='world'
            height={25}
            src='/icons/world.svg'
            width={25}
          />
        </div>

        <button className='rounded-[8px] bg-black px-6 py-2 text-white'>
          Join Now
        </button>
      </div>
    </div>

    <p className='mt-5 lg:pl-6'>
      Copyright © 2023 Sanam | All Rights Reserved | Terms and
      Conditions | Privacy Policy
    </p>
  </footer>
);

const SOCIALS = [
  {
    icon: <FaLinkedinIn />,
    href: '',
  },
  {
    icon: <FaXTwitter />,
    href: '',
  },
  {
    icon: <FaInstagram />,
    href: '',
  },
];

const Links = [
  {
    label: 'Work',
    href: '',
  },
  {
    label: 'About Us',
    href: '',
  },
  {
    label: 'FAQ',
    href: '',
  },
  {
    label: 'Contact Us',
    href: '',
  },
  {
    label: 'Terms of use',
    href: '',
  },
  {
    label: 'Privacy Policy',
    href: '',
  },
];
