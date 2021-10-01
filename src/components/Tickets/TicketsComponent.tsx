import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketView from "../TicketView/TicketViewComponent";
import { Ticket, TicketsData } from "../../models/Ticket";
import { ReducersType } from "../../store/redusers-combiner";
import Loading from "../../models/Loading";
import { CircularProgress, Grid } from "@mui/material";
import classes from "./Tickets.module.css";
import { getLoading, getTicketList } from "../../store/selectors";
import { ticketsAction } from "../../store/actions/tickets-actions";

const GetTicketsComponent: React.FC = () => {
    const dispatch = useDispatch();
    const tickets: Ticket[] = useSelector<ReducersType, TicketsData>(getTicketList).data.sort(
        (a, b) => b.id - a.id
    );
    const loadingTickets: boolean = useSelector<ReducersType, Loading>(getLoading).isLoadingTickets;

    useEffect(() => {
        dispatch(ticketsAction());
    }, [dispatch]);

    return (
        <Grid className={classes.root}>
            {loadingTickets ? <CircularProgress /> : tickets.map((t, i) => <TicketView key={i} ticket={t} />)}
        </Grid>
    );
};

export default GetTicketsComponent;
