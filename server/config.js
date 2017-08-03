const config = {};

config.db = {};
config.env = {};

//Config properties on config.db for host and database names
config.db.host = 'localhost';
config.db.name = 'kapitol';
config.db.house = 'house';
config.db.senate = 'senate';

//Environement variables
config.env.TINMAN_PORT = process.env.KAPITOL_TINMAN_PORT;


export default config;
