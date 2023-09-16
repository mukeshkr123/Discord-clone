import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
=======
>>>>>>> 8287ecbfec6af1214eb1daee334df50d8480b9fd

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team chat",
  description: "A application to connect with",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
<<<<<<< HEAD
        <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
=======
        <body className={font.className}>
>>>>>>> 8287ecbfec6af1214eb1daee334df50d8480b9fd
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-clone"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
