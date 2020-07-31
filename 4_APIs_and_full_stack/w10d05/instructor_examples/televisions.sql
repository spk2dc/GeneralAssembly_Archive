-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a televisions table, drop it
.header on
.mode column
DROP TABLE televisions;

-- Create a televisions table

--  The table should have id, model_name, screen_size,
--  price, release_date, photo_url
CREATE TABLE televisions (
  id integer primary key,
  model_name varchar(255),
  screen_size varchar(255),
  price integer,
  release_date varchar(255),
  photo_url varchar(255)
);

-- Insert 4 televisions into the tv_models table
INSERT INTO televisions (model_name, screen_size, price, release_date, photo_url) VALUES 
  ('Samsung1', '46 inches', 500, 'January 1, 2020', 'photourl.com'),
  ('Samsung2', '46 inches', 500, 'January 1, 2020', 'photourl.com'),
  ('Samsung3', '46 inches', 500, 'January 1, 2020', 'photourl.com'),
  ('Samsung4', '46 inches', 500, 'January 1, 2020', 'photourl.com');


-- Select all entries from the tv_models table
SELECT * FROM televisions;


-- HUNGRY FOR MORE? 
-- Alter the tv_models and add vertical_resolution and horizontal_resolution columns
