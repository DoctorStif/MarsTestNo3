import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setMarsLanguage } from '../legacy';

const pageRoutes = {
  home: '/',
  about: '/about',
  services: '/services',
  gallery: '/gallery',
  quality: '/quality',
  sustainability: '/sustainability',
  career: '/career',
  contact: '/contact',
} as const;

type PageId = keyof typeof pageRoutes;
type Language = 'tr' | 'en' | 'de';

const languages: Record<Language, { flag: string; label: string; name: string }> = {
  tr: { flag: '🇹🇷', label: 'TR', name: 'Türkçe' },
  en: { flag: '🇬🇧', label: 'EN', name: 'English' },
  de: { flag: '🇩🇪', label: 'DE', name: 'Deutsch' },
};

const navItems: Array<{ id: PageId; label: string; i18n: string }> = [
  { id: 'gallery', label: 'Galeri', i18n: 'nav.gallery' },
  { id: 'quality', label: 'Kalite', i18n: 'nav.quality' },
  { id: 'sustainability', label: 'Sürdürülebilirlik', i18n: 'nav.sustain' },
  { id: 'career', label: 'Kariyer', i18n: 'nav.career' },
  { id: 'contact', label: 'İletişim', i18n: 'nav.contact' },
];

function routeToPage(pathname: string): PageId {
  const match = Object.entries(pageRoutes).find(([, route]) => route === pathname);
  return (match?.[0] as PageId | undefined) ?? 'home';
}

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const activePage = routeToPage(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('tr');

  const currentLanguage = languages[language];
  const mobileMenuClass = useMemo(
    () => (page: PageId) => `mobile-menu-link ${activePage === page ? 'active' : ''}`,
    [activePage],
  );

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight);
  }, [isLight]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  const goTo = (page: PageId) => {
    setIsMenuOpen(false);
    if (location.pathname === pageRoutes[page]) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate(pageRoutes[page]);
  };

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setIsLangOpen(false);
    setMarsLanguage(nextLanguage);
  };

  return (
    <>
      <div id="topbar">
        <div className="topbar-left">
          <a href="mailto:info@marskaplama.com.tr">info@marskaplama.com.tr</a>
          <a href="tel:+902360000000">+90 236 000 00 00</a>
        </div>
        <div className="topbar-right">
          <button
            className="theme-toggle"
            id="theme-btn"
            title="Toggle theme"
            aria-label="Toggle theme"
            onClick={() => setIsLight((value) => !value)}
          >
            <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
            <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>

          <div className={`lang-switcher ${isLangOpen ? 'open' : ''}`}>
            <button
              className="lang-btn"
              id="lang-current"
              onClick={() => setIsLangOpen((value) => !value)}
              type="button"
            >
              <span className="lang-flag" id="lang-flag">{currentLanguage.flag}</span>
              <span id="lang-label">{currentLanguage.label}</span>
              <span style={{ fontSize: '.6rem', opacity: '.6' }}>▾</span>
            </button>
            <div className="lang-dropdown" id="lang-dropdown">
              {(Object.keys(languages) as Language[]).map((lang) => (
                <button
                  className={`lang-option ${language === lang ? 'active' : ''}`}
                  data-lang={lang}
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  type="button"
                >
                  <span className="lang-flag-big">{languages[lang].flag}</span> {languages[lang].name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav id="nav">
        <button className="nav-logo" onClick={() => goTo('home')} type="button">
          MARS<em>.</em>KAPLAMA
        </button>
        <button
          className="nav-toggle"
          id="nav-toggle"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
          type="button"
        >
          <span></span><span></span><span></span>
        </button>
        <div className="nav-menu">
          <div className="nav-item">
            <button
              className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
              id="nav-about"
              onClick={() => goTo('about')}
              data-i18n="nav.about"
              type="button"
            >
              Hakkımızda
            </button>
            <div className="nav-dropdown">
              <button onClick={() => goTo('about')} data-i18n="nav.whoweare" type="button">Biz Kimiz?</button>
              <button onClick={() => goTo('quality')} data-i18n="nav.quality" type="button">Kalite</button>
              <button onClick={() => goTo('sustainability')} data-i18n="nav.sustain" type="button">Sürdürülebilirlik</button>
            </div>
          </div>
          <div className="nav-item">
            <button
              className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
              id="nav-services"
              onClick={() => goTo('services')}
              data-i18n="nav.services"
              type="button"
            >
              Hizmetlerimiz
            </button>
            <div className="nav-dropdown">
              <button onClick={() => goTo('services')} data-i18n="nav.coatingtypes" type="button">Kaplama Türleri</button>
              <button onClick={() => goTo('services')} data-i18n="nav.techspecs" type="button">Teknik Özellikler</button>
              <button onClick={() => goTo('services')} data-i18n="nav.sectors" type="button">Sektörler</button>
            </div>
          </div>
          {navItems.map((item) => (
            <button
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              id={`nav-${item.id}`}
              key={item.id}
              onClick={() => goTo(item.id)}
              data-i18n={item.i18n}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <button className="nav-cta" onClick={() => goTo('contact')} data-i18n="nav.cta" type="button">Teklif Al</button>
        </div>
      </nav>

      <div
        className="mobile-menu-backdrop"
        id="mobile-menu-backdrop"
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <aside className="mobile-menu" id="mobile-menu" aria-hidden={!isMenuOpen}>
        <div className="mobile-menu-head">
          <div className="mobile-menu-title">MARS<em>.</em>KAPLAMA</div>
          <button
            className="mobile-menu-close"
            id="mobile-menu-close"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          >
            ×
          </button>
        </div>
        <div className="mobile-menu-links">
          <button className={mobileMenuClass('about')} onClick={() => goTo('about')} data-i18n="nav.about" type="button">Hakkımızda</button>
          <button className={mobileMenuClass('services')} onClick={() => goTo('services')} data-i18n="nav.services" type="button">Hizmetlerimiz</button>
          <button className={mobileMenuClass('gallery')} onClick={() => goTo('gallery')} data-i18n="nav.gallery" type="button">Galeri</button>
          <button className={mobileMenuClass('quality')} onClick={() => goTo('quality')} data-i18n="nav.quality" type="button">Kalite</button>
          <button className={mobileMenuClass('sustainability')} onClick={() => goTo('sustainability')} data-i18n="nav.sustain" type="button">Sürdürülebilirlik</button>
          <button className={mobileMenuClass('career')} onClick={() => goTo('career')} data-i18n="nav.career" type="button">Kariyer</button>
          <button className={mobileMenuClass('contact')} onClick={() => goTo('contact')} data-i18n="nav.contact" type="button">İletişim</button>
        </div>
        <button className="nav-cta" onClick={() => goTo('contact')} data-i18n="nav.cta" type="button">Teklif Al</button>
      </aside>
    </>
  );
}
