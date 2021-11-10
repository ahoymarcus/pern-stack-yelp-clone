-- Postgres PSQL commands
-- Help _____________________________ \?  
-- Show databases ___________________ \l
-- change to the/other database _____ \c
-- show tables in a database ________ \d
-- show the structure of a table ____ \d <table-name>
-- 
-- 
-- 
-- quiting command line _____________ \q
-- 
-- 

-- DROP DATABASE IF EXISTS yelp;
CREATE DATABASE yelp;

DROP TABLE restaurant;
CREATE TABLE restaurant (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(60) NOT NULL,
	location VARCHAR(70) NOT NULL,
	price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

CREATE TABLE yelp.review (

);

INSERT INTO restaurant (name, location, price_range) VALUES 
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




