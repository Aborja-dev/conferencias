export const formatDate = (date: number) => new Date(date).toLocaleDateString();
export const getDateFormated = (date: number) => ({
    date: new Date(date).toLocaleDateString(),
    hour: new Date(date).toLocaleTimeString()
});