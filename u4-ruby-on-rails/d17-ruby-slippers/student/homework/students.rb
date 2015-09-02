names = ["Jacob Shemkovitz",
"Andres Carter",
"Steph Nathai",
"Meiji Chen",
"Nick Marshall",
"Jennifer Yien",
"Brian Deutsch",
"Edward Petner",
"Esther Zinn",
"Harrison Riddell",
"Victoria Donnelly",
"Yuka Nagai",
"Christopher Smith",
"Jaskaranjit Singh",
"Pierre Cajuste",
"Joy Morgan",
"Pamela Nevins",
"Zoe Sachs",
"Eric Kim",
'Salvatore "Toti" Fanara',
"Mohamed Elgendy",
"Raquel Hosein",
"Matt Morrisey",
"Calvin Yeung",
"Josh Bubis"]

names.each do |x|
  puts "#{x[0]}."  
end

puts names.select{ |x| 'AEIOUY'.include?(x[0])}
