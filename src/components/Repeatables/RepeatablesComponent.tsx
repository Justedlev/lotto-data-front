import React from 'react';
import classes from './Repeatables.module.css';
import { useDispatch, useSelector } from 'react-redux';
import RepeatableInput from '../../models/RepeatableInput';
import { getRepeatablesAction, setRepeatableAllOrStrongAction, setRepeatableFromDateAction, setRepeatableToDateAction } from '../../store/actions/repeatable-actions';
import { getRepeatables, loading, setRepeatableFields } from '../../store/selectors';
import { Alert, Button, FormControl, FormLabel, InputLabel, LinearProgress, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import RepeatableTableComponent from '../RepeatableTable/RepeatableTableComponent';

const RepeatablesComponent: React.FC = () => {
    const dispatch = useDispatch();
    const repeatables = useSelector(getRepeatables);
    const repeatableInput: RepeatableInput = useSelector(setRepeatableFields);
    const loadingRepeatable: boolean = useSelector(loading).isLoadingRepeatable;

    console.log(repeatables, repeatableInput);

    return (
        <div className={classes.root}>
            <div className={classes.search_block}>
                <FormLabel>
                    <Box sx={{ minWidth: 120 }}>
                        <TextField
                            style={{ margin: "10px" }}
                            id="from-date"
                            label="С даты игры"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                dispatch(setRepeatableFromDateAction(new Date(e.target.value)));
                            }}
                        />
                        <TextField
                            style={{ margin: "10px" }}
                            id="to-date"
                            label="До даты игры"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                dispatch(setRepeatableToDateAction(new Date(e.target.value)));
                            }}
                        />
                        <FormControl style={{ margin: "10px" }} sx={{ minWidth: 200 }}>
                            <InputLabel id="demo-simple-select-label">По каким числам</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={repeatableInput.allOrStrong}
                                label="По каким числам"
                                onChange={e => {
                                    dispatch(setRepeatableAllOrStrongAction(e.target.value));
                                }}
                            >
                                <MenuItem value='all'>Основные</MenuItem>
                                <MenuItem value='strong'>Усилиное</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </FormLabel>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => {
                        dispatch(getRepeatablesAction(repeatableInput.fromDate, repeatableInput.toDate, repeatableInput.allOrStrong));
                    }}
                >
                    Найти
                </Button>
            </div>
            {
                loadingRepeatable ? <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> : repeatables.length === 0 ? <Alert severity="warning">Ничего не найдено</Alert> : <RepeatableTableComponent rows={repeatables} />
            }
        </div>
    );

}

export default RepeatablesComponent;