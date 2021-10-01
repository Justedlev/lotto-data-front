import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SUCCESSFUL, Ticket, TicketData, UNSUCCESSFUL } from '../../models/Ticket';
import {
    addCombinationSixNumbersOfTicketAction,
    addCombinationStrongNumberOfTicketAction,
    addDateOfTicketAction,
    addIdTicketAction,
    saveTicketAction
} from '../../store/actions/tickets-actions';
import { ReducersType } from '../../store/redusers-combiner';
import { isSaved, loading, setTicketFields } from '../../store/selectors';
import Loading from '../../models/Loading';
import { Alert, CardActions, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import classes from './AddTicket.module.css';
import { LoadingButton } from '@mui/lab';
import { convertDateToString } from '../../utils/converter';

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
            <div className={classes.label_input_field}>
                <TextField
                    size="small"
                    style={{ width: "165px", margin: "15px" }}
                    value={ticket.id}
                    id="standard-basic"
                    label="Билет №"
                    type="number"
                    onChange={(e) => {
                        dispatch(addIdTicketAction(parseInt(e.target.value)));
                    }}
                />
                <TextField
                    size="small"
                    style={{ width: "165px", margin: "15px" }}
                    id="date-of-game"
                    label="Дата игры"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={convertDateToString(ticket.date)}
                    onChange={(e) => {
                        dispatch(addDateOfTicketAction(new Date(e.target.value)));
                    }}
                />
            </div>
            <div className={classes.numbers}>
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticket.combination.sixNumbers[0]}
                    id="first"
                    label="Первое"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => handlePushToArray(0, parseInt(e.target.value))}
                />
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticket.combination.sixNumbers[1]}
                    id="second"
                    label="Второе"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => handlePushToArray(1, parseInt(e.target.value))}
                />
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticket.combination.sixNumbers[2]}
                    id="third"
                    label="Третье"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => handlePushToArray(2, parseInt(e.target.value))}
                />
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticket.combination.sixNumbers[3]}
                    id="fourth"
                    label="Четвертое"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => handlePushToArray(3, parseInt(e.target.value))}
                />
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticket.combination.sixNumbers[4]}
                    id="fifth"
                    label="Пятое"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => handlePushToArray(4, parseInt(e.target.value))}
                />
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticket.combination.sixNumbers[5]}
                    id="sixth"
                    label="Шестое"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => handlePushToArray(5, parseInt(e.target.value))}
                />
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px", textAlign: "center" }}
                    value={ticket.combination.strong}
                    id="strong"
                    label="Усилиное"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => {
                        dispatch(addCombinationStrongNumberOfTicketAction(parseInt(e.target.value)));
                    }}
                />
            </div>
            <CardActions style={{ paddingTop: "20px" }}>
                <LoadingButton
                    style={{ margin: "auto" }}
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