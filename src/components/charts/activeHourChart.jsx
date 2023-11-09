import Chart from "react-apexcharts";

export default function ActiveHourChart() {

    var options = {
        series: [
            {
                name: 'High Retention',
                data: [
                    [1, 3], [5, 5], [10, 4], [15, 6], [20, 7], [25, 8], [30, 9]
                ]
            },
            {
                name: 'Average Retention',
                data: [
                    [2, 2], [6, 3], [11, 1], [16, 3], [21, 2], [26, 4]
                ]
            },
            {
                name: 'Low Retention',
                data: [
                    [3, 0], [7, 1], [12, 0], [17, 1], [22, 0], [27, 0], [4, 1], [8, 1], [13, 0], [18, 1], [23, 0], [28, 1], [9, 0], [14, 0], [19, 1], [24, 0], [29, 1]
                ]
            }
        ],
        chart: {
            height: '100%',
            type: 'scatter',
            background: 'transparent',
            offsetX: -6,
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
            show: false,
        },
        grid: {
            show: true,
            borderColor: '#2C2C2C',
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
            padding: {
                left: 22,
            },
            row: {
                colors: undefined,
            },
            column: {
                colors: undefined,
            },
        },
        colors: ['#FF3A29', '#FFCF4E', '#25FC02'],
        legend: {
            show: false,
        },
        xaxis: {
            tickAmount: 6,
            max: 24,
            min: 0,
            labels: {
                style: {
                    colors: '#77838F',
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },
        yaxis: {
            tickAmount: 4,
            min: 0,
            max: 24,
            labels: {
                show: true,
                style: {
                    colors: '#77838F',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                },
                formatter: function (val) {
                    return val + " hrs";
                },
            },
        },
        fill: {
            type: 'solid',
            opacity: 1,
        },
        theme: {
            mode: 'dark',
        },
    };

    return (
        <Chart options={options} series={options.series} type="scatter" />
    )
}
