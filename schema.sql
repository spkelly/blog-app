CREATE DATABASE blogDB;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username text,
  email varchar(20),
  profile_pic text
););
CREATE TABLE post(
  id SERIAL PRIMARY KEY,
  title text,
  users_id integer references users(id),
  body varchar(500)
);
CREATE TABLE commments(
  id SERIAL PRIMARY KEY,
  comment_text varchar(200),
  users_id integer references users(id),
  post_id integer references post(id)
);
