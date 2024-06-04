import React from 'react'

export interface SelectOption {
  value: any
  label: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: string
  handleChange?: any
  className?: string
  label?: string
  placeholder?: string
  id?: string
  name?: string
  parentClass?: string
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  handleChange,
  className = '',
  label,
  placeholder,
  id,
  name,
  parentClass,
}) => {
  return (
    <div className={parentClass}>
      {label && (
        <label className={'text-[#687C97]'} htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        defaultValue={value}
        name={name}
        onChange={handleChange}
        className={`border rounded-[3px] border-gray-200 bg-white text-[12px] ${className} ${
          label ? 'mt-2' : ''
        } `}
      >
        {placeholder && (
          <option
            className={'text-[#687C97]'}
            value=''
            disabled
            selected
            hidden
          >
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option className={'text-[#687C97]'} key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
