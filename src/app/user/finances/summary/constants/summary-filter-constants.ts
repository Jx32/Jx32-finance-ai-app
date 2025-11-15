import { FilterItem } from "src/app/shared/interfaces/filter-item.interface";
import { getLastDayOfMonth, getMonthName } from "src/app/shared/utils/date-utils";

export const datePeriodFilterItems: FilterItem[] = [
    {
        name: "Payment cycle", value: "paymentCycle", helperTextCallback: () => {
            const now = new Date();
            let startDay = 0;
            let endDay = 0;

            if (now.getDate() < 15) {
                startDay = 1;
                endDay = 15;
            } else {
                startDay = 15;
                endDay = getLastDayOfMonth(now.getFullYear(), now.getMonth() + 1);
            }

            return `${getMonthName(now.getMonth())} ${startDay} to ${endDay}`;
        }
    },
    {
        name: "This month", value: "thisMonth", helperTextCallback: () => {
            return getMonthName(new Date().getMonth());
        }
    },
    {
        name: "Last 2 months", value: "lastTwoMonths", helperTextCallback: () => {
            const now = new Date();
            const startMonth = getMonthName(now.getMonth() - 2);
            const endMonth = getMonthName(now.getMonth() - 1);

            return `${startMonth}, ${endMonth}`;
        }
    },
    {
        name: "Last 6 months", value: "lastSixMonths", helperTextCallback: () => {
            const now = new Date();

            now.setMonth(now.getMonth() - 1);
            const endYear = now.getFullYear();
            const endDate = getMonthName(now.getMonth());

            now.setMonth(now.getMonth() - 6);
            const startYear = now.getFullYear();
            const startDate = getMonthName(now.getMonth());


            return endYear === startYear ?
                `${startDate} to ${endDate}` :
                `${startDate} ${startYear} to ${endDate} ${endYear}`
        }
    },
    {
        name: "This year", value: "thisYear", helperTextCallback: () => {
            return new Date().getFullYear().toString();
        }
    },
]

export const typeFilterItems: FilterItem[] = [
    { name: "Earnings & spents", value: "all" },
    { name: "Earnings", value: "earnings" },
    { name: "Spents", value: "spents" },
]