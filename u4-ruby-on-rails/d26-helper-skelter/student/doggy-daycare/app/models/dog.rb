class Dog < ActiveRecord::Base

  BREED = [ "Pinscher", "Terrier", "Toy", "Poodle", "other" ]
  Dog::BREED
  validates :name, :age_months, :color, presence: true 
  validates :breed, inclusion: {in: BREED}
end
