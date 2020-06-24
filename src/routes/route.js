import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Homepage } from '../pages/Homepage/Homepage'
import { Contactpage } from '../pages/Contactpage/Contactpage'
import ProductListPage from '../pages/Productlistpage'
import ProductDetail from '../pages/ProductDetailPage'
import {Cartpage} from '../pages/Cartpage/Cartpage'

const Router = () => (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/woman' component={ProductListPage}/>
        <Route exact path='/men' component={ProductListPage}/>
        <Route exact path='/girl' component={ProductListPage}/>
        <Route exact path='/boy' component={ProductListPage}/>
        <Route exact path='/Products/:id' component={ProductDetail} />
        <Route exact path='/contact-with-us' component={Contactpage} />
        <Route exact path='/cartpage' component={Cartpage} />

    </Switch>
)

export default Router