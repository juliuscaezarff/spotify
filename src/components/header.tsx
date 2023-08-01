import Logo from '../assets/spotify-logo.png'

import Image from 'next/image'


export function Header() {
  return (
    <header>
      <div className="flex fixed bg-black w-full px-3 md:px-20 py-4">
        <div className="container flex items-center mx-auto">
          <div>
            <a href="#">
              <Image
                className="w-20 md:w-[125px]"
                src={Logo}
                alt="Logo Spotify"
              />
            </a>
          </div>
          <div className="flex justify-end flex-1 md:hidden text-white text-3xl">
            <i></i>
          </div>
          <div className="items-end flex-1 text-white font-bold hidden md:flex">
            <nav className="flex-1">
              <ul className="flex justify-end flex-1">
                <li className="px-4">
                  <a className="hover:text-hoverspt text-sm" href="">
                    Premium
                  </a>
                </li>
                <li className="px-4">
                  <a className="hover:text-hoverspt text-sm" href="">
                    Ajuda
                  </a>
                </li>
                <li className="px-4">
                  <a className="hover:text-hoverspt text-sm" href="">
                    Baixar
                  </a>
                </li>
                <li className="px-4">
                  <span className="border-r border-white"></span>
                </li>
                <li className="px-4">
                  <a href="#" className="hover:text-hoverspt text-sm">
                    Inscrever-se
                  </a>
                </li>
                <li className="px-4">
                  <a href="#" className="hover:text-hoverspt text-sm">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
