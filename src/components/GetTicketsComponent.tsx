import React, { useEffect } from 'react';
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

    const tickets: Ticket[] = useSelector<ReducersType, Ticket[]>(state => state.getTickets);
    console.log(tickets);

    return (
        <Grid item xs={12} container className={classes.root} justifyContent="center" spacing={2}>
            {
                tickets.length === 0 ? <CircularProgress /> : tickets.map((t, i) => <Grid key={i} item><TicketView ticket={t} /></Grid>)
            }
        </Grid>
    );

}

export default GetTicketsComponent;