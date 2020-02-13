import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';

const currencies = [
    {
        value: '1.087',
        label: 'USD',
    },
    {
        value: '1',
        label: 'EUR',
    },
    {
        value: '1.442',
        label: 'CAD',
    },
    {
        value: '655.957',
        label: 'CFA',
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));



export default function Conversion() {
    const classes = useStyles();
    const [currencyIn, setCurrencyIn] = React.useState("1");
    const [currencyOut, setCurrencyOut] = React.useState("1");
    const [amountIn, setAmountIn] = React.useState();
    const [amountOut, setAmountOut] = React.useState();


    const handleCurrencyIn = event => {
        setCurrencyIn(event.target.value);
        setAmountOut('');
    };

    const handleCurrencyOut = event => {
        setCurrencyOut(event.target.value);
        setAmountOut('');
    };

    const handleAmountIn = event => {
        setAmountIn(event.target.value);
        setAmountOut('');
    };

    const handleSubmit = event => {
        if (amountIn >= 0) {
            let amount = (amountIn * (currencyOut / currencyIn));
            amount = amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
            setAmountOut(amount);
        }
        // else setAmountOut('Montant Invalide')
    };

    return (
        <div className="d-flex justify-content-center">
            <ValidatorForm className={classes.root} autoComplete="on" onSubmit={handleSubmit}>

                <div className="form-group row my-4">
                    <SelectValidator
                        select
                        size="small"
                        label="De"
                        value={currencyIn}
                        onChange={handleCurrencyIn}
                        helperText=""
                        variant="outlined">

                        {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}

                    </SelectValidator>

                    <TextValidator
                        size="small"
                        type="number"
                        label="Montant"
                        value={amountIn}
                        onChange={handleAmountIn}
                        variant="outlined"
                        validators={['required', 'minNumber:0', 'maxNumber:9999999999999999']} errorMessages={['Champ Obligatoire!']}
                    />
                </div>

                <div className="form-group row my-4">
                    <SelectValidator
                        select
                        size="small"
                        label="À"
                        value={currencyOut}
                        onChange={handleCurrencyOut}
                        helperText=""
                        variant="outlined"
                    >
                        {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </SelectValidator>
                    <TextValidator
                        size="small"
                        value={amountOut}
                        variant="outlined"
                        helperText=""
                        InputProps={{ readOnly: true, }}
                    />


                </div>
                <div className="text-center">
                    <Button variant="contained" color="primary" type="submit"><i className="fa fa-angle-double-right"></i></Button>
                </div>
            </ValidatorForm>

        </div>
    );
}
