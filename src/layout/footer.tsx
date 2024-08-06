import Link from 'next/link';
import { BiLogoSkype } from 'react-icons/bi';
import { CgFacebook } from 'react-icons/cg';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => (
  <footer className='mb-3 px-3 lg:px-6'>
    <div className='bg-footer background mt-20 rounded-3xl py-14'>
      <div className='container'>
        <div className='mb-16 grid grid-cols-1 gap-10 pt-9 md:grid-cols-[0.8fr_1fr]'>
          <div>
            <h2 className='mb-4 font-bricolage text-2xl text-black md:text-4xl'>
              Want to talk with us? <br />
              Tell us about it.
            </h2>

            <div>
              <h3 className='text-[22px] font-medium text-[#84878B]'>
                Contact:
              </h3>

              <div className='mt-2'>
                <Link
                  className='border-b border-solid border-primary-600 font-semibold text-[#1d3956]'
                  href='mailto:medicaresuportppc@gmail.com?subject=Pre-filled Subject&body=Please%20enter%20your%20message%20here.'
                >
                  medicaresuportppc@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-14 flex justify-between gap-y-6 max-md:flex-col md:items-center'>
          <div className='flex gap-x-10 gap-y-6'>
            {NAVS.map(({ href, label }) => (
              <Link href={href}>{label}</Link>
            ))}
          </div>

          <div className='mt-3 flex items-center gap-3'>
            {SOCIALS.map(({ href, icon }) => (
              <Link
                className='flex size-9 items-center justify-center rounded-full bg-body text-white'
                href={href}
                target='_blank'
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        <hr className='border-t border-t-body/20' />

        <p className='mt-4 text-center'>
          Copyright {new Date().getFullYear()} all rights reserved.
          Medicare support marketing
        </p>
      </div>
    </div>
  </footer>
);

const NAVS = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'FAQ',
    href: '#faq',
  },
];

const SOCIALS = [
  {
    icon: <CgFacebook />,
    href: 'https://www.facebook.com/profile.php?id=61559206995584&sk=about_contact_and_basic_info',
  },
  {
    icon: <FaLinkedinIn />,
    href: '',
  },
  {
    icon: <BiLogoSkype />,
    href: 'https://join.skype.com/invite/BE4M5Sm3WaqK',
  },
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/medicaresupportmarketing?utm_source=qr&igsh=cmowaXA2bGxreTlh',
  },
];

export default Footer;
