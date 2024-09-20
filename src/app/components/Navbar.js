'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '../assest/icon.png';

const Navbar = () => {
    const router = useRouter();
  
    return (
      <nav className="navbar">
        <div className="navbar-left" onClick={() => router.push('/')}>
          <Image src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <button className="navbar-button" onClick={() => router.push('/Characters')}>Characters</button>
          <button className="navbar-button" onClick={() => router.push('/Episodes')}>Episodes</button>
        </div>
      </nav>
    );
  };

  export default Navbar;