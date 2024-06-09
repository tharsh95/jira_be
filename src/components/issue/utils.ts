export function adjustCount(dbCount: number, apiDataCount: number) {
    const results = [dbCount];
    let currentCount = dbCount;

    while (currentCount + 50 < apiDataCount) {
        currentCount += 50;
        results.push(currentCount);
    }
    
    return results;
}