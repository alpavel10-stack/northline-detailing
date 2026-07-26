import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NORTHLINE — концепт детейлинг-студии в Москве",
    template: "%s · NORTHLINE",
  },
  description:
    "Концептуальный сайт студии автомобильного детейлинга: защитная оклейка, керамика, полировка, химчистка и комплексный уход.",
  applicationName: "NORTHLINE",
  keywords: [
    "детейлинг Москва",
    "защитная плёнка",
    "керамическое покрытие",
    "полировка кузова",
    "химчистка салона",
  ],
  authors: [{ name: "NORTHLINE Concept" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "NORTHLINE",
    title: "NORTHLINE — детейлинг без лишнего блеска",
    description:
      "Защита кузова, коррекция лака и уход за салоном с понятным планом работ.",
    images: [
      {
        url: "/og.png",
        width: 1792,
        height: 921,
        alt: "NORTHLINE — детейлинг без лишнего блеска",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NORTHLINE — концепт детейлинг-студии",
    description:
      "Защита кузова, коррекция лака и уход за салоном с понятным планом работ.",
    images: ["/og.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
