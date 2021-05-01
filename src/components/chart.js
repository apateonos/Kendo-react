import React from 'react';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend
} from "@progress/kendo-react-charts";
import 'hammerjs';
export default ({ state }) => {
  const { categories, dataList } = state;
  return (
    <>
      <div className="row mb-3">
        <div className="col-6">
          <div className="k-card">
            <Chart style={{ height: 350 }}>
              <ChartTitle text="sus2 Column Chart" />
              <ChartLegend position="top" orientation="horizontal" />
              <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories} startAngle={45} />
              </ChartCategoryAxis>
              <ChartSeries>
                {dataList.map((item, idx) => (
                  <ChartSeriesItem
                    key={idx}
                    type="column"
                    tooltip={{ visible: true }}
                    data={item.data}
                    name={item.name}
                  />
                ))}
              </ChartSeries>
            </Chart>
          </div>
        </div>
        <div className="col-6">
          <div className="k-card">
            <Chart style={{ height: 350 }}>
              <ChartTitle text="Line Chart" />
              <ChartLegend position="top" orientation="horizontal" />
              <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories} startAngle={45} />
              </ChartCategoryAxis>
              <ChartSeries>
                {dataList.map((item, idx) => (
                  <ChartSeriesItem
                    key={idx}
                    type="line"
                    tooltip={{ visible: true }}
                    data={item.data}
                    name={item.name}
                                  />
                              ))}
              </ChartSeries>
            </Chart>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="k-card">
            <Chart style={{ height: 350 }}>
              <ChartTitle text="Area Chart" />
              <ChartLegend position="top" orientation="horizontal" />
              <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories} startAngle={45} />
              </ChartCategoryAxis>
              <ChartSeries>
                {dataList.map((item, idx) => (
                  <ChartSeriesItem
                    key={idx}
                    type="area"
                    tooltip={{ visible: true }}
                    data={item.data}
                    name={item.name}
                                  />
                              ))}
              </ChartSeries>
            </Chart>
          </div>
        </div>
      </div>
    </>
  )
}