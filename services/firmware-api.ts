import axiosClient from "@/utils/axios-client";
import { UpdatePayload } from "./profile-api";
export type FirmPayload = {
  version?: string,
  firmwareFile?: any,
};
async function getFirmware() {
  try {
    const res = await axiosClient.get("/firmware/all");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


async function registerFirm(payload: FirmPayload) {
  try {
    const res = await axiosClient.post("/firmware/upload", payload);
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
async function deleteFirmware(id:any) {
  try {
    const res = await axiosClient.delete(`/firmware/${id}`,);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { getFirmware, getUserDetails, registerFirm, updateUser,deleteFirmware };
