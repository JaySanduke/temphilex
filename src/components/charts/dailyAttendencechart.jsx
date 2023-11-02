import Chart from "react-apexcharts";

export default function DailyAttendenceChart() {

    var options = {
        series: [{
            name: 'Departments',
            data: [40,60,86,60,40]
        }],
        chart: {
            id: 'DailyAttenChart',
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
                borderRadius: 25,
                columnWidth: '50%',
            }
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
            row: {
                colors: undefined,
            },
            column: {
                colors: undefined,
            },
        },
        xaxis: {
            tickPlacement: 'on',
            labels: {
                show: true,
                rotate: -45,
                rotateAlways: true,
                style: {
                    colors: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
            categories: ["Sales", "IT", "Marketing", "Legal", "API"],
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
