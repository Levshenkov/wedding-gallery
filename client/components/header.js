import React from 'react'
import ph from '../assets/images/50.jpg'
import { history } from '../redux'

const Header = () => {
  return (
    <div>
      <div
        className="container mx-auto rounded-b-lg shadow-xl bg-cover bg-bottom"
        style={{ backgroundImage: `url(${ph})` }}
      >
        <nav className="flex justify-between p-8  items-center mb-16">
          <p className="font-sans text-gray-300 text-sm md:text-4xl font-thin">Denys & Angelina</p>
          <ul className="list-reset flex">
            <li>
              <button
                type="button"
                className="text-gray-300 text-2xl p-2 md:p-4 font-thin underline"
                onClick={() => {
                  history.push('/gallery')
                }}
              >
                Gallery
              </button>
            </li>
          </ul>
        </nav>
        <div className="text-center text-white pb-48 pt-48 shadow-xl">
          <h1 className="font-sans font-thin">We have been merried since:</h1>
          <h2 className="font-thin text-sm tracking-wide mt-5 mb-10">June 20, 2020</h2>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
