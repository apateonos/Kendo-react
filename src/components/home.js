import * as React from 'react';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend
} from "@progress/kendo-react-charts";
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-data-query';
import 'hammerjs';

export default ({ onChange, state }) => {
  const { table, chart, sort, categories } = state;

  return (
    <>
      <div className="k-card" style={{ padding: "6px", marginBottom: "10px" }}>
        <p style={{ marginLeft: "15px", fontWeight: 800, fontSize: "18px" }}>최근 5일간의 데이터</p>
        <Grid
          data={orderBy(table.slice(table.length - 5,table.length), sort)} //더 좋은 방벙이 있는지 확인해보자...
          sortable={true}
          sort={sort}
          onSortChange={(e) => onChange(e)}
        >
          <Column field="date" title="날짜" />
          <Column field="total_product" title="상품수량" />
          <Column field="additional_product" title="추가상품" />
          <Column field="changed_product" title="변경상품" />
        </Grid>
      </div>
      <div>
        <div className="row mb-3">
          <div className="col-4">
            <div className="k-card">
              <Chart style={{ height: 250 }}>
                <ChartTitle text="상품 수량" />
                <ChartLegend position="top" orientation="horizontal" />
                <ChartCategoryAxis>
                  <ChartCategoryAxisItem categories={categories.slice(categories.length - 5, categories.length)} startAngle={45} />
                </ChartCategoryAxis>
                <ChartSeries>
                  <ChartSeriesItem
                    type='area'
                    
                    tooltip={{ visible: true }}
                    data={chart.length > 0 ? chart[0].data.slice(chart[0].data.length - 5, chart[0].data.length) : ''}
                  />
                </ChartSeries>
              </Chart>
            </div>
          </div>
          <div className="col-4">
            <div className="k-card">
              <Chart style={{ height: 250 }}>
                <ChartTitle text="추가 상품" />
                <ChartLegend position="top" orientation="horizontal" />
                <ChartCategoryAxis>
                  <ChartCategoryAxisItem categories={categories.slice(categories.length - 5, categories.length)} startAngle={45} />
                </ChartCategoryAxis>
                <ChartSeries>
                  <ChartSeriesItem
                    type='area'
                    style="smooth"
                    tooltip={{ visible: true }}
                    color='yellow'
                    data={chart.length > 0 ? chart[1].data.slice(chart[1].data.length - 5, chart[1].data.length) : ''}
                    //name={chart.length > 0 ? chart[0].name : ''}
                  />
                </ChartSeries>
              </Chart>
            </div>
          </div>
          <div className="col-4">
            <div className="k-card">
              <Chart style={{ height: 250 }}>
                <ChartTitle text="변경 상품" />
                <ChartLegend position="top" orientation="horizontal" />
                <ChartCategoryAxis>
                  <ChartCategoryAxisItem categories={categories.slice(categories.length - 5, categories.length)} startAngle={45} />
                </ChartCategoryAxis>
                <ChartSeries>
                  <ChartSeriesItem
                    type='area'
                    style="smooth"
                    tooltip={{ visible: true }}
                    color='green'
                    data={chart.length > 0 ? chart[2].data.slice(chart[2].data.length - 5, chart[2].data.length) : ''}
                    //name={chart.length > 0 ? chart[0].name : ''}
                  />
                </ChartSeries>
              </Chart>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <div className="k-card">
              <Chart style={{ height: 350 }}>
                <ChartTitle text="바 데이터" />
                <ChartLegend position="top" orientation="horizontal" />
                <ChartCategoryAxis>
                  <ChartCategoryAxisItem categories={categories.slice(categories.length - 5, categories.length)} startAngle={45} />
                </ChartCategoryAxis>
                <ChartSeries>
                  {chart.map((item, idx) => (
                    <ChartSeriesItem
                      key={idx}
                      type="column"
                      tooltip={{ visible: true }}
                      data={item.data.slice(item.data.length - 5, item.data.length)}
                      name={item.name}
                    />
                  ))}
                </ChartSeries>
              </Chart>
            </div>
          </div>
          <div className="col-8">
            <div className="k-card">
              <Chart style={{ height: 350 }}>
                <ChartTitle text="라인 데이터" />
                <ChartLegend position="top" orientation="horizontal" />
                <ChartCategoryAxis>
                  <ChartCategoryAxisItem categories={categories.slice(categories.length - 5, categories.length)} startAngle={45} />
                </ChartCategoryAxis>
                <ChartSeries>
                  {chart.map((item, idx) => (
                    <ChartSeriesItem
                      key={idx}
                      type="line"
                      style="smooth"
                      tooltip={{ visible: true }}
                      data={item.data.slice(item.data.length - 5, item.data.length)}
                      name={item.name}
                                    />
                                ))}
                </ChartSeries>
              </Chart>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}