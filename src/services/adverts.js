import { apiCLinet } from "./config";

export const apiAddAdvert = async(payload) => apiCLinet.post("/adverts", payload);

export const apiGetAllAdvert = async() => apiCLinet.get("/adverts");

export const apiGetVendorAdvert = async() => apiCLinet.get("/vendor-adverts");

export const apiUpdateAdvert = async(id, payload) => apiCLinet.patch(`/adverts/${id}`, payload);

export const apiGetSingleAdvert = async(id) => apiCLinet.get(`/adverts/${id}`);