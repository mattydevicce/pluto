(function(){
  var buenosAires = { location: "Buenos Aires",depthInMeters: "400",annualBudget: 1000000,specimens: ["Dilophosaurus","Brachiosaurus"]};
  var mexico = { location: "Mexico",depthInMeters: "350",annualBudget: 900000,specimens: ["Gallimimus","Parasaurolophus"]};
  var snakewaterMontana = {location: "SnakewaterMontana",depthInMeters: "10",annualBudget: 150000,specimens: ["Velociraptor","Brachiosaurus"]};
  var nicaragua = { location: "Nicaragua",depthInMeters: "200",annualBudget: 1500000,specimens: ["Tyrannosaurus Rex","Stegosaurous","Triceratops","Velociraptor"]};
  var hammondsMines = [];
  var digs = [buenosAires,mexico,snakewaterMontana,nicaragua];
  var totalDepth = 0;
  for (var i=0; i<digs.length; i++){
    console.log("Dig Site: "+digs[i].location);
    hammondsMines.push(digs[i]);
    for (var j=0; j<digs[i].specimens.length; j++){
      console.log((j+1)+": "+digs[i].specimens[j]);
    }
    totalDepth += parseInt(digs[i].depthInMeters);
  }
  console.log("Average Depth (in meters): "+ totalDepth/digs.length);
  console.log(hammondsMines);
})();
