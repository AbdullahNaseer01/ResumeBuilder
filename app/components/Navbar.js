import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <div>
      <a
        className="my-1 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
        href="#"
      >
        <img 
          src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
          style={{ height: 20 }}
          alt=""
          loading="lazy"
        />
      </a>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar