import { Button, Card, CardActions, CircularProgress, createStyles, FormLabel, makeStyles, TextField, Theme } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SUCCESSFUL, Ticket, TicketData, UNSUCCESSFUL } from '../models/Ticket';
import {
    addCombinationFifthNumberOfTicketAction,
    addCombinationFirstNumberOfTicketAction,
    addCombinationFourthNumberOfTicketAction,
    addCombinationSecondNumberOfTicketAction,
    addCombinationSixthNumberOfTicketAction,
    addCombinationStrongNumberOfTicketAction,
    addCombinationThirdNumberOfTicketAction,
    addDateOfTicketAction,
    addNumberOfTicketAction,
    saveTicketAction
} from '../store/actions/tickets-actions';
import { Alert } from '@material-ui/lab';
import { ReducersType } from '../store/redusers-combiner';
import { isSaved, loading, setTicketFields } from '../store/selectors';
import Loading from '../models/Loading';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        button: {
            margin: theme.spacing(1),
        },
        paper: {
            padding: theme.spacing(2),
            margin: theme.spacing(4),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            flexGrow: 1,
            minWidth: 275
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }),
);

const AddTicket: React.FC = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const ticket: Ticket = useSelector<ReducersType, TicketData>(setTicketFields).ticket;
    const saved: string = useSelector<ReducersType, TicketData>(isSaved).saved;
    const loadingSaved: boolean = useSelector<ReducersType, Loading>(loading).isLoadingAddTicket;

    return (
        <Card>
            <FormLabel className={classes.root} >
                <TextField
                    value={ticket.numberOfTicket}
                    required
                    id="standard-basic"
                    label="Номер билета"
                    type="number"
                    onChange={(e) => {
                        dispatch(addNumberOfTicketAction(parseInt(e.target.value)));
                    }}
                />
                <TextField
                    id="date"
                    label="Дата игры"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => {
                        dispatch(addDateOfTicketAction(new Date(e.target.value)));
                    }}
                />
                <TextField
                    value={ticket.combination.first}
                    required
                    id="filled-number"
                    label="Первое число"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    onChange={(e) => {
                        dispatch(addCombinationFirstNumberOfTicketAction(parseInt(e.target.value)));
                    }}
                />
                <TextField
                    value={ticket.combination.second}
                    required
                    id="filled-number"
                    label="Второе число"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    onChange={(e) => {
                        dispatch(addCombinationSecondNumberOfTicketAction(parseInt(e.target.value)));
                    }}
                />
                <TextField
                    value={ticket.combination.third}
                    required
                    id="filled-number"
                    label="Третье число"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    onChange={(e) => {
                        dispatch(addCombinationThirdNumberOfTicketAction(parseInt(e.target.value)));
                    }}
                />
                <TextField
                    value={ticket.combination.fourth}
                    required
                    id="filled-number"
                    label="Четвертое число"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    onChange={(e) => {
                        dispatch(addCombinationFourthNumberOfTicketAction(parseInt(e.target.value)));
                    }}
                />
                <TextField
                    value={ticket.combination.fifth}
                    required
                    id="filled-number"
                    label="Пятое число"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    onChange={(e) => {
                        dispatch(addCombinationFifthNumberOfTicketAction(parseInt(e.target.value)));
                    }}
                />
                <TextField
                    value={ticket.combination.sixth}
                    required
                    id="filled-number"
                    label="Шестое число"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    onChange={(e) => {
                        dispatch(addCombinationSixthNumberOfTicketAction(parseInt(e.target.value)));
                    }}
                />
                <TextField
                    value={ticket.combination.strong}
                    required
                    id="filled-number"
                    label="Усилиное число"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => {
                        dispatch(addCombinationStrongNumberOfTicketAction(parseInt(e.target.value)));
                    }}
                />
            </FormLabel>
            <CardActions>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    disabled={loadingSaved}
                    onClick={() => {
                        dispatch(saveTicketAction(ticket));
                    }}
                >
                    Добавить
                </Button>
                {
                    loadingSaved ? <CircularProgress /> :
                        saved === SUCCESSFUL ? <Alert severity="success">Успешно добавлен</Alert> :
                            saved === UNSUCCESSFUL ? <Alert severity="error">Не удалось добавить</Alert> : null
                }
            </CardActions>
        </Card>
    );

}

export default AddTicket;