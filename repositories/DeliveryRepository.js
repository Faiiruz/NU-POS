import Repository, { baseUrl } from "./Repository";
import cbor from "cbor";

class DeliveryRepository {
  async postDelivery(params) {
    const data = params.data;
    const reponse = await Repository.post(`${baseUrl}/delivery-note`, data, {
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
        console.log(error);
        let result = cbor.decode(error.response.data);
        return result;
      });
    return reponse;
  }
  async putDelivery(params) {
    const data = params.data;
    const response = await Repository.put(
      `${baseUrl}delivery-note/{delivery_note_id}`,
      data,
      {
        headers: {
          xa: params.xa,
        },
        contentType: "application/cbor",
        responseType: "arraybuffer",
      }
    )
      .then((response) => {
        const data = cbor.decode(response.data);
        return data;
      })
      .catch((error) => {
        console.log(error);
        let result = cbor.decode(error.response.data);
        return result;
      });
    return response;
  }

  async getDelivery(params, type) {
    const reponse = await Repository.get(`${baseUrl}/delivery-note?type=${type}`, {
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

  async getDeliveryDetail(params, delivery_note_id) {
    const reponse = await Repository.get(`${baseUrl}delivery-note-detail/${delivery_note_id}`, {
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
}
export default new DeliveryRepository();
