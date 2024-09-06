#!/bin/bash

####################################################################################################
# STEPS EXECUTED TO DEPLOY THE FRONTEND PROJECT (SIMPLIFIED WITHOUT POETRY TOOL)
####################################################################################################

# IMPORTANT: MANUAL STEPS ONLY ONCE!!!
# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# Manually set the global variables inside the frontend project "frontend/src/GLOBAL_VARS.jsx"
# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

# Move to frontend folder
cd frontend

# Build the frontend distribution
npm install .
npm run build

# Return to root directoy
cd ..

# Install Python dependencies with PIP (other tools like Poetry can be used)
pip install -r requirements.txt

# Configure deployment environment
export AWS_DEFAULT_REGION=us-east-1
export DEPLOYMENT_ENVIRONMENT=prod

# Initialize CDK (Cloud Development Kit)
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
cdk bootstrap aws://${ACCOUNT_ID}/us-east-1


# Deploy the frontend
cdk deploy "fastapi-todo-app-frontend-${DEPLOYMENT_ENVIRONMENT}" --require-approval never
