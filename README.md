# Alzheimer's Drug Design Project
## Overview
This project aims to design potential drug compounds for Alzheimer's disease using a combination of molecular simulations, machine learning, and a web application for visualization. The project is structured into five phases, from initial setup and Dockerization to final deployment.

## Project Phases
Initial Setup, Dockerization, and GCP Configuration
Database, Frontend Development, and ETL Processes
Machine Learning on SMILES Data
Molecular Dynamics Simulations
Finalization and Deployment
For a detailed breakdown of each phase, please refer to the project plan.

## Current Plan for Directory Structure
Alzheimers_Drug_Design/<br>
│<br>
├── README.md
├── docker-compose.yml
├── .gitignore
├── environment.yml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   └── utils/
│   ├── public/
│   ├── package.json
│   └── tests/
│       ├── unit/
│       └── integration/
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── middleware/
│   ├── config/
│   ├── package.json
│   └── tests/
│       ├── unit/
│       └── integration/
│
├── database/
│   ├── migrations/
│   ├── seeds/
│   ├── schema.sql
│   └── tests/
│       └── db_tests/
│
├── machine_learning/
│   ├── data/
│   ├── models/
│   ├── scripts/
│   └── tests/
│       ├── data_tests/
│       └── model_tests/
│
└── molecular_dynamics/
    ├── simulations/
    ├── scripts/
    └── tests/
        └── simulation_tests/

## Getting Started
Will be updated as the project progresses...

### Prerequisites
- Docker and Docker Compose installed on your machine
- Git (for cloning the repository)

Clone the Repository: 
```
git clone https://github.com/CoryBrown/Alzheimers_Drug_Design.git
```
Navigate to Project Directory: cd Alzheimers-Drug-Design-Project
Set Up Environment: 
To run this project, you will need to add the following environment variables to your `.env` file:

- `POSTGRES_USER`: Cory
- `POSTGRES_PASSWORD`: password
- `POSTGRES_DB`: ADD

Refer to `.env.sample` for a template.
Run Docker Compose: docker-compose up

## Testing
Automated tests are available for each major component of the project. Navigate to the respective directory and run the tests using the appropriate testing framework.

## Budget Allocation
Google Cloud Platform (GCP) services: $120
Database hosting (PostgreSQL on GCP Cloud SQL): $40
Miscellaneous (domain, SSL certificate, etc.): $40
Total Budget: $200

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Environment Variables



## Getting Started

Instructions for setting up the project locally will be added as the project progresses.