import { ReducersType } from "./redusers-combiner";

export const getSidebar = (state: ReducersType) => state.getApplication.isSidebar;
export const isReceived = (state: ReducersType) => state.isReceived;
export const isSaved = (state: ReducersType) => state.isSaved;
export const ticketList = (state: ReducersType) => state.getTickets;
export const loading = (state: ReducersType) => state.loading;
export const setTicketFields = (state: ReducersType) => state.setTicketFields;
export const setRepeatableFields = (state: ReducersType) => state.setRepeatableFields;
export const getRepeatables = (state: ReducersType) => state.getRepeatables;