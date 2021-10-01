import { ReducersType } from "./redusers-combiner";

export const getSidebar = (state: ReducersType) => state.getApplication.isSidebar;
export const getTicketList = (state: ReducersType) => state.getTickets;
export const getLoading = (state: ReducersType) => state.getLoading;
export const getTicketFields = (state: ReducersType) => state.getTicketFields;
export const getRepeatableFields = (state: ReducersType) => state.getRepeatableFields;
export const getRepeatables = (state: ReducersType) => state.getRepeatables;
