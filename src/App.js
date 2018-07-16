import React from 'react'
import { Provider } from 'react-redux'
import fetchData from 'actions/actionCreator'
import store from './store'
import Menu from './containers'

store.dispatch(fetchData())

const App = () => (
    <Provider store={store}>
        <Menu />
    </Provider>
)

export default App
