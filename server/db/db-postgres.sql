-- https://node-postgres.com/guides/async-express
-- https://www.postgresql.org/docs/
-- Postgres PSQL commands
-- Help _______________________________ \?  
-- Show databases _____________________ \l
-- change to the/other database _______ \c
-- show tables in a database __________ \d
-- show the structure of a table ______ \d <table-name>
-- show current Roles at cluster ______ \du
-- or SELECT rolname FROM pg_roles; ___
-- 
-- quiting command line _______________ \q
-- 
-- 

CREATE USER mock_developer WITH PASSWORD 'password123';
GRANT ALL PRIVILEGES ON DATABASE yelp_clone TO mock_developer;
GRANT ALL PRIVILEGES ON TABLE restaurants TO mock_developer;
SELECT * FROM information_schema.role_table_grants WHERE grantee='mock_developer';

PGUSER=mock_developer
PGPASSWORD=password123


-- DROP DATABASE IF EXISTS yelp_clone;
CREATE DATABASE yelp_clone;

DROP TABLE IF EXISTS restaurants;
CREATE TABLE restaurants (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(60) NOT NULL,
	location VARCHAR(70) NOT NULL,
	price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

CREATE TABLE review (

);

INSERT INTO restaurants (name, location, price_range) VALUES 
	('MacDonalds', 'New Youk', 3),
	('pizza hut', 'Vegas', 3),
	('wendys', 'denver', 3),
	(),
	(),
	();
	




CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(
        rating >= 1
        and rating <= 5
    )
);
select *
from restaurants
    left join(
        select restaurant_id,
            count(*),
            TRUNC(AVG(rating, 1)) as average_rating
        from reviews
        group by restaurant_id
    ) reviews on restaurants.id = reviews.restaurant_id;




