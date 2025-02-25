import axiosClient from "@/utils/axios-client";

async function getRemotes() {
  try {
    const res = await axiosClient.get("/cloner/list");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getRemoteDetails(id: string) {
  try {
    const res = await axiosClient.get("/cloner/details" + id);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { getRemotes, getRemoteDetails };
