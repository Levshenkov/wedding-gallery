import React from 'react'
import ph from '../assets/images/136.jpg'
import { history } from '../redux'

const GHeader = () => {
  return (
    <div>
      <div
        className="mx-auto rounded-b-lg shadow-xl bg-cover bg-bottom"
        style={{ backgroundImage: `url(${ph})` }}
      >
        <nav className="flex justify-between p-4  items-center mb-4">
          <p className="font-sans text-gray-300 text-sm md:text-3xl font-thin">Denys & Angelina</p>
          <ul className="list-reset flex">
            <li>
              <button
                type="button"
                className="text-gray-300 text-sm md:text-3xl p-2 md:p-4 font-thin underline"
                onClick={() => {
                  history.push('/')
                }}
              >
                Go to main
              </button>
            </li>
          </ul>
        </nav>
        <div className="text-center text-white pb-12 pt-12 shadow-xl">
          <h1 className="font-thin">We have been merried since:</h1>
          <h2 className="font-thin text-sm tracking-wide mt-10 mb-4">June 20, 2020</h2>
        </div>
      </div>
    </div>
  )
}

export default React.memo(GHeader)
