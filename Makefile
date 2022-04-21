PORT=8600
BACKEND_PORT=8601

run:
	poetry run uvicorn api:api --port $(PORT) &
	cd frontend && PORT=$(BACKEND_PORT) npm run serve

dev:
	DEV=true poetry run uvicorn api:api --port $(PORT) --reload &
	cd frontend && PORT=$(BACKEND_PORT) npm run serve

test:
	poetry run pytest

install:
	poetry install

install-dev: install
	npm install
