import React from "react";
import {FormControl,InputLabel,Select} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 190
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

const Periodos=()=>{
    const classes = useStyles();
    return <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Periodo</InputLabel>
        <Select
            label={'Periodo'}
            native
            inputProps={{
                name: 'Periodo',
                id: 'filled-age-native-simple',
            }}
        >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
        </Select>
    </FormControl>
}
export default Periodos;
