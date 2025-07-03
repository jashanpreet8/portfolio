import { Link } from 'react-router-dom'

export default function Navbar() {
  const links = ['Home', 'Resume', 'Projects', 'Contact']
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-10 p-4 flex justify-end space-x-8">
      {links.map(label => (
        <Link
          key={label}
          to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
          className="text-[#7D3C98] font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#7D3C98] after:w-0 hover:after:w-full after:transition-all"
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}