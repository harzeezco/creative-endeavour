'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header
    className='fixed inset-x-0 top-0 z-[999] bg-white py-3'
    id='home'
  >
    <div className='container flex items-center justify-between'>
      <Navbar />

      <div className='flex items-center gap-x-6 max-md:hidden'>
        <p className='flex items-center gap-3'>
          <Image
            alt='phone'
            height={20}
            src='/icons/phone.svg'
            width={20}
          />
          <span>
            <a
              className='border-b border-solid border-[#07040E] font-semibold text-[#07040E]'
              href='tel:+13342474890'
            >
              +1 (334) 247-4890
            </a>
          </span>
        </p>
      </div>

      <div className='flex items-center gap-4 sm:hidden' />
    </div>
  </header>
);

const NAVS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

const Navbar = () => (
  <nav>
    <ul className='flex items-center gap-10 max-md:hidden'>
      {NAVS.map(({ href, label }) => (
        <Link
          className='transition duration-200 hover:text-primary focus:text-primary active:font-semibold'
          href={href}
        >
          <li className=''>{label}</li>
        </Link>
      ))}
    </ul>
  </nav>
);

export default Header;
