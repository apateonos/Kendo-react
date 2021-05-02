import React, { useEffect } from 'react';
import { Product } from '../components/index';
import { withRouter } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { process } from '@progress/kendo-data-query';
import { IntlService } from '@progress/kendo-react-intl';

const DATE_FORMAT = 'yyyy-mm-dd';
const intl = new IntlService();

const initialState = {dataResult: [], dataState: null, local: '', dropDownList: []};

const ProductContainer = ({ products }) => {
  const [ state, setState ] = React.useState(initialState);

  useEffect(() => {
    if (products.length <= 0) return false;

    const dataState = {
      skip: 0,
      take: 20,
      sort: [{ field: 'fullDate', dir: 'desc' }],
      group: [{ field: 'fullDate' }]
    };
    
    for(let i in products) {
      const self = products[i];
      const time = intl.parseDate(self.date, DATE_FORMAT);

      self.fullDate = time;
    }

    const locals = [{mart: 'SUS_02'}];

    setState({
      dataResult: process(products, dataState), 
      dataState, 
      local: locals[0], 
      dropDownList: locals
    })
  }, [products]);

  const onChangeHandler = (e) => {
    const name = e.target.props.name;

    switch (name) {
      case 'grid':
        return setState({
          ...state,
          dataResult: process(products, e.dataState),
          dataState: e.dataState
        });

      case 'dropDown':
        return setState({ ...state, local: e.target.value });

      default:
        break;
    }
  }

  return (
    <Product 
      state={state}
      onChange={onChangeHandler}
    />
  )
}

const mapStateToProps = (state) => ({
  products: state.productReducer.products
})

export default withRouter(
  compose(connect(mapStateToProps))(ProductContainer)
);