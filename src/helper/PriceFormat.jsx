// const PriceFormat = ({ price }) => {
//     return Intl.NumberFormat("de-DE", {
//       style: "currency",
//       currency: "NOK",
//       minimumFractionDigits: 1,
//     }).format(price / 1);
//   };
  
//   export default PriceFormat;


  const CURRENCY_FORMATTER = new Intl.NumberFormat("de-DE", {
    currency: "NOK", style: "currency"
  });
  
  export function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number)
  }