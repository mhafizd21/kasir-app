import NumberFormat from 'react-number-format';

const CurrencyFormat = ({ value: val, props}) => {
  const value = val && typeof val !== 'number' ? parseFloat(val) : val;

  return (
    <NumberFormat
      thousandSeparator="."
      decimalSeparator=","
      prefix="Rp "
      displayType="text"
      decimalScale={2}
      value={value}
      {...props}
    />
  )
}

export default CurrencyFormat;
