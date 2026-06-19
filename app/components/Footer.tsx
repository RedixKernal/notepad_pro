import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer aesthetic-footer reveal">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Image src="/192x192.png" alt="Notepad_Pro Icon" width={36} height={36} className="footer-logo-img" />
            <span className="footer-logo-text">Notepad_Pro</span>
          </div>
          <p className="footer-description">
            Lightweight notepad designed for maximum productivity and seamless execution. Now supercharged with intelligent AI.
          </p>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/downloads">Download</Link>
            <Link href="/privacy-policy">Privacy & Terms</Link>
          </div>
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Redix System. Designed and Developed by Redix System.
          </p>
        </div>
      </div>
    </footer>
  );
}
