import React, { useEffect } from 'react';

import { getProducts } from './redux/actions/action';
import {useDispatch,useSelector} from 'react-redux';
import store from '../store';



function Test1() {

const {products} = useSelector(state => state.getProductsdata || {});
console.log(products);

const dispatch = useDispatch();

useEffect(()=>{
dispatch(getProducts());
},[dispatch]);

  return (


    <div>test1</div>
  )
}

export default Test1