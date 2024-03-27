const formatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 2,
}

);

export const currencyformatter=(number:number)=>{
    return formatter.format(number)
}



