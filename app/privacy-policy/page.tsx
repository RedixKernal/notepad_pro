"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("privacy");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          if (entry.target.id) {
            setActiveSection(entry.target.id);
          }
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: "-100px 0px -400px 0px"
    });

    const revealElements = document.querySelectorAll(".reveal-section");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar" style={{ background: 'var(--bg-dark)' }}>
        <div className="container" style={{ maxWidth: '100%', padding: '0 5%' }}>
          <Link href="/" className="navbar-logo">
            <Image src="/app_icon.png" alt="Notepad_Pro Icon" width={28} height={28} className="logo-icon-img" />
            Notepad_Pro
          </Link>
          <ul className="navbar-links">
           <li><Link href="/privacy-policy">Privacy & Terms</Link></li>
            <li><Link href="/downloads">Download</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Header */}
      <section style={{ 
        padding: '160px 5% 80px', 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', 
        color: '#fff', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(138,43,226,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }}></div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '16px', letterSpacing: '-0.02em' }}>Legal & Privacy Center</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px', lineHeight: '1.6' }}>
            We believe in complete transparency. Learn how we protect your data, handle AI interactions, and the terms of using Notepad Pro.
          </p>
          <div style={{ marginTop: '24px', display: 'inline-block', padding: '8px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.9rem', backdropFilter: 'blur(10px)' }}>
            <strong>Last Updated:</strong> June 9, 2026
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar Layout */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '20px 20px', minHeight: '100vh' }}>
        <div
        //  style={{ 
        //   maxWidth: '1400px', 
        //   margin: '0 auto', 
        //   display: 'flex', 
        //   gap: '60px',
        //   alignItems: 'flex-start'
        // }}
        >
          
          {/* Sticky Sidebar Navigation */}
         

          {/* Document Content */}
          <div style={{ 
            flex: '1', 
            background: 'var(--bg-primary)', 
            padding: '20px', 
            borderRadius: '14px', 
            // boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
            // border: '1px solid var(--border-color)',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'var(--text-secondary)'
          }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--text-primary)' }}>
              Welcome to Notepad Pro. We are committed to protecting your privacy and ensuring a transparent, secure experience. This document outlines our Privacy Policy and Terms and Conditions. By using our application, you agree to the terms described herein.
            </p>

            <div id="privacy" className="reveal-section" style={{ transition: 'opacity 0.5s, transform 0.5s', paddingBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(138,43,226,0.1)', color: '#8A2BE2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', margin: 0 }}>Part 1: Privacy Policy</h2>
              </div>
              
              <p>This Privacy Policy explains how Notepad Pro (&quot;Application,&quot; &quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot;) collects, uses, and safeguards your information. This policy is designed to comply with the privacy requirements of the applicable privacy laws.</p>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#4169E1' }}>1.</span> Data Collection and Local Storage
              </h3>
              <p>Notepad Pro is primarily a local application designed to run on your Windows device.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '24px', marginBottom: '24px' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)', transition: 'transform 0.2s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '12px', fontSize: '1.15rem' }}>📁 Files and Notes</h4>
                  <p style={{ margin: 0, fontSize: '1rem' }}>All notes, documents, and text files created within the Application are stored locally on your device. We do not transmit, upload, collect, or store your files on any external servers.</p>
                </div>
                <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)', transition: 'transform 0.2s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '12px', fontSize: '1.15rem' }}>⚙️ Application Settings</h4>
                  <p style={{ margin: 0, fontSize: '1rem' }}>Your preferences, including theme choices, window layouts, and API keys, are stored locally on your device.</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#4169E1' }}>2.</span> Analytics and Telemetry
              </h3>
              <p>We do not collect personal usage data, telemetry, or crash reports. Notepad Pro does not track your behavior or monitor how you use the Application.</p>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#4169E1' }}>3.</span> Children&apos;s Privacy
              </h3>
              <p>Our Application does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.</p>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#4169E1' }}>4.</span> Security of Your Data
              </h3>
              <p>Since all personal data and files are stored locally on your device, the security of your information primarily depends on the security measures you have implemented on your operating system (e.g., Windows BitLocker, user passwords, and antivirus software).</p>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#4169E1' }}>5.</span> Changes to this Privacy Policy
              </h3>
              <p>We may update our Privacy Policy from time to time. Changes will be reflected in the website. Your continued use of the Application after changes are published constitutes your acceptance of the revised policy.</p>
            </div>

            <hr style={{ border: 'none', borderTop: '2px dashed var(--border-color)', margin: '20px 0 60px' }} />

            <div id="terms" className="reveal-section" style={{ transition: 'opacity 0.5s, transform 0.5s', paddingBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(65, 105, 225, 0.1)', color: '#4169E1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', margin: 0 }}>Part 2: Terms and Conditions</h2>
              </div>
              
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8A2BE2' }}>1.</span> Acceptance of Terms
              </h3>
              <p>By downloading, installing, or using Notepad Pro, you agree to be bound by these Terms and Conditions. If you do not agree, do not use the Application.</p>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8A2BE2' }}>2.</span> License to Use
              </h3>
              <p>We grant you a personal, non-exclusive, non-transferable, limited license to install and use the Application for personal or commercial purposes in accordance with these Terms.</p>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8A2BE2' }}>3.</span> User Responsibilities
              </h3>
              <div style={{ background: 'rgba(255, 69, 58, 0.05)', borderLeft: '4px solid #FF453A', padding: '24px', borderRadius: '0 8px 8px 0', marginTop: '20px', marginBottom: '20px' }}>
                <ul style={{ paddingLeft: '24px', margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-primary)' }}>
                  <li><strong>API Keys:</strong> You are solely responsible for acquiring, managing, and securing the API keys used with the AI Assistant feature. You are responsible for any charges or usage limits incurred through your API provider.</li>
                  <li><strong>Content:</strong> You are responsible for the content you create, edit, and transmit using the Application. Do not use the Application for unlawful purposes.</li>
                </ul>
              </div>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8A2BE2' }}>4.</span> Intellectual Property
              </h3>
              <p>The Application, including its original code, design, graphics, and user interface, is the intellectual property of the developers of Notepad Pro. You may not modify, reverse engineer, or distribute the Application without explicit permission.</p>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8A2BE2' }}>5.</span> Disclaimer of Warranties & Limitation of Liability
              </h3>
              <p>Notepad Pro is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no warranties, expressed or implied, regarding the Application&apos;s reliability, accuracy, or suitability for a particular purpose. We do not guarantee that the Application will be error-free or uninterrupted.</p>
              <p style={{ marginTop: '16px' }}>To the maximum extent permitted by applicable law, in no event shall the developers of Notepad Pro be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising out of your use or inability to use the Application.</p>
            </div>

            <hr style={{ border: 'none', borderTop: '2px dashed var(--border-color)', margin: '20px 0 60px' }} />

            <div id="ai" className="reveal-section" style={{ transition: 'opacity 0.5s, transform 0.5s', paddingBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                </div>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', margin: 0 }}>AI & Third-Party Services</h2>
              </div>
              
              <p>Notepad Pro includes an optional AI Assistant feature that allows you to interact with large language models.</p>
              
              <div style={{ marginTop: '32px', background: '#f8fafc', padding: '40px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ color: '#0f172a', fontSize: '1.3rem', marginBottom: '20px' }}>How Your Data is Handled</h4>
                <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '16px', color: '#334155' }}>
                  <li><strong>Local API Key Storage:</strong> To use the AI Assistant, you must provide your own API key (e.g., OpenAI, Google Gemini, DeepSeek, or OpenRouter). This key is stored securely and locally on your device and is never transmitted to us.</li>
                  <li><strong>Direct Transmission:</strong> When you use the AI Assistant, the text you enter in the chat prompt, along with any necessary context, is transmitted directly from your device to the third-party AI provider you have configured. We do not intercept, log, or store these communications.</li>
                  <li><strong>Artificial Intelligence Disclaimer:</strong> The AI Assistant feature relies on third-party services. We do not guarantee the accuracy, reliability, or appropriateness of the responses generated by the AI. You should verify any critical information provided by the AI Assistant.</li>
                </ul>
                
                <h4 style={{ color: '#0f172a', fontSize: '1.3rem', marginTop: '40px', marginBottom: '20px' }}>Third-Party Privacy Policies</h4>
                <p style={{ color: '#334155', marginBottom: '24px' }}>The data sent to these AI providers is governed by their respective privacy policies. We encourage you to review the privacy policies of the AI service you choose to use:</p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <span style={{ padding: '10px 20px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '30px', fontSize: '1rem', color: '#475569', fontWeight: '500', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>OpenAI</span>
                  <span style={{ padding: '10px 20px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '30px', fontSize: '1rem', color: '#475569', fontWeight: '500', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>Google (Gemini)</span>
                  <span style={{ padding: '10px 20px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '30px', fontSize: '1rem', color: '#475569', fontWeight: '500', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>OpenRouter</span>
                  <span style={{ padding: '10px 20px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '30px', fontSize: '1rem', color: '#475569', fontWeight: '500', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>DeepSeek</span>
                </div>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '2px dashed var(--border-color)', margin: '20px 0 60px' }} />

            <div id="contact" className="reveal-section" style={{ transition: 'opacity 0.5s, transform 0.5s', paddingBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', margin: 0 }}>Contact Information</h2>
              </div>
              
              <p>If you have any questions or concerns regarding this Privacy Policy or these Terms and Conditions, please reach out to us. We are here to help.</p>
              
              <div style={{ display: 'flex', gap: '24px', marginTop: '40px', flexWrap: 'wrap' }}>
                <a href="mailto:ravipanthula18@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 32px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500', transition: 'all 0.3s ease', flex: '1', minWidth: '300px' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#4169E1'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(65, 105, 225, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ padding: '10px', background: '#fff', borderRadius: '10px', display: 'flex' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4169E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Email Us</div>
                    <div style={{ fontSize: '1.1rem' }}>ravipanthula18@gmail.com</div>
                  </div>
                </a>
                <a href="https://notepad-pro-eight.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 32px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500', transition: 'all 0.3s ease', flex: '1', minWidth: '300px' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#8A2BE2'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(138, 43, 226, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ padding: '10px', background: '#fff', borderRadius: '10px', display: 'flex' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Visit Us</div>
                    <div style={{ fontSize: '1.1rem' }}>Official Website</div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ background: 'var(--bg-dark)', padding: '80px 5% 40px', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.4rem', fontWeight: '700' }}>
              <Image src="/app_icon.png" alt="Notepad_Pro Icon" width={32} height={32} style={{ borderRadius: '6px' }} />
              Notepad_Pro
            </div>
            <p style={{ color: '#a0aec0', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7', fontSize: '1.1rem' }}>
              A free, open-source, lightweight notepad designed for maximum productivity and seamless execution.
            </p>
            <div style={{ display: 'flex', gap: '32px', marginTop: '24px' }}>
              <Link href="/#features" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s', fontWeight: '500' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>Features</Link>
              <Link href="/#shortcuts" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s', fontWeight: '500' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>Shortcuts</Link>
              <Link href="/downloads" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s', fontWeight: '500' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>Download</Link>
              <Link href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600' }}>Privacy & Terms</Link>
            </div>
            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '40px 0 20px' }}></div>
            <p style={{ color: '#718096', fontSize: '0.95rem' }}>&copy; {new Date().getFullYear()} Redix Systems. Designed and Developed by Redix Systems.</p>
          </div>
        </div>
      </footer>
      
      {/* Basic responsive styles for sidebar via global style insertion */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .desktop-sidebar {
            display: none !important;
          }
        }
        @media (min-width: 993px) {
          .desktop-sidebar {
            display: block !important;
          }
        }
      `}} />
    </>
  );
}
