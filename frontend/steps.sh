#!/bin/bash

####################################################################################################
# STEPS EXECUTED TO CREATE THE FRONTEND PROJECT
####################################################################################################

# Create React App with Vite
npm create vite@latest
# ✔ Project name: … frontend
# ✔ Select a framework: › React
# ✔ Select a variant: › JavaScript + SWC

# Move to the project directory
cd frontend

# Install dependencies
npm install

# Run locally
npm run dev
