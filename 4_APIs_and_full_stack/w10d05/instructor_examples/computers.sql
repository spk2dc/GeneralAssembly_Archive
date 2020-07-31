-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a computers table, drop it
.header on
.mode column
DROP TABLE computers;


-- Create a computers table

-- The table should have id, make, model, cpu_speed, memory_size,
--  price, release_date, photo_url, storage_amount, number_usb_ports,
--  number_firewire_ports, number_thunderbolt_ports
CREATE TABLE computers (
  id integer primary key,
  make varchar(255),
  model varchar(255),
  cpu_speed integer,
  memory_size integer,
  price integer,
  photo_url varchar(255),
  storage_amount integer,
  number_usb_ports integer,
  number_firewire_ports integer,
  number_thunderbolt_ports integer
);


-- Insert 4 computers into the computers table
INSERT INTO computers (make, model, cpu_speed, memory_size, price, photo_url, storage_amount, number_usb_ports, number_firewire_ports, number_thunderbolt_ports)
VALUES ('Apple', 'MacBook', 8, 256, 2000, 'https://photourl.com', 16, 0, 0, 4);

INSERT INTO computers (make, model, cpu_speed, memory_size, price, photo_url, storage_amount, number_usb_ports, number_firewire_ports, number_thunderbolt_ports)
VALUES ('Apple', 'MacBook', 8, 256, 2000, 'https://photourl.com', 16, 0, 0, 4);

INSERT INTO computers (make, model, cpu_speed, memory_size, price, photo_url, storage_amount, number_usb_ports, number_firewire_ports, number_thunderbolt_ports)
VALUES ('Apple', 'MacBook', 8, 256, 2000, 'https://photourl.com', 16, 0, 0, 4);

INSERT INTO computers (make, model, cpu_speed, memory_size, price, photo_url, storage_amount, number_usb_ports, number_firewire_ports, number_thunderbolt_ports)
VALUES ('Apple', 'MacBook', 8, 256, 2000, 'https://photourl.com', 16, 0, 0, 4);

-- Select all entries from the computers table
SELECT * FROM computers;


-- HUNGRY FOR MORE?
-- Alter the computers, adding a storage_type column
ALTER TABLE computers ADD storage_type varchar(255);
SELECT * FROM computers;
