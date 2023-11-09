import React from "react";
import ReactApexChart from 'react-apexcharts';

class TaskSparklineChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series2: [{
                data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
            }],
            options2: {
                chart: {
                    type: 'line',
                    background: 'transparent',
                    height: 30,
                    sparkline: {
                        enabled: true
                    }
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                },
                theme: {
                    mode: 'dark',
                },
            },
        }
    }

    render() {
        return (
            <ReactApexChart options={this.state.options2} series={this.state.series2} type="line" height={45} />
        )
    }
}

export default TaskSparklineChart;