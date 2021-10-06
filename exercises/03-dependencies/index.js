import fns from 'date-fns';
const { format, differenceInHours, differenceInDays, getYear } = fns;

const year = getYear(Date.now());
console.log(`Current year: ${year}`);

const daysLeftForChristmas = differenceInDays(new Date(2021, 11, 24), Date.now());
console.log(`Days for christmas: ${daysLeftForChristmas}`);

const hoursLeftForNextClass = differenceInHours(new Date(2021, 9, 7, 16, 0), Date.now());
if (hoursLeftForNextClass > 0) console.log(`Hours left for the second class: ${hoursLeftForNextClass}`);

const currentDate = format(Date.now(), 'dd/MM/yyyy');
console.log(`Current date in format dd/MM/yyyy: ${currentDate}`);
