"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="navbar aesthetic-navbar">
      <div className="container">
        <Link href="/" className="navbar-logo">
          <Image src="/192x192.png" alt="Notepad_Pro Icon" width={32} height={32} className="logo-icon-img" />
          <span className="logo-text">Notepad_Pro</span>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link href="/downloads" className={pathname === '/downloads' ? 'active' : ''}>Download</Link>
          </li>
          <li>
            <Link href="/privacy-policy" className={pathname === '/privacy-policy' ? 'active' : ''}>Privacy & Terms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
