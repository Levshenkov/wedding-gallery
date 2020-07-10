import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import Dashboard from './dashboard'
import Profile from './profile'
import MainPage from './main'

const Home = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/dashboard" component={() => <Dashboard />} />
        <Route exact path="/dashboard/profile/:user" component={() => <Profile />} />
        <Route exact path="/dashboard/main" component={() => <MainPage />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
