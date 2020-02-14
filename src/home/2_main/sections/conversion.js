import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 160,
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
        let i = event.target.value;
        setCurrencyIn(currencies[i]);
        setAmountOut('');
    };

    const handleCurrencyOut = event => {
        let o = event.target.value;
        setCurrencyOut(currencies[o]);
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
    };

    const [currencies, setCurrencies] = React.useState([]);

    React.useEffect(() => {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(res => res.json())
            .then(data => setCurrencies(data.rates))
    });

    const currenciesName = Object.keys(currencies);

    return (
        <div className="d-flex justify-content-center">

            <div className="border border-info rounded pb-3">
                <ValidatorForm className={classes.root} autoComplete="on" onSubmit={handleSubmit}>

                    <div className="form-inline my-3">
                        <div className="input-group-append">
                            <SelectValidator
                                select
                                size="small"
                                label="De"
                                onChange={handleCurrencyIn}
                                helperText=""
                                variant="outlined">

                                {currenciesName.map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
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
                    </div>

                    <div className="form-inline my-3">
                        <div className="input-group-append">
                            <SelectValidator
                                select
                                size="small"
                                label="À"
                                onChange={handleCurrencyOut}
                                helperText=""
                                variant="outlined"
                            >
                                {currenciesName.map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
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
                    </div>

                    <div className="text-center">
                        <Button variant="contained" color="primary" type="submit"><i className="fa fa-angle-double-right"></i></Button>
                    </div>
                </ValidatorForm>
            </div>
        </div >
    );
}
