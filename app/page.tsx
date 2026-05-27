import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar animate-fadeup">
        <Link href="/" className="navbar-logo">
          <Image src="/app_icon.png" alt="Notepad_Pro Icon" width={34} height={34} className="logo-icon-img" />
          <span className="logo-text">Notepad_Pro</span>
        </Link>
        <ul className="navbar-links">
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#shortcuts">Shortcuts</Link></li>
          <li><Link href="#download" className="nav-cta">Download Now</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-orb-1"></div>
        <div className="hero-orb-2"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot"></div>
            Version 0.1.0 is now available
          </div>

          <h1 className="hero-title">
            Your Modern <span className="hero-title-gradient">Code & Notes</span> Editor
          </h1>

          <p className="hero-subtitle">
            A premium, lightweight desktop application built with modern technology.
            Experience seamless multi-tab editing, dark mode, and a built-in file explorer.
            Designed and developed by Redix Systems.
          </p>

          <div className="hero-actions">
            <Link href="#download" className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download for Windows
            </Link>
            <Link href="#features" className="btn-secondary">
              Explore Features
            </Link>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span>Free & Open</span>
            </div>
            <div className="hero-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span>Fully Secure</span>
            </div>
            <div className="hero-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>Lightweight</span>
            </div>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section id="features" className="section">
        <div className="section-label">Capabilities</div>
        <h2 className="section-title">Everything you need. <br />Nothing you don't.</h2>
        <p className="section-subtitle">
          Notepad_Pro provides a focused, premium editing experience with essential tools for developers and writers.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon feature-icon-purple">📑</div>
            <h3 className="feature-name">Multi-Tab Editing</h3>
            <p className="feature-desc">Work on multiple files simultaneously with our efficient tabbed interface. Unsaved changes are clearly marked.</p>
            <div className="feature-tag">TabPane UI</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-blue">📁</div>
            <h3 className="feature-name">File Explorer Sidebar</h3>
            <p className="feature-desc">Navigate your projects with a built-in toggleable sidebar. Create, rename, or delete files directly from the app.</p>
            <div className="feature-tag">Integrated Explorer</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-cyan">🎨</div>
            <h3 className="feature-name">Custom Text Color</h3>
            <p className="feature-desc">Personalize your workspace by changing the text color for individual tabs or applying it globally across all open files.</p>
            <div className="feature-tag">Personalization</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-orange">🔍</div>
            <h3 className="feature-name">Powerful Search</h3>
            <p className="feature-desc">Find text within the current file or search globally across your entire project directory with case-sensitivity options.</p>
            <div className="feature-tag">Global Find</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-green">🌙</div>
            <h3 className="feature-name">Dark & Light Modes</h3>
            <p className="feature-desc">Switch between premium dark and light themes instantly. Customize text colors for maximum readability.</p>
            <div className="feature-tag">Theme Engine</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-purple">⚡</div>
            <h3 className="feature-name">Command Palette</h3>
            <p className="feature-desc">Access any file or command quickly through the popup command palette, keeping your hands on the keyboard.</p>
            <div className="feature-tag">Productivity</div>
          </div>
        </div>
      </section>



      {/* Shortcuts Section */}
      <section id="shortcuts" className="shortcuts-section">
        <div className="shortcuts-inner">
          <div>
            <div className="section-label">Keyboard-first</div>
            <h2 className="section-title">Master your workflow</h2>
            <p className="section-subtitle">
              Designed for power users, Notepad_Pro includes comprehensive keyboard shortcuts to keep you in the flow.
            </p>
          </div>
          <div>
            <table className="shortcuts-table">
              <tbody>
                <tr>
                  <td>Save File</td>
                  <td><kbd>Ctrl</kbd> + <kbd>S</kbd></td>
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
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download-section">
        <div className="download-inner">
          <div className="section-label">Ready to start?</div>
          <h2 className="section-title">Download Notepad_Pro</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Choose the installer that works best for your system. Version 0.1.0 is currently available for Windows.
          </p>

          <div className="download-cards">
            <a href="/Notepad_Pro-0.1.0.msi" download className="download-card primary" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="recommended-badge">Recommended</div>
              <div className="download-card-icon">📦</div>
              <h3 className="download-card-name">MSI Installer</h3>
              <p className="download-card-desc">Standard Windows installer package. Best for enterprise deployments and standard installations.</p>

              <div className="download-card-meta">
                <div className="download-card-meta-row">
                  <span>Version</span>
                  <span>0.1.0</span>
                </div>
                <div className="download-card-meta-row">
                  <span>Architecture</span>
                  <span>x64</span>
                </div>
              </div>

              <div className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Download .msi
              </div>
            </a>

            <a href="/Notepad_Pro-0.1.0.exe" download className="download-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="download-card-icon">⚙️</div>
              <h3 className="download-card-name">EXE Installer</h3>
              <p className="download-card-desc">Self-extracting executable. Provides a guided setup wizard for user-level installations.</p>

              <div className="download-card-meta">
                <div className="download-card-meta-row">
                  <span>Version</span>
                  <span>0.1.0</span>
                </div>
                <div className="download-card-meta-row">
                  <span>Architecture</span>
                  <span>x64</span>
                </div>
              </div>

              <div className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Download .exe
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-name">Notepad_Pro</div>
            <div className="footer-brand-sub">Designed and Developed by Redix Systems</div>
          </div>

          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Redix Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
