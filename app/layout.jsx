import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Crito AI Receptionist",
  description: "Automate calls with AI voice agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <main className="overflow-x-hidden">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
