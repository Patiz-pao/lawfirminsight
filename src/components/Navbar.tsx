import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center max-w-[1140px] px-5 lg:px-0">
        <div className="text-white text-xl font-bold">MyApp</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-gray-300 hover:text-white">Home</a>
          </li>
          <li>
            <a href="/about" className="text-gray-300 hover:text-white">About</a>
          </li>
          <li>
            <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
          </li>
          <li>
            <a href="/products" className="text-gray-300 hover:text-white">Products</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;