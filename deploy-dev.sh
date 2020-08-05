#!/bin/bash

# Set deployment variables
TARGET_USER=ubuntu
TARGET_HOST=ec2-35-180-42-133.eu-west-3.compute.amazonaws.com

deployname='test-cd'

# Remote Install Commands
RemoteCommands=(
  # First delete directory if exists
  "echo '- Removing potentially existing directory on host..'"
  "rm -Rf ~/${deployname}"

  # First name sure directory exists
  "echo '- Creating deployment directory...'"
  "mkdir -p ~/${deployname}"

  # Now extract from STDIN
  "echo '- Extracting deployment on host...'"
  "tar -xzf - -C ~/${deployname}/"

  "echo '- Killing old version of the api...'"
  "~/${deployname}/node_modules/.bin/pm2 delete api"

  "echo '- Starting new version of the api...'"
  "cd ~/${deployname}/ && npm run start"
)

# Join array of RemoteCommands to a semicolon separated string
function join_by { local IFS="$1"; shift; echo "$*"; }
REMOTE_COMMANDS=$(join_by \; "${RemoteCommands[@]}")

echo "Deploying to ${TARGET_HOST}..."

tar -zcf - --exclude='.git' --exclude='coverage' --exclude='tests' --exclude='test-data' . | \
ssh -o 'StrictHostKeyChecking no' ${TARGET_USER}@${TARGET_HOST} ${REMOTE_COMMANDS}

echo "Development Deployment Completed."
