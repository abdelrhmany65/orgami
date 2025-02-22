import "bootstrap/dist/css/bootstrap.min.css"; 
import 'flag-icons/css/flag-icons.min.css';
import { I18nProvider } from './i18n/I18nProvider';
import Script from "next/script";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


export const metadata = {
  title: "",
  description: "",

};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head />
      <body>
        <I18nProvider>
          <Header/>
            
              {children}
            
            <Footer />
        </I18nProvider>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
