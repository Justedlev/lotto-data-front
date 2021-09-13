import TicketServiceRest from "../services/LottoDataServiceRest";

const LOTTO_DATA_URL = `https://lottodata.herokuapp.com`;
// const LOTTO_DATA_URL = `http://localhost:8080`;
const service: TicketServiceRest = new TicketServiceRest(LOTTO_DATA_URL);

export default service;