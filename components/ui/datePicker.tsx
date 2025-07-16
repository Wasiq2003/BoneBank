"use client"

import * as React from "react"
import { endOfYear, format, getMonth, getYear, setMonth, setYear } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"

interface DatePickerProps {
    startYear?: number;
    endYear?: number;
}

export function DatePicker({
    startYear = getYear(new Date()) - 100,
    endYear = getYear(new Date()) + 100,
}: DatePickerProps) {
    const [date, setDate] = React.useState<Date>(new Date())
    const Months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const year = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

    const handleChangeMonth = (Month: string) => {
        const newDate = setMonth(date, Months.indexOf(Month));
        setDate(newDate);
    }

    const handleChangeYear = (year: string) => {
        const newDate = setYear(date, parseInt(year));
        setDate(newDate);
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    data-empty={!date}
                    className="data-[empty=true]:text-muted-foreground  w-full justify-start text-left font-normal"
                >
                    <CalendarIcon />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <div className=" flex justify-between p-2" >
                    <Select onValueChange={handleChangeMonth} value={Months[getMonth(date)]} >
                        <SelectTrigger className="w-[110px]">
                            <SelectValue placeholder="Months" />
                        </SelectTrigger>
                        <SelectContent>
                            {Months.map(month => (
                                <SelectItem key={month} value={month}>{month}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select onValueChange={handleChangeYear} value={getYear(date).toString()}>
                        <SelectTrigger className="w-[110px]">
                            <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent>
                            {year.map(year => (
                                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Calendar
                    mode="single"
                    required
                    selected={date}
                    onSelect={setDate}
                    month={date}
                    onMonthChange={setDate} />
            </PopoverContent>
        </Popover>
    )
}