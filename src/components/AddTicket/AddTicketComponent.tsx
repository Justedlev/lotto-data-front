import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT, ERROR, SUCCESSFUL, Ticket, TicketData, UNSUCCESSFUL } from "../../models/Ticket";
import { ReducersType } from "../../store/redusers-combiner";
import { getLoading, getTicketFields } from "../../store/selectors";
import Loading from "../../models/Loading";
import { Alert, CardActions, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import classes from "./AddTicket.module.css";
import { LoadingButton } from "@mui/lab";
import { saveTicketAction, setTicketSavedAction } from "../../store/actions/new-ticket-actions";

const AddTicketComponent: React.FC = () => {
    const dispatch = useDispatch();
    const ticketData: TicketData = useSelector<ReducersType, TicketData>(getTicketFields);
    const loadingSaved: boolean = useSelector<ReducersType, Loading>(getLoading).isLoadingAddTicket;
    const [ticketFields, setTicketFields] = useState<Ticket>({
        id: NaN,
        date: new Date(),
        combination: {
            sixNumbers: new Array(6).fill(NaN),
            strong: NaN,
        },
    });

    console.log(ticketData, ticketFields);

    useEffect(() => {
        dispatch(setTicketSavedAction(DEFAULT));
    }, [dispatch, ticketFields]);

    const handleAddToArray = (index: number, num: number) => {
        const array = ticketFields.combination.sixNumbers.slice();
        array.splice(index, 1, num);
        setTicketFields({ ...ticketFields, combination: { ...ticketFields.combination, sixNumbers: array } });
    };

    return (
        <div className={classes.root}>
            <div className={classes.label_input_field}>
                <TextField
                    size="small"
                    style={{ width: "165px", margin: "15px" }}
                    value={ticketFields.id}
                    id="standard-basic"
                    label="Билет №"
                    type="number"
                    onChange={(e) => {
                        setTicketFields({ ...ticketFields, id: parseInt(e.target.value) });
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
                    // value={convertDateToString(ticketData.ticket.date)}
                    onChange={(e) => {
                        setTicketFields({ ...ticketFields, date: new Date(e.target.value) });
                    }}
                />
            </div>
            <div className={classes.numbers}>
                <TextField
                    size="small"
                    className={classes.number_input}
                    style={{ margin: "15px" }}
                    value={ticketFields.combination.sixNumbers[0]}
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
                    value={ticketFields.combination.sixNumbers[1]}
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
                    value={ticketFields.combination.sixNumbers[2]}
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
                    value={ticketFields.combination.sixNumbers[3]}
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
                    value={ticketFields.combination.sixNumbers[4]}
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
                    value={ticketFields.combination.sixNumbers[5]}
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
                    value={ticketFields.combination.strong}
                    id="strong"
                    label="Усилиное"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => {
                        setTicketFields({
                            ...ticketFields,
                            combination: { ...ticketFields.combination, strong: parseInt(e.target.value) },
                        });
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
                        dispatch(saveTicketAction(ticketFields));
                    }}
                >
                    Добавить
                </LoadingButton>
            </CardActions>
            {ticketData.saved === SUCCESSFUL ? (
                <Alert severity="success">{ticketData.message}</Alert>
            ) : ticketData.saved === ERROR ? (
                <Alert severity="error">{ticketData.message}</Alert>
            ) : ticketData.saved === UNSUCCESSFUL ? (
                <Alert severity="info">{ticketData.message}</Alert>
            ) : null}
        </div>
    );
};

export default AddTicketComponent;
