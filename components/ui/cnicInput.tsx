'use client';

import React from 'react';

interface CNICInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const formatCNIC = (value: string) => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '');
  const part1 = digits.slice(0, 5);
  const part2 = digits.slice(5, 12);
  const part3 = digits.slice(12, 13);

  let formatted = part1;
  if (part2) formatted += '-' + part2;
  if (part3) formatted += '-' + part3;

  return formatted;
};

const CNICInput = React.forwardRef<HTMLInputElement, CNICInputProps>(
  ({ onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatCNIC(e.target.value);
      if (onChange) {
        e.target.value = formatted;
        onChange(e);
      }
    };

    return (
      <input
        {...props}
        ref={ref}
        onChange={handleChange}
        maxLength={15}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder="42101-1234567-1"
      />
    );
  }
);

CNICInput.displayName = 'CNICInput';

export default CNICInput;
