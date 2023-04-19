import "./globals.css";

export const metadata = {
  title: "List + Detail Modal",
  description: "Parallel Route for List + Modal Detail View",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
