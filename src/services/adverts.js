import { apiCLinet } from "./config";

export const apiAddAdvert = async (payload) => {
  return apiCLinet.post("/adverts", payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
};

export const apiGetAllAdvert = async () =>
  apiCLinet.get("/adverts", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });

export const apiGetVendorAdvert = async () =>
  apiCLinet.get("/vendor-adverts", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });

export const apiUpdateAdvert = async (id, payload) =>
  apiCLinet.patch(`/adverts/${id}`, payload);

export const apiGetSingleAdvert = async (id) =>
  apiCLinet.get(`/adverts/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
