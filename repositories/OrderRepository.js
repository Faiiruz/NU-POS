import Repository, { baseUrl } from "./Repository";
import cbor from "cbor";

class OrderRepository {
  async postOrder(params) {
    const data = params.data;
    const reponse = await Repository.post(`${baseUrl}/order`, data, {
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

  async getOrder(params, type) {
    const reponse = await Repository.get(`${baseUrl}/order?type=${type}`, {
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

  async getOrderDetail(params, order_id) {
    const reponse = await Repository.get(`${baseUrl}/order-detail/${order_id}`, {
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

  async putOrder(params) {
    const data = params.data;
    const reponse = await Repository.put(`${baseUrl}/order`, data, {
      headers: {
        xa: params.xa,
      },
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

export default new OrderRepository();
