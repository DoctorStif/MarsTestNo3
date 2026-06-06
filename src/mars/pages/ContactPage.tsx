import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

const initialForm = {
  name: '',
  company: '',
  phone: '',
  email: '',
  coating: '',
  quantity: '',
  size: '',
  message: '',
};

type ContactForm = typeof initialForm;
type ContactFormField = keyof ContactForm;

export function ContactPage({ active }: { active: boolean }) {
  const { t } = useTranslation();
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [isSent, setIsSent] = useState(false);

  const updateField = (field: ContactFormField) => (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setIsSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSent(true);
    setForm(initialForm);
    window.setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <>
    <div id="page-contact" className={`page ${active ? 'active' : ''}`}>
      <div className="ph-hero" id="ph-contact">
        <div className="gh-bg-grid"></div><div className="gh-glow"></div>
        <div className="gh-left">
          <div className="breadcrumb" data-i18n-html="breadcrumb.contact">Ana Sayfa / <em>İletişim</em></div>
          <p className="hero-eyebrow" data-i18n="gallery.page_eyebrow">Kaplama Süreci</p>
          <h1 className="gh-title" data-i18n="contact.title">İLETİŞİM & TEKLİF</h1>
          <p className="gh-sub" data-i18n="contact.sub">Teknik sorularınız, teklif talepleriniz veya örnek kaplama siparişleri için ekibimizle iletişime geçin.</p>
          <div className="coating-stages" id="cs-contact">
            <div className="cs-pill active" data-stage="0"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.0">Yağlı Cıvata</span></div>
            <div className="cs-pill" data-stage="1"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.1">Yağ Giderme</span></div>
            <div className="cs-pill" data-stage="2"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.2">Asitleme</span></div>
            <div className="cs-pill" data-stage="3"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.3">Kumlama</span></div>
            <div className="cs-pill" data-stage="4"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.4">Kaplama</span></div>
            <div className="cs-pill" data-stage="5"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.5">Bitmiş Ürün</span></div>
          </div>
          <div className="stage-desc-box"><div className="sdb-num" id="sdb-num-contact">01</div><p className="sdb-text" id="sdb-text-contact"></p></div>
        </div>
        <div className="gh-right">
          <canvas className="bolt-canvas" id="bolt-canvas-contact" width="440" height="440"></canvas>
          <button className="replay-btn" id="replay-btn-contact"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg></button>
        </div>
      </div>
      <section className="section">
        <div className="contact-layout">
          <div>
            <div className="reveal"><p className="eyebrow" data-i18n="contact.info_ey">İletişim Bilgileri</p><h2 className="big-title" style={{ fontSize: "clamp(2.2rem,4vw,4rem)" }} data-i18n="contact.reach">BİZE ULAŞIN</h2><p className="body-text" data-i18n="contact.reach_d">Teknik ekibimiz kaplama türü seçimi, teknik şartname ve teklif konularında destek vermek için hazır.</p></div>
            <div className="contact-info-block reveal"><div className="ci-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div><div className="ci-label" data-i18n="contact.addr_l">Adres</div><div className="ci-val">Manisa OSB, 1. Cadde No:XX<br />45030 Manisa / Türkiye</div></div></div>
            <div className="contact-info-block reveal"><div className="ci-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.62 3.32a2 2 0 011.99-1.8h3a2 2 0 012 1.72 12 12 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.06 6.06l.97-.97a2 2 0 012.11-.45 12 12 0 002.81.7A2 2 0 0122 16.92z"/></svg></div><div><div className="ci-label" data-i18n="contact.phone_l">Telefon</div><div className="ci-val">+90 236 000 00 00<br />+90 532 000 00 00</div></div></div>
            <div className="contact-info-block reveal"><div className="ci-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><div className="ci-label" data-i18n="contact.email_l">E-Posta</div><div className="ci-val">info@marskaplama.com.tr<br />sales@marskaplama.com.tr</div></div></div>
            <div className="contact-info-block reveal"><div className="ci-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div><div className="ci-label" data-i18n="contact.hours_l">Çalışma Saatleri</div><div className="ci-val" data-i18n="contact.hours_v">Pzt–Cum: 08:00–18:00 | Cmt: 08:00–13:00</div></div></div>
            <div className="map-placeholder reveal"><div style={{ position: "relative", zIndex: "1", textAlign: "center" }}><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1rem", letterSpacing: ".1em", color: "var(--gold-line)" }} data-i18n="contact.map">HARİTA</div></div></div>
          </div>
          <div className="contact-form-box reveal">
            <p className="eyebrow" style={{ marginBottom: "1.2rem" }} data-i18n="contact.form_ey">Teklif Talebi</p>
            <form className="cf-form" onSubmit={handleSubmit}>
              <div className="cf-row">
                <div className="cf-group"><label className="cf-label" data-i18n="form.name" htmlFor="contact-name">Ad Soyad *</label><input className="cf-input" id="contact-name" name="name" type="text" data-i18n-ph="form.name_ph" placeholder="Ad Soyad" required value={form.name} onChange={updateField('name')} /></div>
                <div className="cf-group"><label className="cf-label" data-i18n="form.company" htmlFor="contact-company">Firma *</label><input className="cf-input" id="contact-company" name="company" type="text" data-i18n-ph="form.company_ph" placeholder="Firma Adı" required value={form.company} onChange={updateField('company')} /></div>
              </div>
              <div className="cf-row">
                <div className="cf-group"><label className="cf-label" data-i18n="form.phone" htmlFor="contact-phone">Telefon *</label><input className="cf-input" id="contact-phone" name="phone" type="tel" placeholder="+90 5XX XXX XX XX" required value={form.phone} onChange={updateField('phone')} /></div>
                <div className="cf-group"><label className="cf-label" data-i18n="form.email" htmlFor="contact-email">E-Posta *</label><input className="cf-input" id="contact-email" name="email" type="email" placeholder="email@firma.com" required value={form.email} onChange={updateField('email')} /></div>
              </div>
              <div className="cf-group"><label className="cf-label" data-i18n="form.coating" htmlFor="contact-coating">Kaplama Türü *</label>
                <select className="cf-select" id="contact-coating" name="coating" required value={form.coating} onChange={updateField('coating')}>
                  <option value="" disabled data-i18n="form.coating_ph">Kaplama türü seçin</option>
                  <option value="zinc" data-i18n="svc.zinc">Elektrolitik Çinko Kaplama</option>
                  <option value="znni" data-i18n="svc.znni">Elektrolitik Çinko-Nikel Kaplama</option>
                  <option value="phosphate" data-i18n="svc.phosphate">Fosfat Kaplama</option>
                  <option value="geomet" data-i18n="svc.geomet">Geomet® / Çinko Lamel Kaplama</option>
                  <option value="topcoat" data-i18n="svc.topcoat">Üstlak (Topcoat)</option>
                  <option value="paint" data-i18n="svc.paint">Toz / Yaş Boya</option>
                  <option value="micro" data-i18n="svc.micro">Mikrokapsüllü Kilitli Boya</option>
                  <option value="hydrogen" data-i18n="svc.hydrogen">Hidrojen Gevrekliği Giderme</option>
                  <option value="clean" data-i18n="svc.clean">Teknik Temizlik</option>
                  <option value="patch" data-i18n="svc.patch">Plastik Patch</option>
                  <option value="mask" data-i18n="svc.mask">Diş Maskeleme</option>
                  <option value="custom" data-i18n="svc.custom">Özel Geliştirme</option>
                </select>
              </div>
              <div className="cf-row">
                <div className="cf-group"><label className="cf-label" data-i18n="form.qty" htmlFor="contact-quantity">Tahmini Miktar</label><input className="cf-input" id="contact-quantity" name="quantity" type="text" data-i18n-ph="form.qty_ph" placeholder="Örn: 50.000 adet/ay" value={form.quantity} onChange={updateField('quantity')} /></div>
                <div className="cf-group"><label className="cf-label" data-i18n="form.size" htmlFor="contact-size">Parça Boyutu</label><input className="cf-input" id="contact-size" name="size" type="text" placeholder="Örn: M8x30" value={form.size} onChange={updateField('size')} /></div>
              </div>
              <div className="cf-group"><label className="cf-label" data-i18n="form.message" htmlFor="contact-message">Mesajınız</label><textarea className="cf-textarea" id="contact-message" name="message" data-i18n-ph="form.message_ph" placeholder="Teknik gereksinimler, standartlar ve diğer detaylar..." value={form.message} onChange={updateField('message')}></textarea></div>
              <button className={`cf-submit ${isSent ? 'sent' : ''}`} type="submit">{isSent ? t('form.sent') : t('form.submit')}</button>
            </form>
          </div>
        </div>
      </section>
    </div>
    
    {/* LIGHTBOX */}
    </>
  );
}
