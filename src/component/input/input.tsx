interface ButtomProps {
  onChange?: any
  className?: string
  placeholder?: string
  value?: string
  type?: string
  name?: string
  id?: string
}

export default function Input({
  onChange,
  className,
  placeholder,
  value,
  type,
  name,
  id,
}: ButtomProps) {
  return (
    <>
      <input
        id={id}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        className={`w-full p-2 rounded-md border border-pink-300 text-[10px] focus:border-solid-[4px] focus:border-pink-300 focus:outline-none ${className}`}
      ></input>
    </>
  )
}
