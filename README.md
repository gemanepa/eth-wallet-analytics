# Full Stack Developer Assignment

This is a monorepo project that contains both the frontend and backend applications. The frontend/client is built using React Hooks + Next.js + Tailwind, while the backend/server is developed using NestJS + Mongoose + MongoDB

### Getting Started

To run both applications, follow these steps:

#### Frontend

1.  Navigate to the `client` directory: `cd client`.
2.  Install the dependencies: `npm install`.
3.  Add a `.env.local` file with the following env variables:
    - NEXT_PUBLIC_ETHERSCAN_KEY: Etherscan API Key
    - NEXT_PUBLIC_SERVER_BASE_URL: Backend Base Url (`http://localhost:3001` is default value)
4.  Start the development server: `npm run dev`.
5.  The application will be accessible at `http://localhost:3000`.

#### Backend

1.  Navigate to the `server` directory: `cd server`.
2.  Install the dependencies: `npm install`.
3.  Start the server: `npm run start`.
4.  The backend server will be running at `http://localhost:3001`.

### Endpoints

#### 1. Create Account

- Endpoint: `POST /account`
- Description: This endpoint allows storing a new ETH account.
- Request body: The request should contain the necessary data to create a new account. The expected data format is specified by the `CreateAccountDto` class.
- Response: Upon successful account creation, the response will contain the newly stored account data.

#### 2. Find All Accounts

- Endpoint: `GET /account`
- Description: This endpoint retrieves a list of all ETH accounts.
- Response: The response will contain an array of account objects, each representing an ETH account.

#### 3. Find Account by ID

- Endpoint: `GET /account/:id`
- Description: This endpoint retrieves a specific ETH account.
- Request parameter: The `id` parameter in the URL specifies the ID of the MongoDB document to be retrieved.
- Response: The response will contain the account object corresponding to the provided ID.

#### 4. Update Account

- Endpoint: `PATCH /account/:id`
- Description: This endpoint allows updating an existing ETH account.
- Request parameter: The `id` parameter in the URL specifies the ID of the account to be updated.
- Request body: The request should contain the updated account data. The expected data format is specified by the `UpdateAccountDto` class.
- Response: Upon successful account update, the response will contain the updated account data.

#### 5. Delete Account

- Endpoint: `DELETE /account/:id`
- Description: This endpoint allows deleting an ETH account by its unique ID.
- Request parameter: The `id` parameter in the URL specifies the ID of the MongoDB document to be deleted.
- Response: The response will indicate the success of the deletion operation.
