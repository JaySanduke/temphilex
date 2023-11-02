import CalHeatmap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css';
import Legend from 'cal-heatmap/plugins/Legend';
import Tooltip from 'cal-heatmap/plugins/Tooltip';
import { useEffect } from 'react';

export default function CalenderHeatmap() {

    const cal = new CalHeatmap();

    const data = [
        { date: '2023-02-01', value: 0 },
        { date: '2023-03-01', value: 1 },
        { date: '2023-04-01', value: 3 },
        { date: '2023-05-02', value: 6 },
    ];

    useEffect(() => {
        cal.paint(
            {
                theme: 'dark',
                data: {
                    source: data,
                    type: 'json',
                    x: 'date',
                    y: 'value'
                },
                date: { start: new Date('2023-01-01'), },
                range: 12,
                scale: {
                    color: {
                        type: 'quantize',
                        scheme: 'Greens',
                        domain: [0, 1, 2, 3, 4, 5, 6],
                    },
                },
                domain: {
                    type: 'month'
                },
                subDomain: {
                    type: 'day',
                    color: '#000'

                },
                legend: [1, 2],

            },
        );

        return () => null;
    }, []);



    return (
        <div id='cal-heatmap' className='w-full h-full'></div>
    )
}
