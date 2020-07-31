-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a computers table, drop it
drop table computers;

-- Create a computers table
CREATE TABLE computers ( id integer primary key autoincrement not null, make varchar(20), model varchar(20), cpu_speed integer, memory_size integer);

-- The table should have id, make, model, cpu_speed, memory_size,
--  price, release_date, photo_url, storage_amount, number_usb_ports,
--  number_firewire_ports, number_thunderbolt_ports

pragma table_info(computers);

-- Insert 4 computers into the computers table
INSERT INTO computers ( make, model, cpu_speed, memory_size ) VALUES ( 'lenovo', '14inch', 2, 250);
INSERT INTO computers ( make, model, cpu_speed, memory_size ) VALUES ( 'toshiba', '14inch', 1, 250);
INSERT INTO computers ( make, model, cpu_speed, memory_size ) VALUES ( 'dell', '14inch', 3, 250);
INSERT INTO computers ( make, model, cpu_speed, memory_size ) VALUES ( 'microsoft', '14inch', 4, 250);



-- Select all entries from the computers table
.headers ON
.mode columns
select * from computers;


-- HUNGRY FOR MORE?
-- Alter the computers_models, adding a storage_type column
