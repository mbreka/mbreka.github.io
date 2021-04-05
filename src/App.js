import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProductProvider, ProductContext } from './Context/ProductContext/ProductContext'
import { UserProvider } from './Context/UserContext/UserContext'
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { SnackbarProvider, useSnackbar } from 'notistack';

import './App.css';

import Navigation from './Components/Navigation/Navigation';
import Landing from './Containers/Landing/Landing';
import Products from './Containers/Products/Products';
import Product from './Containers/Product/Product';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';
import Cart from './Containers/Cart/Cart';
import Preferences from './Containers/Preferences/Preferences';
import References from './Containers/References/References';
import Rubrics from './Containers/Rubrics/Rubrics';
import Liked from './Containers/Liked/Liked';
import { Button } from 'reactstrap';
import {CustomThemeContext} from './Context/CustomThemeContext/CustomThemeContext';


const App = () => {
  const [theme, setTheme] = useContext(CustomThemeContext);
  
    return (
      <Router>
        <SnackbarProvider maxSnack={3} autoHideDuration={1000}>
          <UserProvider>
            <ProductProvider>
              <ThemeProvider theme={theme}>
                <Navigation />
                <Switch>
                  <Route path="/" exact component={Landing} />
                  <Route path="/products" exact component={Products} />
                  <Route path="/product/:id" component={Product} />
                  <Route path="/preferences" exact component={Preferences} />
                  <Route path="/register" exact component={Register} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/mycart" exact component={Cart} />
                  <Route path="/references" exact component={References} />
                  <Route path="/rubrics" exact component={Rubrics} />
                  <Route path="/myliked" exact component={Liked} />
                </Switch>
              </ThemeProvider>
            </ProductProvider>
          </UserProvider>
        </SnackbarProvider>
      </Router>
    );
}

export default App;
