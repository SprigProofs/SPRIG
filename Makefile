
.PHONY: backend frontend run test fmt install install-dev

PORT=8600
BACKEND_PORT=8601

backend:
	DEV=true poetry run uvicorn api:api --port $(BACKEND_PORT) --reload

frontend:
	cd frontend && PORT=$(PORT) npm run dev

deploy:
	cd frontend && npm run build && scp -r dist sprig.therandom.space:sprig/frontend/dist

test:
	poetry run pytest
	poetry run mypy .
	poetry run yapf --diff --recursive .

fmt:
	poetry run yapf --recursive .

install:
	poetry install

install-dev: install
	npm install
