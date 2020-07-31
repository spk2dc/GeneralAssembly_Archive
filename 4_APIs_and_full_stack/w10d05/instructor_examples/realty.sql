-- 1. The average square footage of all offices.
SELECT AVG(sq_ft) FROM offices;

-- 2. The total number of apartments.
SELECT COUNT() from apartments;

-- 3. The apartments where there is no tenant
SELECT * FROM apartments WHERE occupied=true;

-- 4. The names of all of the companies
SELECT company FROM offices;

-- 5. The number of cubicles and bathrooms in the 3rd office


-- 6. The storefronts that have kitchens


-- 7. The storefront with the highest square footage and outdoor seating


-- 8. The office with the lowest number of cubicles


-- 9. The office with the most cubicles and bathrooms
