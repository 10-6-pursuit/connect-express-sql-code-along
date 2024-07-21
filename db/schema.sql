DROP DATABASE IF EXISTS colors_prod;
CREATE DATABASE colors_prod;

\c colors_prod;

CREATE TABLE colors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    is_favorite BOOLEAN
);