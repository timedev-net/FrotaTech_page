import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
const geist = Geist({ variable: "--font", subsets: ["latin"] });
export const metadata: Metadata = { title: "FrotaTech Soluções em Tecnologia", description: "Sistemas, automações com IA, portais e experiências digitais que transformam resultados.", other: { "codex-preview": "development" }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body className={geist.variable}>{children}</body></html> }
