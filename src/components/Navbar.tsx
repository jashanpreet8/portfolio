'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const path = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur py-4 z-50 flex justify-center space-x-8">
      <Link href="/" className="font-bold text-xl hover:text-blue-600">
        Jashan
      </Link>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`hover:text-blue-600 transition ${path === href ? 'text-blue-700 font-semibold' : 'text-gray-700'}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}