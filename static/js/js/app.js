let path = "static/js/data/samples.json";

let i = 0;

function optionChanged(name) {
    d3.json(path).then(function(data){
        i = data.names.indexOf(name);
    });
populateVisualizations();
};

function populateVisualizations() {
    d3.json(path).then(function(data) {

        let trace = {
            x: data.samples[i].sample_values,
            y: data.samples[i].otu_ids,
            text: data.samples[i].otu_labels,
            type: "bar",
            orientation: "h"
        };
        
        let traceData = [trace];
        
        Plotly.newPlot("bar", traceData);
        
        let trace_2 = {
            x: data.samples[i].otu_ids,
            y: data.samples[i].sample_values,
            mode: 'markers',
            text: data.samples[i].otu_labels,
            marker: {
                size: data.samples[i].sample_values,
                color: data.samples[i].otu_ids
            }
        };
        
        let traceData_2 = [trace_2];
        
        Plotly.newPlot("bubble", traceData_2);

        d3.select("#sample-metadata").selectAll("dt").remove();
        d3.select("#sample-metadata")
                .append("dt").text("id:"+data.metadata[i].id)
                .append("dt").text("ethnicity:"+data.metadata[i].ethnicity)
                .append("dt").text("gender:"+data.metadata[i].gender)
                .append("dt").text("age:"+data.metadata[i].age)
                .append("dt").text("location:"+data.metadata[i].location)
                .append("dt").text("bbtype:"+data.metadata[i].bbtype)
                .append("dt").text("wfreq:"+data.metadata[i].wfreq);
    
        d3.select("#selDataset").selectAll("option").data(data.names).enter().append("option").text(function(d) {return d;}).attr("value",function(d) {return d});
    });
};

populateVisualizations();