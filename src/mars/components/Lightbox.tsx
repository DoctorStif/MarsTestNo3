import { useEffect } from 'react';
import type { GalleryItem } from '../data/gallery';

type LightboxProps = {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  open: boolean;
};

export function Lightbox({ item, onClose, onNext, onPrev, open }: LightboxProps) {
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrev();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose, onNext, onPrev, open]);

  return (
    <div id="lightbox" className={open ? 'open' : ''}>
      <button id="lb-close" onClick={onClose} data-i18n="lb.close" type="button">✕ KAPAT</button>
      {item ? <img id="lb-img" src={item.src} alt={item.title_tr} /> : <img id="lb-img" src="" alt="" />}
      <div id="lb-caption">{item ? `${item.title_tr} — ${item.sub_tr}` : ''}</div>
      <div id="lb-nav">
        <button className="lb-btn" onClick={onPrev} data-i18n="lb.prev" type="button">← ÖNCEKİ</button>
        <button className="lb-btn" onClick={onNext} data-i18n="lb.next" type="button">SONRAKİ →</button>
      </div>
    </div>
  );
}
