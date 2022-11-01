import React from 'react';

const FormatPrice = ({price}) => {                     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  return Intl.NumberFormat('en-IN',{
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits:2,
  }).format( price / 100 );                   //Rupees = price/100 because in beginning price will be in pisa (1rs=100pisa)
}

export default FormatPrice;