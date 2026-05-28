"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const downloads = [
  {
    name: "Notepad_Pro-1.1.0.msi",
    link: "https://github.com/RedixKernal/notepad_pro_app/releases/download/v1.1.0/Notepad_Pro-1.1.0.msi",
    version: "v1.1.0",
    architecture: "Windows (64-bit)",
    date: "Latest"
  },
  {
    name: "Notepad_Pro-1.1.0.dmg",
    link: "https://github.com/RedixKernal/notepad_pro_app/releases/download/v1.1.0/Notepad_Pro-1.1.0.dmg",
    version: "v1.1.0",
    architecture: "macOS",
    date: "Latest"
  },
  {
    name: "Notepad-pro_1.1.0-1_amd64.deb",
    link: "https://github.com/RedixKernal/notepad_pro_app/releases/download/v1.1.0/notepad-pro_1.1.0-1_amd64.deb",
    version: "v1.1.0",
    architecture: "Linux (Debian/Ubuntu)",
    date: "Latest"
  },
  {
    name: "Notepad_Pro-1.0.0.msi",
    link: "https://github.com/RedixKernal/notepad_pro_app/releases/download/v1.0.0/Notepad_Pro-1.0.0.msi",
    version: "v1.0.0",
    architecture: "Windows (64-bit)",
    date: "Previous"
  },
  {
    name: "Notepad_Pro-1.0.0.dmg",
    link: "https://github.com/RedixKernal/notepad_pro_app/releases/download/v1.0.0/Notepad_Pro-1.0.0.dmg",
    version: "v1.0.0",
    architecture: "macOS",
    date: "Previous"
  },
  {
    name: "Notepad-pro_1.0.0-1_amd64.deb",
    link: "https://github.com/RedixKernal/notepad_pro_app/releases/download/v1.0.0/notepad-pro_1.0.0-1_amd64.deb",
    version: "v1.0.0",
    architecture: "Linux (Debian/Ubuntu)",
    date: "Previous"
  },
];

export default function Downloads() {
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
            <li><Link href="/#features">Features</Link></li>
            <li><Link href="/#shortcuts">Shortcuts</Link></li>
            <li><Link href="/downloads">Download</Link></li>
          </ul>
        </div>
      </nav>

      {/* Downloads Section */}
      <section className="shortcuts-section" style={{ minHeight: 'calc(100vh - 100px)', paddingTop: '120px' }}>
        <div className="container">
          <h2 className="reveal">Download Versions</h2>
          <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-secondary)' }} className="reveal delay-1">
            Choose a version of Notepad_Pro to download.
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '40px' }} className="reveal delay-1">
            <table className="shortcuts-table" style={{ maxWidth: '100%' }}>
              <thead>
                <tr>
                  <th>Version</th>
                  <th>File Name</th>
                  <th>Architecture</th>
                  <th>Release Info</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {downloads.map((dl, index) => (
                  <tr key={index}>
                    <td><strong>{dl.version}</strong></td>
                    <td>{dl.name}</td>
                    <td>{dl.architecture}</td>
                    <td>
                      <div style={{
                        borderRadius: "5px",
                        border: dl.date === "Latest" ? "2px solid #2ea634" : dl.date === "Previous" ? "2px solid #e69d27" : "var(--bg-secondary)",
                        padding: "5px 10px",
                        textAlign: "center",
                        color: dl.date === "Latest" ? "#2ea634" : dl.date === "Previous" ? "#e69d27" : "var(--bg-secondary)",
                      }}>{dl.date}
                      </div>
                    </td>
                    <td>
                      <a href={dl.link} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="release-notes-card reveal delay-2" style={{ backgroundColor: 'var(--bg-secondary)', padding: '32px', borderRadius: 'var(--radius)', textAlign: 'left', border: '1px solid var(--border-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '24px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.4rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--node-green)' }}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              What's New in v1.1.0 (Latest Release)
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '10px' }}>
              
              {/* All Platforms */}
              <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '12px', fontSize: '1.1rem' }}>🌐 All Platforms</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  <li><strong>Improvements:</strong> Significantly improved user experience across the board.</li>
                  <li><strong>New Feature:</strong> Added custom tab spacing configuration.</li>
                  <li><strong>New Feature:</strong> Integrated terminal for live code run execution.</li>
                  <li><strong>Improvements:</strong> Improved performance in all distributions.</li>
                </ul>
              </div>

              {/* Windows */}
              <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ color: '#0078D6', marginBottom: '12px', fontSize: '1.1rem' }}>🪟 Windows</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  <li><strong>Improvements:</strong> General stability and execution speed improvements.</li>
                  <li><strong>Fixes:</strong> Minor UI adjustments for Windows 10/11 environments.</li>
                </ul>
              </div>

              {/* macOS */}
              <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ color: '#333333', marginBottom: '12px', fontSize: '1.1rem' }}>🍏 macOS</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  <li><strong>Fixes:</strong> Fixed critical startup problems.</li>
                  <li><strong>Fixes:</strong> Resolved struct loading issues.</li>
                  <li><strong>Fixes:</strong> Fixed the auto-close bug affecting macOS users.</li>
                </ul>
              </div>

              {/* Linux */}
              <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ color: '#E95420', marginBottom: '12px', fontSize: '1.1rem' }}>🐧 Linux</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  <li><strong>Improvements:</strong> Better integration with Debian/Ubuntu window managers.</li>
                  <li><strong>Fixes:</strong> Addressed minor performance bottlenecks during code execution.</li>
                </ul>
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
