import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Lightbox } from './components/Lightbox';
import type { GalleryItem } from './data/gallery';
import { useBoltAnimation } from './hooks/useBoltAnimation';
import { initMarsSite, runMarsPageEffects } from './legacy';
import './mars.css';
import { AboutPage } from './pages/AboutPage';
import { CareerPage } from './pages/CareerPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { QualityPage } from './pages/QualityPage';
import { ServicesPage } from './pages/ServicesPage';
import { SustainabilityPage } from './pages/SustainabilityPage';

const pageRoutes = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/gallery': 'gallery',
  '/quality': 'quality',
  '/sustainability': 'sustainability',
  '/career': 'career',
  '/contact': 'contact',
} as const;

const routeByPage = {
  home: '/',
  about: '/about',
  services: '/services',
  gallery: '/gallery',
  quality: '/quality',
  sustainability: '/sustainability',
  career: '/career',
  contact: '/contact',
} as const;

type PageId = (typeof pageRoutes)[keyof typeof pageRoutes];

function getPageFromPath(pathname: string): PageId {
  return pageRoutes[pathname as keyof typeof pageRoutes] ?? 'home';
}

export function MarsReactSite() {
  const location = useLocation();
  const navigate = useNavigate();
  const activePage = getPageFromPath(location.pathname);
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const lightboxItem = useMemo(
    () => lightboxItems[lightboxIndex] ?? null,
    [lightboxIndex, lightboxItems],
  );

  useBoltAnimation(activePage);

  useEffect(() => {
    initMarsSite();
  }, []);

  useEffect(() => {
    window.showPage = (page) => {
      const route = routeByPage[page as keyof typeof routeByPage] ?? '/';
      navigate(route);
    };
  }, [navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    runMarsPageEffects(activePage);
  }, [activePage]);

  const openLightbox = (items: GalleryItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxItems([]);
    setLightboxIndex(0);
    document.body.style.overflow = '';
  };

  const stepLightbox = (direction: number) => {
    setLightboxIndex((currentIndex) => {
      if (lightboxItems.length === 0) return 0;
      return (currentIndex + direction + lightboxItems.length) % lightboxItems.length;
    });
  };

  return (
    <div id="mars-app">
      <Header />
      <HomePage active={activePage === 'home'} />
      <AboutPage active={activePage === 'about'} />
      <ServicesPage active={activePage === 'services'} />
      <GalleryPage active={activePage === 'gallery'} onOpenLightbox={openLightbox} />
      <QualityPage active={activePage === 'quality'} />
      <SustainabilityPage active={activePage === 'sustainability'} />
      <CareerPage active={activePage === 'career'} />
      <ContactPage active={activePage === 'contact'} />
      <Lightbox
        item={lightboxItem}
        onClose={closeLightbox}
        onNext={() => stepLightbox(1)}
        onPrev={() => stepLightbox(-1)}
        open={lightboxItem !== null}
      />
      <Footer />
    </div>
  );
}
