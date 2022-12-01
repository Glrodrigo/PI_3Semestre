google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['Região', 'Pesquisas'],
        ["Araçatuba", 0],
        ["Araraquara", 31],
        ["Assis", 12],
        ["Bauru", 10],
        ["Campinas", 44],
        ["Itapetininga", 31],
        ["Litoral Sul Paulista", 12],
        ["São José do Rio Preto", 10],
        ["Metropolitana de São Paulo", 44],
        ["Ribeirão Preto", 31],
        ["Piracicaba", 12],
        ["Presidente Prudente", 10],
        ["Marília", 44],
        ["Macro Metropolitana Paulista", 31],
        ["Vale do Paraíba Paulista", 12]
    ]);

    var options = {
        width: 800,
        legend: { position: 'none' },
        chart: {
        title: 'Análise por região',
        subtitle: 'Quantidade de análises vindas das regiões paulistas.' },
        axes: {
        x: {
            0: { side: 'bottom', label: 'Posicione o cursor do mouse para melhor identificação.'} // Top x-axis.
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
        ['Semente', 'clicks'],
        ['Arroz',     11],
        ['Café',      21],
        ['Girassol',  1],
        ['Maçã', 2],
        ['Milho',    7],
        ['Uva',    5],
        ['Beterraba',    6],
        ['Laranja',    8]
    ]);

    var options = {
        title: 'Maiores interesses por click'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}