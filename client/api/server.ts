import { DBAccount } from "@/types/Account";
import { CreateAccountDto } from "@/types/Requests";
import axios, { AxiosResponse } from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_SERVER_BASE_URL || "http://localhost:3001";

// Helper function to make fetch requests and handle errors
async function handleResponse(response: AxiosResponse) {
  if (response.status !== 200 && response.status !== 201) {
    throw new Error(JSON.stringify(response.data));
  }
  return response.data;
}

// Function to create an account
export async function createAccount(createAccountDto: CreateAccountDto) {
  const endpoint = `${BASE_URL}/account`;
  try {
    const response: AxiosResponse = await axios.post(
      endpoint,
      createAccountDto,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return handleResponse(response);
  } catch (error: any) {
    throw new Error(
      error.response?.data ||
        "An error occurred while processing your request.",
    );
  }
}

// Function to get all accounts
export async function getAllAccounts() {
  const response = await axios.get(`${BASE_URL}/account`);
  return handleResponse(response);
}

// Function to get a single account by ID
export async function getAccountById(id: string) {
  const response = await axios.get(`${BASE_URL}/account/${id}`);
  return handleResponse(response);
}

// Function to update an account
export async function updateAccount(id: string, updateAccountDto: DBAccount) {
  const endpoint = `${BASE_URL}/account/${id}`;
  try {
    const response: AxiosResponse = await axios.patch(
      endpoint,
      updateAccountDto,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return handleResponse(response);
  } catch (error: any) {
    throw new Error(
      error.response?.data ||
        "An error occurred while processing your request.",
    );
  }
}

// Function to delete an account
export async function deleteAccount(id: string) {
  const endpoint = `${BASE_URL}/account/${id}`;
  try {
    const response: AxiosResponse = await axios.delete(endpoint);
    return handleResponse(response);
  } catch (error: any) {
    throw new Error(
      error.response?.data ||
        "An error occurred while processing your request.",
    );
  }
}
