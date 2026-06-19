"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const downloads = [
  {
    name: "Notepad_Pro-2.0.0.msix",
    link: "https://get.microsoft.com/installer/download/9P3BZ03WV8WG?hl=en-us&gl=us&ocid=pdpshare&referrer=storeforweb",
    version: "v2.0.0",
    architecture: "Windows (64-bit)",
    date: "Latest"
  },
  // {
  //   name: "Notepad_Pro-2.0.0.dmg",
  //   link: "https://github.com/RedixKernal/notepad_pro_app/releases/download/v2.0.0/Notepad_Pro-2.0.0.dmg",
  //   version: "v2.0.0",
  //   architecture: "macOS",
  //   date: "Latest"
  // },
  // {
  //   name: "Notepad-pro_2.0.0-1_amd64.deb",
  //   link: "https://github.com/RedixKernal/notepad_pro_app/releases/download/v2.0.0/notepad-pro_2.0.0-1_amd64.deb",
  //   version: "v2.0.0",
  //   architecture: "Linux (Debian/Ubuntu)",
  //   date: "Latest"
  // },
  {
    name: "Notepad_Pro-1.1.0.msi",
    link: "https://github.com/RedixKernal/notepad_pro_app/releases/download/v1.1.0/Notepad_Pro-1.1.0.msi",
    version: "v1.1.0",
    architecture: "Windows (64-bit)",
    date: "Previous"
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

      {/* Downloads Section */}
      <section className="shortcuts-section" style={{ minHeight: 'calc(100vh - 100px)', paddingTop: '120px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Download Versions</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Choose a version of Notepad_Pro to download.</p>
          </div>

          {[{
            os: 'Windows',
            color: '#0078D6',
            iconClass: 'win',
            viewBox: '0 0 24 24',
            path: <path d="M0,3.449L9.75,2.1v9.451H0m10.949-9.602L24,0v11.4H10.949M0,12.6h9.75v9.451L0,20.699M10.949,12.6H24V24l-12.951-1.801" />
          }, {
            os: 'macOS',
            color: '#333333',
            iconClass: 'mac',
            viewBox: '0 0 384 512',
            path: <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 24 184.8 8 277.3c-23.5 125.7 65.3 221.7 114.7 221.7 23.5 0 42-12.2 73-12.2 30.5 0 46 12.2 74 12.2 46.5 0 119.5-84.3 119.5-84.3-39-16.5-69.6-60.6-70.5-146zM245.5 83.2C272.5 53.9 285.4 12.8 281 0c-25 2.5-62.5 17.6-88.5 45.4-23.5 24.5-38.5 65.3-33.5 105 28.5 2.5 62-15.7 86.5-67.2z" />
          }, {
            os: 'Linux',
            color: '#E95420',
            iconClass: 'lin',
            viewBox: '0 0 448 512',
            path: <path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.7.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.5zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 45.9-23.5 61.1-38.5 78.4-14 16-25.2 32.7-32.9 54.7-6.2 17.5-8.2 36.3-5.5 54.5-2.6.8-5.3 1.8-8 3-7.5 3.3-14 8.7-18.7 15.6-4.9 6.9-8.1 16-9.7 25.1-1.4 8.6-2.1 17.6-2.1 26.6 0 15.6 4.7 32.4 13.9 45.4 9 12.8 22.8 22.4 38.2 26 15.1 3.5 31.4 1.8 45.7-4.1 14.5-6 26.9-16.5 34.6-29.6 19.3 6.9 41.5 10.6 65.6 10.6 24 0 46.2-3.7 65.4-10.6 7.7 13.1 20.1 23.6 34.6 29.6 14.3 5.9 30.6 7.6 45.7 4.1 15.4-3.6 29.2-13.2 38.2-26 9.2-13 13.9-29.8 13.9-45.4 0-9-.7-18-2.1-26.6-1.6-9.1-4.8-18.2-9.7-25.1-4.7-6.9-11.2-12.3-18.7-15.6zM130.4 466.7c-9 2-18.4 1-26.4-3-8.1-4-14.7-10.6-18.7-18.7-4-8-5-17.5-3-26.4 1.8-8.4 6.7-15.6 13.4-20.7 6.9-5.1 15.2-8.3 23.9-8.3 8.7 0 17 3.2 23.9 8.3 6.7 5.1 11.6 12.3 13.4 20.7 2 9-1 18.4-5 26.4-4 8.1-10.6 14.7-18.7 18.7-8 4-17.4 5-26.4 3zm252.8-3c-8 4-17.4 5-26.4 3-9-2-18.4-1-26.4-3-8.1-4-14.7-10.6-18.7-18.7-4-8-5-17.5-3-26.4 1.8-8.4 6.7-15.6 13.4-20.7 6.9-5.1 15.2-8.3 23.9-8.3 8.7 0 17 3.2 23.9 8.3 6.7 5.1 11.6 12.3 13.4 20.7 2 9-1 18.4-5 26.4-4 8.1-10.6 14.7-18.7 18.7zm-143-207.2c-15.8-14.5-35-23.7-55.8-26.4-5.3-.7-10.6-1-15.8-1-16.7 0-33 4-48 11.7-10.6 5.4-20.5 12.5-29.2 20.9-12.2 11.6-21.6 25.6-27.9 41-6.1 15.1-9.5 31.4-10 48.1-.5 16.7 2.1 33.3 7.6 49 5.3 15.3 13.1 29.5 23 41.8 9.7 12.1 21.6 22.3 35 30.1 13.1 7.6 27.6 12.8 42.6 15.4 15 2.5 30.3 2.8 45.4.8 15-2 29.5-6.5 42.8-13.3 13-6.6 24.8-15.1 34.8-25.2 9.8-9.9 17.8-21.4 23.7-34.2 5.7-12.6 9.4-26.2 10.9-40.1 1.4-13.9 1-27.9-1.2-41.6-2.2-13.6-6.4-26.8-12.4-39-5.8-11.9-13.4-22.9-22.5-32.5-9.1-9.5-19.6-17.7-31.1-24z" />
          }].map((platform) => (
            <div key={platform.os} className="os-download-section reveal delay-1" style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: platform.color, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg style={{ width: '28px', height: '28px' }} xmlns="http://www.w3.org/2000/svg" viewBox={platform.viewBox} fill="currentColor">
                  {platform.path}
                </svg>
                {platform.os} Downloads
              </h3>
              
              <div className="downloads-list">
                {downloads.filter(dl => dl.architecture.includes(platform.os)).map((dl, index) => (
                  <div key={`${platform.os}-${index}`} className="download-row-card">
                    <div className="dl-icon-col">
                      <svg className={`os-icon ${platform.iconClass}`} xmlns="http://www.w3.org/2000/svg" viewBox={platform.viewBox} fill="currentColor">
                        {platform.path}
                      </svg>
                    </div>

                    <div className="dl-info-col">
                      <h4 className="dl-filename">{dl.name}</h4>
                      <span className="dl-arch">{dl.architecture}</span>
                    </div>

                    <div className="dl-version-col">
                      <span className="dl-version-badge">{dl.version}</span>
                      <span className={`dl-status-badge ${dl.date === 'Latest' ? 'status-latest' : 'status-previous'}`}>
                        {dl.date}
                      </span>
                    </div>

                    <div className="dl-action-col">
                      <a href={dl.link} className={`btn-primary dl-btn ${dl.date !== 'Latest' ? 'btn-secondary' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="changelog-section reveal delay-2" style={{ marginTop: '60px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>What's New in v2.0.0</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Detailed release notes for the latest version</p>
            </div>

            <div className="changelog-container">

              {/* All Platforms Section */}
              <div className="changelog-row">
                <div className="changelog-type">
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.3rem' }}>🌐</span> All Platforms
                  </h4>
                </div>
                <div className="changelog-content">
                  <ol>
                    <li><span className="rn-tag rn-tag-feature" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>New Feature</span> <strong>AI Assistant Enabled:</strong> Empower your research and development with our new AI integration. You can now ask anything about the current active tab's content, and the AI will use it as context to provide intelligent responses.</li>
                    <li><span className="rn-tag rn-tag-improve" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>Improvement</span> Fixed the auto-scroll flickering issue from top to bottom.</li>
                    <li><span className="rn-tag rn-tag-fix" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>Fix</span> Resolved auto-close bugs and improved dialog placement across the application.</li>
                    <li><span className="rn-tag rn-tag-fix" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>Fix</span> Eliminated zombie processes and hanging JVMs by ensuring all child processes are forcefully terminated upon closing the app.</li>
                    <li><span className="rn-tag rn-tag-fix" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>Fix</span> Fixed an issue where saved window dimensions (width and height) were ignored on startup, ensuring your workspace size is accurately restored.</li>
                  </ol>
                </div>
              </div>

              {/* Windows Section */}
              <div className="changelog-row">
                <div className="changelog-type">
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#0078D6', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.3rem' }}>🪟</span> Windows
                  </h4>
                </div>
                <div className="changelog-content">
                  <ol>
                    <li><span className="rn-tag rn-tag-improve" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>Improvement</span> Enhanced AI context processing speed specifically for Windows environments.</li>
                    <li><span className="rn-tag rn-tag-fix" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>Fix</span> Addressed minor UI rendering glitches on Windows 11.</li>
                    <li><span className="rn-tag rn-tag-fix" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>Fix</span> Resolved permission denied errors by ensuring AI audit logs are correctly saved to the user's local application data directory (MSIX Sandboxing Fix).</li>
                  </ol>
                </div>
              </div>

              {/* macOS Section */}
              <div className="changelog-row">
                <div className="changelog-type">
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#333333', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.3rem' }}>🍏</span> macOS
                  </h4>
                </div>
                <div className="changelog-content">
                  <ol>
                    <li><span className="rn-tag rn-tag-feature" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>New Feature</span> Native AI context menu integration for seamless macOS workflow.</li>
                    <li><span className="rn-tag rn-tag-fix" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>Fix</span> Enhanced memory management for large files on Apple Silicon (M1/M2/M3).</li>
                    <li><span className="rn-tag rn-tag-fix" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>Fix</span> Addressed visual inconsistencies in dark mode.</li>
                  </ol>
                </div>
              </div>

              {/* Linux Section */}
              <div className="changelog-row">
                <div className="changelog-type">
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#E95420', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.3rem' }}>🐧</span> Linux
                  </h4>
                </div>
                <div className="changelog-content">
                  <ol>
                    <li><span className="rn-tag rn-tag-improve" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>Improvement</span> Improved responsiveness for minimize and maximize window controls.</li>
                    <li><span className="rn-tag rn-tag-fix" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>Fix</span> Fixed the chat area resize issue to ensure fluid layout adjustments.</li>
                  </ol>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


    </>
  );
}
