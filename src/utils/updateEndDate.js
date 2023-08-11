export function updateEndDate(startDate, endDate){
    const endDateInput = document.querySelector('#f_date');

    const diff = endDate - startDate;

    const daysInMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();

    if (diff > daysInMonth * 24 * 60 * 60 * 1000) {
        endDate.setMonth(startDate.getMonth() + 1);
        endDate.setDate(startDate.getDate());
        endDateInput.value = endDate.toISOString().slice(0, 10);
    }
}