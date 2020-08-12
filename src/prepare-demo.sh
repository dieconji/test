#!/bin/bash

echo "Building .env file..."
cp .env.deploy .env.production
sed -i "s/@@PORT@@/${DEV_PORT}/g" .env.production
sed -i "s/@@JWT_SECRET@@/${DEV_JWT_SECRET}/g" .env.production
sed -i "s/@@JWT_EXPIRATION_MINUTES@@/${DEV_JWT_EXPIRATION_MINUTES}/g" .env.production
sed -i "s/@@MYSQL_HOST@@/${DEV_MYSQL_HOST}/g" .env.production
sed -i "s/@@MYSQL_USER@@/${DEV_MYSQL_USER}/g" .env.production
sed -i "s/@@MYSQL_PASSWORD@@/${DEV_MYSQL_PASSWORD}/g" .env.production
sed -i "s/@@MYSQL_PORT@@/${DEV_MYSQL_PORT}/g" .env.production
sed -i "s/@@MYSQL_DATABASE_BC@@/${DEV_MYSQL_DATABASE_BC}/g" .env.production
sed -i "s/@@MAIL_USER@@/${DEV_MAIL_USER}/g" .env.production
sed -i "s/@@MAIL_PASSWORD@@/${DEV_MAIL_PASSWORD}/g" .env.production
sed -i "s/@@BASIC_AUTH_PASS@@/${DEV_BASIC_AUTH_PASS}/g" .env.production
