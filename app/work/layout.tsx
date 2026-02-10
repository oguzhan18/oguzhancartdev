import type { Metadata } from 'next';

const baseUrl = 'https://oguzhancart.dev';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects by Oguzhan Cart: Turkuvaz Media PATH, Teamso HR, Dopinger CMS. Frontend development with Angular, React, Next.js, Vue.js. Enterprise CMS, SaaS, and e-commerce.',
  alternates: { canonical: `${baseUrl}/work` },
  openGraph: {
    title: 'Work | Oguzhan Cart - Selected Projects',
    description: 'Portfolio and case studies - Media platforms, HR SaaS, SEO CMS. Frontend development projects.',
    url: `${baseUrl}/work`,
  },
  twitter: { card: 'summary_large_image', title: 'Work | Oguzhan Cart' },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
