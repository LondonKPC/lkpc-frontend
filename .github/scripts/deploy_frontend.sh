#!/bin/bash
# deploy_frontend.sh

BUCKET_NAME="lkpc-hosting-${ENVIRONMENT}"

if [ "$ENVIRONMENT" == "prod" ]; then
    echo "Deploying to Production..."
    # Sync to production S3 bucket
    aws s3 sync out/ s3://"$BUCKET_NAME" --delete

elif [ "$BRANCH_NAME" == "dev" ]; then
    echo "Deploying to Development..."
    # Sync to dev S3 bucket
    aws s3 sync out/ s3://"$BUCKET_NAME" --delete

else
    echo "Branch is not configured for deployment. Exiting..."
    exit 1
fi