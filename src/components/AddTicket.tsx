import { Button, Card, CardActions, CardContent, createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ticket from '../models/Ticket';
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
} from '../store/actions/action-tickets';
import { ReducersType } from '../store/store';

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
    const ticket: Ticket = useSelector<ReducersType, Ticket>(state => state.addTicket);
    console.log(ticket);

    return (
        <Card>
            <CardContent>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        required
                        id="standard-basic"
                        label="Номер билета"
                        type="number"
                        onChange={(e) => dispatch(addNumberOfTicketAction(parseInt(e.target.value)))}
                    />
                    <TextField
                        id="date"
                        label="Дата игры"
                        type="date"
                        defaultValue="2021-11-03"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => dispatch(addDateOfTicketAction(new Date(e.target.value)))}
                    />
                    <TextField
                        required
                        id="filled-number"
                        label="Первое число"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        onChange={(e) => dispatch(addCombinationFirstNumberOfTicketAction(parseInt(e.target.value)))}
                    />
                    <TextField
                        required
                        id="filled-number"
                        label="Второе число"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        onChange={(e) => dispatch(addCombinationSecondNumberOfTicketAction(parseInt(e.target.value)))}
                    />
                    <TextField
                        required
                        id="filled-number"
                        label="Третье число"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        onChange={(e) => dispatch(addCombinationThirdNumberOfTicketAction(parseInt(e.target.value)))}
                    />
                    <TextField
                        required
                        id="filled-number"
                        label="Четвертое число"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        onChange={(e) => dispatch(addCombinationFourthNumberOfTicketAction(parseInt(e.target.value)))}
                    />
                    <TextField
                        required
                        id="filled-number"
                        label="Пятое число"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        onChange={(e) => dispatch(addCombinationFifthNumberOfTicketAction(parseInt(e.target.value)))}
                    />
                    <TextField
                        required
                        id="filled-number"
                        label="Шестое число"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        onChange={(e) => dispatch(addCombinationSixthNumberOfTicketAction(parseInt(e.target.value)))}
                    />
                    <TextField
                        required
                        id="filled-number"
                        label="Усилиное число"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={(e) => dispatch(addCombinationStrongNumberOfTicketAction(parseInt(e.target.value)))}
                    />
                </form>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={() => {
                        dispatch(saveTicketAction(ticket));
                    }}
                >
                    Добавить
                </Button>
            </CardActions>
        </Card>
    );

}

export default AddTicket;