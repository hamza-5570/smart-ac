import axiosClient from "@/utils/axios-client";

type ProfileData = {
  otp: null;
  role: string;
  blocked: string;
  _id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  postalCode: string;
};

async function getProfile(): Promise<ProfileData> {
  try {
    const res = await axiosClient.get("/user/profile");
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

type UpdatePayload = {
  name?: string;
  phone?: string;
  email?: string;
  postalCode?: string;
  state?: string;
  city?: string;
};
async function updateProfile(payload: UpdatePayload) {
  try {
    const res = await axiosClient.post("/user/profile/update", payload);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

type PasswordPayload = {
  password: string;
  newPassword: string;
};

async function changePassword(payload: PasswordPayload) {
  try {
    const res = await axiosClient.post(
      "/user/profile/change-password",
      payload
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { getProfile, updateProfile, changePassword };
export type { UpdatePayload };
