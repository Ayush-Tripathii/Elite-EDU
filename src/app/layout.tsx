import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";
import { AuthProvider } from "@/context/AuthContext";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { RouteTransition } from "@/components/RouteTransition";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eliteeducation.co.in"),
  title: {
    default: "Elite Education | Classes for CA / CMA / CS — Specialised for CA",
    template: "%s | Elite Education",
  },
  description:
    "Premier coaching institute for CA, CMA & CS in Bhayandar East, Mira Bhayandar. Directed by Prof. Er. Manoj Kumar. Conceptual clarity, shortcut tricks for Mathematics & English, and small batches.",
  keywords: [
    "CA classes Bhayandar East",
    "CMA CS coaching Mira Bhayandar",
    "CA Foundation coaching Bhayandar",
    "CA Intermediate classes Mira Road",
    "CA Final coaching Mumbai",
    "Prof Manoj Kumar Maths",
    "Elite Education Bhayandar",
    "Quantitative Aptitude tricks",
    "Vedic Maths Bhayandar",
  ],
  authors: [{ name: "Prof. Er. Manoj Kumar" }],
  creator: "Elite Education",
  publisher: "Elite Education",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://eliteeducation.co.in",
    siteName: "Elite Education",
    title: "Elite Education | Classes for CA / CMA / CS — Specialised for CA",
    description:
      "Premier CA, CMA & CS coaching in Bhayandar East. 'Maths aur English ko aasaan banate hain.' Lead faculty Prof. Er. Manoj Kumar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Education | Classes for CA / CMA / CS",
    description:
      "Classes for CA / CMA / CS in Bhayandar East. Directed by Prof. Er. Manoj Kumar. Maths aur English ko aasaan banate hain.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // LocalBusiness & EducationalOrganization JSON-LD Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://eliteeducation.co.in/#organization",
        name: siteConfig.brand.name,
        alternateName: "Elite Education Bhayandar",
        url: "https://eliteeducation.co.in",
        description: siteConfig.brand.tagline,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.line1,
          addressLocality: "Bhayandar East, Mira Bhayandar",
          addressRegion: "Maharashtra",
          postalCode: "401105",
          addressCountry: "IN",
        },
        telephone: siteConfig.contact.phone.display,
        founder: {
          "@type": "Person",
          name: siteConfig.brand.leadFaculty.name,
          jobTitle: siteConfig.brand.leadFaculty.title,
          description: siteConfig.brand.leadFaculty.motto,
        },
        sameAs: [
          siteConfig.socials.facebook,
          siteConfig.socials.instagram,
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://eliteeducation.co.in/#localbusiness",
        name: siteConfig.brand.name,
        image: "https://eliteeducation.co.in/images/og-elite.jpg",
        telephone: siteConfig.contact.phone.display,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.line1,
          addressLocality: "Bhayandar East, Mira Bhayandar",
          addressRegion: "Maharashtra",
          postalCode: "401105",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.contact.map.lat,
          longitude: siteConfig.contact.map.lng,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "09:00",
            closes: "20:00",
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen font-sans bg-[#FBF9F4] text-[#0F1B3D] antialiased selection:bg-[#C8A15A] selection:text-white">
        <AuthProvider>
          <SmoothScroll>
            {/* Monogram drawing preloader */}
            <Preloader />

            {/* Luxury interactive cursor */}
            <CustomCursor />

            <RouteTransition>{children}</RouteTransition>
          </SmoothScroll>
        </AuthProvider>
      </body>
    </html>
  );
}
