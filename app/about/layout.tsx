import type { Metadata } from 'next';

const baseUrl = 'https://oguzhancart.dev';

export const metadata: Metadata = {
  title: 'About',
  description: 'Oguzhan Cart - Frontend Developer with 6+ years of experience. Career timeline, expertise in Angular, React, Next.js, Vue.js, TypeScript, and Three.js. Based in Istanbul, Turkey.',
  alternates: { canonical: `${baseUrl}/about` },
  openGraph: {
    title: 'About | Oguzhan Cart - Frontend Developer',
    description: 'Career timeline, expertise and experience of Oguzhan Cart, Frontend Developer in Istanbul.',
    url: `${baseUrl}/about`,
  },
  twitter: { card: 'summary_large_image', title: 'About | Oguzhan Cart' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
