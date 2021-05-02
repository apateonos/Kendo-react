import React, { useState, useEffect } from 'react';
import { Home } from '../components/index';
import { withRouter } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';

const sort = [{ field: 'date', dir: 'asc' }];
const initialState = { sort, table: [], chart: [], categories: [] };

const HomeContainer = ({ products }) => {
  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    if (products.length <= 0) return false;
    let table = [];
    
    products.forEach(item => {
      const i = table.findIndex(e => e.date === item.date);
      if (i >= 0) {
        const self = table[i];
        self.total_product += 1;
        self.additional_product += 1;
      } else {
        const temp = {date: item.date, total_product: 1, additional_product: 1, changed_product: 0};
        table.push(temp);
      };

      if (item.update_at !== null) {
        const j = table.findIndex(e => e.date === item.update_at);
        if (j >= 0) {
          const self = table[j];
          self.changed_product += 1;
        } else {
          const temp = {date: item.update_at, total_product: 0, additional_product: 0, changed_product: 1};
          table.push(temp);
        }
      }
    });

    table.sort((a, b) => {
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; 
    });
    
    for (let i = 1; i < table.length; i++) {
      const dateArr = table[i].date.split('-');
      const month = '';
      if (dateArr[1] === '11') {
        month = '12';
      } else {
        let temp = Number(dateArr[1]) + 1;
        temp.toString().length === 1 ? month = `0${temp}` : month = temp;
      }

      table[i].date = `${month}/${dateArr[2]}` 
      table[i].total_product = table[i].additional_product + table[i-1].total_product;
    }

    let categories = [];
    let quantity = [];
    let additional = [];
    let changed = [];
    
    table.forEach(e => {
      const { date, total_product, additional_product, changed_product } = e;
      let splitedDate = date.split('-').map(str => str.charAt(0) === '0' ? str.slice(1) : str);

      categories.push(date);
      quantity.push(total_product);
      additional.push(additional_product);
      changed.push(changed_product);
    });

    let chart = [
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
    
    setState({ ...state, table, chart, categories });
  }, [products]);

  const onChangeHandler = (e) => {
    setState({ ...state, sort: e.sort });
  }

  return <Home 
    onChange={onChangeHandler}
    state={state} 
  />
}

const mapStateToProps = (state) => ({
  products: state.productReducer.products
})

export default withRouter(
  compose(connect(mapStateToProps))(HomeContainer)
);