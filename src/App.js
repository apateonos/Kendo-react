import * as React from 'react';
import products from './projuct.json';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

export default () => {
  return (
    <div>
      <Grid
        data={products}>
        <GridColumn field="ProductName" />
        <GridColumn field="UnitPrice" />
        <GridColumn field="UnitsInStock" />
        <GridColumn field="Discontinued" />
        <GridColumn field="유성우 못생겼어" />
      </Grid>
    </div>
  )
}