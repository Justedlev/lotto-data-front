import React from "react";
import classes from "./Repeatables.module.css";
import { useDispatch, useSelector } from "react-redux";
import RepeatableInput from "../../models/RepeatableInput";
import {
    getRepeatablesAction,
    setRepeatableAllOrStrongAction,
    setRepeatableFromDateAction,
    setRepeatableToDateAction,
} from "../../store/actions/repeatable-actions";
import {
    getRepeatables,
    loading,
    setRepeatableFields,
} from "../../store/selectors";
import {
    Alert,
    Button,
    Divider,
    FormControl,
    FormLabel,
    InputLabel,
    LinearProgress,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import RepeatableTableComponent from "../RepeatableTable/RepeatableTableComponent";
import { convertDateToString } from "../../utils/converter";

const RepeatablesComponent: React.FC = () => {
    const dispatch = useDispatch();
    const repeatableData = useSelector(getRepeatables);
    const repeatableInput: RepeatableInput = useSelector(setRepeatableFields);
    const loadingRepeatable: boolean = useSelector(loading).isLoadingRepeatable;

    console.log(repeatableData, repeatableInput);

    return (
        <div className={classes.root}>
            <div className={classes.search_block}>
                <FormLabel>
                    <Box sx={{ minWidth: 120 }}>
                        <TextField
                            size="small"
                            style={{ margin: "10px", width: "165px" }}
                            id="from-date"
                            label="С даты игры"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={convertDateToString(
                                repeatableInput.fromDate
                            )}
                            onChange={(e) => {
                                dispatch(
                                    setRepeatableFromDateAction(
                                        new Date(e.target.value)
                                    )
                                );
                            }}
                        />
                        <TextField
                            size="small"
                            style={{ margin: "10px", width: "165px" }}
                            id="to-date"
                            label="До даты игры"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={convertDateToString(repeatableInput.toDate)}
                            onChange={(e) => {
                                dispatch(
                                    setRepeatableToDateAction(
                                        new Date(e.target.value)
                                    )
                                );
                            }}
                        />
                        <FormControl
                            style={{ margin: "10px" }}
                            sx={{ minWidth: 165 }}
                        >
                            <InputLabel id="demo-simple-select-label">
                                По каким числам
                            </InputLabel>
                            <Select
                                size="small"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={repeatableInput.allOrStrong}
                                label="По каким числам"
                                onChange={(e) => {
                                    dispatch(
                                        setRepeatableAllOrStrongAction(
                                            e.target.value
                                        )
                                    );
                                }}
                            >
                                <MenuItem value="all">Основные</MenuItem>
                                <MenuItem value="strong">Усилиное</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </FormLabel>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => {
                        dispatch(
                            getRepeatablesAction(
                                repeatableInput.fromDate,
                                repeatableInput.toDate,
                                repeatableInput.allOrStrong
                            )
                        );
                    }}
                >
                    Найти
                </Button>
            </div>
            <Divider style={{ margin: "10px" }} variant="middle" />
            {loadingRepeatable ? (
                <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                </Box>
            ) : repeatableData.repeatables.length === 0 ? (
                <Alert severity="warning">Ничего не найдено</Alert>
            ) : (
                <RepeatableTableComponent rows={repeatableData.repeatables} />
            )}
        </div>
    );
};

export default RepeatablesComponent;
