# Sprig

www.sprig.ch

A description of the SPRIG protocol can be found here: https://export.arxiv.org/abs/2102.03044v1
A test version of the website is available at: https://sprig.therandom.space

This repository contains a centralised version of the SPRIG protocol
whose purpose is to experiment with the protocol
and to serve as future reference for a decentralised version.

There are four parts in this repository:
 - The SPRIG Library, written in Python and without any dependency -> [`sprig.py`](./sprig.py)
 - A collection of languages descriptions that provide the backend of the protocol -> [`languages/`](./languages)
 - An web API, written in Python with FastAPI -> [`api.py`](./api.py)
 - A web interface, written in Vue 3 -> [`frontend/`](./frontend)


## SPRIG library

Status: *Completed*
Dependencies: Python 3.8

The library contains the logic of the protocol agnostic of the underlying proof language.
It can handle claim and challenges, stakes and bounties and updates SPRIG Trees over time.

## Languages

Status: *Completed*
Dependencies: Python 3.8

Languages specify the format of claims and the low level verification mechanisms.
Support for [Lean 4](https://leanprover.github.io/) works but subtle edge cases could be exploited.
We implemented a toy language to represent Tic Tac Toe games, which is complete.

## Web API / Server

Status: *Completed*
Dependencies: Python 3.8, FastAPI

The API / Server is the interface from the library code to the web, so that modifications of SPRIG trees
can be made by HTTP requests. The API is generated by FastAPI which provides documentation (with the OpenAPI format)
and communicates via the standard JSON format.

## Web Interface

Status: *Mostly done*
Dependencies: Vue 3, Vite, npm

The Web interface is the user facing part of the project.
It is currently capable of every interaction that is needed with the SPRIG protocol
and displays everything there is to know. However, we are still working on
making the interface more user-friendly, consistent and efficient.

### For developpers

All dependencies for the web can be installed with

```shell script
cd frontend
npn install
```

This will install:
- [Vite](https://vitejs.dev/): the build tool
- [Vue 3](https://vuejs.org/): the frontend framework that provides components
- [lodash](https://lodash.com/): a collection of utility functions
- [dayjs](https://day.js.org/): utilities to manipulate dates and times
- [Tailwindcss](https://tailwindcss.com/): a CSS framework
- [Element+](element-plus.org/): a collection of ready-made components
- [Oh Vue Icons](oh-vue-icons.js.org/): a collection of icons
- [Vue Router](https://router.vuejs.org/): gestion of url and navigation between pages


## Dependencies

This code is meant to be run with a recent version of Python (>= 3.8),
and the web api need `FastAPI` (`pip install fastapi`) to run.
It can be run with `uvicorn` as
```shell script
uvicorn api:api
```

Alternatively, if you have `make`, `poetry` and `npm` installed,
you can run `make install` to get the dependencies and
then `make dev` to start the server in development mode.
