# Shipping Products Calculator Frontend

This application is the front-end counterpart to the Shipping Products API application. It is built using React and integrates with the Shipping Products API to provide a user interface for calculating the best matching shipping product based on dimensions and weight.

## Features

- Interactive calculator for determining the appropriate shipping product
- Integration with the Shipping Products API for real-time data retrieval
- Responsive design for optimal user experience across various devices
- Styled using Tailwind

## Prerequisites

- Node.js
- npm (usually comes with Node.js)
- Shipping Products API server should be running in a separate terminal window

## Local Setup

**From a new terminal window, perform the following:**
1. Clone the repository from Github e.g. `git clone <repository-url>`
2. Navigate into the repository folder e.g. `cd shipping-products-frontend`
3. Install dependencies: `npm install`

## Running the Application Locally

**Note: Please ensure the Rails backend server is running first in a separate terminal window.**

From your terminal, run `npm start` which will start the React development server, typically on `http://localhost:3000`, however due to the Rails server already running, the server will ask "Would you like to run the app on another port instead?" to which you reply 'Y'. This should start the server on `http://localhost:3001` which is what the backend API is configured to support. The application should open automatically in your default web browser.

## Running Tests

To run the automated tests: from your terminal, run `npm test`.

### Notes on Testing
Ensure all dependencies are installed before running the tests.
Tests are written using Jest and React Testing Library.

## Using the Calculator

- On the main page, click the "Launch Calculator" button to open the calculator modal.
- In the modal, enter the dimensions and weight of the item you wish to ship.
- Click the "Find Product" button to retrieve the recommended shipping product.
- The recommended product name will be displayed in the modal, the modal will dismiss itself after 5 seconds, and then the recommended product will appear on the main page.

## Notes
- **Frontend Repository URL**: Replace `<frontend-repository-url>` with the actual URL of your frontend repository.
- Ensure the Shipping Products API is running to enable real-time data retrieval.
