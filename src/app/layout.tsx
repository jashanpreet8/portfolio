import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Jashan – Portfolio',
  description: 'Portfolio of Jashan, CS Student & Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="scroll-wrapper">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}