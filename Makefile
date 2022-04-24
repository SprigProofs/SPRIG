PORT=8600
BACKEND_PORT=8601

backend:
	DEV=true poetry run uvicorn api:api --port $(BACKEND_PORT) --reload

frontend:
	cd frontend && PORT=$(PORT) npm run serve

run:
	poetry run uvicorn api:api --port $(BACKEND_PORT) &
	cd frontend && PORT=$(PORT) npm run serve

test:
	poetry run pytest

install:
	poetry install

install-dev: install
	npm install
