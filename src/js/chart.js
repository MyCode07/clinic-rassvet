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

if (chartsMassGraphic) {
    const data = {
        datasets: [{
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            backgroundColor: ['#02A0FC', '#02A0FC', '#02A0FC', '#02A0FC', '#02A0FC', '#02A0FC', '#02A0FC', '#02A0FC', '#02A0FC', '#02A0FC',],
            borderWidth: 3,
            image: [
                'img/logo.png',
                'img/logo.png',
                'img/logo.png',
            ]
        }]
    };

    const segmentImage = {
        id: 'segmentImage',
        afterDatasetDraw(chart, args, plugins) {
            const { ctx, data } = chart;

            const width = 40;
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