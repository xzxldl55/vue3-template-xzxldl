const getTimeStamp = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    // eslint-disable-next-line prettier/prettier
    return `${year}${fillZero(month)}${fillZero(day)}${fillZero(hour)}${fillZero(minute)}${fillZero(second)}`;
};

const fillZero = (n: number): string => {
    return n > 9 ? `${n}` : `0${n}`;
};

export { getTimeStamp };
