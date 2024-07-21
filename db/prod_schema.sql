DROP DATABASE IF EXISTS colors_prod_4r4u;
CREATE DATABASE colors_prod_4r4u;

\c colors_prod_4r4u;

CREATE TABLE colors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    is_favorite BOOLEAN
);
