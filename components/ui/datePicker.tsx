"use client"

import * as React from "react"
import { format, getMonth, getYear, setMonth, setYear } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

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
  value?: Date; 
  onChange?: (date: Date) => void; 
}

export function DatePicker({
  startYear = getYear(new Date()) - 100,
  endYear = getYear(new Date()) + 100,
  value,
  onChange
}: DatePickerProps) {
  const [internalDate, setInternalDate] = React.useState<Date>(value || new Date());
  const date = value ?? internalDate;

  const setDate = (newDate: Date) => {
    if (!value) setInternalDate(newDate);
    onChange?.(newDate); 
  };

  const Months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const year = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

  const handleChangeMonth = (Month: string) => {
    setDate(setMonth(date, Months.indexOf(Month)));
  };

  const handleChangeYear = (yearStr: string) => {
    setDate(setYear(date, parseInt(yearStr)));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="flex justify-between p-2">
          <Select onValueChange={handleChangeMonth} value={Months[getMonth(date)]}>
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Months" />
            </SelectTrigger>
            <SelectContent>
              {Months.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={handleChangeYear} value={getYear(date).toString()}>
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {year.map((yearVal) => (
                <SelectItem key={yearVal} value={yearVal.toString()}>
                  {yearVal}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Calendar
          mode="single"
          required
          selected={date}
          onSelect={(d) => d && setDate(d)}
          month={date}
          onMonthChange={setDate}
        />
      </PopoverContent>
    </Popover>
  );
}
