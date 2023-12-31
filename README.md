# Alzheimer's Drug Design Project
## Overview
This project aims to design potential drug compounds for Alzheimer's disease using a combination of molecular simulations, machine learning, and a web application for visualization. The project is structured into five phases, from initial setup and Dockerization to final deployment.

## Introduction
Alzheimer's disease is a progressive neurologic disorder that causes the brain to shrink and brain cells to die. This project aims to leverage computational approaches to design drugs that can potentially alter the course of the disease. Through the use of molecular simulations, machine learning algorithms, and a web application for visualization, we hope to accelerate the discovery and development of effective therapeutics for Alzheimer's disease.

## Project Phases
- Initial Setup, Dockerization, and GCP Configuration
- Database, Frontend Development, and ETL Processes
- Machine Learning on SMILES Data
- Molecular Dynamics Simulations
- Finalization and Deployment

## Project Plan
For a detailed breakdown of the project plan, please see [PROJECT_PLAN.md](PROJECT_PLAN.md).

## Current Plan for Directory Structure
Alzheimers_Drug_Design/<br>
│<br>
├── README.md<br>
├── docker-compose.yml<br>
├── .gitignore<br>
├── environment.yml<br>
├── PROJECT_PLAN.md
│<br>
├── frontend/<br>
│   ├── src/<br>
│   │   ├── components/<br>
│   │   ├── assets/<br>
│   │   └── utils/<br>
│   ├── public/<br>
│   ├── package.json<br>
│   └── tests/<br>
│       ├── unit/<br>
│       └── integration/<br>
│<br>
├── backend/<br>
│   ├── src/<br>
│   │   ├── routes/<br>
│   │   ├── controllers/<br>
│   │   ├── models/<br>
│   │   └── middleware/<br>
│   ├── config/<br>
│   ├── package.json<br>
│   └── tests/<br>
│       ├── unit/<br>
│       └── integration/<br>
│<br>
├── database/<br>
│   ├── migrations/<br>
│   ├── seeds/<br>
│   ├── schema.sql<br>
│   └── tests/<br>
│       └── db_tests/<br>
│<br>
├── machine_learning/<br>
│   ├── data/<br>
│   ├── models/<br>
│   ├── scripts/<br>
│   └── tests/<br>
│       ├── data_tests/<br>
│       └── model_tests/<br>
│<br>
└── molecular_dynamics/<br>
    ├── simulations/<br>
    ├── scripts/<br>
    └── tests/<br>
        └── simulation_tests/<br>

## Getting Started
Will be updated as the project progresses...

### Prerequisites
- Docker (version 24.0.5 or higher recommended)
- Docker Compose (version 2.23.0 or higher recommended)
- Git (for cloning the repository)
- Node.js (LTS version recommended)

### Clone the Repository 
```
git clone https://github.com/CoryBrown/Alzheimers_Drug_Design.git
```
### Navigate to Project Directory 
```
cd Alzheimers-Drug-Design-Project
```
### Set Up Environment
- Rename `.env.sample` to `.env`.
- Fill in the necessary environmental variables.
### Build and Run Docker Containers
```
docker-compose up
```
This will build the Docker images for the database, backend, and frontend if they haven't been built before, and start the containers.
## Testing
Automated tests for each major component of the project will be available. Instructions for running the tests will be added as the project progresses. This will ensure that all features are working as expected and maintain the quality of the project.

## Budget Allocation
Google Cloud Platform (GCP) services: $120
Database hosting (PostgreSQL on GCP Cloud SQL): $40
Miscellaneous (domain, SSL certificate, etc.): $40
Total Budget: $200

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
