.headers ON
.mode columns

/* note that once you rename a table, you MUST refer to it by its new name */
SELECT * FROM airports AS origin WHERE origin.city = 'New York';
/* later on in the SQL statement, when dealing with the destination, you should do the same for airports AS destination */

