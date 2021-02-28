import React from 'react'
import ReactDom from 'react-dom'
import { Route, HashRouter as Router } from 'react-router-dom'

import App from './pages'

ReactDom.render(
    <Router>
        <Route path='/' component={App} />
    </Router>,
    document.getElementById('root')
)
