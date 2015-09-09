require 'pg'
require 'date'

$db = PG.connect(dbname: 'facebook')

class Person


  def self.find(id)
    person = $db.exec_params("SELECT * FROM people WHERE id = $1",[id]).first
    Person.new(person)
  end

  attr_reader :id, :first_name, :last_name, :birthday

  def initialize(options={})
    @id = options['id']
    @first_name = options['first_name']
    @last_name = options['last_name']
    @birthday = options['birthday']
  end

  def full_name
    first_name + ' ' + last_name
  end

  def age
    now = Time.now.utc.to_date
    bday = DateTime.parse(birthday).to_date
    age = (now.year - bday.year)
    if now.month > bday.month
      age -= 1
    end
  end

end # end person class