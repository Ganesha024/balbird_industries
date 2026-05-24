import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://balbirdindustries.com';

  const routes = [
    '',
    '/about',
    '/capabilities',
    '/capacity-ecosystem',
    '/insights',
    '/join-network',
    '/mobility-sectors',
    '/network',
    '/request-strategic-discussion',
    '/resources',
    '/active-programs',
    '/active-requirements',
    '/strategic-programs',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
