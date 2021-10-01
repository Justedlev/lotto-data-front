import axios from "axios";
import { AllOrStrong } from "../models/AllOrStrong";
import { Repeatable } from "../models/Repeatable";
import { Ticket } from "../models/Ticket";
import ILottoData from "./ILottoData";

export default class LottoDataServiceRest implements ILottoData {
    constructor(private url: string) {}

    async addTicket(ticket: Ticket): Promise<Ticket> {
        const t: Ticket = await axios
            .post<Ticket>(`${this.url}/add/ticket`, ticket, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((response) => response.data);
        console.log(t);
        return t;
    }

    async deteleTicket(numberOfTicket: number): Promise<Ticket> {
        const t: Ticket = await axios
            .delete<Ticket>(`${this.url}/delete/ticket?number=${numberOfTicket}`)
            .then((response) => response.data);
        console.log(t);
        return t;
    }

    getTicket(numberOfTicket: number): Promise<Ticket> {
        throw new Error("Method not implemented.");
    }

    async getTickets(): Promise<Ticket[]> {
        const tickets: Ticket[] = await axios
            .get<Ticket[]>(`${this.url}/get/tickets`)
            .then((response) => response.data);
        console.log(tickets);
        return tickets;
    }

    async getTicketsOfRangeDate(from: Date, to: Date): Promise<Ticket[]> {
        const tickets: Ticket[] = await axios
            .get<Ticket[]>(`${this.url}/get/tickets?fromDate=${from}&toDate=${to}`)
            .then((response) => response.data);
        console.log(tickets);
        return tickets;
    }

    async getTicketsRepeatableNumbersOfRangeDate(
        from: string,
        to: string,
        allOrStrong: AllOrStrong
    ): Promise<Repeatable[]> {
        console.log(from, to, allOrStrong);
        const repeatable: Repeatable[] = await axios
            .get<Repeatable[]>(
                `${this.url}/get/repeatableNumbers?fromDate=${from}&toDate=${to}&s=${allOrStrong}`
            )
            .then((response) => response.data);
        console.log(repeatable);
        return repeatable;
    }
}
