"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, {
      threshold: 0.1
    });

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="navbar-logo">
            <Image src="/app_icon.png" alt="Notepad_Pro Icon" width={28} height={28} className="logo-icon-img" />
            Notepad_Pro
          </Link>
          <ul className="navbar-links">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#shortcuts">Shortcuts</Link></li>
            <li><Link href="/downloads">Download</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="download" className="hero">
        <div className="container">
          <h1 className="hero-title reveal">Notepad_Pro</h1>
          <p className="hero-subtitle reveal delay-1">
            A free, open-source, lightweight code editor designed for maximum productivity and seamless execution.
          </p>

          <div className="hero-downloads reveal delay-2">
            <div className="download-card-wrapper">
              <a href="https://github.com/RedixKernal/notepad_pro_app/releases/download/v1.1.0/Notepad_Pro-1.1.0.msi" className="btn-os btn-windows">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0,3.449L9.75,2.1v9.451H0m10.949-9.602L24,0v11.4H10.949M0,12.6h9.75v9.451L0,20.699M10.949,12.6H24V24l-12.951-1.801"/>
                </svg>
                Download for Windows
              </a>
              <div className="download-chips">
                <span className="chip">v1.1.0</span>
                <span className="chip">Windows 10/11 (.msi)</span>
              </div>
            </div>
            <div className="download-card-wrapper">
              <a href="https://github.com/RedixKernal/notepad_pro_app/releases/download/v1.1.0/Notepad_Pro-1.1.0.dmg" className="btn-os btn-macos">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 24 184.8 8 277.3c-23.5 125.7 65.3 221.7 114.7 221.7 23.5 0 42-12.2 73-12.2 30.5 0 46 12.2 74 12.2 46.5 0 119.5-84.3 119.5-84.3-39-16.5-69.6-60.6-70.5-146zM245.5 83.2C272.5 53.9 285.4 12.8 281 0c-25 2.5-62.5 17.6-88.5 45.4-23.5 24.5-38.5 65.3-33.5 105 28.5 2.5 62-15.7 86.5-67.2z"/>
                </svg>
                Download for macOS
              </a>
              <div className="download-chips">
                <span className="chip">v1.1.0</span>
                <span className="chip">macOS (.dmg)</span>
              </div>
            </div>
            <div className="download-card-wrapper">
              <a href="https://github.com/RedixKernal/notepad_pro_app/releases/download/v1.1.0/notepad-pro_1.1.0-1_amd64.deb" className="btn-os btn-linux">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.7.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.5zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 45.9-23.5 61.1-38.5 78.4-14 16-25.2 32.7-32.9 54.7-6.2 17.5-8.2 36.3-5.5 54.5-2.6.8-5.3 1.8-8 3-7.5 3.3-14 8.7-18.7 15.6-4.9 6.9-8.1 16-9.7 25.1-1.4 8.6-2.1 17.6-2.1 26.6 0 15.6 4.7 32.4 13.9 45.4 9 12.8 22.8 22.4 38.2 26 15.1 3.5 31.4 1.8 45.7-4.1 14.5-6 26.9-16.5 34.6-29.6 19.3 6.9 41.5 10.6 65.6 10.6 24 0 46.2-3.7 65.4-10.6 7.7 13.1 20.1 23.6 34.6 29.6 14.3 5.9 30.6 7.6 45.7 4.1 15.4-3.6 29.2-13.2 38.2-26 9.2-13 13.9-29.8 13.9-45.4 0-9-.7-18-2.1-26.6-1.6-9.1-4.8-18.2-9.7-25.1-4.7-6.9-11.2-12.3-18.7-15.6zM130.4 466.7c-9 2-18.4 1-26.4-3-8.1-4-14.7-10.6-18.7-18.7-4-8-5-17.5-3-26.4 1.8-8.4 6.7-15.6 13.4-20.7 6.9-5.1 15.2-8.3 23.9-8.3 8.7 0 17 3.2 23.9 8.3 6.7 5.1 11.6 12.3 13.4 20.7 2 9-1 18.4-5 26.4-4 8.1-10.6 14.7-18.7 18.7-8 4-17.4 5-26.4 3zm252.8-3c-8 4-17.4 5-26.4 3-9-2-18.4-1-26.4-3-8.1-4-14.7-10.6-18.7-18.7-4-8-5-17.5-3-26.4 1.8-8.4 6.7-15.6 13.4-20.7 6.9-5.1 15.2-8.3 23.9-8.3 8.7 0 17 3.2 23.9 8.3 6.7 5.1 11.6 12.3 13.4 20.7 2 9-1 18.4-5 26.4-4 8.1-10.6 14.7-18.7 18.7zm-143-207.2c-15.8-14.5-35-23.7-55.8-26.4-5.3-.7-10.6-1-15.8-1-16.7 0-33 4-48 11.7-10.6 5.4-20.5 12.5-29.2 20.9-12.2 11.6-21.6 25.6-27.9 41-6.1 15.1-9.5 31.4-10 48.1-.5 16.7 2.1 33.3 7.6 49 5.3 15.3 13.1 29.5 23 41.8 9.7 12.1 21.6 22.3 35 30.1 13.1 7.6 27.6 12.8 42.6 15.4 15 2.5 30.3 2.8 45.4.8 15-2 29.5-6.5 42.8-13.3 13-6.6 24.8-15.1 34.8-25.2 9.8-9.9 17.8-21.4 23.7-34.2 5.7-12.6 9.4-26.2 10.9-40.1 1.4-13.9 1-27.9-1.2-41.6-2.2-13.6-6.4-26.8-12.4-39-5.8-11.9-13.4-22.9-22.5-32.5-9.1-9.5-19.6-17.7-31.1-24z"/>
                </svg>
                Download for Linux
              </a>
              <div className="download-chips">
                <span className="chip">v1.1.0</span>
                <span className="chip">Ubuntu/Debian (.deb)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="content-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="reveal" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Supercharge Your Coding</h2>
            <p className="reveal delay-1" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Experience lightning-fast performance, robust tooling, and an elegant interface designed for developers.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-item reveal delay-1">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3>Run 50+ Languages</h3>
              <p>Compile and execute code seamlessly with support for over 50 programming languages. View output instantly in the built-in console.</p>
            </div>
            
            <div className="feature-item reveal delay-2">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h3>Multi-Tab Editing</h3>
              <p>Work on multiple files simultaneously with our efficient tabbed interface. Unsaved changes are clearly marked.</p>
            </div>
            
            <div className="feature-item reveal delay-3">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
              </div>
              <h3>File Explorer Sidebar</h3>
              <p>Navigate your projects with a built-in toggleable sidebar. Create, rename, or delete files directly from the app.</p>
            </div>
            
            <div className="feature-item reveal delay-1">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <h3>Powerful Search</h3>
              <p>Find text within the current file or search globally across your entire project directory with case-sensitivity options.</p>
            </div>
            
            <div className="feature-item reveal delay-2">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
              </div>
              <h3>Auto Save</h3>
              <p>Never lose your progress. Notepad_Pro automatically saves your work in the background as you type.</p>
            </div>
            
            <div className="feature-item reveal delay-3">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
              </div>
              <h3>Command Palette</h3>
              <p>Access any file or command quickly through the popup command palette, keeping your hands on the keyboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shortcuts Section */}
      <section id="shortcuts" className="shortcuts-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="reveal" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Master Your Workflow</h2>
            <p className="reveal delay-1" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Keep your hands on the keyboard. Use these powerful shortcuts to navigate and edit at the speed of thought.
            </p>
          </div>
          
          <div className="shortcuts-grid reveal delay-2">
            
            <div className="shortcut-card">
              <div className="shortcut-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                <span>Save File</span>
              </div>
              <div className="shortcut-keys">
                <kbd>Ctrl</kbd><span>+</span><kbd>S</kbd>
              </div>
            </div>

            <div className="shortcut-card">
              <div className="shortcut-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                <span>Run Code</span>
              </div>
              <div className="shortcut-keys">
                <kbd>Ctrl</kbd><span>+</span><kbd>R</kbd>
              </div>
            </div>

            <div className="shortcut-card">
              <div className="shortcut-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <span>Open Folder</span>
              </div>
              <div className="shortcut-keys">
                <kbd>Ctrl</kbd><span>+</span><kbd>O</kbd>
              </div>
            </div>

            <div className="shortcut-card">
              <div className="shortcut-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span>Find in File</span>
              </div>
              <div className="shortcut-keys">
                <kbd>Ctrl</kbd><span>+</span><kbd>F</kbd>
              </div>
            </div>

            <div className="shortcut-card">
              <div className="shortcut-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                <span>Toggle Sidebar</span>
              </div>
              <div className="shortcut-keys">
                <kbd>Ctrl</kbd><span>+</span><kbd>B</kbd>
              </div>
            </div>

            <div className="shortcut-card">
              <div className="shortcut-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                <span>Toggle Theme</span>
              </div>
              <div className="shortcut-keys">
                <kbd>Ctrl</kbd><span>+</span><kbd>Shift</kbd><span>+</span><kbd>T</kbd>
              </div>
            </div>

            <div className="shortcut-card">
              <div className="shortcut-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                <span>Zoom In / Out</span>
              </div>
              <div className="shortcut-keys">
                <kbd>Ctrl</kbd><span>+</span><kbd>+</kbd><span>/</span><kbd>-</kbd>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer reveal">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Redix Systems. Designed and Developed by Redix Systems.</p>
        </div>
      </footer>
    </>
  );
}
