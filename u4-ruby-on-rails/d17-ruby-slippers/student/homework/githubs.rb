klass = [
 {
  name: "Jacob Shemkovitz",
  github: "jforjacob"
 },
 {
  name: "Andres Carter",
  github: "cartermarino"
 },
 {
   name: "Steph Nathai",
   github: "stephnathai"
 },
 {
   name: "Meiji Chen",
   github: "meijichen"
 },
 {
   name: "Nick Marshall",
   github: "nialbima"
 },
 {
   name: "Jennifer Yien",
   github: "jenniferyien"
 },
 {
   name: "Brian Deutsch",
   github: "bgdeutsch"
 },
 {
   name: "Edward Petner",
   github: "edpetner"
 },
 {
   name: "Esther Zinn",
   github: "estherzinn"
 },
 {
   name: "Harrison Riddell",
   github: "HarrisonRiddell"
 },
 {
   name: "Victoria Donnelly",
   github: "nealado"
 },
 {
   name: "Yuka Nagai",
   github: "yukanagai"
 },
 {
   name: "Christopher Smith",
   github: "smithopher"
 },
 {
   name: "Jaskaranjit Singh",
   github: "jaskar14"
 },
 {
   name: "Pierre Cajuste",
   github: "pcajuste"
 },
 {
   name: "Joy Morgan",
   github: "morga147"
 },
 {
   name: "Pamela Nevins",
   github: "pnev"
 },
 {
   name: "Zoe Sachs",
   github: "zoesachs"
 },
 {
   name: "Eric Kim",
   github: "erickim91"
 },
 {
   name: 'Salvatore "Toti" Fanara',
   github: "tfbkny"
 },
 {
   name: "Mohamed Elgendy",
   github: "moelgendy"
 },
 {
   name: "Raquel Hosein",
   github: "raquelhosein"
 },
 {
   name: "Matt Morrisey",
   github: "mattydevicce"
 },
 {
   name: "Calvin Yeung",
   github: "calvinyeung"
 },
 {
   name: "Josh Bubis",
   github: "joshbubis"
 }
]

klass.each do |x|
   puts x[:name]
end

klass.each do |x|
   name = x[:name]
   index = name.index(' ')
   puts name[index+1..name.length]
end

github_names = []
klass.each do |x|
   github_names << x[:github]
end
puts github_names

