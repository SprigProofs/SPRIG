
.PHONY: backend frontend deploy sync-files test fmt install install-dev

PORT=8600
BACKEND_PORT=8601

backend:
	DEV=true poetry run uvicorn api:api --port $(BACKEND_PORT) --reload

frontend:
	cd frontend && PORT=$(PORT) npm run dev

deploy:
	cd frontend && npm run build && scp -r dist sprig.therandom.space:sprig/frontend/ && make sync-files

sync-files:
	git ls-files | rsync -azP --files-from=- . sprig.therandom.space:sprig

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
