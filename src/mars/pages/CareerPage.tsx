import { useNavigate } from 'react-router-dom';

export function CareerPage({ active }: { active: boolean }) {
  const navigate = useNavigate();

  return (
    <>
    <div id="page-career" className={`page ${active ? 'active' : ''}`}>
      <div className="ph-hero" id="ph-career">
        <div className="gh-bg-grid"></div><div className="gh-glow"></div>
        <div className="gh-left">
          <div className="breadcrumb" data-i18n-html="breadcrumb.career">Ana Sayfa / <em>Kariyer</em></div>
          <p className="hero-eyebrow" data-i18n="gallery.page_eyebrow">Kaplama Süreci</p>
          <h1 className="gh-title" data-i18n="career.title">KARİYER</h1>
          <p className="gh-sub" data-i18n="career.sub">Büyüyen ekibimizin parçası olun. Açık pozisyonlar ve Mars Kaplama'da çalışmanın avantajları.</p>
          <div className="coating-stages" id="cs-career">
            <div className="cs-pill active" data-stage="0"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.0">Yağlı Cıvata</span></div>
            <div className="cs-pill" data-stage="1"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.1">Yağ Giderme</span></div>
            <div className="cs-pill" data-stage="2"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.2">Asitleme</span></div>
            <div className="cs-pill" data-stage="3"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.3">Kumlama</span></div>
            <div className="cs-pill" data-stage="4"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.4">Kaplama</span></div>
            <div className="cs-pill" data-stage="5"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.5">Bitmiş Ürün</span></div>
          </div>
          <div className="stage-desc-box"><div className="sdb-num" id="sdb-num-career">01</div><p className="sdb-text" id="sdb-text-career"></p></div>
        </div>
        <div className="gh-right">
          <canvas className="bolt-canvas" id="bolt-canvas-career" width="440" height="440"></canvas>
          <button className="replay-btn" id="replay-btn-career"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg></button>
        </div>
      </div>
      <section className="section">
        <div className="reveal"><p className="eyebrow" data-i18n="career.benefits_ey">Neden Mars Kaplama?</p><h2 className="big-title" style={{ fontSize: "clamp(2.2rem,4vw,4rem)" }} data-i18n="career.benefits_title">ÇALIŞAN AVANTAJLARI</h2></div>
        <div className="benefits-grid">
          <div className="benefit-item reveal"><div className="benefit-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div><div className="benefit-title" data-i18n="benefit.salary">Rekabetçi Maaş</div><p className="benefit-text" data-i18n="benefit.salary_d">Piyasa üstü ücret politikası ve yıllık performans bazlı değerlendirme.</p></div></div>
          <div className="benefit-item reveal reveal-d1"><div className="benefit-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div><div><div className="benefit-title" data-i18n="benefit.career">Kariyer Gelişimi</div><p className="benefit-text" data-i18n="benefit.career_d">Eğitim bütçesi, sertifikasyon desteği ve iç terfi önceliği.</p></div></div>
          <div className="benefit-item reveal reveal-d2"><div className="benefit-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div><div><div className="benefit-title" data-i18n="benefit.health">Sağlık Sigortası</div><p className="benefit-text" data-i18n="benefit.health_d">Özel sağlık sigortası ve aile bireylerini kapsayan ek teminatlar.</p></div></div>
          <div className="benefit-item reveal"><div className="benefit-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div><div className="benefit-title" data-i18n="benefit.flex">Esnek Çalışma</div><p className="benefit-text" data-i18n="benefit.flex_d">Uygun pozisyonlarda hibrit çalışma ve esnek çalışma saatleri.</p></div></div>
          <div className="benefit-item reveal reveal-d1"><div className="benefit-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg></div><div><div className="benefit-title" data-i18n="benefit.social">Sosyal Haklar</div><p className="benefit-text" data-i18n="benefit.social_d">Yemek, servis, yakacak yardımı ve özel gün hediye desteği.</p></div></div>
          <div className="benefit-item reveal reveal-d2"><div className="benefit-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div><div><div className="benefit-title" data-i18n="benefit.team">Takım Ruhu</div><p className="benefit-text" data-i18n="benefit.team_d">Takım etkinlikleri, şirket gezileri ve güçlü ekip kültürü.</p></div></div>
        </div>
      </section>
      <div className="divider"></div>
      <section className="section section-alt">
        <div className="reveal"><p className="eyebrow" data-i18n="career.jobs_ey">Açık Pozisyonlar</p><h2 className="big-title" style={{ fontSize: "clamp(2.2rem,4vw,4rem)" }} data-i18n="career.jobs_title">İŞ İLANLARIMIZ</h2></div>
        <div className="jobs-list">
          <div className="job-item reveal"><div><div className="job-title" data-i18n="job.1">Kaplama Proses Mühendisi</div><div className="job-meta"><span className="job-tag open" data-i18n="job.active">Aktif İlan</span><span className="job-tag" data-i18n="job.full">Tam Zamanlı</span><span className="job-tag">Manisa</span></div></div><div className="job-dept" data-i18n="dept.prod">Üretim / Ar-Ge</div></div>
          <div className="job-item reveal"><div><div className="job-title" data-i18n="job.2">Kalite Kontrol Uzmanı</div><div className="job-meta"><span className="job-tag open" data-i18n="job.active">Aktif İlan</span><span className="job-tag" data-i18n="job.full">Tam Zamanlı</span><span className="job-tag">Manisa</span></div></div><div className="job-dept" data-i18n="dept.qa">Kalite Güvence</div></div>
          <div className="job-item reveal"><div><div className="job-title" data-i18n="job.3">Teknik Satış Mühendisi</div><div className="job-meta"><span className="job-tag open" data-i18n="job.active">Aktif İlan</span><span className="job-tag" data-i18n="job.full">Tam Zamanlı</span><span className="job-tag" data-i18n="job.turkey">Türkiye Geneli</span></div></div><div className="job-dept" data-i18n="dept.sales">Satış & Pazarlama</div></div>
          <div className="job-item reveal"><div><div className="job-title" data-i18n="job.4">Lojistik Koordinatörü</div><div className="job-meta"><span className="job-tag" data-i18n="job.passive">Pasif</span><span className="job-tag" data-i18n="job.full">Tam Zamanlı</span><span className="job-tag">Manisa</span></div></div><div className="job-dept" data-i18n="dept.log">Lojistik</div></div>
          <div className="job-item reveal"><div><div className="job-title" data-i18n="job.5">Üretim Operatörü</div><div className="job-meta"><span className="job-tag open" data-i18n="job.active">Aktif İlan</span><span className="job-tag" data-i18n="job.shift">Vardiya</span><span className="job-tag">Manisa</span></div></div><div className="job-dept" data-i18n="dept.prod2">Üretim</div></div>
        </div>
        <div style={{ marginTop: "2.5rem", padding: "2rem", background: "var(--bg-2)", border: "1px solid var(--gold-line)" }} className="reveal">
          <p className="eyebrow" data-i18n="career.open_ey">Açık İlan Yoksa</p>
          <p className="body-text" style={{ marginBottom: "1.4rem" }} data-i18n="career.open_p">Uygun pozisyon göremiyorsanız özgeçmişinizi bize gönderin. Ekibimize katılmak isteyenleri her zaman değerlendiriyoruz.</p>
          <button className="btn btn-gold btn-sm" onClick={() => navigate('/contact')} data-i18n="career.send_cv" type="button">Özgeçmiş Gönder →</button>
        </div>
      </section>
    </div>
    
    {/* ═══════════════ CONTACT ═══════════════ */}
    </>
  );
}
