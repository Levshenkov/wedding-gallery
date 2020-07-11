import React from 'react'
import Header from './header'
import Head from './head'

const Dummy = () => {
  return (
    <div className="bg-green-100 w-screen h-screen">
      <Header />
      <Head title="Wedding" />
      <p className="pt-10 text-gray-600 text-sm font-sans font-thin text-center">
        Copyright © 2020 Levshenkov Inc. All rights reserved.
      </p>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
