create database github;

use github;

create table githubInfo (name varchar(250), description varchar(250) not null, url varchar(250), forks integer, id integer);