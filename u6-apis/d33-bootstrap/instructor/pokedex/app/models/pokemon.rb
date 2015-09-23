class Pokemon < ActiveRecord::Base
  serialize :resource_data

  attr_writer :current_hp
  def current_hp
    @current_hp ||= hp
  end

  # Pokemon.fetch
  def self.fetch
    response = RestClient.get("http://pokeapi.co/api/v1/pokedex/1/");
    pokemon_data = JSON.parse(response);
    pokemons = pokemon_data["pokemon"]
    pokemons.each do |pokemon|
      Pokemon.find_or_create_by!({name: pokemon["name"], resource_uri: pokemon["resource_uri"]})
    end
  end

  def fetch
    response = RestClient.get("http://pokeapi.co/#{resource_uri}");
    update(resource_data: JSON.parse(response))
  end

  def speed
    resource_data["speed"]
  end

  def attack
    resource_data["attack"]
  end

  def defense
    resource_data["defense"]
  end

  def hp
    resource_data["hp"]
  end

  def name
    resource_data["name"]
  end

  # butterfree = Pokemon.find_by({name: 'butterfree'})
  # venomoth.battle(butterfree)
  def battle!(enemy)
    if self.speed > enemy.speed
      self.attack!(enemy)
      enemy.attack!(self)
    else
      enemy.attack!(self)
      self.attack!(enemy)
    end
  end

  def attack!(enemy)
    enemy.current_hp -= (self.attack - enemy.defense)
    raise "#{enemy.name} has fainted" if enemy.current_hp <= 0
  end

end
