var buenosAires = { location: "Buenos Aires",depthInMeters: "400",annualBudget: 1000000,specimens: ["Dilophosaurus","Brachiosaurus"]};
var mexico = { location: "Mexico",depthInMeters: "350",annualBudget: 900000,specimens: ["Gallimimus","Parasaurolophus"]};
var snakewaterMontana = {location: "SnakewaterMontana",depthInMeters: "10",annualBudget: 150000,specimens: ["Velociraptor","Brachiosaurus"]};
var nicaragua = { location: "Nicaragua",depthInMeters: "200",annualBudget: 1500000,specimens: ["Tyrannosaurus Rex","Stegosaurous","Triceratops","Velociraptor"]};

var digSites = [buenosAires, mexico, snakewaterMontana, nicaragua];
var averageDepth=0;
var hammondsMines = [];
for( var i=0; i<digSites.length; i++){
  hammondsMines.push(digSites[i].location)
  averageDepth += (digSites[i].depthInMeters)/digSites.length
  for(var j=0; j<digSites[i].specimens.length; j++){
    hammondsMines.push(digSites[i].specimens[j]);
  }
  hammondsMines.push('\n')
}
console.log("Average depth = " +averageDepth);
function printDinos(hammondsMines){
  for(var i=0; i<hammondsMines.length; i++){
    console.log(hammondsMines[i])
  }

}
printDinos(hammondsMines);