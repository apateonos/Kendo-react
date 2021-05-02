import * as React from 'react';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { ExcelExport } from '@progress/kendo-react-excel-export';

export default ({ state, onChange }) => {
  let _export;
  const exportExcel = () => {
      _export.save();
  }

  return (
    <div>
      <ExcelExport
        data={state.dataResult}
        ref={(exporter) => { _export = exporter; }}
        >
        <Grid
          name="grid"
          style={{height: "calc(100vh - 45px)"}}
          sortable={true}
          filterable={true}
          groupable={true}
          reorderable={true}
          pageable={{ buttonCount: 5, pageSizes: [10, 20, 50, 100] }}
          data={state.dataResult}
          {...state.dataState}
          onDataStateChange={(e) => onChange(e)}
        >
          <GridToolbar>
            지점
            <DropDownList
              value={state.local}
              textField="mart"
              name="dropDown"
              onChange={(e) => onChange(e)}
              data={state.dropDownList} />
            <button
              title="Export to Excel"
              className="k-button k-primary"
              onClick={exportExcel}
            >
              Export to Excel
            </button>&nbsp;
          </GridToolbar>
          <GridColumn field="fullDate" filter="date" width={200} format="{0:D}" title="등록 날짜" />
          <GridColumn field="id" filterable={false} width={100} title="상품 번호" />
          <GridColumn field="product_name" width={300} title="상품명" />
          <GridColumn field="product_price" filter="numeric" width={200} title="상품 가격" />
          <GridColumn field="manufacturer" title="제조사"/>
          <GridColumn field="information"  title="영양 정보"/>
        </Grid>
      </ExcelExport>
    </div>
  );
}