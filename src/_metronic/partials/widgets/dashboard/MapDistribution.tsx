/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import * as am5 from "@amcharts/amcharts5"
import * as am5map from "@amcharts/amcharts5/map"
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"
import { getCSSVariableValue } from '../../../assets/ts/_utils'
import { useEffect } from 'react'
import {getCountries} from './core/_requests'
import countryCodeData from './data/country';
import { useState } from 'react';

type Props = {
  className: string,
}

const MapDistribution: React.FC<Props> = ({ className }) => {

  const [countryData, setCountryData] = useState<Array<string>>([]);

  useEffect(() => {
    let countries = [];
    const fetchData = async () => {
      const {data: res} = await getCountries();
      countries = res.data.map(c => {
        let code = '';
        countryCodeData.forEach(eCode => {
          if (eCode.Name === c.country) code = eCode.Code;
        });
        return code;        
      })
      setCountryData(countries);

      setTimeout(() => {
        fetchData()
          .catch(console.error);
      }, 7200000)
    }
    fetchData()
    .catch(console.error);
  }, []);

  useEffect(() => {
    if (!countryData.length) {
      return
    }
    const root = am5.Root.new("mapdistrubution");
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0
      })
    );
    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      fill: am5.color(getCSSVariableValue('--bs-gray-300')),
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(getCSSVariableValue('--bs-success')),
    });

    polygonSeries.mapPolygons.template.states.create("active", {
      fill: am5.color(getCSSVariableValue('--bs-success')),
    });

    // Highlighted Series
    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeriesHighlighted = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        //geoJSON: am5geodata_usaLow,
        geoJSON: am5geodata_worldLow,
        include: countryData
      })
    );

    polygonSeriesHighlighted.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
    });

    polygonSeriesHighlighted.mapPolygons.template.set(
      "fill",
      am5.color(getCSSVariableValue('--bs-primary')),
    );

    polygonSeriesHighlighted.mapPolygons.template.states.create("hover", {
      fill: root.interfaceColors.get("primaryButtonHover"),
    });

    polygonSeriesHighlighted.mapPolygons.template.states.create("active", {
      fill: root.interfaceColors.get("primaryButtonHover"),
    });

    chart.appear(1000, 100);

    return () => {
      if (root) {
        root.dispose()
      }
    }
  }, [countryData]);

  
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header pt-7">
        {/* begin::Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">Map Distribution</span>
        </h3>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-5">
        {/* begin::Chart container */}
        <div id="mapdistrubution" className="min-h-auto ps-4 pe-6 mb-3 h-350px"></div>
        {/* end::Chart container */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export { MapDistribution }
