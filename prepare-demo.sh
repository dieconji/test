#!/bin/bash

echo "Building .env file..."
cp .env.deploy .env.production
sed -i "s/@@MYSQL_USER@@/${DEV_MYSQL_USER}/g" .env.production
sed -i "s/@@MYSQL_PASS@@/${DEV_MYSQL_PASSWORD}/g" .env.production
