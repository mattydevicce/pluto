wine_cellar = [
  { :label => "Rutherford Hill", :type => "Chardonnay", :color => "red" },
  { :label => "Nina Veneto", :type => "Pinot Grigio", :color => "white" },
  { :label => "Wairau River", :type => "Sauvignon Blanc", :color => "white" },
  { :label => "Tangley Oaks", :type => "Merlot", :color => "red" },
  { :label => "Chimney Rock", :type => "cabernet Sauvignon", :color => "red" },
  { :label => "Sanford", :type => "Pinot Noir", :color => "red" },
  { :label => "Alderbrook", :type => "Pinot Noir", :color => "red" },
  { :label => "Colavita", :type => "Pinot Noir", :color => "red" },
  { :label => "Markham", :type => "Chardonnay", :color => "white" },
  { :label => "Angeline", :type => "Pinot Noir", :color => "red" }
]

saved_for_special_occasion = wine_cellar[2]
swill = wine_cellar[3]
wine_cellar[0][:color]='white'
puts wine_cellar[0]
wine_cellar << {label: 'Carlo Rossi', type: 'Wine', color: 'white'}


def retrieves_random_wine_for_party(cellar)
  the_wine = cellar.delete_at(rand(cellar.length))
  puts "The wine removed is #{the_wine}"
end


3.times do
  retrieves_random_wine_for_party(wine_cellar)
end

wine_cellar.each do |x|
  puts "The wine remaining is #{x[:label]}"
end