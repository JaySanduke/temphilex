import Chart from "react-apexcharts";

export default function StudentEnrollingchart() {

    var options = {
        series: [{
            name: 'Students',
            data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35, 0, 0, 0, 0, 0]
        }],
        chart: {
            id: 'studentEnChart',
            height: '100%',
            type: 'bar',
            background: 'transparent',
            foreColor: '#2664EB',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 0
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
            labels: {
                style: {
                    colors: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
            tickPlacement: true,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: ['#77838F'],
                    fontSize: '10px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                },
                formatter: function (val) {
                    return val + " %";
                },
            },
        },
        fill: {
            type: 'solid',
            colors: '#2C2C2C',
            opacity: 1,
        },
        theme: {
            mode: 'dark',
            monochrome: {
                enabled: true,
                color: '#2C2C2C',
                shadeTo: 'dark',
                shadeIntensity: 0.65
            },
        },
    };

    return (
        <Chart options={options} series={options.series} type="bar" height={'100%'} />
    )
}
