import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chart } from '../components/index';

const initialState = { categories: [], dataList: [] };
export default () => {
  const [ state, changeState ] = useState(initialState);
  const { data } = useSelector(state => ({ data: state.productReducer.data }));

  useEffect(() => {
    if (data.length <= 0) return false;
    
    let categories = [];
    let quantity = [];
    let additional = [];
    let changed = [];
    
    data.forEach(e => {
      const { date, product_quantity, additional_products, changed_products } = e;
      let splitedDate = date.split('-').map(str => str.charAt(0) === '0' ? str.slice(1) : str);

      categories.push(`${splitedDate[1]}월 ${splitedDate[2]}일`);
      quantity.push(product_quantity);
      additional.push(additional_products);
      changed.push(changed_products);
    });

    let dataList = [
      {
        name: "상품 수량",
        data: quantity
      },
      {
        name: "추가 상품",
        data: additional
      },
      {
        name: "변경 상품",
        data: changed
      }
    ]
    changeState({ ...state, categories, dataList });
  }, [data]);

  return (
    <Chart state={state} />
  )
}