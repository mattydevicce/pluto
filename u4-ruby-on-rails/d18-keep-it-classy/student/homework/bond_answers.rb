require './bond_data'

movie_data = Bond::MOVIE_DATA


# Numero uno
def get_gross_for(title, data)
  data.each do |x|
    puts "#{title} - gross: #{x[:gross]}" if x[:title].include? title
  end
end

get_gross_for('Skyfall', movie_data)
get_gross_for('The Living Daylights', movie_data)


# Numero dos
bond_franchise_total = 0
movie_data.each do |movie_list|
  movie_list[:gross].slice!(0)
  bond_franchise_total += movie_list[:gross].split(',').join.to_i
  puts movie_list[:gross]
end
puts "$#{bond_franchise_total}"

# Numero Tres
bond_actors = []
movie_data.each do |movie|
  bond_actors << movie[:actor] unless bond_actors.include?(movie[:actor])
end


# Numero Quatro
bond_films = []
movie_data.each do |movie|
  bond_films << movie[:title]
end

# Numero Cinco
movies_made_on_odd_years = []
movie_data.each do |movie|
  movies_made_on_odd_years << movie unless movie[:year]%2==0
end

# Numero Seis
worst_grossing_bond = {}
grosses = movie_data[0][:gross].split(',').join.to_i
movie_data.each do |movie|
  if movie[:gross].split(',').join.to_i < grosses
    grosses = movie[:gross].split(',').join.to_i
    worst_grossing_bond = movie
  end
end


# Numero Siete
highest_grossing_bond = {}
highest = movie_data[-1][:gross].split(',').join.to_i
movie_data.each do |movie|
  if movie[:gross].split(',').join.to_i > grosses
    highest = movie[:gross].split(',').join.to_i
    highest_grossing_bond = movie
  end
end

# Numero Ocho
actor_hash = Hash.new
movie_data.each do |movie|
  actor = movie[:actor]
  if actor_hash[actor]
    actor_hash[actor] += 1
  else
    actor_hash[actor] = 1
  end
end

# Numero Sies
sorted_by_release = []
sorted_by_release = movie_data.sort_by { |x| x[:year] }
puts sorted_by_release
