import { format as Format } from 'date-fns';

const defaultFotmat = 'EEEE P';

const FormatDate = (date?: string | Date | null, format?: string) => {
    if(!date)
        return "";

    return Format(new Date(date), format || defaultFotmat);
}


export const DateFormatCurrent = (): string =>
    FormatDate(new Date());

export const DateFormatToDefault = (date: string | Date | null): string =>
    FormatDate(date);

export const FormatDateToHours = (date: string | Date | null): string =>
    FormatDate(date, "kk:mm");