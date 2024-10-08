import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@repo/design-system/web/styles/index.css';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import WhatsappBtn from "../components/Layout/WhatsappBtn";
import TopBar from "../components/Layout/TopBar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fitnopolis.com'),
  title: {
    default: 'Fitnopolis - Vive en movimiento',
    template:
      '%s | Fitnopolis - Vive en movimiento',
  },
  description:
    'Tienda online de equipamiento deportivo y accesorios de entrenamiento para un estilo de vida activo. Vive en movimiento con Fitnopilos.',
  applicationName: 'Fitnopolis',
  keywords: ['Fitness', 'Bicicletas', 'Ejercicio', 'Saludable', 'Maquinas', 'Deportes', 'Equipamiento para gimnasio'],
  authors: [{ name: 'Nevobit', url: 'https://nevobit.com' }],
  creator: 'Nevobit Software',
  publisher: 'Nevobit Software',
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es-ES',
    },
  },
  openGraph: {
    title: 'Fitnopolis - Vive en movimiento',
    description:
      'Tienda online de equipamiento deportivo y accesorios de entrenamiento para un estilo de vida activo. Vive en movimiento con Fitnopilos.',
    url: 'https://fitnopolis.com',
    siteName: 'Fitnopolis',
    type: 'website',
    locale: 'es-ES',
  },
  twitter: {
    title: 'Fitnopolis',
    description:
      'Tienda online de equipamiento deportivo y accesorios de entrenamiento para un estilo de vida activo. Vive en movimiento con Fitnopilos.',
    creator: '@nevobitsoftware',
    site: 'Fitnopolis',
    card: 'summary_large_image',
  },
};
interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) =>{
  return (
    <html lang="es">
      <body className={`${poppins.className}`}>
        <TopBar />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsappBtn />
      </body>
    </html>
  );
}


export default RootLayout