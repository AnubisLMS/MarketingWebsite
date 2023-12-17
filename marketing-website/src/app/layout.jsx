import "./globals.css";

export const metadata = {
  title: "Anubis LMS",
  description: "Anubis LMS Created by Students, Tailored for Students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
