#!/bin/bash
# deploy_frontend_dev.sh

# Make sure the branch is on dev
if [ "$BRANCH_NAME" == "dev" ]; then
    echo "Deploying to Development..."
    # Sync to dev S3 bucket


else
    echo "Branch is not configured for deployment. Exiting..."
    exit 1
fi