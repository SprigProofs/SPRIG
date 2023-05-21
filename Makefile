
.PHONY: backend frontend deploy deploy-frontend deploy-backend  sync-files test fmt install install-dev backends cloc

PORT=8600
BACKEND_PORT=8601

backend:
	DEV=true poetry run uvicorn api:api --port $(BACKEND_PORT) --reload --log-level=trace

frontend:
	cd frontend && PORT=$(PORT) npm run dev

backend0:
	DEV=true DATA=data0 poetry run uvicorn api:api --port $(BACKEND_PORT) --reload --log-level=trace
backend1:
	DEV=true DATA=data1 poetry run uvicorn api:api --port $$(($(BACKEND_PORT)+1)) --reload --log-level=trace
backend2:
	DEV=true DATA=data2 poetry run uvicorn api:api --port $$(($(BACKEND_PORT)+2)) --reload --log-level=trace
backends: backend0 backend1 backend2


deploy: deploy-frontend deploy-backend

deploy-frontend:
	cd frontend && npm run build && scp -r dist sprig.therandom.space:sprig/frontend/

deploy-backend:
	git ls-files | rsync -azP --files-from=- . sprig.therandom.space:sprig
	ssh sprig.therandom.space systemctl --user restart sprig sprig-viazovska sprig-grothendieck sprig-repeated-ping

deploy-secrets:
	scp data0/SECRET_SANTA sprig.therandom.space:sprig/data1/
	scp data1/SECRET_SANTA sprig.therandom.space:sprig/data2/
	scp data2/SECRET_SANTA sprig.therandom.space:sprig/data3/

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
