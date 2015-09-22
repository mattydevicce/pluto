# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Candidate.create(first_name: Faker::Name.first_name,
									last_name: Faker::Name.last_name,
									party: 'green',
									bio: Faker::Lorem.paragraph(2),
									campaign: Faker::Lorem.paragraph(2))

Candidate.create(first_name: Faker::Name.first_name,
									last_name: Faker::Name.last_name,
									party: 'tea',
									bio: Faker::Lorem.paragraph(2),
									campaign: Faker::Lorem.paragraph(2))

Candidate.create(first_name: Faker::Name.first_name,
									last_name: Faker::Name.last_name,
									party: 'hippy',
									bio: Faker::Lorem.paragraph(2),
									campaign: Faker::Lorem.paragraph(2))

Candidate.create(first_name: 'Hilary',
									last_name: 'Clinton',
									party: 'democrate',
									bio: 'Former Secretary of Defense and First Lady, so I have been around the block. Holler at me.',
									campaign: "I will get things done. Just going to do it! You know.")

Candidate.create(first_name: 'Bernie',
									last_name: 'Sanders',
									party: 'democrate',
									bio: "Sanders is the longest-serving independent in U.S. congressional history. A self-described democratic socialist, he favors policies similar to those of social democratic parties in Europe, particularly those instituted by the Nordic countries. He caucuses with the Democratic Party and has been the ranking minority member on the Senate Budget Committee since January 2015. Born in Brooklyn, New York, Sanders is a graduate of the University of Chicago. While a student, he was a member of the Young People's Socialist League and an active Civil Rights protest organizer for the Congress of Racial Equality and the Student Nonviolent Coordinating Committee. In 1963, he participated in the March on Washington for Jobs and Freedom.",
									campaign: "The American people must make a fundamental decision. Do we continue the 40-year decline of our middle class and the growing gap between the very rich and everyone else, or do we fight for a progressive economic agenda that creates jobs, raises wages, protects the environment and provides health care for all? Are we prepared to take on the enormous economic and political power of the billionaire class, or do we continue to slide into economic and political oligarchy? These are the most important questions of our time, and how we answer them will determine the future of our country.")