import { Box, Button, FormLabel, LinearProgress, MenuItem, Select, TextField } from '@material-ui/core';
import React from 'react';
import classes from './TableRepeatables.module.css';
import { useDispatch, useSelector } from 'react-redux';
import RepeatableInput from '../../models/RepeatableInput';
import { getRepeatablesAction, setRepeatableFromDateAction, setRepeatableNameAction, setRepeatableToDateAction } from '../../store/actions/repeatable-actions';
import { getRepeatables, loading, setRepeatableFields } from '../../store/selectors';
import MyTable from './MyTable';

const combinationNames: string[] = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Strong"];

const TableRepeatables: React.FC = () => {
    const dispatch = useDispatch();
    const repeatables = useSelector(getRepeatables);
    const repeatableInput: RepeatableInput = useSelector(setRepeatableFields);
    const loadingRepeatable: boolean = useSelector(loading).isLoadingRepeatable;

    console.log(repeatables, repeatableInput);

    return (
        <div className={classes.root}>
            <div className={classes.search_block}>
                <FormLabel>
                    <TextField
                        style={{ margin: "10px" }}
                        id="from-date"
                        label="С даты игры"
                        // value={repeatableInput.fromDate}
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
                        // value={repeatableInput.toDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            dispatch(setRepeatableToDateAction(new Date(e.target.value)));
                        }}
                    />
                    <Select
                        style={{ width: "150px", margin: "15px" }}
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={repeatableInput.name}
                        onChange={(e) => dispatch(setRepeatableNameAction(typeof e.target.value === 'string' ? e.target.value : ""))}
                        label="Номер комбинации"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            combinationNames.map((c, i) => <MenuItem key={i} value={c}>{c}</MenuItem>)
                        }
                    </Select>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => {
                            dispatch(getRepeatablesAction(repeatableInput.fromDate, repeatableInput.toDate, repeatableInput.name));
                        }}
                    >
                        Найти
                    </Button>
                </FormLabel>
            </div>
            {
                loadingRepeatable ? <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> : repeatables.length !== 0 && <MyTable r={repeatables}/>
            }
        </div>
    );

}

export default TableRepeatables;