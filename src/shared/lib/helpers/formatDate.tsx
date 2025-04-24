export function formatDate(date: string) {
    const monthNames = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ];

    const currentDate = new Date().toISOString().slice(0, 10);
    if (currentDate === date) {
        return "Сегодня";
    } else if (Number(currentDate.slice(8, 10)) - 1 === Number(date.slice(8, 10))) {
        return "Вчера";
    } else {
        return `${date.slice(8, 10)} ${monthNames[Number(date.slice(5, 7)) - 1]}`;
    }
}
