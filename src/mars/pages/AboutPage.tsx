export function AboutPage({ active }: { active: boolean }) {
  return (
    <>
    <div id="page-about" className={`page ${active ? 'active' : ''}`}>
      <div className="ph-hero" id="ph-about">
        <div className="gh-bg-grid"></div><div className="gh-glow"></div>
        <div className="gh-left">
          <div className="breadcrumb" data-i18n-html="breadcrumb.about">Ana Sayfa / <em>Hakkımızda</em></div>
          <p className="hero-eyebrow" data-i18n="gallery.page_eyebrow">Kaplama Süreci</p>
          <h1 className="gh-title" data-i18n="about.title">BİZ KİMİZ?</h1>
          <p className="gh-sub" data-i18n="about.sub">20 yıllık köklü geçmiş, güçlü altyapı ve uzman ekiple Türkiye'nin önde gelen yüzey kaplama şirketlerinden biri.</p>
          <div className="coating-stages" id="cs-about">
            <div className="cs-pill active" data-stage="0"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.0">Yağlı Cıvata</span></div>
            <div className="cs-pill" data-stage="1"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.1">Yağ Giderme</span></div>
            <div className="cs-pill" data-stage="2"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.2">Asitleme</span></div>
            <div className="cs-pill" data-stage="3"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.3">Kumlama</span></div>
            <div className="cs-pill" data-stage="4"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.4">Kaplama</span></div>
            <div className="cs-pill" data-stage="5"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.5">Bitmiş Ürün</span></div>
          </div>
          <div className="stage-desc-box"><div className="sdb-num" id="sdb-num-about">01</div><p className="sdb-text" id="sdb-text-about"></p></div>
        </div>
        <div className="gh-right">
          <canvas className="bolt-canvas" id="bolt-canvas-about" width="440" height="440"></canvas>
          <button className="replay-btn" id="replay-btn-about"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg></button>
        </div>
      </div>
      <section className="section">
        <div className="about-grid">
          <div>
            <div className="reveal">
              <p className="eyebrow" data-i18n="about.history_ey">Tarihçemiz</p>
              <h2 className="big-title" style={{ fontSize: "clamp(2.4rem,4vw,4rem)" }} data-i18n="about.history_title">MARS KAPLAMA HAKKINDA</h2>
              <p className="body-text" style={{ marginBottom: "1.5rem" }} data-i18n="about.p1">Mars Kaplama San. ve Tic. Ltd. Şti., 2004 yılında Manisa Organize Sanayi Bölgesi'nde kurulmuştur.</p>
              <p className="body-text" style={{ marginBottom: "1.5rem" }} data-i18n="about.p2">12.000 m² üretim alanımızda tam otomatik kaplama hatlarımız, gelişmiş laboratuvar altyapımız ve 180'i aşkın uzman kadromuzla yılda 50 milyonu aşkın parça kaplama kapasitesine sahibiz.</p>
              <p className="body-text" data-i18n="about.p3">Başta otomotiv ana ve yan sanayi olmak üzere; inşaat, beyaz eşya, elektronik, mobilya, enerji ve havacılık sektörlerine hizmet veriyoruz.</p>
            </div>
            <div className="timeline reveal">
              <div className="timeline-item"><div className="tl-dot">2004</div><div><div className="tl-year">2004</div><div className="tl-text" data-i18n="tl.2004">Manisa OSB'de kuruluş. İlk elektrolitik çinko kaplama hattı devreye alındı.</div></div></div>
              <div className="timeline-item"><div className="tl-dot">2008</div><div><div className="tl-year">2008</div><div className="tl-text" data-i18n="tl.2008">Üretim alanı 2 katına çıkarıldı. Fosfat ve nikel kaplama hatları eklendi. ISO 9001 belgesi alındı.</div></div></div>
              <div className="timeline-item"><div className="tl-dot">2013</div><div><div className="tl-year">2013</div><div className="tl-text" data-i18n="tl.2013">Geomet® lisanslı çinko lamel kaplama hattı kuruldu. Otomotiv sektörüne giriş.</div></div></div>
              <div className="timeline-item"><div className="tl-dot">2018</div><div><div className="tl-year">2018</div><div className="tl-text" data-i18n="tl.2018">ISO 14001 Çevre Yönetim Sistemi sertifikası. Tam otomasyon yatırımları tamamlandı.</div></div></div>
              <div className="timeline-item"><div className="tl-dot">2024</div><div><div className="tl-year">2024</div><div className="tl-text" data-i18n="tl.2024">20. yıl. 180+ çalışan, 500+ müşteri ve 50M+ parça/yıl kapasitesiyle sektör lideri.</div></div></div>
            </div>
          </div>
          <div>
            <div className="about-img-placeholder reveal"><div className="about-img-label" data-i18n="about.facility">TESİS FOTOĞRAFI</div></div>
            <div className="stat-grid" style={{ marginTop: "1px" }}>
              <div className="stat-block"><div className="stat-num">180<span className="stat-unit">+</span></div><div className="stat-lbl" data-i18n="spec.employees">Çalışan</div></div>
              <div className="stat-block"><div className="stat-num">12K<span className="stat-unit">m²</span></div><div className="stat-lbl" data-i18n="spec.area">Üretim Alanı</div></div>
              <div className="stat-block"><div className="stat-num">50<span className="stat-unit">M+</span></div><div className="stat-lbl" data-i18n="stat.parts">Parça / Yıl</div></div>
              <div className="stat-block"><div className="stat-num">500<span className="stat-unit">+</span></div><div className="stat-lbl" data-i18n="stat.clients">Müşteri</div></div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <section className="section section-alt">
        <div className="reveal"><p className="eyebrow" data-i18n="about.team_ey">Yönetim</p><h2 className="big-title" style={{ fontSize: "clamp(2.4rem,4vw,4rem)" }} data-i18n="about.team_title">YÖNETİM KURULU</h2></div>
        <div className="team-grid">
          <div className="team-card reveal"><div className="team-avatar">AK</div><div className="team-name">Ahmet Karahan</div><div className="team-role" data-i18n="team.ceo">Genel Müdür & Kurucu</div></div>
          <div className="team-card reveal reveal-d1"><div className="team-avatar">MY</div><div className="team-name">Murat Yıldırım</div><div className="team-role" data-i18n="team.prod">Üretim Müdürü</div></div>
          <div className="team-card reveal reveal-d2"><div className="team-avatar">FD</div><div className="team-name">Fatma Demir</div><div className="team-role" data-i18n="team.qa">Kalite Güvence Müdürü</div></div>
          <div className="team-card reveal reveal-d3"><div className="team-avatar">EK</div><div className="team-name">Emre Kaya</div><div className="team-role" data-i18n="team.rnd">Ar-Ge & Mühendislik Müdürü</div></div>
          <div className="team-card reveal reveal-d4"><div className="team-avatar">SÇ</div><div className="team-name">Selin Çelik</div><div className="team-role" data-i18n="team.sales">Satış & Pazarlama Müdürü</div></div>
          <div className="team-card reveal"><div className="team-avatar">HÖ</div><div className="team-name">Hasan Öztürk</div><div className="team-role" data-i18n="team.log">Lojistik & Tedarik Müdürü</div></div>
        </div>
      </section>
    </div>
    
    {/* ═══════════════ SERVICES ═══════════════ */}
    </>
  );
}
