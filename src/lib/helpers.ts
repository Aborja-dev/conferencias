export const formatDate = (date: number) => new Date(date).toLocaleDateString();
export const getDateFormated = (date: number) => ({
    date: new Date(date).toLocaleDateString(),
    hour: new Date(date).toLocaleTimeString()
});

export const verifySchedule = (entry: {
    id: number,
    hour: number,
    duration: number
}[]) => {
    const ids = entry.map(item => item.id)
    const hasUniqueIds = new Set(ids).size === ids.length
    const sorted = entry.sort((a, b) => a.hour - b.hour)
    const hasNoOverlaps = sorted.every((item, i) => {
        const next = sorted[i + 1]
        return !next || item.hour + (item.duration * 60000) <= next.hour
    })
    const isValid = hasUniqueIds && hasNoOverlaps
    if (isValid) return null
    const repeatedIds = ids.filter((id, index) => ids.indexOf(id) !== index)
    const overlaps = sorted.map((item, i) => {
        const next = sorted[i + 1]
        const hasOverlap = next && item.hour + (item.duration * 60000) > next.hour
        if (hasOverlap) {
            const final = new Date(item.hour + (item.duration * 60000)).toLocaleTimeString()
            const nexStart = new Date(next.hour).toLocaleTimeString()
            return { 
                id: item.id,
                start: item.hour,
                end: final,
                message: `Event ${item.id} overlap end ${final}, next event start ${nexStart} ` 
            }
        }
    })
    return { message: 'Invalid schedule', repeatedIds, overlaps }
}

export const createResponse = (data: any) => new Response(JSON.stringify(data), { status: 200 });
