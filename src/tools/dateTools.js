export const createLongMonthNames = () => {
    const months = new Array(12)
    .fill()
    .map((item, index) => {
        const monthDate = new Date(2021,index)
        const monthName = monthDate.toLocaleString('en', { month: 'long' });
    return monthName;
    });
    return months;
}

export const getDayId = (year, month, day) => {
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2,'0')}`;
}