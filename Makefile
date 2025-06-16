
.PHONY: backend frontend deploy deploy-frontend deploy-backend  sync-files test fmt install install-dev backends cloc

PORT=8600
BACKEND_PORT=8601
DEPLOY_HOST=pine
DEPLOY_PATH=/srv/sprig

backend:
	DEV=true uv run uvicorn api:app --port $(BACKEND_PORT) --reload --log-level=trace

frontend:
	cd frontend && PORT=$(PORT) npm run dev

backend0:
	DEV=true DATA=data0 uv run uvicorn api:app --port $(BACKEND_PORT) --reload --log-level=trace
backend1:
	DEV=true DATA=data1 uv run uvicorn api:app --port $$(($(BACKEND_PORT)+1)) --reload --log-level=trace
backend2:
	DEV=true DATA=data2 uv run uvicorn api:app --port $$(($(BACKEND_PORT)+2)) --reload --log-level=trace
backends: backend0 backend1 backend2


# I've set DEV=true here because there's an issue building the docker image for lean on pine.
# So it falls back to the local lean installation (which is not available on pine, but that's fine: it doesn't crash instantly).
# No one is making claims anyway.
backend0-prod:
	DEV=true DATA=data0 uv run uvicorn api:app --port $(BACKEND_PORT)
backend1-prod:
	DEV=true DATA=data1 uv run uvicorn api:app --port $$(($(BACKEND_PORT)+1))
backend2-prod:
	DEV=true DATA=data2 uv run uvicorn api:app --port $$(($(BACKEND_PORT)+2))

backends-prod: backend0-prod backend1-prod backend2-prod

deploy: deploy-frontend deploy-backend

deploy-frontend:
	cd frontend && npm run build && scp -r dist ${DEPLOY_HOST}:${DEPLOY_PATH}/frontend

deploy-backend:
	git ls-files | rsync -azP --files-from=- . ${DEPLOY_HOST}:${DEPLOY_PATH}/
	scp *.service ${DEPLOY_HOST}:/etc/systemd/system/
	ssh ${DEPLOY_HOST} 'systemctl daemon-reload && systemctl restart "sprig*" && journalctl -u "sprig*" -f'

deploy-secrets:
	scp data0/SECRET_SANTA sprig.therandom.space:sprig/data1/
	scp data1/SECRET_SANTA sprig.therandom.space:sprig/data2/
	scp data2/SECRET_SANTA sprig.therandom.space:sprig/data3/

test:
	uv run pytest
	uv run mypy .
	uv run yapf --exclude frontend/node_modules --diff --parallel --recursive .

fmt:
	uv run yapf --exclude frontend/node_modules --in-place --parallel --recursive .

install:
	uv sync

install-dev: install
	cd frontend && npm install

cloc:
	cloc . --exclude-dir=node_modules,.mypy_cache,.pytest_cache,.idea,.vscode,build,dist,package-lock.json --by-file-by-lang
