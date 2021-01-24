import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.seriesIndex,
      series: [
        [
          {
            name: "Dataset1",
            data: [100, 410, 350, 510, 490, 910, 148],
          },
          {
            name: "Dataset2",
            data: [500, 110, 550, 710, 900, 410, 700],
          },
        ],
        [
          {
            name: "Dataset1",
            data: [60, 140, 530, 150, 90, 190, 700],
          },
          {
            name: "Dataset2",
            data: [400, 600, 340, 100, 90, 600, 300],
          },
        ],
        [
          {
            name: "Dataset1",
            data: [20, 450, 270, 800, 300, 190, 80],
          },
          {
            name: "Dataset2",
            data: [650, 110, 570, 710, 700, 300, 200],
          },
        ],
        [
          {
            name: "Dataset1",
            data: [50, 300, 360, 100, 900, 50, 900],
          },
          {
            name: "Dataset2",
            data: [540, 350, 350, 500, 670, 450, 170],
          },
        ],
        [
          {
            name: "Dataset1",
            data: [560, 410, 300, 100, 590, 710, 168],
          },
          {
            name: "Dataset2",
            data: [500, 110, 550, 710, 900, 410, 700],
          },
        ],
        [
          {
            name: "Dataset1",
            data: [20, 450, 270, 800, 300, 190, 80],
          },
          {
            name: "Dataset2",
            data: [650, 110, 570, 710, 700, 300, 200],
          },
        ],
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
  componentDidUpdate(prevProps, prevState) {
    if (this.props.seriesIndex !== prevProps.seriesIndex) {
      this.setState({ ...this.state, index: this.props.seriesIndex });
    }
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series[this.state.index]}
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default LineGraph;
