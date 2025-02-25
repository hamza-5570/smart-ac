import axiosClient from "@/utils/axios-client";

type DevicePayload = {
  type: string;
  codeName: string;
  deviceName: string;
  provider: string;
  deviceInfo: { remoteId: number; nickname: string; deviceSerial: string };
};
async function registerDevice(payload: DevicePayload) {
  try {
    const res = await axiosClient.post("/device/register", payload);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function getMyDevices() {
  try {
    const res = await axiosClient.get("/device/my-devices");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function getDeviceDetails(id: string) {
  try {
    const res = await axiosClient.get("/device/details/" + id);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function getDeviceStatus(id: string) {
  try {
    const res = await axiosClient.get("/device/status/" + id);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function updateDeviceName(id: string, payload: { nickname: string }) {
  try {
    const res = await axiosClient.post(
      "/device/update-device-name/" + id,
      payload
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

type DeviceRemotePayload = { remote: { brand: number; remoteId: number } };
async function updateDeviceRemote(id: string, payload: DeviceRemotePayload) {
  try {
    const res = await axiosClient.post(
      "/device/update-device-remote/" + id,
      payload
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

type DeviceStatusPayload = {
  protocol?: number;
  model?: number;
  power?: boolean;
  mode?: number;
  degrees?: number;
  celsius?: boolean;
  fanspeed?: number;
  swingv?: number;
  swingh?: number;
  quiet?: boolean;
  turbo?: boolean;
  econo?: boolean;
  light?: boolean;
  filter?: boolean;
  clean?: boolean;
  beep?: boolean;
  sleep?: number;
  clock?: number;
};

async function postStatus(id: string, payload: DeviceStatusPayload) {
  try {
    const res = await axiosClient.post("/device/status/" + id, payload);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

type LinkRemotePayload = {
  deviceId?: string;
  remoteId?: string;
};
async function linkCustomRemote(payload: LinkRemotePayload) {
  try {
    const res = await axiosClient.post("/device/link-remote", payload);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

type DeviceEnvironmentPayload = {
  humidity?: number;
  temp?: number;
};
async function updateDeviceEnvironment(
  id: string,
  payload: DeviceEnvironmentPayload
) {
  try {
    const res = await axiosClient.post("/device/env" + id, payload);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getDeviceEnvironmentHistory(id: string, date: string) {
  try {
    const res = await axiosClient.get(`/device/history/${id}/${date}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export {
  registerDevice,
  getMyDevices,
  getDeviceDetails,
  getDeviceStatus,
  updateDeviceName,
  updateDeviceRemote,
  postStatus,
  linkCustomRemote,
  updateDeviceEnvironment,
  getDeviceEnvironmentHistory,
};
