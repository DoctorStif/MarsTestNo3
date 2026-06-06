export {};

declare global {
  interface Window {
    closeLightbox?: () => void;
    lbStep?: (direction: number) => void;
    marsReactI18nChangeLanguage?: (language: string) => void;
    showPage?: (page: string) => void;
  }
}
