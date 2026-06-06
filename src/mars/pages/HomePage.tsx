import { useNavigate } from 'react-router-dom';
import { galleryItems } from '../data/gallery';

export function HomePage({ active }: { active: boolean }) {
  const navigate = useNavigate();
  const goTo = (path: string) => navigate(path);

  return (
    <>
    <div id="page-home" className={`page ${active ? 'active' : ''}`}>
      <section id="hero-section">
        <div className="hero-bg-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-left">
          <p className="hero-eyebrow" data-i18n="home.eyebrow">Endüstriyel Yüzey Kaplama</p>
          <h1 className="hero-h1" data-i18n-html="home.h1">GÜÇLÜ<br /><span>KAPLAMA.</span><br />ÜSTÜN KALİTE.</h1>
          <p className="hero-desc" data-i18n="home.desc">Mars Kaplama; cıvata, somun ve bağlantı elemanları için uluslararası standartlarda yüzey kaplama hizmeti sunar. 20 yıllık deneyim, ISO sertifikalı süreçler ve endüstriyel güvenilirlik.</p>
          <div className="hero-actions">
            <button className="btn btn-gold" onClick={() => goTo('/services')} data-i18n="home.btn_services" type="button">Hizmetlerimiz →</button>
            <button className="btn btn-outline" onClick={() => goTo('/contact')} data-i18n="home.btn_quote" type="button">Teklif İste</button>
          </div>
          <div className="hero-certs">
            <span className="cert-tag">ISO 9001:2015</span>
            <span className="cert-tag">ISO 14001:2015</span>
            <span className="cert-tag">RoHS</span>
            <span className="cert-tag">REACH</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="bolt-scene">
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>
            <div className="bolt-center">
              <svg className="bolt-svg" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="65,10 90,23 90,50 65,63 40,50 40,23" fill="none" stroke="#c8922a" strokeWidth="1.8"/>
                <polygon points="65,20 80,29 80,47 65,56 50,47 50,29" fill="rgba(200,146,42,0.07)" stroke="rgba(200,146,42,0.35)" strokeWidth="1"/>
                <rect x="56" y="63" width="18" height="46" fill="none" stroke="#c8922a" strokeWidth="1.8"/>
                <line x1="56" y1="72" x2="74" y2="72" stroke="rgba(200,146,42,.4)" strokeWidth="1"/>
                <line x1="56" y1="79" x2="74" y2="79" stroke="rgba(200,146,42,.4)" strokeWidth="1"/>
                <line x1="56" y1="86" x2="74" y2="86" stroke="rgba(200,146,42,.4)" strokeWidth="1"/>
                <line x1="56" y1="93" x2="74" y2="93" stroke="rgba(200,146,42,.4)" strokeWidth="1"/>
                <line x1="56" y1="100" x2="74" y2="100" stroke="rgba(200,146,42,.4)" strokeWidth="1"/>
                <rect x="50" y="62" width="30" height="5" rx="1" fill="none" stroke="rgba(200,146,42,.55)" strokeWidth="1.4"/>
                <polygon points="56,109 74,109 68,120 62,120" fill="none" stroke="#c8922a" strokeWidth="1.8"/>
                <circle cx="65" cy="37" r="6" fill="none" stroke="rgba(200,146,42,.5)" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    
      <div className="marquee-wrap">
        <div className="marquee-track" id="marquee-track">
          <span data-i18n="marquee.zinc">Elektrolitik Çinko Kaplama</span><span data-i18n="marquee.phosphate">Fosfat Kaplama</span>
          <span data-i18n="marquee.nickel">Nikel Kaplama</span><span data-i18n="marquee.geomet">Geomet® Kaplama</span>
          <span data-i18n="marquee.lamel">Çinko Lamel Kaplama</span><span data-i18n="marquee.passivation">Passivation</span>
          <span data-i18n="marquee.paint">Toz Boya</span><span data-i18n="marquee.hydrogen">Hidrojen Gevrekliği Giderme</span>
          <span data-i18n="marquee.zinc">Elektrolitik Çinko Kaplama</span><span data-i18n="marquee.phosphate">Fosfat Kaplama</span>
          <span data-i18n="marquee.nickel">Nikel Kaplama</span><span data-i18n="marquee.geomet">Geomet® Kaplama</span>
          <span data-i18n="marquee.lamel">Çinko Lamel Kaplama</span><span data-i18n="marquee.passivation">Passivation</span>
          <span data-i18n="marquee.paint">Toz Boya</span><span data-i18n="marquee.hydrogen">Hidrojen Gevrekliği Giderme</span>
        </div>
      </div>
    
      <div className="stat-grid">
        <div className="stat-block reveal"><div className="stat-num">20<span className="stat-unit">+</span></div><div className="stat-lbl" data-i18n="stat.experience">Yıllık Deneyim</div></div>
        <div className="stat-block reveal reveal-d1"><div className="stat-num">500<span className="stat-unit">+</span></div><div className="stat-lbl" data-i18n="stat.clients">Aktif Müşteri</div></div>
        <div className="stat-block reveal reveal-d2"><div className="stat-num">10<span className="stat-unit">M+</span></div><div className="stat-lbl" data-i18n="stat.parts">Kaplanan Parça / Yıl</div></div>
        <div className="stat-block reveal reveal-d3"><div className="stat-num">11</div><div className="stat-lbl" data-i18n="stat.types">Kaplama Çeşidi</div></div>
        <div className="stat-block reveal reveal-d4"><div className="stat-num">48<span className="stat-unit">h</span></div><div className="stat-lbl" data-i18n="stat.delivery">Maks. Teslimat Süresi</div></div>
      </div>
    
      <section className="section section-alt">
        <div className="reveal">
          <p className="eyebrow" data-i18n="home.services_eyebrow">Uzmanlık Alanlarımız</p>
          <h2 className="big-title" data-i18n="home.services_title">KAPLAMA HİZMETLERİ</h2>
          <p className="body-text" style={{ maxWidth: "560px", marginBottom: 0 }} data-i18n="home.services_sub">Otomotiv'den inşaata, beyaz eşyadan havacılığa — her sektörün ihtiyacına özel kaplama çözümleri.</p>
        </div>
        <div className="services-strip">
          <div className="strip-card reveal" onClick={() => goTo('/services')}><div className="strip-num">01</div><svg className="strip-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="20" cy="20" r="14"/><circle cx="20" cy="20" r="7"/><line x1="20" y1="6" x2="20" y2="13"/><line x1="20" y1="27" x2="20" y2="34"/></svg><div className="strip-name" data-i18n="svc.zinc">Elektrolitik Çinko Kaplama</div><p className="strip-desc" data-i18n="svc.zinc_d">Mükemmel korozyon direnci, ekonomik maliyet ve geniş uygulama aralığı ile en yaygın kullanılan kaplama türü.</p><div className="strip-arrow">→</div></div>
          <div className="strip-card reveal reveal-d1" onClick={() => goTo('/services')}><div className="strip-num">02</div><svg className="strip-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="6" y="6" width="28" height="28" rx="2"/><path d="M13 20 L18 25 L27 15"/></svg><div className="strip-name" data-i18n="svc.lamel">Çinko Lamel Kaplama</div><p className="strip-desc" data-i18n="svc.lamel_d">Krom içermeyen, yüksek performanslı Geomet® teknolojisiyle otomotiv ana sanayi kalitesi.</p><div className="strip-arrow">→</div></div>
          <div className="strip-card reveal reveal-d2" onClick={() => goTo('/services')}><div className="strip-num">03</div><svg className="strip-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 34 L20 6 L34 34"/><line x1="11" y1="24" x2="29" y2="24"/></svg><div className="strip-name" data-i18n="svc.phosphate">Fosfat Kaplama</div><p className="strip-desc" data-i18n="svc.phosphate_d">Mangan, çinko ve demir fosfat çeşitleriyle yüzey hazırlığı ve korozyon koruması.</p><div className="strip-arrow">→</div></div>
          <div className="strip-card reveal reveal-d3" onClick={() => goTo('/services')}><div className="strip-num">04</div><svg className="strip-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="20" cy="20" r="13"/><path d="M13 20 Q16 13 20 20 Q24 27 27 20"/></svg><div className="strip-name" data-i18n="svc.znni">Elektrolitik Çinko-Nikel</div><p className="strip-desc" data-i18n="svc.znni_d">%12–15 nikel içeriğiyle üstün korozyon ve ısı direnci. Otomotiv sektörünün tercihi.</p><div className="strip-arrow">→</div></div>
          <div className="strip-card reveal reveal-d4" onClick={() => goTo('/services')}><div className="strip-num">05</div><svg className="strip-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M8 32 L32 32 M20 32 L20 8 M10 18 Q15 10 20 18 Q25 26 30 18"/></svg><div className="strip-name" data-i18n="svc.paint">Toz & Yaş Boya</div><p className="strip-desc" data-i18n="svc.paint_d">Elektrostatik toz boya ve yaş boya. Geniş RAL renk skalasıyla estetik ve koruyucu çözüm.</p><div className="strip-arrow">→</div></div>
          <div className="strip-card reveal" onClick={() => goTo('/services')}><div className="strip-num">06</div><svg className="strip-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="8" y="16" width="24" height="16" rx="2"/><path d="M13 16 V12 Q20 4 27 12 V16"/><circle cx="20" cy="24" r="4"/></svg><div className="strip-name" data-i18n="svc.special">Özel & Katma Değerli</div><p className="strip-desc" data-i18n="svc.special_d">Hidrojen gevrekliği giderme, teknik temizlik, diş maskeleme ve plastik patch uygulamaları.</p><div className="strip-arrow">→</div></div>
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}><button className="btn btn-outline" onClick={() => goTo('/services')} data-i18n="home.all_services" type="button">Tüm Kaplama Çeşitlerimiz →</button></div>
      </section>
    
      <div className="about-split">
        <div className="about-content">
          <div className="reveal">
            <p className="eyebrow" data-i18n="home.about_eyebrow">Hakkımızda</p>
            <h2 className="big-title" data-i18n="home.about_title">20 YILLIK TECRÜBE</h2>
            <p className="body-text" style={{ marginBottom: "1.5rem" }} data-i18n="home.about_p1">Mars Kaplama, 2004 yılında Manisa'da kurulmuş; bugün yüzlerce ulusal ve uluslararası müşteriye hizmet veren köklü bir yüzey kaplama firmasıdır.</p>
            <p className="body-text" style={{ marginBottom: "2.2rem" }} data-i18n="home.about_p2">Tam otomatik kaplama hatları, modern laboratuvar altyapısı ve 180'i aşkın uzman kadrosuyla yılda 50 milyonu aşkın parça kaplama kapasitesine sahibiz.</p>
            <button className="btn btn-gold btn-sm" onClick={() => goTo('/about')} data-i18n="home.learn_more" type="button">Bizi Daha İyi Tanıyın →</button>
          </div>
        </div>
        <div className="about-panel">
          <div className="panel-spec reveal"><span className="panel-spec-lbl" data-i18n="spec.founded">Kuruluş Yılı</span><span className="panel-spec-val">2004</span></div>
          <div className="panel-spec reveal reveal-d1"><span className="panel-spec-lbl" data-i18n="spec.area">Üretim Alanı</span><span className="panel-spec-val">12.000 m²</span></div>
          <div className="panel-spec reveal reveal-d2"><span className="panel-spec-lbl" data-i18n="spec.employees">Çalışan Sayısı</span><span className="panel-spec-val">180+</span></div>
          <div className="panel-spec reveal reveal-d3"><span className="panel-spec-lbl" data-i18n="spec.capacity">Yıllık Kapasite</span><span className="panel-spec-val">50M Parça</span></div>
          <div className="panel-spec reveal reveal-d4"><span className="panel-spec-lbl" data-i18n="spec.sectors">Hizmet Sektörü</span><span className="panel-spec-val">12+</span></div>
        </div>
      </div>
    
      <section className="section section-alt">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }} className="reveal">
          <p className="eyebrow" style={{ justifyContent: "center" }} data-i18n="process.eyebrow">Nasıl Çalışırız</p>
          <h2 className="big-title" data-i18n="process.title">ÜRETİM SÜRECİ</h2>
          <p className="body-text" data-i18n="process.sub">Talebi aldığımız andan teslimat anına kadar her adım belgelenmiş kalite güvencesiyle yönetilir.</p>
        </div>
        <div className="process-row">
          <div className="proc-step reveal"><div className="proc-n">01</div><div className="proc-title" data-i18n="proc.s1">Talep & Analiz</div><p className="proc-desc" data-i18n="proc.s1d">Teknik gereksinimler, malzeme ve standartlar belirlenir.</p></div>
          <div className="proc-step reveal reveal-d1"><div className="proc-n">02</div><div className="proc-title" data-i18n="proc.s2">Yüzey Hazırlık</div><p className="proc-desc" data-i18n="proc.s2d">Yağ alma, asitleme ve aktivasyon ile optimum adhesyon.</p></div>
          <div className="proc-step reveal reveal-d2"><div className="proc-n">03</div><div className="proc-title" data-i18n="proc.s3">Kaplama</div><p className="proc-desc" data-i18n="proc.s3d">Kontrollü parametrelerle talep edilen kaplama uygulanır.</p></div>
          <div className="proc-step reveal reveal-d3"><div className="proc-n">04</div><div className="proc-title" data-i18n="proc.s4">Kalite Kontrol</div><p className="proc-desc" data-i18n="proc.s4d">XRF, tuz spreyi ve görsel muayene ile tam onay.</p></div>
          <div className="proc-step reveal reveal-d4"><div className="proc-n">05</div><div className="proc-title" data-i18n="proc.s5">Paket & Teslimat</div><p className="proc-desc" data-i18n="proc.s5d">Belgelendirme, güvenli ambalaj ve zamanında teslimat.</p></div>
        </div>
      </section>
    
      <section className="section">
        <div className="reveal"><p className="eyebrow" data-i18n="sectors.eyebrow">Hizmet Alanlarımız</p><h2 className="big-title" data-i18n="sectors.title">SEKTÖRLER</h2></div>
        <div className="sectors-grid">
          <div className="sector-card reveal"><div className="sector-bg-n">01</div><svg className="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M19 17H5a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2z"/><path d="M3 11h18M8 7V5M16 7V5"/></svg><div className="sector-name" data-i18n="sector.auto">Otomotiv</div></div>
          <div className="sector-card reveal reveal-d1"><div className="sector-bg-n">02</div><svg className="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg><div className="sector-name" data-i18n="sector.construction">İnşaat</div></div>
          <div className="sector-card reveal reveal-d2"><div className="sector-bg-n">03</div><svg className="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 12h10M12 7v10"/></svg><div className="sector-name" data-i18n="sector.machinery">Makine İmalat</div></div>
          <div className="sector-card reveal reveal-d3"><div className="sector-bg-n">04</div><svg className="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg><div className="sector-name" data-i18n="sector.electrical">Elektrik & Elektronik</div></div>
          <div className="sector-card reveal reveal-d4"><div className="sector-bg-n">05</div><svg className="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg><div className="sector-name" data-i18n="sector.aviation">Havacılık</div></div>
          <div className="sector-card reveal"><div className="sector-bg-n">06</div><svg className="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg><div className="sector-name" data-i18n="sector.appliance">Beyaz Eşya</div></div>
          <div className="sector-card reveal reveal-d1"><div className="sector-bg-n">07</div><svg className="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20"/></svg><div className="sector-name" data-i18n="sector.marine">Denizcilik</div></div>
          <div className="sector-card reveal reveal-d2"><div className="sector-bg-n">08</div><svg className="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg><div className="sector-name" data-i18n="sector.energy">Enerji & Altyapı</div></div>
        </div>
      </section>
    
      <section className="section section-alt">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }} className="reveal">
          <div><p className="eyebrow" data-i18n="gallery.eyebrow">Referans Görseller</p><h2 className="big-title" style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)" }} data-i18n="gallery.title">KAPLAMA GALERİSİ</h2></div>
          <button className="btn btn-outline" onClick={() => goTo('/gallery')} data-i18n="gallery.see_all" type="button">Tüm Galeriyi Gör →</button>
        </div>
        <div id="home-gallery-preview" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }}>
          {galleryItems.slice(0, 4).map((item) => (
            <button
              className="home-gallery-preview-item"
              key={item.id}
              onClick={() => goTo('/gallery')}
              type="button"
            >
              <img src={item.src} alt={item.title_tr} loading="lazy" />
              <div>
                <span>{item.title_tr}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
    
    {/* ═══════════════ ABOUT ═══════════════ */}
    </>
  );
}
