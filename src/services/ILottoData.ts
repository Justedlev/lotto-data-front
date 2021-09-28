import Repeatable from '../models/Repeatable';
import { Ticket } from '../models/Ticket';

interface ILottoData {
    addTicket(ticket: Ticket): Promise<Ticket>;
    deteleTicket(numberOfTicket: number): Promise<Ticket>;
    getTicket(numberOfTicket: number): Promise<Ticket>;
    getTickets(): Promise<Ticket[]>;
    getTicketsOfRangeDate(from: Date, to: Date): Promise<Ticket[]>;
    getTicketsRepeatableNumbersOfRangeDate(from: Date, to: Date, combinationName: string): Promise<Repeatable[]>
}

export default ILottoData;