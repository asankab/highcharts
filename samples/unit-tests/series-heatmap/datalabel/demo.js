QUnit.test('Check last point visible (#5254)', function (assert) {
    var chart = Highcharts.chart('container', {
        chart: {
            type: 'heatmap'
        },

        title: {
            text: 'Heatmap data label alignment'
        },

        series: [
            {
                data: [
                    {
                        x: 0,
                        y: 0,
                        value: 10,
                        borderColor: 'red',
                        borderWidth: 1
                    },
                    [0, 1, 19],
                    [1, 0, 8],
                    [1, 1, 24]
                ],
                dataLabels: {
                    enabled: true,
                    verticalAlign: 'bottom',
                    align: 'left',
                    useHTML: true
                },
                borderColor: 'white',
                borderWidth: 2
            }
        ]
    });

    var point = chart.series[0].points[0];
    var leftX = point.dataLabel.translateX;
    var bottomY = point.dataLabel.translateY;
    assert.strictEqual(typeof leftX, 'number', 'All well so far');

    assert.ok(
        point.dataLabel.width > 0 && point.dataLabel.height > 0,
        '#15922: useHTML dataLabel should be visible'
    );
    assert.strictEqual(
        point.graphic.stroke,
        'red',
        '#15922: Point borderColor should work'
    );
    assert.strictEqual(
        point.graphic['stroke-width'],
        1,
        '#15922: Point borderWidth should work'
    );

    chart.series[0].update({
        dataLabels: {
            verticalAlign: 'top',
            align: 'right'
        }
    });

    point = chart.series[0].points[0];
    assert.ok(
        point.dataLabel.translateX > leftX,
        'align:right gives a higher X position than align:left'
    );

    assert.ok(
        point.dataLabel.translateY < bottomY,
        'verticalAlign:top gives a smaller Y position than verticalAlign:bottom'
    );
});
