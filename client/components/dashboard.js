import React from 'react'
import dubai from '../assets/images/01.jpg'
import db from '../assets/images/02.jpg'

const Dashboard = () => {
  return (
    <div className="  w-48 h-48">
      <img className="p-4" src={dubai} alt="dubai" />
      <img className="p-4" src={db} alt="db" />
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
