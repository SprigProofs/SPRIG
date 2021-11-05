# Sprig 

A description of the SPRIG protocol can be found here: https://export.arxiv.org/abs/2102.03044v1

This repository contains a centralised version of the SPRIG protocol 
whose purpose is to experiment with the protocol 
and to serve as future reference for a decentralised version.

The protocol is implemented as a library
in [`sprig.py`](./sprig.py) and a Web API is 
developped in [`api.py`](./api.py).

### Dependencies

This code is meant to be run with a recent version of Python (>= 3.8),
and the web api need `FastAPI` (`pip install fastapi`) to run. 
It can be run with `uvicorn` as
```shell script
uvicorn api:api
```

Alternatively, if you have `make`, `poetry` and `npm` installed,
you can run `make install` to get the dependencies and
then `make run` or `make dev` to start the server in production
or development mode.
