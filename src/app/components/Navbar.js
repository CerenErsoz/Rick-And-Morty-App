'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../assest/icon.png';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="navbar">
            <div className="header-content">
                {/* Logo with link to home */}
                <Link href="/">
                    <Image src={logo} alt="App Logo" width={50} height={50} />
                </Link>
                {/* Navigation buttons */}
                <div className="nav-buttons">
                    <button onClick={() => router.push('/episodes')}>
                        Episodes
                    </button>
                    <button onClick={() => router.push('/characters')}>
                        Characters
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
