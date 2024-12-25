#!/bin/bash
# deployFrontend.sh

# Gets the branch name from the GitHub reference (ex. refs/head/main)
BRANCH_NAME="${GITHUB_REF##*/}"

if [ "$BRANCH_NAME" == "main" ]; then
    echo "Deploying to Production..."
    # Sync to production S3 bucket
    aws s3 sync out/ s3://lkpc-hosting-prod --delete

elif [ "$BRANCH_NAME" == "dev" ]; then
    echo "Deploying to Development..."
    # Sync to dev S3 bucket
    aws s3 sync out/ s3://lkpc-hosting-dev --delete

else
    echo "Branch is not configured for deployment. Exiting..."
    exit 1
fi