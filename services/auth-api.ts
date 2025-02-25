import axiosClient from "@/utils/axios-client";

type SignUpPayload = {
  name: string;
  email: string;
  password: string;
};

async function signup(data: SignUpPayload) {
  try {
    const res = await axiosClient.post("/auth/sign-up", data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

type LoginPayload = {
  email: string;
  password: string;
};

async function login(data: LoginPayload) {
  try {
    const res = await axiosClient.post("/auth/sign-in", data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

type ResetPaswordPayload = { password: string; token_from_email: string };
async function resetPassword(data: ResetPaswordPayload) {
  try {
    const res = await axiosClient.post(
      "/auth/reset-password/" + data.token_from_email,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

type ForgotPasswordPayload = { email: string };
async function forgotPassword(data: ForgotPasswordPayload) {
  try {
    const res = await axiosClient.post("/auth/forgot-password", data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

type VerifyEmailPayload = { token: string };
async function verifyEmail(data: VerifyEmailPayload) {
  try {
    const res = await axiosClient.get("/auth/verify-email/" + data.token);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function testAccess() {
  try {
    const res = await axiosClient.get("/auth/can-access");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export {
  signup,
  login,
  resetPassword,
  forgotPassword,
  verifyEmail,
  testAccess,
};

export type { LoginPayload, SignUpPayload };
