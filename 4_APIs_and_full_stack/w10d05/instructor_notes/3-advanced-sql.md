# SQL - Advanced

## Lesson Objectives
1. Joins
1. Linking Tables
1. Alias
1. Indexes
1. Constraints

## Lesson Objectives - good to know about
1. ER Diagrams
1. Unions
1. Truncate
1. Triggers
1. Views
1. Transactions
1. Locks
1. SQL Injection


### Joins
1. Cross Join
1. Inner Join
1. Left Join
1. Right Join
1. Full Join

1. Cross Join
The SQL CROSS JOIN produces a result set which is the number of rows in the first table multiplied by the number of rows in the second table if no WHERE clause is used along with CROSS JOIN.

```sql
SELECT table1.column1, table2.column2
  FROM table1
  CROSS JOIN table2
```

2. Inner Join
The INNER JOIN selects all rows from both participating tables to appear in the result if and only if both tables meet the conditions specified in the ON clause.

```sql
SELECT table1.column1, table2.column2
  FROM table1
  INNER JOIN table2
  ON table1.common_filed = table2.common_field;
```

3. Left Join
The LEFT JOIN operation takes two relations, left (table1) and right (table2), and returns the inner join of left and right along with the unmatched rows of left. Left is the first relation defined in the FROM clause and is hence the left relation.

```sql
SELECT table1.column1, table2.column2
  FROM table1
  LEFT JOIN table2
  ON table1.common_filed = table2.common_field;
```

4. Right Join
The RIGHT JOIN keyword returns all records from the right table (table2), and the matched records from the left table (table1). The result is NULL from the left side, when there is no match.

```sql
SELECT table1.column1, table2.column2
  FROM table1
  RIGHT JOIN table2
  ON table1.common_filed = table2.common_field;
```

5. Full Join
The SQL FULL JOIN combines the results of both left and right outer joins.
```sql
SELECT table1.column1, table2.column2...
  FROM table1
  FULL JOIN table2
  ON table1.common_field = table2.common_field;
```

### Linking Tables (Relationships)
1. One to One Relationships
  - This relationship where a row from one table can only be associated with one row from another table.
	- Ex: each user has one address and subsecquently only one person at that address
1. One to Many/Many to One Relationships
  - This where a row from one table can be associated with multiple rows in another table.
	- Ex: customer has many orders
1. Many to Many Relationships
  - This relationship is where a row from one table can be associated with multiple rows in another table and vice-versa.
	- Ex: actors and movies

For reference: https://launchschool.com/books/sql/read/table_relationships


### Alias

```sql
SELECT t1.column1 as col1, t2.column2 as col2
  FROM table1 as t1
  INNER JOIN table2 as t2
  ON t1.common_filed = t2.common_field;
```

### Indexes
1. `CREATE INDEX index_name ON table_name (column_name);`
1. `CREATE INDEX index_name ON table_name (column1_name, column2_name);`
1. Primary Key


### Constraints
1. NOT NULL	
1. Unique
1. Foreign Keys

```sql
CREATE TABLE companies(
  id          SERIAL       PRIMARY KEY,
  name        VARCHAR(16)  NOT NULL UNIQUE,
  city        VARCHAR(16)
);


CREATE TABLE people(
  id          INT          PRIMARY KEY,
  name        VARCHAR(16)  NOT NULL,
  email       VARCHAR(32)  NOT NULL UNIQUE,
  company_id  INT          REFERENCES companies(id)
);
```

## Good to Know About

### ER Diagrams
This is known as a "Entity Relationship Diagram".  It is a high-level, visual diagram of your data structure.

### Unions
The UNION operator is used to combine the result-set of two or more SELECT statements.

### Truncate
The TRUNCATE TABLE command deletes the data inside a table, but not the table itself.

### Triggers
Triggers are stored programs, which are automatically executed or fired when some events occur.

### Views
A view is nothing more than a SQL statement that is stored in the database with an associated name. A view is actually a composition of a table in the form of a predefined SQL query.

### Transactions
A transaction is a unit of work that is performed against a database. Transactions are units or sequences of work accomplished in a logical order, whether in a manual fashion by a user or automatically by some sort of a database program.

### Locks
Locking is essential to successful SQL Server transactions processing and it is designed to allow SQL Server to work seamlessly in a multi-user environment. Locking is the way that SQL Server manages transaction concurrency. Essentially, locks are in-memory structures which have owners, types, and the hash of the resource that it should protect. A lock as an in-memory structure is 96 bytes in size.

### SQL Injection
SQL injection is a code injection technique that might destroy your database and is one of the most common web hacking techniques. SQL injection is the placement of malicious code in SQL statements, via web page input.