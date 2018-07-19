import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Menu from './containers'

const App = () => (
    <Provider store={store}>
        <Menu />
    </Provider>
)

export default App
