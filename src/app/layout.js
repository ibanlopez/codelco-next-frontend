import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-ES">
      <body className="grid grid-cols-1 w-100vw max-w-screen-[1920px] overflow-x-hidden">
        <header className="h-10 bg-red-400">Header</header>
        <main className="min-h-[93vh]">{children}</main>
        <footer className="h-10 bg-red-400 mt-auto">Footer</footer>
      </body>
    </html>
  );
}
