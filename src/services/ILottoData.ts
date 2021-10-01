import { AllOrStrong } from "../models/AllOrStrong";
import { Repeatable } from "../models/Repeatable";
import { Ticket } from "../models/Ticket";

interface ILottoData {
    addTicket(ticket: Ticket): Promise<Ticket>;
    deteleTicket(numberOfTicket: number): Promise<Ticket>;
    getTicket(numberOfTicket: number): Promise<Ticket>;
    getTickets(): Promise<Ticket[]>;
    getTicketsOfRangeDate(from: Date, to: Date): Promise<Ticket[]>;
    getTicketsRepeatableNumbersOfRangeDate(
        from: string,
        to: string,
        allOrStrong: AllOrStrong
    ): Promise<Repeatable[]>;
}

export default ILottoData;
