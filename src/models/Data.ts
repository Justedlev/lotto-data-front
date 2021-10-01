export type Message = {
    type: string,
    message: string
};

export type Data<D> = {
    message: string;
    isReceived: boolean;
    data: D;
};