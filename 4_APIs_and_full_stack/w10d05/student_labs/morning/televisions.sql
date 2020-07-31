-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a televisions table, drop it
drop table television;

-- Create a televisions table
CREATE TABLE television ( id integer primary key autoincrement not null, model_name varchar(20), screen_size integer, price integer, release_date varchar(20));

pragma table_info(television);

--  The table should have id, model_name, screen_size,
--  price, release_date, photo_url


-- Insert 4 televisions into the tv_models table
INSERT INTO television ( model_name, screen_size, price, release_date ) VALUES ( 'hd', 20, 2, 'July 2020');
INSERT INTO television ( model_name, screen_size, price, release_date ) VALUES ( 'not hd', 30, 1, 'May 2003');
INSERT INTO television ( model_name, screen_size, price, release_date ) VALUES ( 'cathode', 40, 3, 'Sep 2040');
INSERT INTO television ( model_name, screen_size, price, release_date ) VALUES ( 'broken', 50, 4, 'Dec 2018');

-- Select all entries from the tv_models table
.headers ON
.mode columns
select * from television;

-- HUNGRY FOR MORE? 
-- Alter the tv_models and add vertical_resolution and horizontal_resolution columns
