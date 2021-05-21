import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
require('dotenv').config();

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [__dirname + '/src/*/models/.entity{.js,.ts}'],
  migrations: [__dirname + '/src/database/migrations/*{.js,.ts}'],
  subscribers: [__dirname + '/src/database/subscribers/*/{.js,.ts}'],
  cli: {
    entitiesDir: __dirname + '/src/**/models',
    migrationsDir: __dirname + '/src/database/migrations',
    subscribersDir: __dirname + '/src/database/subscribers',
  },
  namingStrategy: new SnakeNamingStrategy(),
};

export = config;
