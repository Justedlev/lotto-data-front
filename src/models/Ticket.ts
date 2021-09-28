export const SUCCESSFUL = "successful";
export const UNSUCCESSFUL = "unsuccessful";
export const DEFAULT = "no-action-taken";

export type Combination = {
    first: number,
    second: number,
    third: number,
    fourth: number,
    fifth: number,
    sixth: number,
    strong: number
}

export type TicketData = {
    saved: string,
    ticket: Ticket
}

export type TicketsData = {
    isReceived: boolean,
    tickets: Ticket[]
}

export type Ticket = {
    numberOfTicket: number,
    date: Date,
    combination: Combination
};