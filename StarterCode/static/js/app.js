
 // create a function to read data for dropdwown
 function loadDropdown() {
    // select dropdown menu 
    let dropdown = d3.select("#selDataset");

    // read the data 
    d3.json("samples.json").then((data)=> {
        // console.log(data)

        // get the id data to the dropdwown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        // call the functions to display the data and the plots to the page
        // getPlots(data.names[0]);
        loadDemoInfo(data.names[0]);
    });
}



// get demographic info and put in sample metadata section 
// read id from dropdown 
function loadDemoInfo(id) {

    // read data 
    d3.json("samples.json").then((data)=> {
        let metadata = data.metadata;
         // console.log(metadata)
          // filter meta data info by id
          let result = metadata.filter(meta => meta.id.toString() === id)[0];
          console.log(result);
              // select sample-metadata
        let demographicInfo = d3.select("#sample-metadata");
        // empty the demographic info panel each time before getting new id info
        demographicInfo.html("");
    
        // grab the necessary demographic data data for the id and append the info to the panel
           Object.entries(result).forEach((key) => {   
               demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
           });    

    })




}




loadDropdown();

