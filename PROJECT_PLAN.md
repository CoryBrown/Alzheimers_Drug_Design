# Alzheimer's Drug Design Project Plan

**Duration:** November 1st, 2023 - December 31st, 2023

## Phase 1: Initial Setup, Dockerization, and GCP Configuration
**Duration:** November 1 - November 10  
**Objective:** Set up the project environment, Dockerize the application components, and configure Google Cloud Platform (GCP) services.

### Tasks:
#### Project Initialization
- Set up the project directory structure.
- Initialize repositories for frontend, backend, and database components.

#### Dockerization
- Create Dockerfiles for each component (database, frontend, backend).
- Set up Docker Compose to manage multi-container applications.
- Ensure smooth communication between containers.

#### GCP Configuration
- Set up a GCP project and enable necessary APIs.
- Deploy the Dockerized application components to GCP using Kubernetes Engine.

## Phase 2: Database, Frontend Development, and ETL Processes
**Duration:** November 11 - November 17  
**Objective:** Set up a containerized database to store SMILES data and develop a frontend for visualization.

### Tasks:
#### Database Setup (Containerized PostgreSQL)
- Research and gather SMILES data related to Alzheimer's disease.
- Design the database schema to store the SMILES data and molecular descriptor data.
- Implement ETL processes to extract, transform, and load the data into the containerized PostgreSQL database.

#### Frontend Development (React.js)
- Design a simple web interface to visualize the SMILES data.
- Use Node.js for server-side programming to fetch data from the database.
- Implement basic search functionality using Natural Language Processing to query SMILES data.

## Vacation Break
**Duration:** November 18 - November 28

## Phase 3: Machine Learning on SMILES Data
**Duration:** November 29 - December 4  
**Objective:** Apply a genetic algorithm to predict potential drug compounds for Alzheimer's.

### Tasks:
#### Data Preprocessing
- Use PyTorch and NLP techniques to process and vectorize the SMILES data.
- Split the data into training and testing sets.

#### Genetic Algorithm Implementation
- Design and implement a genetic algorithm to evolve potential drug compounds.
- Train the model on the training set and validate its performance on the testing set.

#### Visualization on Web App
- Integrate the machine learning model with the frontend.
- Display the top-performing drug compounds on the web app.

## Phase 4: Molecular Dynamics Simulations
**Duration:** December 5 - December 20  
**Objective:** Perform molecular dynamics simulations on the top-performing drug compounds.

### Tasks:
#### Setup and Configuration
- Set up a GCP instance optimized for computational tasks.
- Install and configure OpenMM for molecular dynamics simulations.

#### Simulations
- Select the top-performing drug compounds from the genetic algorithm results.
- Run extensive molecular dynamics simulations for each compound using OpenMM.
- Store the simulation results in the containerized PostgreSQL database.

## Phase 5: Finalization and Deployment
**Duration:** December 21 - December 31  
**Objective:** Finalize the project and deploy the web app.

### Tasks:
#### Optimization and Testing
- Optimize the application for performance and security.
- Perform comprehensive testing to ensure everything is working as expected.

#### Deployment
- Deploy the Docker containers, including the PostgreSQL database container, to a GCP Kubernetes cluster.
- Set up load balancing and auto-scaling on GCP if necessary.

#### Documentation
- Document the entire process, from GCP setup to molecular dynamics simulations.
- Include details about the machine learning model, ETL processes, frontend development, and containerization.

## Budget Allocation
- Google Cloud Platform (GCP) services: $120
- Containerized Database hosting (PostgreSQL): $40 (Note: This cost might vary depending on the resources used for the container.)
- Miscellaneous (domain, SSL certificate, etc.): $40  
**Total Budget:** $200
