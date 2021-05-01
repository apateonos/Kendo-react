import React, { useEffect } from 'react';
import Route from '../../route/route';
import { useDispatch } from 'react-redux';
import { getProductListApi } from '../../store/action/product';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductListApi.request());
  })

  return (
    <Route />
  )
}