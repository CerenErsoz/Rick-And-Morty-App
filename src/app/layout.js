import './globals.css';
import Navbar from './components/Navbar'; 
import logo from './assest/icon.png';

export const metadata = {
  title: 'Rick and Morty App',
  description: 'List of Rick and Morty episodes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        <main>{children}</main>
      </body>
    </html>
  );
}
