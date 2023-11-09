import React from "react";
import ReactApexChart from 'react-apexcharts';

class ActivityChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69]
            }],
            options: {
                chart: {
                    type: 'line',
                    background: 'transparent',
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                grid: {
                    show: true,
                    borderColor: '#2C2C2C',
                    padding: {
                        left: 30,
                    },
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                    row: {
                        colors: undefined,
                    },
                    column: {
                        colors: undefined,
                    }
                },
                colors: ['#2563EB'],
                xaxis: {
                    labels: {
                        style: {
                            colors: '#64748B',
                            fontSize: '12px',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                    tickPlacement: true,
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                },
                yaxis: {
                    tickAmount: 4,
                    min: 0,
                    max: 100,
                    labels: {
                        show: true,
                        style: {
                            colors: ['#77838F'],
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                        },
                        formatter: function (val) {
                            return val + " %";
                        },
                    },
                },
                theme: {
                    mode: 'dark',
                },
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" />
            </div>
        )
    }
}

export default ActivityChart;