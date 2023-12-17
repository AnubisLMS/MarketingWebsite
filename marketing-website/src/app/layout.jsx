import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'; 

export const metadata = {
  title: "Anubis LMS",
  description: "Anubis LMS Created by Students, Tailored for Students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
