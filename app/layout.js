import "bootstrap/dist/css/bootstrap.min.css"; 
import 'flag-icons/css/flag-icons.min.css';
import { I18nProvider } from './i18n/I18nProvider';
import Script from "next/script";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "OrigamiTechs | حلول تقنية مبتكرة لتطوير الأعمال",
  description: "نحن شركة متخصصة في تقديم حلول برمجية متكاملة مع فريق من الخبراء. نقدم خدمات تصميم UI/UX، تطوير تطبيقات الجوال، تحليل البيانات، تطوير الويب، وتطوير الأنظمة باستخدام أحدث التقنيات لضمان نجاح أعمالك.",
  keywords: "OrigamiTechs, حلول تقنية, تطوير البرمجيات, تصميم UI/UX, تطبيقات الجوال, تحليل البيانات, تطوير الويب, تطوير الأنظمة, التكنولوجيا, الأمان, المدينة المنورة, المملكة العربية السعودية",
  authors: [{ name: "OrigamiTechs" }],
  openGraph: {
    title: "OrigamiTechs | حلول تقنية مبتكرة لتطوير الأعمال",
    description: "اكتشف حلولنا التقنية المتكاملة لتطوير أعمالك باستخدام أحدث التقنيات مع فريق محترف من الخبراء.",
    url: "https://origmaitechs.com/",
    type: "website",
    images: [
      {
        // url: "https://origmaitechs.com/path-to-your-image.jpg", // استبدل بعنوان الصورة المناسب
        // alt: "OrigamiTechs",
      },
    ],
  },
  // يمكنك إضافة canonical إذا رغبت
  alternates: {
    canonical: "https://origmaitechs.com/"
  }
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
