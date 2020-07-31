.headers ON
.mode columns


-- Find all airports that originate from New York

/* note that once you rename a table, you MUST refer to it by its new name */
SELECT * FROM airports AS origin WHERE origin.city = 'New York';
/* later on in the SQL statement, when dealing with the destination, you should do the same for airports AS destination */


-- Find all destination airports in Paris
select * from airports as destination where destination.city = 'Paris';

-- Find out how many routes originate from New York


-- Find out how many routes have destinations in Paris


-- Try to decide which statements are necessary and find how to combine them to find out how many routes originate from New York and land in Paris!

