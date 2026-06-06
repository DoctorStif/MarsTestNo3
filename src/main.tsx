import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import i18n from './i18n'
import './index.css'
import App from './App.tsx'

const routerBaseName = import.meta.env.BASE_URL.replace(/\/$/, '')

window.marsReactI18nChangeLanguage = (language: string) => {
  void i18n.changeLanguage(language)
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={routerBaseName || undefined}>
    <App />
  </BrowserRouter>,
)
