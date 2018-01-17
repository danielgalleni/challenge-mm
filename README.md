# challenge-mm

<p align="center">
  <a href="https://www.maxmilhas.com.br/">
    <img src="https://assets.maxmilhas.com.br/f0c0c10e7e14/site/img/logo.png" alt="MaxMilhas Challenge" height=72>
  </a>

  <h3 align="center">MaxMilhas Challenge</h3>

  <p align="center">
    API for CPF consultation, validation and inclusion of mask, among other resources for learning.
  </p>
</p>
<br>

## Table of contents

- [Quick start](#quick-start)
- [Setup](#setup)
- [Structure of the project](#structure-of-the-project)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Creators](#creators)

## Quick start

Several quick start options are available:

- [Download the latest release.](https://github.com/danielgalleni/challenge-mm.git)
- Clone the repo: `git clone https://github.com/danielgalleni/challenge-mm.git`
- Install with [npm](https://www.npmjs.com/): `npm install`
- Install [Docker](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#os-requirements) following this link

## Structure of the project

Within the download you'll find the following directories and files, logically grouping common assets. You'll see something like this:

```
challenge-mm/
├── config/
│   ├── custom-express.js
│   ├── global-setting.js
└── resources/
│   ├── controllers/
│   |   ├── cpfs-controller.js
|   ├── models/
│   |   ├── cpfs-models.js
|   ├── routes/
│       ├── cpfs-routes.js
└─── test
|   ├── test.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package-lock.json
├── package.json
├── README.me
├── routes.js
├── service.js
```

## Setup
- Create/build the container `sudo docker build -t danielgalleni/challenge-mm .`
- Execute this command `sudo docker run -it -p 8080:3001 -d danielgalleni/challenge-mm`

## Bugs and feature requests
- To fix bugs and suggest improvements in the project, just fork the same and send a pull request. Your name and link to github will include in this README.

## Documentation
- Routes the API

# GET
- /
- /Ping
- /Status
- /cpfs
- /cpfs/:cpfId
- /cpfs/list/block
- /cpfs/list/free
- /status/:cpf

# POST
- /cpfs

# PUT
- /cpfs/:cpfId
- /cpfs/:cpf/block
- /cpfs/:cpf/free

# DELETE
- /cpfs/:cpfId

## Creators
- [Daniel Galleni](https://github.com/danielgalleni/)