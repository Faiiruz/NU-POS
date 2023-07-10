import Repository, { baseUrl } from "./Repository";
import cbor from "cbor";

class ProductRepository {
  //image
  async getImage(params) {
    const reponse = await Repository.get(
      `${baseUrl}/dms/mapping/productImage`,
      {
        headers: params,
        contextType: "application/json",
        responseType: "arraybuffer",
      }
    )
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
  async postImage(params) {
    const reponse = await Repository.post(`${baseUrl}/dmsv2/uploadfile`, {
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
  async putImage(params) {
    const data = params.data;
    const reponse = await Repository.put(
      `${baseUrl}/dmsv2/setmetadata/asgasgas242141`,
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
        const result = cbor.decode(error.response.data);
        return result;
      });
    return reponse;
  }

  //category
  async postCategory(params) {
    const data = params.data;
    const reponse = await Repository.post(`${baseUrl}/category `, data, {
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
  async putCategory(params) {
    const data = params.data;
    const reponse = await Repository.put(`${baseUrl}/category/:id `, data, {
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
  async deletCategory(params) {
    const data = params.data;
    const reponse = await Repository.delete(`${baseUrl}/category`, data, {
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
  async getCategory(params) {
    const reponse = await Repository.get(`${baseUrl}/category`, {
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
  //product
  async postProduct(params) {
    const data = params.data;
    const reponse = await Repository.post(`${baseUrl}/products `, data, {
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
  async putProduct(params) {
    const data = params.data;
    const reponse = await Repository.put(`${baseUrl}/products/:id`, data, {
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
  async deleteProduct(params) {
    const data = params.data;
    const reponse = await Repository.delete(`${baseUrl}/products`, data, {
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
  async getProduct(params) {
    const reponse = await Repository.get(`${baseUrl}/products`, {
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
  async getProductById(params) {
    const reponse = await Repository.get(
      `${baseUrl}/products/46573edc-8f70-4ce9-a225-153ef97b52b0`,
      {
        headers: params,
        contextType: "application/json",
        responseType: "arraybuffer",
      }
    )
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
  async putAdjustLevel(params) {
    const data = params.data;
    const reponse = await Repository.put(
      `${baseUrl}/products-adjust-lvl`,
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
        const result = cbor.decode(error.response.data);
        return result;
      });
    return reponse;
  }
}
export default new ProductRepository();
