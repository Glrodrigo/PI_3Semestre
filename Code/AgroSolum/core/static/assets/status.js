google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['Move', 'Percentage'],
        ["King's pawn (e4)", 44],
        ["Queen's pawn (d4)", 31],
        ["Knight to King 3 (Nf3)", 12],
        ["Queen's bishop pawn (c4)", 10],
        ['Other', 3]
    ]);

    var options = {
        width: 800,
        legend: { position: 'none' },
        chart: {
        title: 'Chess opening moves',
        subtitle: 'popularity by percentage' },
        axes: {
        x: {
            0: { side: 'top', label: 'White to move'} // Top x-axis.
        }
        },
        bar: { groupWidth: "90%" }
    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.Bar.convertOptions(options));

};

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);

    var options = {
        title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}