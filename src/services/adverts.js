import { apiCLinet } from "./config";

export const apiAddAdvert = async (payload) => {
  return apiCLinet.post("/adverts", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const apiGetAllAdvert = async () => apiCLinet.get("/adverts");

export const apiGetVendorAdvert = async () => apiCLinet.get("/vendor-adverts");

export const apiGetVendorAdvertById = async (id) =>
  apiCLinet.get(`/vendor-advert/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const apiUpdateAdvert = async (id, payload) =>
  apiCLinet.patch(`/adverts/${id}`, payload);

export const apiGetSingleAdvert = async (id) => apiCLinet.get(`/adverts/${id}`);

export const apiDeleteVendorAdvertById = async (id) =>
  apiCLinet.delete(`/adverts/${id}`);
