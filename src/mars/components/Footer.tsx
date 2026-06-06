import { useNavigate } from 'react-router-dom';

const routes = {
  about: '/about',
  services: '/services',
  gallery: '/gallery',
  quality: '/quality',
  sustainability: '/sustainability',
  career: '/career',
  contact: '/contact',
} as const;

type FooterRoute = keyof typeof routes;

export function Footer() {
  const navigate = useNavigate();
  const goTo = (route: FooterRoute) => navigate(routes[route]);

  return (
    <>
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo-txt">MARS<em>.</em>KAPLAMA</div>
          <p className="footer-tagline" data-i18n="footer.tagline">Endüstriyel yüzey kaplama alanında 20 yıllık deneyim ve uluslararası kalite standartları.</p>
          <div className="footer-socials">
            <a href="#" className="social-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="#" className="social-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          </div>
        </div>
        <div>
          <div className="footer-col-title" data-i18n="footer.about">Hakkımızda</div>
          <div className="footer-links">
            <button onClick={() => goTo('about')} data-i18n="nav.whoweare" type="button">Biz Kimiz?</button>
            <button onClick={() => goTo('quality')} data-i18n="nav.quality" type="button">Kalite</button>
            <button onClick={() => goTo('sustainability')} data-i18n="nav.sustain" type="button">Sürdürülebilirlik</button>
            <button onClick={() => goTo('career')} data-i18n="nav.career" type="button">Kariyer</button>
          </div>
        </div>
        <div>
          <div className="footer-col-title" data-i18n="nav.services">Hizmetlerimiz</div>
          <div className="footer-links">
            <button onClick={() => goTo('services')} data-i18n="nav.coatingtypes" type="button">Kaplama Türleri</button>
            <button onClick={() => goTo('gallery')} data-i18n="nav.gallery" type="button">Galeri</button>
            <button onClick={() => goTo('contact')} data-i18n="nav.cta" type="button">Teklif Al</button>
          </div>
        </div>
        <div>
          <div className="footer-col-title" data-i18n="nav.contact">İletişim</div>
          <div className="footer-links">
            <a>Manisa OSB, 45030</a>
            <a href="tel:+902360000000">+90 236 000 00 00</a>
            <a href="mailto:info@marskaplama.com.tr">info@marskaplama.com.tr</a>
          </div>
          <div style={{ marginTop: "1.4rem" }}>
            <div className="footer-col-title" data-i18n="footer.newsletter">Bülten</div>
            <div className="footer-newsletter"><input className="nl-input" type="email" data-i18n-ph="footer.nl_ph" placeholder="E-posta adresiniz" /><button className="nl-btn" data-i18n="footer.subscribe">Abone Ol</button></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy" data-i18n="footer.copy">© 2025 Mars Kaplama San. ve Tic. Ltd. Şti. — Tüm hakları saklıdır.</div>
        <div className="footer-legal"><a data-i18n="footer.cookie">Çerez Politikası</a><a data-i18n="footer.terms">Kullanım Koşulları</a><a data-i18n="footer.kvkk">KVKK</a></div>
      </div>
    </footer>
    </>
  );
}
