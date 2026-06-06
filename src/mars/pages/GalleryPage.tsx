import { useMemo, useState } from 'react';
import { galleryFilters, galleryItems, type GalleryCategory, type GalleryItem } from '../data/gallery';

type GalleryPageProps = {
  active: boolean;
  onOpenLightbox: (items: GalleryItem[], index: number) => void;
};

export function GalleryPage({ active, onOpenLightbox }: GalleryPageProps) {
  const [filter, setFilter] = useState<GalleryCategory>('all');
  const filteredItems = useMemo(
    () => (filter === 'all' ? galleryItems : galleryItems.filter((item) => item.cat === filter)),
    [filter],
  );

  return (
    <>
      <div id="page-gallery" className={`page ${active ? 'active' : ''}`}>
        <div id="gallery-hero">
          <div className="gh-bg-grid"></div>
          <div className="gh-glow"></div>

          <div className="gh-left">
            <div className="breadcrumb" data-i18n-html="breadcrumb.gallery">Ana Sayfa / <em>Galeri</em></div>
            <p className="hero-eyebrow" data-i18n="gallery.page_eyebrow">Kaplama Süreci</p>
            <h1 className="gh-title" data-i18n="gallery.page_title">KAPLAMA GALERİSİ</h1>
            <p className="gh-sub" data-i18n="gallery.page_sub">Farklı kaplama türlerinin görsel referansları — yüzey kalitesi, renk ve doku örnekleri.</p>

            <div className="coating-stages" id="cs-gallery">
              <div className="cs-pill active" data-stage="0"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.0">Yağlı Cıvata</span></div>
              <div className="cs-pill" data-stage="1"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.1">Yağ Giderme</span></div>
              <div className="cs-pill" data-stage="2"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.2">Asitleme</span></div>
              <div className="cs-pill" data-stage="3"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.3">Kumlama</span></div>
              <div className="cs-pill" data-stage="4"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.4">Kaplama</span></div>
              <div className="cs-pill" data-stage="5"><span className="cs-dot"></span><span className="cs-label" data-i18n="stage.5">Bitmiş Ürün</span></div>
            </div>

            <div className="stage-desc-box">
              <div className="sdb-num" id="sdb-num-gallery">01</div>
              <p className="sdb-text" id="sdb-text-gallery"></p>
            </div>
          </div>

          <div className="gh-right">
            <canvas className="bolt-canvas" id="bolt-canvas-gallery" width="440" height="440"></canvas>
            <button className="replay-btn" id="replay-btn-gallery" title="Tekrar Oynat" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>
            </button>
          </div>
        </div>
        <section className="section">
          <div className="gallery-controls reveal" id="gallery-filters">
            {galleryFilters.map((item) => (
              <button
                className={`gallery-filter ${filter === item.id ? 'active' : ''}`}
                data-filter={item.id}
                data-i18n={item.i18n}
                key={item.id}
                onClick={() => setFilter(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="gallery-masonry reveal" id="gallery-grid-react">
            {filteredItems.map((item, index) => (
              <button
                className="gallery-item"
                key={item.id}
                onClick={() => onOpenLightbox(filteredItems, index)}
                style={{ height: `${item.h}px` }}
                type="button"
              >
                <img src={item.src} alt={item.title_tr} loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-item-title">{item.title_tr}</div>
                  <div className="gallery-item-sub">{item.sub_tr}</div>
                </div>
                <div className="gallery-item-zoom">↗</div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
