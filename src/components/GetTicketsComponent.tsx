import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ReducersType } from '../store/store';
import { getTicketsAction } from '../store/actions/action-tickets';
import Ticket from '../models/Ticket';
import TicketView from './TicketView/TicketView';
import { CircularProgress, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: 20
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);

const GetTicketsComponent: React.FC = () => {

    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getTicketsAction());
    }, [dispatch]);

    const ticketList: Ticket[] = useSelector<ReducersType, Ticket[]>(state => state.getTickets);
    const [tickets, setTickets] = useState<Ticket[]>(ticketList);
    console.log(tickets);

    function deleteTicket(index: number): void {
        setTickets(ticketList.splice(index, 1));
    }

    return (
        <Grid item xs={12} container className={classes.root} justifyContent="center" spacing={2}>
            {
                ticketList.length === 0 ? <CircularProgress /> : ticketList.map((t, i) => <Grid key={i} item>
                    <TicketView index={i} ticket={t} deleteTicket={deleteTicket} />
                </Grid>
                )
            }
        </Grid>
    );

}

export default GetTicketsComponent;