-- empty out DB

DROP TABLE IF EXISTS players;

CREATE TABLE players(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  age INTEGER NOT NULL,
  team VARCHAR NOT NULL,
  games INTEGER default 0,
  points INTEGER default 0
);

COPY players
  (name, age, team, games, points)
FROM '/Users/getmeagatorade/code/wdi/pluto/u4-ruby-on-rails/d24-riding-rails/morning-exercise/nba_season_2011-12.csv'
    DELIMITER ',' CSV;