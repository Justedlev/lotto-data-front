import { Data } from "./Data";

export type Repeatable = {
    number: number;
    count: number;
};

export type RepeatableData = Data<Repeatable[]>;
