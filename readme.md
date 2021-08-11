# Sprig 

A description of the SPRIG protocol can be found here: https://export.arxiv.org/abs/2102.03044v1

This repository contains a centralised version of the SPRIG protocol 
whose purpose is to experiement with the protocol 
and to serve as futur reference for a decentralised version.

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

Alternatively, all the dependencies are specified in the [`flake.nix`](./flake.nix)
file, but Nix is not required to run the software.
