let path = "../data/samples.json";

let data = d3.json(path);

let trace = {
    x: data.sample_values,
    y: data.otu_ids,
    text: data.otu_labels,
    type: "bar",
    orientation: "h"
};

let traceData = [trace];

Plotly.newPlot("bar", traceData);

let trace_2 = {
    x: data.otu_ids,
    y: data.sample_values,
    mode: 'markers',
    text: data.otu_labels,
    marker: {
        size: data.sample_values,
        color: data.otu_ids
    }
};

let traceData_2 = [trace_2];

Plotly.newPlot("bubble", traceData_2);