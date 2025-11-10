export const getLastDayOfMonth = (fullYear: number, month: number): number => {
    return new Date(fullYear, month, 0).getDate();
}

export const getMonthName = (month: number): string => {
    const date = new Date(2025, month);
    return date.toLocaleDateString("en", { month: "long" });
}