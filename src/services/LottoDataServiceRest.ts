import axios from "axios";
import Ticket from "../models/Ticket";
import ILottoData from "./ILottoData";

export default class LottoDataServiceRest implements ILottoData {

    constructor(private url: string) { }

    async addTicket(ticket: Ticket): Promise<Ticket> {
        const t: Ticket = await axios.post<Ticket>(`${this.url}/add/ticket`,
        ticket, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(response => response.data);
        console.log(t);
        return t;
    }

    async deteleTicket(numberOfTicket: number): Promise<Ticket> {
        const t: Ticket = await axios.delete<Ticket>(`${this.url}/delete/ticket?number=${numberOfTicket}`)
            .then(response => response.data);
        console.log(t);
        return t;
    }

    getTicket(numberOfTicket: number): Promise<Ticket> {
        throw new Error("Method not implemented.");
    }

    async getTickets(): Promise<Ticket[]> {
        const tickets: Ticket[] = await axios.get<Ticket[]>(`${this.url}/get/tickets`)
            .then(response => response.data);
        console.log(tickets);
        return tickets;
    }

    getTicketsOfRangeDate(from: Date, to: Date): Promise<Ticket[]> {
        throw new Error("Method not implemented.");
    }

}