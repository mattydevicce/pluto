\c nba_db

-- # 1
-- SELECT * FROM players WHERE team='NYK';

-- # 2
-- SELECT * FROM players WHERE team='IND' AND age<26;

-- # 3
-- SELECT * FROM players ORDER BY points;

-- # 4
-- selects name  and a made up column (consists of points and games and divides them
-- and orders them by the points/games and limits it to 20 entries)
-- SELECT name, (points/games) as points_per_game FROM players ORDER BY (points/games) DESC LIMIT 20;

-- #5
-- Sum sums the column, count counts the rows
-- SELECT (SUM(age)/COUNT(age)) as average_age_for_ballers FROM players;

-- # 6
-- SELECT (SUM(age)/COUNT(age)) as average_age_of_ballers_on_OKC FROM players WHERE team='OKC';

-- # 7
-- SELECT (SUM(age)/COUNT(age)) as average_age_of_1337_ballers FROM players WHERE games>40;

-- Bonus #1

-- display the team and total points scored from all players of team
-- order it from most to least
-- GROUP BY is a life saviour
-- SELECT team, SUM(points) FROM players GROUP BY team ORDER BY SUM(points) DESC;


-- BONUS #2
-- SELECT age, (SUM(points)/SUM(games)/COUNT(age)) from players GROUP BY age ORDER BY age DESC;

-- BONUS #3
-- Select the team and the count of everything where points/games > 12 since
-- we know that the team needs to be displayed and will just group everything
-- for us because SQL is smart
SELECT team, COUNT(*) FROM players WHERE (points/games)>12 GROUP BY team ORDER BY COUNT(*) DESC;