import React, { useEffect, useState } from 'react';
import '../pages/css/Footer_Theme.css';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer_Modern = ({
  logo,
  footercontent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  socialLinks = {},
  servicesLinks = {},
  companyLinks = {},
  helpfulLinks = {},
  legalLinks = {},
  copyrightText = '© 2022. Company Name. All rights reserved.',
  theme = 'dark', 
  onThemeToggle,
}) => {
  const [isDark, setIsDark] = useState(theme === 'dark');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const rect = footer.getBoundingClientRect();
      setShowBackToTop(rect.top < window.innerHeight && rect.bottom > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    onThemeToggle && onThemeToggle(!isDark ? 'dark' : 'light');
  };

  return (
    <footer
      className={`relative ${isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-300 text-gray-700'}`}
    >
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            {logo && (
              <div className={`${isDark ? 'text-teal-300' : 'text-teal-600'}`}>
                <img src={logo} alt="Logo" className="h-16 w-auto" />
              </div>
            )}
            <p className="mt-4 max-w-xs">{footercontent}</p>

            <ul className="mt-8 flex flex-wrap gap-4">
              {Object.entries(socialLinks).map(([platform, url]) => (
                <li key={platform}>
                  <a
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                    className={`transition-transform duration-300 transform hover:scale-110 ${
                      isDark ? 'hover:text-gray-300' : 'hover:text-gray-600'
                    } glow-effect`}
                  >
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {[
              { title: 'Services', links: servicesLinks },
              { title: 'Company', links: companyLinks },
              { title: 'Helpful Links', links: helpfulLinks },
              { title: 'Legal', links: legalLinks },
            ].map((section, index) => (
              <div key={index}>
                <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {section.title}
                </p>
                <ul className="mt-6 space-y-4 text-sm">
                  {Object.entries(section.links).map(([link, url]) => (
                    <li key={link}>
                      <a
                        href={url}
                        className={`hover:text-gray-400 transition ${
                          isDark ? 'hover:opacity-75' : 'hover:opacity-90'
                        } glow-effect`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs">{copyrightText}</p>
      </div>

      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${
            isDark ? 'bg-gray-800 text-teal-300' : 'bg-gray-200 text-teal-600'
          } hover:bg-teal-500 hover:text-white`}
        >
          Toggle Theme
        </button>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 p-3 rounded-full ${
            isDark ? 'bg-teal-500 text-white' : 'bg-teal-300 text-gray-900'
          } hover:bg-teal-400 glow-effect`}
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer_Modern;
