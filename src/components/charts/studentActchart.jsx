import Chart from "react-apexcharts";

export default function StudentActchart() {

    var options = {
        series: [{
            name: "Students",
            data: [[4, 0], [4, 6], [4, 18], [9, 4], [9, 10], [9, 22], [14, 2], [14, 8], [14, 20], [19, 5], [19, 11], [19, 23], [23, 2], [23, 8], [23, 20]]
        }],
        chart: {
            height: '100%',
            type: 'scatter',
            background: 'transparent',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            colors: '#00ff00',
            opacity: 1,
            type: 'solid',
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
            row: {
                colors: undefined,
            },
            column: {
                colors: undefined,
            },
        },
        xaxis: {
            tickAmount: 6,
            max: 24,
            min: 0,
            labels: {
                style: {
                    colors: '#77838F',
                    fontSize: '10px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
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
                    fontSize: '10px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                },
                formatter: function (val) {
                    return val + " hrs";
                },
            },
        },
        theme: {
            mode: 'dark',
        },
    };

    return (
        <Chart options={options} series={options.series} type="scatter" height={'100%'} />
    )
}
