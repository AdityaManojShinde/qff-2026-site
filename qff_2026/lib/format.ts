export function formatTimeIST(dateIsoString: string): string {
    const date = new Date(dateIsoString);
    const formatter = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    return `${formatter.format(date)} IST`;
}

export function formatDateFull(dateIsoString: string): string {
    const date = new Date(dateIsoString);
    const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    return formatter.format(date);
}
