import React from 'react'
import { Route } from 'react-router-dom'

import Home from './homepage'
import Login from './login'

function All() {
    return (
        <div>
            <Route path='/' exact component={Login} />
            <Route path='/Home' component={Home} />
        </div>
    )
}

export default All