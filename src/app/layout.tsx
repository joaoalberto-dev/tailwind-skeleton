import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tailwind Skeleton",
    description: "Tailwind Skeleton",
};

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
