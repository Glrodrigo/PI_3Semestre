google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


async function list_data(url) {
    let response = await fetch(url, {
                                    method: "GET"
                                }).then(res => res.text());
    return response;
}

async function drawChart() {

    var list_seeds = await list_data('http://127.0.0.1:8500/api_agrosolum/list_seeds')
    var final_list_region = JSON.parse(list_seeds)
    console.log("lista de sementes")
    console.log(final_list_region)
    var data = new google.visualization.arrayToDataTable(final_list_region);

    var options = {
        title: 'Maiores interesses por click'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

async function drawStuff() {

    var list_region = await list_data('http://127.0.0.1:8500/api_agrosolum/list_regions')
    var final_list_region = JSON.parse(list_region)
    console.log("lista de regioes")
    console.log(final_list_region)
    var data = new google.visualization.arrayToDataTable(final_list_region);

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
    chart.draw(data, google.charts.Bar.convertOptions(options));
};

