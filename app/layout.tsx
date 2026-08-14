import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
const geist = Geist({ variable: "--font", subsets: ["latin"] });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const metadata: Metadata = { title: "FrotaTech Soluções em Tecnologia", description: "Sistemas, automações com IA, portais e experiências digitais que transformam resultados.", other: { "codex-preview": "development" }, icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body className={geist.variable}>{children}</body></html> }
