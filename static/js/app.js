var json_data = "../../data/samples.json";

// Use`d 3.json` to fetch the metadata for a sample
// Hint: Inside the loop, you will need to use d3 to append new
// tags for each key-value in the metadata.
function buildMetadata(sample) {
    d3.json(json_data).then((data) => {
      var metadata= data.metadata;
      var resultsarray= metadata.filter(sampleobject => 
        sampleobject.id == sample);
      var result= resultsarray[0]
  // Use d3 to select the panel with id of `#sample-metadata`
      var panel = d3.select("#sample-metadata");
  // Use `.html("") to clear any existing metadata
      panel.html("");
  // Use `Object.entries` to add each key and value pair to the panel
      Object.entries(result).forEach(([key, value]) => {
        panel.append("h6").text(`${key}: ${value}`);
      });
    });
  }
  


