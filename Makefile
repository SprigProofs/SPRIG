
.PHONY: backend frontend deploy deploy-frontend deploy-backend  sync-files test fmt install install-dev

PORT=8600
BACKEND_PORT=8601

backend:
	DEV=true poetry run uvicorn api:api --port $(BACKEND_PORT) --reload --log-level=trace

frontend:
	cd frontend && PORT=$(PORT) npm run dev

deploy: deploy-frontend deploy-backend

deploy-frontend:
	cd frontend && npm run build && scp -r dist sprig.therandom.space:sprig/frontend/

deploy-backend:
	git ls-files | rsync -azP --files-from=- . sprig.therandom.space:sprig
	ssh sprig.therandom.space systemctl --user restart sprig

test:
	poetry run pytest
	poetry run mypy .
	poetry run yapf --diff --parallel --recursive .

fmt:
	poetry run yapf --in-place --parallel --recursive .

install:
	poetry install

install-dev: install
	npm install
