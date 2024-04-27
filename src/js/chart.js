const nurtCharts = document.querySelectorAll('.list .nutrition-graphic__item');

if (nurtCharts.length) {
    nurtCharts.forEach(item => {
        const percent = +item.dataset.percent;
        const color = item.dataset.color;

        const data = {
            labels: false,
            datasets: [{
                label: '',
                data: [percent, 100 - percent],
                backgroundColor: [color, '#ffffff00'],
                borderWidth: 0
            }]
        };

        console.log(data);

        const config = {
            type: 'doughnut',
            data,
            options: {
                cutout: '80%',
                borderRadius: 20,
            }
        };

        const canvas = item.querySelector('canvas');
        const myChart = new Chart(
            canvas,
            config
        );
    })
}

const charts = document.querySelectorAll('.nutrition-diagram__item');

if (charts.length) {
    charts.forEach(item => {
        const percents = item.querySelectorAll('.percent');
        let nums = []
        let colors = []
        percents.forEach(el => {
            nums.push(+(el.textContent).replace('%', ''))
            colors.push(el.dataset.color)
        });


        const data = {
            labels: false,
            datasets: [{
                label: '',
                data: nums,
                backgroundColor: colors,
                borderWidth: 0
            }]
        };

        const config = {
            type: 'doughnut',
            data,
            options: {
                cutout: '80%',
                borderRadius: 20,
            }
        };

        const canvas = item.querySelector('canvas');
        const myChart = new Chart(
            canvas,
            config
        );
    })
}


const chartsMassGraphic = document.querySelector('.nutrition-mass__graphic canvas');
const chartsMassGraphicList = document.querySelectorAll('.nutrition-mass__list li');
if (chartsMassGraphic) {
    let icons = []
    let percents = []
    chartsMassGraphicList.forEach(item => {
        icons.push(`img/icons/${item.dataset.icon}`)
        percents.push(+item.dataset.percent)
    });

    const data = {
        datasets: [{
            data: percents,
            backgroundColor: ['#02A0FC'],
            borderWidth: 3,
            image: icons
        }]
    };

    let width = 20

    if (window.innerWidth <= 1024) {
        width = 12
    }

    const segmentImage = {
        id: 'segmentImage',
        afterDatasetDraw(chart, args, plugins) {
            const { ctx, data } = chart;
            ctx.save();
            chart.getDatasetMeta(0).data.forEach((datapoint, index) => {
                const x = chart.getDatasetMeta(0).data[index].tooltipPosition().x
                const y = chart.getDatasetMeta(0).data[index].tooltipPosition().y

                const image = new Image();
                image.src = data.datasets[0].image[index];

                ctx.drawImage(image, x - (width / 2), y - (width / 2), width, width)
            })
        }
    }

    const config = {
        type: 'doughnut',
        data,
        options: {
            // animations: false
            cutout: '60%',
        },
        plugins: [segmentImage]
    };

    const myChart = new Chart(
        chartsMassGraphic,
        config
    );
}

const analisysTable = document.querySelector('.analisys-table__graphic canvas');
if (analisysTable) {
    const data = {
        labels: ['03.01', '03.02', '03.03', '03.04', '03.05', '03.06', '03.07', '03.08', '03.09', '03.10', '03.11', '03.12'],
        datasets: [{
            label: '',
            data: [145, 125, 115, 155, 100, 110, 130, 105, 140, 105, 150, 145],
            fill: false,
            borderWidth: 2,
            borderColor: '#1F74CA',
            tension: 0,
            pointRadius: 4,
            pointBackgroundColor: '#1F74CA',
        }]
    };

    if (window.innerWidth <= 1024) {
        data.datasets[0].pointRadius = 2.5
    }

    const config = {
        type: 'line',
        data: data,
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    offset: true,
                },
                y: {
                    // beginAtZero: true
                    grace: '5%',
                }
            }, plugins: {
                legend: false
            }
        }
    };

    const canvas = analisysTable;
    const myChart = new Chart(
        canvas,
        config
    );
}