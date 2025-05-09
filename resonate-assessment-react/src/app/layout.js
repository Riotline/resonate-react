import "./globals.css";

export const metadata = {
  title: "Resonate Assessment",
  description: "React page for the Resonate Assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
