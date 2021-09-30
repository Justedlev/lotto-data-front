import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SUCCESSFUL, Ticket, TicketData, UNSUCCESSFUL } from '../../models/Ticket';
import {
    addCombinationSixNumbersOfTicketAction,
    addCombinationStrongNumberOfTicketAction,
    addDateOfTicketAction,
    addNumberOfTicketAction,
    saveTicketAction
} from '../../store/actions/tickets-actions';
import { ReducersType } from '../../store/redusers-combiner';
import { isSaved, loading, setTicketFields } from '../../store/selectors';
import Loading from '../../models/Loading';
import { Alert, CardActions, FormLabel, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import classes from './AddTicket.module.css';
import { LoadingButton } from '@mui/lab';

const AddTicketComponent: React.FC = () => {

    const dispatch = useDispatch();
    const ticket: Ticket = useSelector<ReducersType, TicketData>(setTicketFields).ticket;
    const saved: string = useSelector<ReducersType, TicketData>(isSaved).saved;
    const loadingSaved: boolean = useSelector<ReducersType, Loading>(loading).isLoadingAddTicket;

    console.log(ticket);

    const handlePushToArray = (index: number, num: number) => {
        const array = ticket.combination.sixNumbers;
        array.splice(index, 1, num);
        dispatch(addCombinationSixNumbersOfTicketAction(array));
    }

    return (
        <div className={classes.root}>
            <FormLabel>
                <div className={classes.label_input_field}>
                    <TextField
                        value={ticket.id}
                        id="standard-basic"
                        label="Билет №"
                        type="number"
                        onChange={(e) => {
                            dispatch(addNumberOfTicketAction(parseInt(e.target.value)));
                        }}
                    />
                </div>
                <div className={classes.label_input_field}>
                    <TextField
                        // value={ticket.date}
                        id="date"
                        label="Дата игры"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            dispatch(addDateOfTicketAction(new Date(e.target.value)));
                        }}
                    />
                </div>
                <div className={classes.numbers}>
                    <TextField
                        className={classes.number_input}
                        style={{margin: "0 5px 5px 5px"}}
                        value={ticket.combination.sixNumbers[0]}
                        id="first"
                        label="Первое"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        onChange={e => handlePushToArray(0, parseInt(e.target.value))}
                    />
                    <TextField
                        className={classes.number_input}
                        style={{margin: "0 5px 5px 5px"}}
                        value={ticket.combination.sixNumbers[1]}
                        id="second"
                        label="Второе"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        onChange={e => handlePushToArray(1, parseInt(e.target.value))}
                    />
                    <TextField
                        className={classes.number_input}
                        style={{margin: "0 5px 5px 5px"}}
                        value={ticket.combination.sixNumbers[2]}
                        id="third"
                        label="Третье"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        onChange={e => handlePushToArray(2, parseInt(e.target.value))}
                    />
                    <TextField
                        className={classes.number_input}
                        style={{margin: "0 5px 5px 5px"}}
                        value={ticket.combination.sixNumbers[3]}
                        id="fourth"
                        label="Четвертое"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        onChange={e => handlePushToArray(3, parseInt(e.target.value))}
                    />
                    <TextField
                        className={classes.number_input}
                        style={{margin: "0 5px 5px 5px"}}
                        value={ticket.combination.sixNumbers[4]}
                        id="fifth"
                        label="Пятое"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        onChange={e => handlePushToArray(4, parseInt(e.target.value))}
                    />
                    <TextField
                        className={classes.number_input}
                        style={{margin: "0 5px 5px 5px"}}
                        value={ticket.combination.sixNumbers[5]}
                        id="sixth"
                        label="Шестое"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        onChange={e => handlePushToArray(5, parseInt(e.target.value))}
                    />
                    <TextField
                        className={classes.number_input}
                        style={{margin: "0 5px 5px 5px"}}
                        value={ticket.combination.strong}
                        error
                        id="strong"
                        label="Усилиное"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        onChange={(e) => {
                            dispatch(addCombinationStrongNumberOfTicketAction(parseInt(e.target.value)));
                        }}
                    />
                </div>
            </FormLabel>
            <CardActions>
                <LoadingButton
                    loading={loadingSaved}
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                    onClick={() => {
                        dispatch(saveTicketAction(ticket));
                    }}
                >
                    Добавить
                </LoadingButton>
            </CardActions>
            {
                saved === SUCCESSFUL ? <Alert severity="success">Успешно добавлен</Alert> :
                    saved === UNSUCCESSFUL ? <Alert severity="error">Не удалось добавить</Alert> : null
            }
        </div>
    );

}

export default AddTicketComponent;