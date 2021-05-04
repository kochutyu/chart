import {chart} from './chart'
import data from './data.json'
import './styles.scss'

// default chart
let dataTypeId = 0;
let tgChart = renderChart(dataTypeId);

// helper method for get button
function getChartButton(index) {
    return document.getElementById(`chart-${index}-btn`);
}

// init click handler for button item
for (let i = 0; i < 5; i++) {
    const button = getChartButton(i);
    handleButtonClick(button);
}

// render new chart
function renderChart(chartId) {
    if (tgChart) {
        tgChart.destroy();
    }
    tgChart = chart(document.getElementById('chart'), data[chartId]);
    tgChart.init();
}

// set handler for button
function handleButtonClick(button) {
    button.addEventListener('click', (e) => {
        dataTypeId = +button.getAttribute('data-id');
        renderChart(dataTypeId);
    });
}
