export function SustainabilityPage({ active }: { active: boolean }) {
  return (
    <>
    <div id="page-sustainability" className={`page ${active ? 'active' : ''}`}>
      <div className="ph-hero" id="ph-sustainability">
        <div className="gh-bg-grid"></div><div className="gh-glow"></div>
        <div className="gh-left">
          <div className="breadcrumb" data-i18n-html="breadcrumb.sustain">Ana Sayfa / <em>Sürdürülebilirlik</em></div>
          <p className="hero-eyebrow" data-i18n="gallery.page_eyebrow">Kaplama Süreci</p>
          <h1 className="gh-title" data-i18n="sustain.title">SÜRDÜRÜLEBİLİRLİK</h1>
          <p className="gh-sub" data-i18n="sustain.sub">Geleceğe yönelik sorumlu üretim. Çevre, toplum ve ekonomi için dengeli yaklaşım.</p>
          <div className="coating-stages" id="cs-sustainability">
            <div className="cs-pill active" data-stage="0"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.0">Yağlı Cıvata</span></div>
            <div className="cs-pill" data-stage="1"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.1">Yağ Giderme</span></div>
            <div className="cs-pill" data-stage="2"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.2">Asitleme</span></div>
            <div className="cs-pill" data-stage="3"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.3">Kumlama</span></div>
            <div className="cs-pill" data-stage="4"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.4">Kaplama</span></div>
            <div className="cs-pill" data-stage="5"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.5">Bitmiş Ürün</span></div>
          </div>
          <div className="stage-desc-box"><div className="sdb-num" id="sdb-num-sustainability">01</div><p className="sdb-text" id="sdb-text-sustainability"></p></div>
        </div>
        <div className="gh-right">
          <canvas className="bolt-canvas" id="bolt-canvas-sustainability" width="440" height="440"></canvas>
          <button className="replay-btn" id="replay-btn-sustainability"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg></button>
        </div>
      </div>
      <section className="section">
        <div className="reveal"><p className="eyebrow" data-i18n="sustain.ey">Yaklaşımımız</p><h2 className="big-title" style={{ fontSize: "clamp(2.2rem,4vw,4rem)" }} data-i18n="sustain.env_title">ÇEVRE POLİTİKAMIZ</h2><p className="body-text" style={{ maxWidth: "680px", marginBottom: 0 }} data-i18n="sustain.env_p">Mars Kaplama olarak çevre yönetimini üretim süreçlerimizin ayrılmaz bir parçası olarak görüyoruz. ISO 14001 sertifikalı sistemimizle her üretim kararında çevresel etkiyi değerlendiriyoruz.</p></div>
        <div className="pillar-grid">
          <div className="pillar-card reveal"><svg className="pillar-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M26 6 C14 6 6 16 6 26 C6 36 14 46 26 46 C38 46 46 36 46 26"/><path d="M30 10 Q40 8 42 18 Q32 18 30 10Z" fill="rgba(200,146,42,.15)"/></svg><div className="pillar-title" data-i18n="pillar.env">Çevre Koruma</div><p className="pillar-text" data-i18n="pillar.env_d">Atıksu arıtma ve kapalı devre kimyasal geri kazanım sistemiyle çevresel ayak izimizi minimize ediyoruz.</p></div>
          <div className="pillar-card reveal reveal-d1"><svg className="pillar-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="26" cy="20" r="10"/><path d="M10 46 Q10 34 26 34 Q42 34 42 46"/></svg><div className="pillar-title" data-i18n="pillar.people">Çalışan Refahı</div><p className="pillar-text" data-i18n="pillar.people_d">İş sağlığı ve güvenliği önceliğimizdir. Düzenli eğitim ve sağlık taramaları ile güvenli çalışma ortamı.</p></div>
          <div className="pillar-card reveal reveal-d2"><svg className="pillar-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="6" y="20" width="40" height="26" rx="2"/><path d="M16 20 V14 Q26 4 36 14 V20"/><circle cx="26" cy="33" r="6"/></svg><div className="pillar-title" data-i18n="pillar.energy">Enerji Verimliliği</div><p className="pillar-text" data-i18n="pillar.energy_d">Enerji izleme sistemleri ve verimlilik projeleriyle yıldan yıla tüketimimizi azaltıyoruz.</p></div>
          <div className="pillar-card reveal"><svg className="pillar-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M26 6 L46 16 L46 30 Q46 42 26 48 Q6 42 6 30 L6 16 Z"/><path d="M18 26 L23 31 L34 20"/></svg><div className="pillar-title" data-i18n="pillar.safety">Ürün Güvenliği</div><p className="pillar-text" data-i18n="pillar.safety_d">RoHS ve REACH direktiflerine tam uyum. Krom-VI ve kısıtlı madde içermeyen kaplama alternatifleri.</p></div>
          <div className="pillar-card reveal reveal-d1"><svg className="pillar-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="26" cy="26" r="20"/><path d="M18 26 Q22 16 26 26 Q30 36 34 26"/><line x1="6" y1="26" x2="46" y2="26"/></svg><div className="pillar-title" data-i18n="pillar.supply">Tedarik Sorumluluğu</div><p className="pillar-text" data-i18n="pillar.supply_d">Tedarikçilerimizi sürdürülebilirlik kriterleriyle değerlendiriyor, etik kaynakları tercih ediyoruz.</p></div>
          <div className="pillar-card reveal reveal-d2"><svg className="pillar-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M10 40 L10 20 L26 10 L42 20 L42 40"/><rect x="18" y="28" width="16" height="12"/></svg><div className="pillar-title" data-i18n="pillar.community">Toplumsal Katkı</div><p className="pillar-text" data-i18n="pillar.community_d">Yerel eğitim kurumlarıyla işbirliği ve staj programları ile bulunduğumuz topluluğa değer katıyoruz.</p></div>
        </div>
        <div className="env-metrics">
          <div className="env-m reveal"><div className="env-val">-28%</div><div className="env-lbl" data-i18n="env.water">Su Tüketimi (5 yılda)</div></div>
          <div className="env-m reveal reveal-d1"><div className="env-val">-35%</div><div className="env-lbl" data-i18n="env.energy">Enerji Tüketimi (5 yılda)</div></div>
          <div className="env-m reveal reveal-d2"><div className="env-val">%95</div><div className="env-lbl" data-i18n="env.chem">Kimyasal Geri Kazanım</div></div>
          <div className="env-m reveal reveal-d3"><div className="env-val" data-i18n="env.zero">Sıfır</div><div className="env-lbl" data-i18n="env.acc">İSG Kazası (Son 3 Yıl)</div></div>
        </div>
      </section>
    </div>
    
    {/* ═══════════════ CAREER ═══════════════ */}
    </>
  );
}
