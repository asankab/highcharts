function test(chart) { // eslint-disable-line no-unused-vars
    const inputs = document.querySelectorAll('#container input');

    chart.renderer.label(
        'input[0] checked: <b>' + inputs[0].checked + '</b><br>' +
        'input[1] checked: <b>' + inputs[1].checked + '</b>', 100, 70)
        .attr({
            padding: 10,
            r: 5,
            fill: Highcharts.getOptions().colors[1],
            zIndex: 5
        })
        .css({
            color: '#FFFFFF'
        })
        .add();
}