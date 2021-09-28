import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTicketsAction } from '../store/actions/tickets-actions';
import TicketView from './TicketView/TicketView';
import { CircularProgress, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { loading, ticketList } from '../store/selectors';
import { Ticket, TicketsData } from '../models/Ticket';
import { ReducersType } from '../store/redusers-combiner';
import Loading from '../models/Loading';

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
    const tickets: Ticket[] = useSelector<ReducersType, TicketsData>(ticketList).tickets;
    const load: boolean = useSelector<ReducersType, Loading>(loading).isLoadingTickets;

    useEffect(() => {
        dispatch(getTicketsAction());
    }, [dispatch]);

    return (
        <Grid item xs={12} container className={classes.root} justifyContent="center" spacing={2}>
            {
                load ? <CircularProgress /> : tickets.map((t, i) => <Grid key={i} item>
                    <TicketView key={i} ticket={t}/>
                </Grid>)
            }
        </Grid>
    );

}

export default GetTicketsComponent;