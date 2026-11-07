import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elite Education — CA / CMA / CS Specialised",
    short_name: "Elite Education",
    description:
      "Premier coaching institute for CA, CMA & CS in Bhayandar East. Directed by Prof. Er. Manoj Kumar.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF9F4",
    theme_color: "#0F1B3D",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
