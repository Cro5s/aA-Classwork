DROP TABLE IF EXISTS cattoys;
DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS toys;


CREATE TABLE cats (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  color VARCHAR(255),
  breed VARCHAR(255)
);

CREATE TABLE toys (
  id SERIAL PRIMARY KEY,
  price REAL,
  color VARCHAR(255),
  name VARCHAR(255)
);

CREATE TABLE cattoys (
  id SERIAL PRIMARY KEY,
  cat_id INTEGER,
  toy_id INTEGER,

  FOREIGN KEY (cat_id) REFERENCES cats(id),
  FOREIGN KEY (toy_id) REFERENCES toys(id)
);

INSERT INTO
	cats
	(name, color, breed)
VALUES
	('Sennacy', 'brown', 'siamese'),
	('Pepper', 'black_white', 'toyger'),
	('Salt', 'white', 'himalayan'),
	('Tommy', 'yellow', 'european_shorthair'),
	('Simba', 'orange', 'maine_coon');

INSERT INTO
	toys
	(price, color, name)
VALUES
	(3.21, 'grey', 'mouse_hunter'),
	(22.95, 'white', 'pet_ambush'),
	(59.97, 'blue', 'wicked_ball'),
	(8.39, 'blue', 'scratcher_cat_toy'),
	(17.12, 'brown', 'wood_cat_hit');

INSERT INTO
	cattoys
	(cat_id, toy_id)
VALUES
	((SELECT id
  FROM cats
  WHERE name = 'Sennacy'),
	(SELECT id
	FROM toys
	WHERE name = 'wood_cat_hit')
	),

	((SELECT id
  FROM cats
  WHERE name = 'Sennacy'),
	(SELECT id
	FROM toys
	WHERE name = 'scratcher_cat_toy')
	),

	((SELECT id
  FROM cats
  WHERE name = 'Simba'),
	(SELECT id
	FROM toys
	WHERE name = 'mouse_hunter')
	),

	((SELECT id
  FROM cats
  WHERE name = 'Pepper'),
	(SELECT id
	FROM toys
	WHERE name = 'pet_ambush')
	)
;