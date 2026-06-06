export function QualityPage({ active }: { active: boolean }) {
  return (
    <>
    <div id="page-quality" className={`page ${active ? 'active' : ''}`}>
      <div className="ph-hero" id="ph-quality">
        <div className="gh-bg-grid"></div><div className="gh-glow"></div>
        <div className="gh-left">
          <div className="breadcrumb" data-i18n-html="breadcrumb.quality">Ana Sayfa / <em>Kalite</em></div>
          <p className="hero-eyebrow" data-i18n="gallery.page_eyebrow">Kaplama Süreci</p>
          <h1 className="gh-title" data-i18n="quality.title">KALİTE & SERTİFİKASYON</h1>
          <p className="gh-sub" data-i18n="quality.sub">Uluslararası standartlara tam uyum, belgelenmiş kalite güvencesi ve sürekli iyileştirme.</p>
          <div className="coating-stages" id="cs-quality">
            <div className="cs-pill active" data-stage="0"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.0">Yağlı Cıvata</span></div>
            <div className="cs-pill" data-stage="1"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.1">Yağ Giderme</span></div>
            <div className="cs-pill" data-stage="2"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.2">Asitleme</span></div>
            <div className="cs-pill" data-stage="3"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.3">Kumlama</span></div>
            <div className="cs-pill" data-stage="4"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.4">Kaplama</span></div>
            <div className="cs-pill" data-stage="5"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.5">Bitmiş Ürün</span></div>
          </div>
          <div className="stage-desc-box"><div className="sdb-num" id="sdb-num-quality">01</div><p className="sdb-text" id="sdb-text-quality"></p></div>
        </div>
        <div className="gh-right">
          <canvas className="bolt-canvas" id="bolt-canvas-quality" width="440" height="440"></canvas>
          <button className="replay-btn" id="replay-btn-quality"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg></button>
        </div>
      </div>
      <section className="section">
        <div className="reveal"><p className="eyebrow" data-i18n="quality.cert_ey">Sertifikalarımız</p><h2 className="big-title" style={{ fontSize: "clamp(2.2rem,4vw,4rem)" }} data-i18n="quality.cert_title">ULUSLARARASI SERTİFİKALAR</h2></div>
        <div className="cert-grid">
          <div className="cert-card reveal"><div className="cert-badge-big">ISO 9001</div><div className="cert-card-name">ISO 9001:2015</div><p className="cert-card-desc" data-i18n="cert.9001">Kalite Yönetim Sistemi. Tüm üretim süreçlerimiz bu standart kapsamında belgelenmiş ve denetlenmektedir.</p></div>
          <div className="cert-card reveal reveal-d1"><div className="cert-badge-big">ISO 14001</div><div className="cert-card-name">ISO 14001:2015</div><p className="cert-card-desc" data-i18n="cert.14001">Çevre Yönetim Sistemi. Sürdürülebilir üretim ve çevresel etkimizi minimize etme hedefiyle tüm süreçlerimizi yönetiyoruz.</p></div>
          <div className="cert-card reveal reveal-d2"><div className="cert-badge-big">IATF</div><div className="cert-card-name">IATF 16949:2016</div><p className="cert-card-desc" data-i18n="cert.iatf">Otomotiv Kalite Yönetim Sistemi. Ana sanayi tedarikçisi olarak otomotiv sektörünün en kritik kalite standardını karşılıyoruz.</p></div>
          <div className="cert-card reveal"><div className="cert-badge-big">RoHS</div><div className="cert-card-name">RoHS / REACH</div><p className="cert-card-desc" data-i18n="cert.rohs">AB direktiflerine tam uyumlu malzeme ve proses kullanımı. Zararlı madde içermeyen, çevre dostu kaplama çözümleri.</p></div>
          <div className="cert-card reveal reveal-d1"><div className="cert-badge-big">DIN EN</div><div className="cert-card-name">DIN EN ISO 4042</div><p className="cert-card-desc" data-i18n="cert.din">Bağlantı elemanları için elektrolitik çinko ve çinko alaşım kaplamalar standardı.</p></div>
          <div className="cert-card reveal reveal-d2"><div className="cert-badge-big">ASTM</div><div className="cert-card-name">ASTM B633 / F519</div><p className="cert-card-desc" data-i18n="cert.astm">Elektrolitik çinko kaplama ve hidrojen gevrekliği test standartları. ABD ve uluslararası pazar sertifikasyonu.</p></div>
        </div>
      </section>
      <div className="divider"></div>
      <section className="section section-alt">
        <div className="reveal"><p className="eyebrow" data-i18n="quality.test_ey">Test Altyapımız</p><h2 className="big-title" style={{ fontSize: "clamp(2.2rem,4vw,4rem)" }} data-i18n="quality.test_title">KALİTE KONTROL TESTLERİ</h2></div>
        <div className="test-grid">
          <div className="test-card reveal"><div className="test-name" data-i18n="test.salt">Tuz Spreyi Testi</div><div><span className="test-val">1000</span><span className="test-unit" data-i18n="test.salt_u">saat kapasiteli</span></div><div className="test-desc" data-i18n="test.salt_d">ISO 9227 standardına göre korozyon direnci doğrulaması.</div></div>
          <div className="test-card reveal reveal-d1"><div className="test-name" data-i18n="test.xrf">XRF Kalınlık Ölçümü</div><div><span className="test-val">±0.1</span><span className="test-unit">μm</span></div><div className="test-desc" data-i18n="test.xrf_d">X-Ray floresans teknolojisiyle tahribatsız kalınlık ve alaşım analizi.</div></div>
          <div className="test-card reveal"><div className="test-name" data-i18n="test.h2">Hidrojen Gevrekliği Testi</div><div><span className="test-val">ASTM</span><span className="test-unit">F519</span></div><div className="test-desc" data-i18n="test.h2_d">Yüksek mukavemetli parçalar için sustained load testi.</div></div>
          <div className="test-card reveal reveal-d1"><div className="test-name" data-i18n="test.torque">Torque-Tension</div><div><span className="test-val">µ: 0.08</span><span className="test-unit">–0.16</span></div><div className="test-desc" data-i18n="test.torque_d">VDA 235-204 uyumlu sürtünme katsayısı ölçümü.</div></div>
          <div className="test-card reveal"><div className="test-name" data-i18n="test.clean">Teknik Temizlik</div><div><span className="test-val">VDA 19</span></div><div className="test-desc" data-i18n="test.clean_d">Partikül kirliliği analizi ve raporlaması.</div></div>
          <div className="test-card reveal reveal-d1"><div className="test-name" data-i18n="test.visual">Görsel Muayene</div><div><span className="test-val">%100</span><span className="test-unit" data-i18n="test.visual_u">optik kontrol</span></div><div className="test-desc" data-i18n="test.visual_d">Yüzey kusurları ve boyutsal tolerans kontrolü.</div></div>
        </div>
      </section>
    </div>
    
    {/* ═══════════════ SUSTAINABILITY ═══════════════ */}
    </>
  );
}
