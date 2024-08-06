import Image from 'next/image';
import Link from 'next/link';

import { navLinks } from '../constant';

export const Header = () => (
  <header className='border-b border-primary-650'>
    <div className='container flex items-center justify-between py-4  text-base  '>
      <div>
        <Image
          alt='logo'
          height={50}
          src='icon/logo.svg'
          width={70}
        />
      </div>
      <nav>
        <ul className='flex items-center justify-between gap-x-6 '>
          {navLinks.map((item) => (
            <Link href={item.href}>
              <li key={item.label}>{item.label}</li>
            </Link>
            ))}
        </ul>
      </nav>
      <div className=' flex items-center justify-center gap-x-3 rounded-lg bg-primary-50 px-5 py-2 text-white'>
        <img alt='globe icon' src='icon/globe.svg' />
        <p>العربية</p>
      </div>
    </div>
  </header>
  );
