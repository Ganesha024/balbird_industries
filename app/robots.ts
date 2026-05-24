import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/'], // Disallow crawling of internal dashboard
    },
    sitemap: 'https://balbirdindustries.com/sitemap.xml',
  };
}
