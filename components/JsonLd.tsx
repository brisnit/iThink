import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["NGO", "EducationalOrganization"],
    name: "iTHINKBIG",
    alternateName: "iTHINKBIG.org",
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    foundingDate: "2000",
    foundingLocation: "San Diego, CA",
    nonprofitStatus: "Nonprofit501c3",
    founder: { "@type": "Person", name: "Chad Furlong" },
    telephone: "+16198884856",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
