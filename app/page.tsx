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
            <li><Link href="#download">Download</Link></li>
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
              <a href="https://github.com/RedixKernal/notepad_pro_app/releases/download/main/Notepad_Pro-0.1.0.msi" className="btn-primary">
                Download for Windows (MSI)
              </a>
              <span className="download-meta">Recommended for most users. v0.1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="content-section">
        <div className="container">
          <h2 className="reveal">About Notepad_Pro</h2>
          <div className="features-grid">
            <div className="feature-item reveal delay-1">
              <h3>Run 50+ Languages</h3>
              <p>Compile and execute code seamlessly with support for over 50 programming languages. View output instantly in the built-in console.</p>
            </div>
            <div className="feature-item reveal delay-2">
              <h3>Multi-Tab Editing</h3>
              <p>Work on multiple files simultaneously with our efficient tabbed interface. Unsaved changes are clearly marked.</p>
            </div>
            <div className="feature-item reveal delay-3">
              <h3>File Explorer Sidebar</h3>
              <p>Navigate your projects with a built-in toggleable sidebar. Create, rename, or delete files directly from the app.</p>
            </div>
            <div className="feature-item reveal delay-1">
              <h3>Powerful Search</h3>
              <p>Find text within the current file or search globally across your entire project directory with case-sensitivity options.</p>
            </div>
            <div className="feature-item reveal delay-2">
              <h3>Auto Save</h3>
              <p>Never lose your progress. Notepad_Pro automatically saves your work in the background as you type.</p>
            </div>
            <div className="feature-item reveal delay-3">
              <h3>Command Palette</h3>
              <p>Access any file or command quickly through the popup command palette, keeping your hands on the keyboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shortcuts Section */}
      <section id="shortcuts" className="shortcuts-section">
        <div className="container">
          <h2 className="reveal">Keyboard Shortcuts</h2>
          <table className="shortcuts-table reveal delay-1">
            <thead>
              <tr>
                <th>Action</th>
                <th>Shortcut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Save File</td>
                <td><kbd>Ctrl</kbd> + <kbd>S</kbd></td>
              </tr>
              <tr>
                <td>Run Code</td>
                <td><kbd>Ctrl</kbd> + <kbd>R</kbd></td>
              </tr>
              <tr>
                <td>Open Folder</td>
                <td><kbd>Ctrl</kbd> + <kbd>O</kbd></td>
              </tr>
              <tr>
                <td>Find in File</td>
                <td><kbd>Ctrl</kbd> + <kbd>F</kbd></td>
              </tr>
              <tr>
                <td>Toggle Sidebar</td>
                <td><kbd>Ctrl</kbd> + <kbd>B</kbd></td>
              </tr>
              <tr>
                <td>Toggle Theme</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd></td>
              </tr>
              <tr>
                <td>Zoom In / Out</td>
                <td><kbd>Ctrl</kbd> + <kbd>+</kbd> / <kbd>-</kbd></td>
              </tr>
            </tbody>
          </table>
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
