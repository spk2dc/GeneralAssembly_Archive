.headers ON
.mode columns


-- Find all airports that originate from New York

/* note that once you rename a table, you MUST refer to it by its new name */
-- SELECT * FROM airports AS origin WHERE origin.city = 'New York';
/* later on in the SQL statement, when dealing with the destination, you should do the same for airports AS destination */


-- Find all destination airports in Paris
-- select * from airports as destination where destination.city = 'Paris';

-- Find out how many routes originate from New York
-- SELECT count(origin_code), airline_code, origin_code, dest_code
--   FROM routes
--   INNER JOIN airports
--   ON routes.origin_id = airports.id
--   WHERE airports.city = 'New York'
--   GROUP BY routes.airline_id;

-- Find out how many routes have destinations in Paris
-- SELECT count(origin_code), airline_code, origin_code, dest_code
--   FROM routes
--   INNER JOIN airports
--   ON routes.dest_id = airports.id
--   WHERE airports.city = 'Paris'
--   GROUP BY routes.airline_id;

-- Try to decide which statements are necessary and find how to combine them to find out how many routes originate from New York and land in Paris!
SELECT count(*), airline_code, origin_code, dest_code
  FROM routes
  INNER JOIN airports as origin
  ON routes.origin_id = origin.id
  INNER JOIN airports as dest
  ON routes.dest_id = dest.id 
  WHERE origin.city = 'New York' AND dest.city = 'Paris';
