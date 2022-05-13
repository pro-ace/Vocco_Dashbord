/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { getCSSVariableValue } from '../../../assets/ts/_utils'
import { useEffect } from 'react';
import { getusersstatisticsbycountry } from './core/_requests'

type Props = {
  className: string,
}

const UserGrowthByCountry: React.FC<Props> = ({ className }) => {

  useEffect(() => {
    const fetchData = async () => {
      // Data
      let data = [{
        country: "US",
        visits: 0,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/united-states.svg",
        columnSettings: { fill: am5.color(getCSSVariableValue('--bs-primary')) }
      }, {
        country: "UK",
        visits: 0,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/united-kingdom.svg",
        columnSettings: { fill: am5.color(getCSSVariableValue('--bs-primary')) }
      }, {
        country: "France",
        visits: 0,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/france.svg",
        columnSettings: { fill: am5.color(getCSSVariableValue('--bs-primary')) }
      }, {
        country: "Canada",
        visits: 0,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/canada.svg",
        columnSettings: { fill: am5.color(getCSSVariableValue('--bs-primary')) }
      }, {
        country: "Germany",
        visits: 0,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/germany.svg",
        columnSettings: { fill: am5.color(getCSSVariableValue('--bs-primary')) }
      }, {
        country: "Spain",
        visits: 0,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/spain.svg",
        columnSettings: { fill: am5.color(getCSSVariableValue('--bs-primary')) }
      }, {
        country: "Belgium",
        visits: 0,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/belgium.svg",
        columnSettings: { fill: am5.color(getCSSVariableValue('--bs-primary')) }
      }];
      const { data: res } = await getusersstatisticsbycountry();

      res.users.map((user) => {
        if (user.country === "United States") data[0].visits++;
        if (user.country === "United Kingdom") data[1].visits++;
        if (user.country === "France") data[2].visits++;
        if (user.country === "Canada") data[3].visits++;
        if (user.country === "Germany") data[4].visits++;
        if (user.country === "Spain") data[5].visits++;
        if (user.country === "Belgium") data[6].visits++;

        return true;
      })

      const root = am5.Root.new("usergrowthbycountry");

      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      let chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        layout: root.verticalLayout,
      }));

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "country",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30
        }),
        bullet: function (root, axis, dataItem: any) {
          let dataContext = dataItem.dataContext;
          let icon = dataContext.icon;
          return am5xy.AxisBullet.new(root, {
            location: 0.5,
            sprite: am5.Picture.new(root, {
              width: 24,
              height: 24,
              centerY: am5.p50,
              centerX: am5.p50,
              src: icon.toString()
            })
          });
        }
      }));

      xAxis.get("renderer").labels.template.setAll({
        paddingTop: 20,
        fontWeight: "400",
        fontSize: 10,
        fill: am5.color(getCSSVariableValue('--bs-gray-500'))
      });

      xAxis.get("renderer").grid.template.setAll({
        disabled: true,
        strokeOpacity: 0
      });

      xAxis.data.setAll(data);

      let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      }));

      yAxis.get("renderer").grid.template.setAll({
        stroke: am5.color(getCSSVariableValue('--bs-gray-300')),
        strokeWidth: 1,
        strokeOpacity: 1,
        strokeDasharray: [3]
      });

      yAxis.get("renderer").labels.template.setAll({
        fontWeight: "400",
        fontSize: 10,
        fill: am5.color(getCSSVariableValue('--bs-gray-500'))
      });


      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "visits",
        categoryXField: "country"
      }));

      series.columns.template.setAll({
        tooltipText: "{categoryX}: {valueY}",
        tooltipY: 0,
        strokeOpacity: 0,
        templateField: "columnSettings"
      });

      series.columns.template.setAll({
        strokeOpacity: 0,
        cornerRadiusBR: 0,
        cornerRadiusTR: 6,
        cornerRadiusBL: 0,
        cornerRadiusTL: 6,
      });

      series.data.setAll(data);


      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
      chart.appear(1000, 100);
    }
    fetchData()
      .catch(console.error);
  }, []);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header pt-7">
        {/* begin::Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">Growth by country</span>
          <span className="text-gray-400 pt-2 fw-bold fs-6">Statistics by Countries</span>
        </h3>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-5">
        {/* begin::Chart container */}
        <div id="usergrowthbycountry" className="min-h-auto ps-4 pe-6 mb-3 h-350px"></div>
        {/* end::Chart container */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export { UserGrowthByCountry }
