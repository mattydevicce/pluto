# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Authors
sam = {name: 'Sam Jackson', born_on: '1960-01-01', gender: 'male', has_pseudonym: false}
mark = {name: 'Sam Clemens', born_on: '1828-01-01', died_on: '1890-01-01', gender: 'male', has_pseudonym: true}
bob = {name: 'Bob Marley', born_on: '1000-01-01', died_on: '1930-01-01', gender: 'male', has_pseudonym: true}

Author.create(sam)
Author.create(mark)
Author.create(bob)

bob = Author.find_by(name: bob[:name]) 
mark = Author.find_by(name: mark[:name]) 
sam = Author.find_by(name: sam[:name]) 


#Book, Movie, Song
ocean = {title: 'Deep Blue', released_on: '2002', genre: 'action', author_id: sam.id}
huck = {title: 'Huckleberry Finn', released_on: '1890', genre: 'adventure', author_id: mark.id}
django = {title: 'Django Unchaned', released_on: '2013', genre: 'Tarintino', author_id: sam.id}
onelove = {title: 'One love', released_on: '1989', genre: 'reggae', author_id: bob.id}

Book.create(ocean)
Book.create(huck)
Book.create(django)
Book.create(onelove)

ocean = Book.find_by(title: ocean[:title])
huck = Book.find_by(title: huck[:title])
django = Book.find_by(title: django[:title])
onelove = Book.find_by(title: onelove[:title])


#Characters
sammy = {name: "Sam Jackson", gender: 'male', quirk: 'Good one liners', book_id: ocean.id}
shark = {name: "Shark", gender: 'fe/male', quirk: 'They are hungry', book_id: ocean.id}
helicopter = {name: 'Helo', gender: 'female', quirk: 'Not very stable when a shark is tugging the line', book_id: ocean.id}
huckle = {name: 'Huckleberry', gender: 'male?', quirk: 'adventurous', book_id: huck.id}
pap = {name: 'Pap finn', gender: 'idk', quirk: 'siblind of huck', book_id: huck.id}
djangod = {name: 'Django', gender: 'male', quirk: 'Sassy', book_id: django.id}
leo = {name: 'Leo', gender: 'male', quirk: 'He is funny', book_id: django.id}
onelover = {name: 'Bob Marley', gender: 'male', quirk: 'Das a good a mon', book_id: onelove.id}
twolover = {name: 'Ziggy Marley', gender: 'male', quirk: 'Took his fathas songs', book_id: onelove.id}

Character.create(sammy)
Character.create(shark)
Character.create(helicopter)
Character.create(huckle)
Character.create(pap)
Character.create(djangod)
Character.create(leo)
Character.create(onelover)
Character.create(twolover)