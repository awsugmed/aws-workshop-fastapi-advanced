###############################################################################
# Entrypoint for the API that uses "Mangum" as a wrapper for API-GW integration
###############################################################################

# Own imports
import os

# External imports
from mangum import Mangum
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# Own imports
from todo_app.api.v1.routers import (
    todos,
)

# Environment used to dynamically load the FastAPI docs with stages
ENVIRONMENT = os.environ.get("ENVIRONMENT")


app = FastAPI(
    title="TODOs APP FastAPI",
    description="The TODOs API is a cool example to showcase a production-grade FastAPI usage on top of AWS with Lambda Functions and API-GW",
    version="1.0",
    root_path=f"/{ENVIRONMENT}" if ENVIRONMENT else None,
    docs_url="/api/v1/docs",
    openapi_url="/api/v1/docs/openapi.json",
)

# Required to allow CORS for the API (for local development and external frontends)
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(todos.router, prefix="/api/v1")

# This is the Lambda Function's entrypoint (handler)
handler = Mangum(app)
