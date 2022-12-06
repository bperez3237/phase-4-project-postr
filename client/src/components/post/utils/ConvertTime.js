

export const ConvertTime = (time) => {
    let date = new Date(time);

    let hoursSince = Math.floor((Date.now() - date) / 1000 / 60 / 60);
    let minutesSince = Math.floor((Date.now() - date) / 1000 / 60);

    let formattedMinutes = minutesSince + "m";
    let formattedHours = hoursSince + "h";
    let formattedDays = Math.floor(hoursSince / 24) + "d";

    if (hoursSince > 24) {
        return formattedDays
    } else if (hoursSince < 1) {
        return formattedMinutes
    } else {
        return formattedHours;
    }
    }

