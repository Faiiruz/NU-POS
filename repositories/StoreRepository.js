import Repository, { baseUrl } from "./Repository";
import cbor from "cbor";

class OrganizationRepository {
  async postOrganization(params) {
    const data = params.data;
    const reponse = await Repository.post(`${baseUrl}/_organization `, data, {
      headers: {
        xa: params.xa,
      },
      contentType: "application/cbor",
      responseType: "arraybuffer",
    })
      .then((response) => {
        const data = cbor.decode(response.data);
        return data;
      })
      .catch((error) => {
        const result = cbor.decode(error.response.data);
        return result;
      });
    return reponse;
  }
  async putOrganization(params) {
    const data = params.data;
    const reponse = await Repository.put(`${baseUrl}/_organization `, data, {
      headers: {
        xa: params.xa,
      },
      contentType: "application/cbor",
      responseType: "arraybuffer",
    })
      .then((response) => {
        const data = cbor.decode(response.data);
        return data;
      })
      .catch((error) => {
        const result = cbor.decode(error.response.data);
        return result;
      });
    return reponse;
  }
  async getOrganization(params) {
    const reponse = await Repository.get(`${baseUrl}/_organization`, {
      headers: params,
      contextType: "application/json",
      responseType: "arraybuffer",
    })
      .then((response) => {
        const data = cbor.decode(response.data);
        return data;
      })
      .catch((error) => {
        const result = cbor.decode(error.response.data);
        return result;
      });
    return reponse;
  }
  async getDetailOrganization(params, store_id) {
    const reponse = await Repository.get(`${baseUrl}/_organization/${store_id}`, {
      headers: params,
      contextType: "application/json",
      responseType: "arraybuffer",
    })
      .then((response) => {
        const data = cbor.decode(response.data);
        console.log(data);
        console.log("1234");
        return data;
      })
      .catch((error) => {
        const result = cbor.decode(error.response.data);
        return result;
      });
    return reponse;
  }
  //Costumer
  async putCostumer(params) {
    const data = params.data;
    const reponse = await Repository.put(`${baseUrl}/customer/:id `, data, {
      headers: {
        xa: params.xa,
      },
      contentType: "application/cbor",
      responseType: "arraybuffer",
    })
      .then((response) => {
        const data = cbor.decode(response.data);
        return data;
      })
      .catch((error) => {
        const result = cbor.decode(error.response.data);
        return result;
      });
    return reponse;
  }
  async postCostumer(params) {
    const data = params.data;
    const reponse = await Repository.post(`${baseUrl}/customer `, data, {
      headers: {
        xa: params.xa,
      },
      contentType: "application/cbor",
      responseType: "arraybuffer",
    })
      .then((response) => {
        const data = cbor.decode(response.data);
        return data;
      })
      .catch((error) => {
        const result = cbor.decode(error.response.data);
        return result;
      });
    return reponse;
  }
  async deleteCostumer(params) {
    const data = params.data;
    const reponse = await Repository.delete(`${baseUrl}/costumer`, data, {
      headers: {
        xa: params.xa,
      },
      contentType: "application/cbor",
      responseType: "arraybuffer",
    })
      .then((response) => {
        const data = cbor.decode(response.data);
        return data;
      })
      .catch((error) => {
        const result = cbor.decode(error.response.data);
        return result;
      });
    return reponse;
  }
  async getCostumer(params) {
    const reponse = await Repository.get(`${baseUrl}/costumer`, {
      headers: params,
      contextType: "application/json",
      responseType: "arraybuffer",
    })
      .then((response) => {
        const data = cbor.decode(response.data);
        console.log(data);
        return data;
      })
      .catch((error) => {
        const result = cbor.decode(error.response.data);
        return result;
      });
    return reponse;
  }
  //region
  async getRegion(params) {
    const reponse = await Repository.get(`${baseUrl}/get_region/1/123`, {
      headers: params,
      contextType: "application/json",
      responseType: "arraybuffer",
    })
      .then((response) => {
        const data = cbor.decode(response.data);
        return data;
      })
      .catch((error) => {
        const result = cbor.decode(error.response.data);
        return result;
      });
    return reponse;
  }
}
export default new OrganizationRepository();
