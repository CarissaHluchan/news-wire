import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.css';

function Form({ handleSearch }) {
    const { control, handleSubmit } = useForm(); 
    const [searchDate, setSearchDate] = useState(new Date());

    const onSubmit = (data) => {
        // Handle search logic here, using data.searchDate
        console.log('Search data:', data);

        setSearchDate(data.searchDate)
        handleSearch(data.searchDate); 
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="searchDate"
                control={control}
                defaultValue={searchDate}
                render={({ field }) => (
                    <DatePicker
                        {...field}
                        selected={searchDate}
                        onChange={(date) => {
                            setSearchDate(date);
                            field.onChange(date);
                        }}
                        maxDate={new Date()}
                    />
                )}
            />
            <button type="submit" className='search-by-date-button'>Search</button>
        </form>
    );
}

export default Form