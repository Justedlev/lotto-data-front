import Ticket from '../models/Ticket';

interface ILottoData {
    addTicket(ticket: Ticket): Promise<Ticket>;
    deteleTicket(numberOfTicket: number): Promise<Ticket>;
    getTicket(numberOfTicket: number): Promise<Ticket>;
    getTickets(): Promise<Ticket[]>;
    getTicketsOfRangeDate(from: Date, to: Date): Promise<Ticket[]>;
}

export default ILottoData;