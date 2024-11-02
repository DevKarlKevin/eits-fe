# EitsFe

## Introduction
EITS-FE is the frontend module of the E-ITS system, responsible for providing a user interface to interact with EITS-BE's services. 
It provides a user interface to interact with the backend (EITS-BE), which acts as a proxy to the E-ITS API.

## Technical description
Goal of EITS-FE and EITS-BE is to interact with [API](https://eits.ria.ee/swagger-ui/index.html)

There can be two options, how to interact with this given API.
It could be easily called from FE application, but with this solution, we are proxying calls through BE application.

There are two versions of implementations of how the measures are called.
1. Catalog-Based retrieval:
   * Catalog groups are requested by `version`.
   * Selected group measures are queried again by selected `group id`
2. Full Content Tree retrieval:
   * Fetches the complete catalog, including all groups and measures, based on a specified `version`

## Running the application
Have EITS-BE application running.

Install Docker.

Clone the repository

Run command `docker-compose up --build`

App is served on http://localhost:4200/
