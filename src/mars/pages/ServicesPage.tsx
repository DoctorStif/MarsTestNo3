export function ServicesPage({ active }: { active: boolean }) {
  return (
    <>
    <div id="page-services" className={`page ${active ? 'active' : ''}`}>
      <div className="ph-hero" id="ph-services">
        <div className="gh-bg-grid"></div><div className="gh-glow"></div>
        <div className="gh-left">
          <div className="breadcrumb" data-i18n-html="breadcrumb.services">Ana Sayfa / <em>Hizmetlerimiz</em></div>
          <p className="hero-eyebrow" data-i18n="gallery.page_eyebrow">Kaplama Süreci</p>
          <h1 className="gh-title" data-i18n="services.title">KAPLAMA HİZMETLERİ</h1>
          <p className="gh-sub" data-i18n="services.sub">11 farklı kaplama türü ile her sektöre ve teknik gereksinimlere uygun yüzey işlem çözümleri.</p>
          <div className="coating-stages" id="cs-services">
            <div className="cs-pill active" data-stage="0"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.0">Yağlı Cıvata</span></div>
            <div className="cs-pill" data-stage="1"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.1">Yağ Giderme</span></div>
            <div className="cs-pill" data-stage="2"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.2">Asitleme</span></div>
            <div className="cs-pill" data-stage="3"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.3">Kumlama</span></div>
            <div className="cs-pill" data-stage="4"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.4">Kaplama</span></div>
            <div className="cs-pill" data-stage="5"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.5">Bitmiş Ürün</span></div>
          </div>
          <div className="stage-desc-box"><div className="sdb-num" id="sdb-num-services">01</div><p className="sdb-text" id="sdb-text-services"></p></div>
        </div>
        <div className="gh-right">
          <canvas className="bolt-canvas" id="bolt-canvas-services" width="440" height="440"></canvas>
          <button className="replay-btn" id="replay-btn-services"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg></button>
        </div>
      </div>
      <section className="section">
        <div className="reveal"><p className="eyebrow" data-i18n="services.list_ey">Kaplama Çeşitlerimiz</p><h2 className="big-title" data-i18n="services.list_title">KAPLAMA TÜRLERİ</h2></div>
        <div className="coating-list">
          <div className="coating-card reveal"><div className="c-num">01</div><svg className="c-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="22" cy="22" r="16"/><circle cx="22" cy="22" r="8"/><line x1="22" y1="6" x2="22" y2="14"/><line x1="22" y1="30" x2="22" y2="38"/></svg><div className="c-name" data-i18n="svc.zinc">Elektrolitik Çinko Kaplama</div><p className="c-desc" data-i18n="svc.zinc_full">En yaygın kullanılan kaplama türü. Parlak, yarı parlak veya mat seçenekleriyle geniş uygulama aralığı. Kromat veya passivation ile desteklenebilir.</p><div className="c-tags"><span className="c-tag">5-25 μm</span><span className="c-tag">120-720h</span><span className="c-tag">ISO 4042</span><span className="c-tag">ASTM B633</span></div></div>
          <div className="coating-card reveal reveal-d1"><div className="c-num">02</div><svg className="c-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="22" cy="22" r="16"/><path d="M14 22 Q17 14 22 22 Q27 30 30 22"/><circle cx="22" cy="22" r="5"/></svg><div className="c-name" data-i18n="svc.znni">Elektrolitik Çinko-Nikel Kaplama</div><p className="c-desc" data-i18n="svc.znni_full">%12-15 nikel içeriğiyle üstün korozyon ve ısı direnci. Otomotiv egzoz sistemi ve fren bileşenlerinde tercih edilir.</p><div className="c-tags"><span className="c-tag">8-15 μm</span><span className="c-tag">720-1000h</span><span className="c-tag">VDA 235-105</span></div></div>
          <div className="coating-card reveal"><div className="c-num">03</div><svg className="c-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="8" y="8" width="28" height="28" rx="2"/><path d="M14 24 L19 29 L30 17"/></svg><div className="c-name" data-i18n="svc.phosphate">Fosfat Kaplama</div><p className="c-desc" data-i18n="svc.phosphate_full">Boya altı primer uygulaması ve korozyon koruması. Kaba ve ince kristal yapı seçenekleriyle farklı boya sistemlerine uyum sağlar.</p><div className="c-tags"><span className="c-tag">2-20 g/m²</span><span className="c-tag">DIN 50942</span></div></div>
          <div className="coating-card reveal reveal-d1"><div className="c-num">04</div><svg className="c-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M8 38 L22 6 L36 38"/><line x1="13" y1="27" x2="31" y2="27"/></svg><div className="c-name" data-i18n="svc.geomet">Çinko Lamel Kaplama (Geomet®)</div><p className="c-desc" data-i18n="svc.geomet_full">Krom içermeyen, çevre dostu teknoloji. Yüksek korozyon direnci ve ısı stabilitesiyle otomotiv OEM onaylı kaplama sistemi.</p><div className="c-tags"><span className="c-tag">8-20 μm</span><span className="c-tag">720-1500h</span><span className="c-tag">ISO 10683</span><span className="c-tag">RoHS</span></div></div>
          <div className="coating-card reveal"><div className="c-num">05</div><svg className="c-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="22" cy="14" r="8"/><rect x="14" y="26" width="16" height="12" rx="2"/><line x1="22" y1="22" x2="22" y2="26"/></svg><div className="c-name" data-i18n="svc.topcoat">Üstlak (Topcoat) Uygulamaları</div><p className="c-desc" data-i18n="svc.topcoat_full">Kaplama üzerine ek koruyucu katmanlar. Torque-tension özellikleri, yağlayıcı ve sürtünme katsayısı düzenleyici çözümler.</p><div className="c-tags"><span className="c-tag">µ: 0.08-0.16</span><span className="c-tag">VDA 235-204</span></div></div>
          <div className="coating-card reveal reveal-d1"><div className="c-num">06</div><svg className="c-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="10" y="18" width="24" height="18" rx="2"/><path d="M16 18 V13 Q22 5 28 13 V18"/><circle cx="22" cy="27" r="4"/></svg><div className="c-name" data-i18n="svc.paint">Toz / Yaş Boya</div><p className="c-desc" data-i18n="svc.paint_full">Elektrostatik toz boya ve ıslak boya sistemleri. RAL renk skalası ile dekoratif ve koruyucu çift fonksiyon.</p><div className="c-tags"><span className="c-tag">60-120 μm</span><span className="c-tag">RAL</span><span className="c-tag">EN 13438</span></div></div>
          <div className="coating-card reveal"><div className="c-num">07</div><svg className="c-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M22 6 L38 14 L38 22 L22 30 L6 22 L6 14 Z"/><circle cx="22" cy="18" r="4"/></svg><div className="c-name" data-i18n="svc.micro">Mikrokapsüllü Kilitli Boya</div><p className="c-desc" data-i18n="svc.micro_full">Cıvata ve somunlarda ikinci kez montaj sonrası sökülmeyi engelleyen mikrokapsüllü yapıştırıcı kaplama.</p><div className="c-tags"><span className="c-tag">ISO 2320</span><span className="c-tag">DIN 267-28</span></div></div>
          <div className="coating-card reveal reveal-d1"><div className="c-num">08</div><svg className="c-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="22" cy="22" r="16"/><path d="M15 22 L19 26 L29 16"/><circle cx="22" cy="22" r="8"/></svg><div className="c-name" data-i18n="svc.patch">Plastik Patch</div><p className="c-desc" data-i18n="svc.patch_full">Vidaların belirli bölgelerine uygulanan polimer patch ile self-locking özellik. Otomotiv ve elektronik için ideal.</p><div className="c-tags"><span className="c-tag">ISO 10513</span><span className="c-tag">Self-Locking</span></div></div>
          <div className="coating-card reveal"><div className="c-num">09</div><svg className="c-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M8 28 Q15 10 22 20 Q29 30 36 14"/><line x1="8" y1="38" x2="36" y2="38"/></svg><div className="c-name" data-i18n="svc.hydrogen">Hidrojen Gevrekliği Giderme</div><p className="c-desc" data-i18n="svc.hydrogen_full">Yüksek mukavemetli çelik parçaların kaplama sonrası hidrojen gevrekliğini gidermek için ısıl işlem (≥200°C, 8-24 saat).</p><div className="c-tags"><span className="c-tag">ISO 9588</span><span className="c-tag">ASTM F519</span><span className="c-tag">≥10.9</span></div></div>
          <div className="coating-card reveal reveal-d1"><div className="c-num">10</div><svg className="c-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="6" y="14" width="32" height="20" rx="2"/><line x1="14" y1="14" x2="14" y2="34"/><line x1="22" y1="14" x2="22" y2="34"/><line x1="30" y1="14" x2="30" y2="34"/></svg><div className="c-name" data-i18n="svc.clean">Teknik Temizlik</div><p className="c-desc" data-i18n="svc.clean_full">Kaplama sonrası partikül kirliliğinin ölçülmesi ve belirlenen limitlerin altına indirilmesi. Otomotiv cleanliness standartları.</p><div className="c-tags"><span className="c-tag">VDA 19</span><span className="c-tag">ISO 16232</span></div></div>
          <div className="coating-card reveal"><div className="c-num">11</div><svg className="c-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M10 34 L10 16 L22 8 L34 16 L34 34"/><line x1="16" y1="34" x2="16" y2="24"/><line x1="28" y1="34" x2="28" y2="24"/><line x1="16" y1="24" x2="28" y2="24"/></svg><div className="c-name" data-i18n="svc.mask">Diş Maskeleme</div><p className="c-desc" data-i18n="svc.mask_full">Kaplama sırasında vida dişlerinin korunması. Tolerans hassasiyeti gerektiren yüksek mukavemetli bağlantılar için.</p><div className="c-tags"><span className="c-tag">M3–M64</span><span className="c-tag">Yüksek Hassasiyet</span></div></div>
          <div className="coating-card reveal reveal-d1"><div className="c-num">+</div><svg className="c-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="22" cy="22" r="14"/><line x1="22" y1="14" x2="22" y2="30"/><line x1="14" y1="22" x2="30" y2="22"/></svg><div className="c-name" data-i18n="svc.custom">Özel Geliştirme</div><p className="c-desc" data-i18n="svc.custom_full">Ar-Ge ekibimizle müşteri özel proses geliştirme ve pilot uygulama hizmeti. Mevcut çözümlerin yeterli olmadığı durumlar için.</p><div className="c-tags"><span className="c-tag">Ar-Ge</span><span className="c-tag">Pilot Üretim</span></div></div>
        </div>
      </section>
      <div className="divider"></div>
      <section className="section section-alt">
        <div className="reveal"><p className="eyebrow" data-i18n="services.table_ey">Teknik Veriler</p><h2 className="big-title" style={{ fontSize: "clamp(2rem,3.5vw,3.5rem)" }} data-i18n="services.table_title">KOMPARATİF TABLO</h2></div>
        <div className="reveal" style={{ marginTop: "2rem" }}>
          <div className="spec-table-title" data-i18n="services.table_sub">Kaplama Türleri – Teknik Karşılaştırma</div>
          <div style={{ overflowX: "auto", border: "1px solid var(--gold-line)" }}>
            <table className="data-table">
              <thead><tr><th data-i18n="table.type">Kaplama Türü</th><th data-i18n="table.thick">Kalınlık (μm)</th><th data-i18n="table.salt">Tuz Spreyi (h)</th><th data-i18n="table.temp">Sıcaklık Direnci</th><th>RoHS</th><th data-i18n="table.sector">Tipik Sektör</th></tr></thead>
              <tbody>
                <tr><td data-i18n="tbl.zinc_blue">El. Çinko (Mavi Kromat)</td><td>8-12</td><td>120-240</td><td>120°C</td><td>✓</td><td data-i18n="tbl.general">Genel Endüstri</td></tr>
                <tr><td data-i18n="tbl.zinc_yellow">El. Çinko (Sarı Kromat)</td><td>8-12</td><td>240-480</td><td>120°C</td><td>—</td><td data-i18n="tbl.machine">Makine, İnşaat</td></tr>
                <tr><td data-i18n="tbl.znni">El. Çinko-Nikel</td><td>8-15</td><td>720-1000</td><td>200°C</td><td>✓</td><td data-i18n="tbl.oem">Otomotiv OEM</td></tr>
                <tr><td>Geomet® 500</td><td>8-10</td><td>720</td><td>300°C</td><td>✓</td><td data-i18n="tbl.auto_air">Otomotiv, Havacılık</td></tr>
                <tr><td>Geomet® 321</td><td>12-15</td><td>1000</td><td>300°C</td><td>✓</td><td data-i18n="tbl.oem">Otomotiv OEM</td></tr>
                <tr><td data-i18n="tbl.phosphate">Çinko Fosfat</td><td>2-20 g/m²</td><td>—</td><td>—</td><td>✓</td><td data-i18n="tbl.primer">Boya Altı</td></tr>
                <tr><td data-i18n="tbl.powder">Toz Boya</td><td>60-120</td><td>500</td><td>180°C</td><td>✓</td><td data-i18n="tbl.furniture">Mobilya, İnşaat</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
    
    {/* ═══════════════ GALLERY ═══════════════ */}
    </>
  );
}
