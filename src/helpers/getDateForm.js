
export const getDateForm = ( dateForm )=> {

    const numMonth = dateForm.getMonth() + 1
    const month = (numMonth.toString().length === 1) ? `0${numMonth}`: numMonth;
    const newDate = `${dateForm.getFullYear()}-${ month }-${dateForm.getDate()}` ;
    return newDate;

  }