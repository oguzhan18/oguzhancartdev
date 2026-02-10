import type { Metadata } from 'next';

const baseUrl = 'https://oguzhancart.dev';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Oguzhan Cart - Frontend Developer. Available for freelance and full-time. Istanbul, Turkey. Email and social links.',
  alternates: { canonical: `${baseUrl}/contact` },
  openGraph: {
    title: 'Contact | Oguzhan Cart - Frontend Developer',
    description: 'Contact Oguzhan Cart for frontend development projects. Based in Istanbul.',
    url: `${baseUrl}/contact`,
  },
  twitter: { card: 'summary', title: 'Contact | Oguzhan Cart' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
