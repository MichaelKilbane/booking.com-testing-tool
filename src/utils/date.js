export const addDays = (date, days) => {
    const newDate = new Date(date);

    newDate.setDate(newDate.getDate() + days);

    return newDate;
}

export const changeDateFormat = (date) => {
    const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
        date
    );
    const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(
        date
    );
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    const newFormat = `${year}-${month}-${day}`;
    return newFormat;
}