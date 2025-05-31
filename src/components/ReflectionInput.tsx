import React from 'react';

interface ReflectionInputProps {
  label: string;
  sublabel?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  id: string;
}

const ReflectionInput: React.FC<ReflectionInputProps> = ({
  label,
  sublabel,
  value,
  onChange,
  placeholder,
  id
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-baseline mb-2">
        <label htmlFor={id} className="block text-lg font-medium text-gray-800">
          {label}
        </label>
        {sublabel && (
          <span className="ml-1 text-sm text-gray-600">{sublabel}</span>
        )}
      </div>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[100px] text-gray-700"
      />
    </div>
  );
};

export default ReflectionInput;