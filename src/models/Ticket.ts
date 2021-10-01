export const SUCCESSFUL = "successful";
export const UNSUCCESSFUL = "unsuccessful";
export const DEFAULT = "no-action-taken";

export type Combination = {
    sixNumbers: number[];
    strong: number;
};

export type TicketData = {
    saved: string;
    ticket: Ticket;
};

export type TicketsData = {
    isReceived: boolean;
    tickets: Ticket[];
};

export type Ticket = {
    id: number;
    date: Date;
    combination: Combination;
};
