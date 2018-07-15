import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import fetchData from './actions/actionCreator'
import Menu from './containers'

store.dispatch(fetchData())

const App = () => (
    <Provider store={store}>
        <Menu />
    </Provider>
)

export default App
