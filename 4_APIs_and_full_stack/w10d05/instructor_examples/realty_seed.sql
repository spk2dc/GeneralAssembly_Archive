.header on
.mode column

INSERT INTO apartments (apartment_number, bedrooms, bathrooms, address, tenant, occupied, sq_ft, price) VALUES 
  (101, 3, 2, '101 Cool Apartments Ln', 'Ben Manning', true, 1000, 4500),
  (202, 3, 2, '202 Cool Apartments Ln', 'Kelly Manning', true, 1000, 4500),
  (304, 3, 2, '304 Cool Apartments Ln', 'Beverly Davidson', true, 1000, 4500);

INSERT INTO offices (office_number, floors, sq_ft, cubicles, bathrooms, address, company, occupied, price) VALUES 
  (101, 3, 2, 8, 2, '101 Business Way Unit 1', 'Best Company Ever', true, 450000),
  (102, 3, 2, 8, 2, '102 Business Way Unit 1', 'Kinda Best Company Ever', true, 450000),
  (103, 3, 2, 8, 2, '103 Business Way Unit 1', 'Sorta Company Ever', false, 450000);

INSERT INTO storefronts (address, occupied, price, kitchen, sq_ft, owner, outdoor_seating) VALUES 
  ('202 Store Front Place', true, 4000, false, 5000, 'James Storefront', true),
  ('204 Store Front Place', true, 4000, true, 5000, 'Deja Storefront', true),
  ('206 Store Front Place', true, 4000, true, 5000, 'John Storefront', true);

SELECT * FROM apartments;
SELECT * FROM offices;
SELECT * FROM storefronts;
