const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const getTimeAgo = date => {
    const newDate = new Date(date);
    const now = new Date();
    let diff = (now - newDate) / 1000;
    if (diff < 60) {
        return `${diff < 2 ? "a second" : `${Math.floor(diff)} seconds`} ago`;
    }
    diff = diff / 60;
    if (diff < 60) {
        return `${diff < 2 ? "a minute" : `${Math.floor(diff)} minutes`} ago`;
    }
    diff = diff / 60;
    if (diff < 24) {
        return `${diff < 2 ? "an hour" : `${Math.floor(diff)} hours`} ago`;
    }
    diff = diff / 24;
    if (diff < 30) {
        return `${diff < 2 ? "a day" : `${Math.floor(diff)} days`} ago`;
    }
    return `on ${monthNames[newDate.getMonth()]} ${newDate.getDate()}${newDate.getFullYear() < now.getFullYear() ? `, ${newDate.getFullYear()}` : ""}`;
}

export const getDateFormat = date => {
    const newDate = new Date(date);
    const monthNum = newDate.getMonth();
    const month = monthNames[monthNum];
    const year = newDate.getFullYear();
    const day = newDate.getDate();
    return `${month} ${day < 10 ? `0${day}` : `day`}, ${year}`;
}