import axios from "axios";
export const baseDomain = "https://g-activity.gnusa.id"; // API for products (PRODUCTION MODE)
// const baseDomainAPI = 'https://psychotest-client.gnusa.id/psychotest-service'; // API for product (PRODUCTION MODE)
const baseDomainAPI = "https://pos.ipm.id/service"; // API for product (DEVELOPMENT MODE)
// const baseDomainAPI = 'http://localhost:8080/psychotest-service'; // API for product (DEVELOPMENT MODE 2)
export const WebsiteTitle = "Gnusa Activity";
export const hostName =
  typeof window === "object" ? `http://${window.location.hostname}` : "";

export const customHeaders = {
  Accept: "application/json",
};

export const baseUrl = `${baseDomainAPI}`;

export default axios.create({
  baseUrl,
  headers: customHeaders,
});

export const cborHeaders = {
  Accept: "application/cbor",
};

export const cborUrl = axios.create({
  baseUrl,
  headers: cborHeaders,
});

export const serializeQuery = (query) => {
  return Object.keys(query)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
    )
    .join("&");
};
