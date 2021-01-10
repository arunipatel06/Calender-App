import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Desktops",
          data: [100, 410, 350, 510, 490, 910, 148],
        },
        {
          name: "Laptops",
          data: [500, 110, 550, 710, 900, 410, 700],
        },
      ],
      legend: {
        show: false,
      },
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "2020",
            "Jan20",
            "Feb20",
            "Mar20",
            "Apr20",
            "May20",
            "Jun20",
            "Jul20",
            "Aug20",
            "Sep20",
          ],
        },
        yaxis: {
          min: 100,
          max: 1000,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default LineGraph;
