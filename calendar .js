function dayOfYear(date) {
    const [year, month, day] = date.split('-').map(Number);
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        months[1] = 29; 
    }
    let sum = 0;
    for (let i = 0; i < month - 1; i++) {
        sum += months[i];
    }
    
    return sum + day;
}