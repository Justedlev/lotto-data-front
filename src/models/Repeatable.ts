export type Repeatable = {
    number: number;
    count: number;
};

export type RepeatableData = {
    isReceived: boolean;
    repeatables: Repeatable[];
};
