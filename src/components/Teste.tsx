import React from 'react';
import Chart from 'react-apexcharts';

const TimelineChart = () => {
    const options = {
        chart: {
            height: 450,
            type: 'rangeBar',
            defaultLocale: 'pt-BR',
            locales: [{
                name: 'pt-BR',
                options: {
                    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                    shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                    days: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
                    shortDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
                    toolbar: {
                        download: 'Baixar SVG',
                        selection: 'Seleção',
                        selectionZoom: 'Zoom de Seleção',
                        zoomIn: 'Aumentar Zoom',
                        zoomOut: 'Diminuir Zoom',
                        pan: 'Panning',
                        reset: 'Redefinir Zoom',
                    }
                }
            }]
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%'
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                format: 'dddd',
            }
        },
        stroke: {
            width: 1
        },
        fill: {
            type: 'solid',
            opacity: 0.6
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        }
    };

    const series = [
        {
            name: 'Antônio',
            data: [
                {
                    x: 'HTU3829',
                    y: [
                        new Date('2023-02-05 08:00').getTime(),
                        new Date('2023-02-05 12:00').getTime()
                    ]
                },
                {
                    x: 'JDK3892',
                    y: [
                        new Date('2023-02-06 09:00').getTime(),
                        new Date('2023-02-06 11:00').getTime(),
                    ]
                },
                {
                    x: 'JDK3893',
                    y: [
                        new Date('2023-02-07 08:00').getTime(),
                        new Date('2023-02-07 12:00').getTime(),
                    ]
                },
                {
                    x: 'JDK3894',
                    y: [
                        new Date('2023-02-08 09:00').getTime(),
                        new Date('2023-02-08 11:00').getTime(),
                    ]
                }
            ]
        },
        {
            name: 'Carlos',
            data: [
                {
                    x: 'HTU3229',
                    y: [
                        new Date('2023-02-06 08:00').getTime(),
                        new Date('2023-02-06 12:00').getTime()
                    ]
                },
                {
                    x: 'JDK3892',
                    y: [
                        new Date('2023-02-08 10:00').getTime(),
                        new Date('2023-02-08 13:00').getTime(),
                    ]
                },
                {
                    x: 'JDK3893',
                    y: [
                        new Date('2023-02-07 14:00').getTime(),
                        new Date('2023-02-07 17:00').getTime(),
                    ]
                },
                {
                    x: 'JDS3893',
                    y: [
                        new Date('2023-02-09 13:00').getTime(),
                        new Date('2023-02-09 15:00').getTime(),
                    ]
                },
            ]
        }
    ]

    return (
        <Chart
            options={options}
            series={series}
            type="rangeBar"
            width="1024"
            height="350"
        />
    );
};

export default TimelineChart;
