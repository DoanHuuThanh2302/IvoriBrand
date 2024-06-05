interface ButtomProps {
  className?: string
  placeholder?: string
  value?: string
  type?: string
  name?: string
  id?: string
  register?: any
  error?: string
  handleKeyDown?: any
}

export default function InputForm({
  className,
  placeholder,
  value,
  type,
  name,
  id,
  error,
  register,
  handleKeyDown,
}: ButtomProps) {
  return (
    <div>
      <input
        id={id}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        name={name}
        {...register}
        onKeyDown={handleKeyDown}
        className={`w-full p-2 rounded-md border border-pink-300 text-[10px] focus:border-solid-[4px] focus:border-pink-300 focus:outline-none ${className}`}
      ></input>
      <p className={`absolute text-[8px] text-red-500 mt-[4px]`}>{error}</p>
    </div>
  )
}
