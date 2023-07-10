import Repository, { baseUrl } from "./Repository";
import cbor from "cbor";

class SettlementRepository {
    async getSettlement(params) {
        const reponse = await Repository.get(`${baseUrl}/settlement`, {
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
export default new SettlementRepository;