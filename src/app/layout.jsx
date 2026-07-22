import '../index.css';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Formatyk - Corporate Design System',
  description: 'The next generation of predictive intelligence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background-page text-text-primary selection:bg-accent-electric selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          <Navbar />
          <main className="flex-1 flex flex-col pt-20">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-center" toastOptions={{ 
            style: { 
              background: '#333', 
              color: '#fff', 
              borderRadius: '100px',
              padding: '12px 24px'
            } 
          }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
