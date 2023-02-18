
.PHONY: backend frontend deploy deploy-frontend deploy-backend  sync-files test fmt install install-dev backends cloc

PORT=8600
BACKEND_PORT=8601

backend:
	DEV=true poetry run uvicorn api:api --port $(BACKEND_PORT) --reload --log-level=trace


frontend:
	cd frontend && PORT=$(PORT) npm run dev

backends:
	DEV=true DATA=data0 poetry run uvicorn api:api --port $(BACKEND_PORT) --reload --log-level=trace &
	DEV=true DATA=data1 poetry run uvicorn api:api --port $$(($(BACKEND_PORT)+1)) --reload --log-level=trace &
	DEV=true DATA=data2 poetry run uvicorn api:api --port $$(($(BACKEND_PORT)+2)) --reload --log-level=trace &

deploy: deploy-frontend deploy-backend

deploy-frontend:
	cd frontend && npm run build && scp -r dist sprig.therandom.space:sprig/frontend/
	scp SPRIG.SECRET sprig.therandom.space:sprig

deploy-backend:
	git ls-files | rsync -azP --files-from=- . sprig.therandom.space:sprig
	ssh sprig.therandom.space systemctl --user restart sprig

test:
	poetry run pytest
	poetry run mypy .
	poetry run yapf --exclude frontend/node_modules --diff --parallel --recursive .

fmt:
	poetry run yapf --exclude frontend/node_modules --in-place --parallel --recursive .

install:
	poetry install

install-dev: install
	npm install

cloc:
	cloc . --exclude-dir=node_modules,.mypy_cache,.pytest_cache,.idea,.vscode,build,dist,package-lock.json --by-file-by-lang
