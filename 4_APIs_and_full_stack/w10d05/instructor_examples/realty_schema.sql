DROP TABLE apartments;
DROP TABLE offices;
DROP TABLE storefronts;

CREATE TABLE apartments (
  id integer primary key,
  apartment_number integer,
  bedrooms integer,
  bathrooms integer,
  address varchar(255),
  tenant varchar(255),
  occupied boolean,
  sq_ft integer,
  price integer
);

CREATE TABLE offices (
  id integer primary key,
  office_number integer,
  floors integer,
  sq_ft integer,
  cubicles integer,
  bathrooms integer,
  address varchar(255),
  company varchar(255),
  occupied boolean,
  price integer
);

CREATE TABLE storefronts (
  id integer primary key,
  address varchar(255),
  occupied boolean,
  price integer,
  kitchen boolean,
  sq_ft integer,
  owner varchar(255),
  outdoor_seating boolean
);