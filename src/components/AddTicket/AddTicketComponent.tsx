import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SUCCESSFUL, TicketData, UNSUCCESSFUL } from "../../models/Ticket";
import {} from "../../store/actions/tickets-actions";
import { ReducersType } from "../../store/redusers-combiner";
import { getLoading, getTicketFields } from "../../store/selectors";
import Loading from "../../models/Loading";
import { Alert, CardActions, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import classes from "./AddTicket.module.css";
import { LoadingButton } from "@mui/lab";
import { convertDateToString } from "../../utils/converter";
import {
    saveTicketAction,
    setCombinationSixNumbersOfTicketAction,
    setCombinationStrongNumberOfTicketAction,
    setDateOfTicketAction,
    setIdTicketAction,
} from "../../store/actions/new-ticket-actions";

const AddTicketComponent: React.FC = () => {
    const dispatch = useDispatch();
    const ticketData: TicketData = useSelector<ReducersType, TicketData>(getTicketFields);
    const loadingSaved: boolean = useSelector<ReducersType, Loading>(getLoading).isLoadingAddTicket;

    console.log(ticketData);

    const handleAddToArray = (index: number, num: number) => {
        const array = ticketData.ticket.combination.sixNumbers.slice();
        array.splice(index, 1, num);
        dispatch(setCombinationSixNumbersOfTicketAction(array));
    };

    return (
        <div className={classes.root}>
            <div className={classes.label_input_field}>
                <TextField
                    size="small"
                    style={{ width: "165px", margin: "15px" }}
                    value={ticketData.ticket.id}
                    id="standard-basic"
                    label="Билет №"
                    type="number"
                    onChange={(e) => {
                        dispatch(setIdTicketAction(parseInt(e.target.value)));
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
                    value={convertDateToString(ticketData.ticket.date)}
                    onChange={(e) => {
                        dispatch(setDateOfTicketAction(new Date(e.target.value)));
                    }}
                />
            </div>
            <div className={classes.numbers}>
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticketData.ticket.combination.sixNumbers[0]}
                    id="first"
                    label="Первое"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => handleAddToArray(0, parseInt(e.target.value))}
                />
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticketData.ticket.combination.sixNumbers[1]}
                    id="second"
                    label="Второе"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => handleAddToArray(1, parseInt(e.target.value))}
                />
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticketData.ticket.combination.sixNumbers[2]}
                    id="third"
                    label="Третье"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => handleAddToArray(2, parseInt(e.target.value))}
                />
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticketData.ticket.combination.sixNumbers[3]}
                    id="fourth"
                    label="Четвертое"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => handleAddToArray(3, parseInt(e.target.value))}
                />
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticketData.ticket.combination.sixNumbers[4]}
                    id="fifth"
                    label="Пятое"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => handleAddToArray(4, parseInt(e.target.value))}
                />
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticketData.ticket.combination.sixNumbers[5]}
                    id="sixth"
                    label="Шестое"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => handleAddToArray(5, parseInt(e.target.value))}
                />
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px", textAlign: "center" }}
                    value={ticketData.ticket.combination.strong}
                    id="strong"
                    label="Усилиное"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => {
                        dispatch(setCombinationStrongNumberOfTicketAction(parseInt(e.target.value)));
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
                        dispatch(saveTicketAction(ticketData.ticket));
                    }}
                >
                    Добавить
                </LoadingButton>
            </CardActions>
            {ticketData.saved === SUCCESSFUL ? (
                <Alert severity="success">{ticketData.message}</Alert>
            ) : ticketData.saved === UNSUCCESSFUL ? (
                <Alert severity="error">{ticketData.message}</Alert>
            ) : null}
        </div>
    );
};

export default AddTicketComponent;
