import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export const InputDate=(props:any)=>{
    const {labels='name',width='100%'}=props;
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return( <MuiPickersUtilsProvider  utils={DateFnsUtils}>
        <KeyboardDatePicker
            style={{width}}
            margin="normal"
            id="date-picker-dialog"
            label={labels}
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />
    </MuiPickersUtilsProvider>)
}

