export const formatCurrency = (price) => {
  const zar = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  });

  const formattedPrice = zar.format(price).replace(',', '.');

  return formattedPrice.replace('ZAR', 'R');
};
