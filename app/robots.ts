import type { MetadataRoute } from 'next';

const baseUrl = 'https://oguzhancart.dev';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: [] },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
