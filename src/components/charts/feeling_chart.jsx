import React from 'react';
import ReactApexChart from 'react-apexcharts';

class YourChartComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'cat1',
                data: [4, 6, 2, 1, 5, 8, 3]
            }, {
                name: 'cat2',
                data: [8, 5, 9, 10, 6, 4, 7]
            }],
            options: {
                chart: {
                    type: 'area',
                    background: 'transparent',
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                grid: {
                    padding: {
                        left: 24,
                    }
                },
                yaxis: {
                    min: 0,
                    max: 10,
                    tickAmount: 5,
                },
                stroke: {
                    curve: 'smooth'
                },
                dataLabels: {
                    enabled: true,
                    textAnchor: 'middle',
                    formatter: function (val, opts) {
                        if (val < 3) return '😔';
                        else if (val >= 3 && val < 5) return '😐';
                        else if (val >= 5 && val < 7) return '😪';
                        else if (val >= 7 && val < 9) return '😊';
                        else return '😁';
                    },
                    style: {
                        fontSize: '24px',
                        fontWeight: 'bold',
                        colors: ["#0000ff"]
                    },
                    background: {
                        enabled: false,
                    }
                },
                theme: {
                    mode: 'dark',
                },
            }
        };
    }

    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="area"
                height={400}
                className="w-full"
            />
        );
    }
}

export default YourChartComponent;