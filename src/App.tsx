import { useState } from 'react'
import { useQuery } from 'react-query'

import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

import { Wrapper }from './App.styles'

const App = () => {
  return (
    <div className="App">
      <AddShoppingCartIcon />
    </div>
  );
}

export default App;
