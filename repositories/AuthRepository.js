import Repository, { baseUrl } from "./Repository";
import cbor from "cbor";

class AuthRepository {
  async postLogin(params) {
    const reponse = await Repository.post(`${baseUrl}/auth/mlogin`, null, {
      headers: params,
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

  async postLogout(params) {
    const reponse = await Repository.post(`${baseUrl}/auth/logout`, null, {
      headers: params,
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

  async getAPI() {
    const reponse = await Repository.get(`${baseUrl}/hello`, {
      headers: {},
      contentType: "application/json",
      responseType: "json",
    })
      .then((response) => {
        const data = response.data;
        return data;
      })
      .catch((error) => {
        // console.log(error);
        let result = error.response.data;
        return result;
      });
    return reponse;
  }

  async getStatus(params) {
    const reponse = await Repository.get(`${baseUrl}/auth/status`, {
      headers: params,
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

  async getFindMember(params) {
    const data = params.data;
    const reponse = await Repository.post(`${baseUrl}/member/find`, data, {
      headers: {
        xa: params.xa,
      },
      contentType: "application/json",
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        // console.log(error);
        return error.response.data;
      });
    return reponse;
  }
}

export default new AuthRepository();
