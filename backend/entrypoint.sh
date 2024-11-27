#!/bin/bash

# Wait for PostgreSQL to be ready
until pg_isready -h db -p 5432 -U "$POSTGRES_USER"; do
  echo "Waiting for PostgreSQL..."
  sleep 2
done

# Retry logic for database connection
retries=5
until python seed_database.py || [ $retries -eq 0 ]; do
  echo "Retrying database initialization..."
  retries=$((retries - 1))
  sleep 5
done

# Exit with error if the database initialization fails
if [ $retries -eq 0 ]; then
  echo "Database initialization failed"
  exit 1
fi

# Start the FastAPI server
exec uvicorn main:app --host 0.0.0.0 --port 8000
