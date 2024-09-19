import './globals.css';

export const metadata = {
  title: 'Rick and Morty App',
  description: 'List of Rick and Morty episodes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
