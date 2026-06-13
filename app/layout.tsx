import LoadingOverlay from "../components/LoadingOverlay";
import SmoothScrolling from "../components/SmoothScrolling";
import { LoadingProvider } from "../contexts/LoadingContext";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Product Designer, Web Dev",
  description: "nalendra's Portfolio",
  icons: {
    icon: "/img/nalenhead.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LoadingProvider>
          <LoadingOverlay />
          <SmoothScrolling>{children}</SmoothScrolling>
        </LoadingProvider>
      </body>
    </html>
  );
}
