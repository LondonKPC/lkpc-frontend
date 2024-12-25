#!/bin/bash
# deploy_frontend_dev.sh

# Make sure the branch is on dev
if [ "$BRANCH_NAME" == "dev" ]; then
    echo "Deploying to Development..."
    # Sync to dev S3 bucket
    aws s3 sync out/ s3://lkpc-hosting-dev --delete

else
    echo "Branch is not configured for deployment. Exiting..."
    exit 1
fi