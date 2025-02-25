import axiosClient from "@/utils/axios-client";
import { UpdatePayload } from "./profile-api";

type FilterPayload = {
  filters?: { role: "User" | "Admin" };
  keywords?: string;
};
async function getUsers(payload: FilterPayload) {
  try {
    const res = await axiosClient.post("/user/all-users", payload);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

type AdminPayload = {
  name: string;
  email: string;
  password: string;
  phone?: string;
};

async function createAdmin(payload: AdminPayload) {
  try {
    const res = await axiosClient.post("/user/admin/add", payload);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getUserDetails(id: string) {
  try {
    const res = await axiosClient.get(`/user/details/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function updateUser(
  payload: UpdatePayload & {
    _id: string;
    blocked: "No" | "Admin_Block" | "User_Block" | "All_Block";
  }
) {
  try {
    const res = await axiosClient.post(`/user/update`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { getUsers, getUserDetails, createAdmin, updateUser };
