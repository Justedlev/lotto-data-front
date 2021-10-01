import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTicketsAction } from "../../store/actions/tickets-actions";
import TicketView from "../TicketView/TicketViewComponent";
import { loading, ticketList } from "../../store/selectors";
import { Ticket, TicketsData } from "../../models/Ticket";
import { ReducersType } from "../../store/redusers-combiner";
import Loading from "../../models/Loading";
import { CircularProgress, Grid } from "@mui/material";
import classes from "./Tickets.module.css";

const GetTicketsComponent: React.FC = () => {
    const dispatch = useDispatch();
    const tickets: Ticket[] = useSelector<ReducersType, TicketsData>(
        ticketList
    ).tickets.sort((a, b) => b.id - a.id);
    const loadingTickets: boolean = useSelector<ReducersType, Loading>(
        loading
    ).isLoadingTickets;

    useEffect(() => {
        dispatch(getTicketsAction());
    }, [dispatch]);

    return (
        <Grid className={classes.root}>
            {loadingTickets ? (
                <CircularProgress />
            ) : (
                tickets.map((t, i) => <TicketView key={i} ticket={t} />)
            )}
        </Grid>
    );
};

export default GetTicketsComponent;
