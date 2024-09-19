'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../assest/icon.png';

const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="logo">
            <Link href="/">
              <Image src={logo} alt="App Logo" width={55} height={100} />  
            </Link>
          </div>
          <ul className="navbar-menu">
            <li>
              <Link href="/">Episodes</Link>
            </li>
            <li>
              <Link href="/characters">Characters</Link>
            </li>
          </ul>
        </nav>
      );
};

export default Navbar;
