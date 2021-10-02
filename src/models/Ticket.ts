import { Data } from "./Data";

export const SUCCESSFUL = "successful";
export const UNSUCCESSFUL = "unsuccessful";
export const ERROR = "error";
export const DEFAULT = "no-action-taken";

export type Combination = {
    sixNumbers: number[];
    strong: number;
};

export type Ticket = {
    id: number;
    date: Date;
    combination: Combination;
};

export type TicketData = {
    message: string;
    saved: string;
    ticket: Ticket;
};

export type TicketsData = Data<Ticket[]>;
