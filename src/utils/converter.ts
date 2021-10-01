export const convertDateToString = (date: Date) => {
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const day: number = date.getDate();
    const res: string = `${year}-${addFirstZero(month)}-${addFirstZero(day)}`;
    return res;
};

export const addFirstZero = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
};
