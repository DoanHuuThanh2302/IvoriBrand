interface ButtomProps {
  onClick?: any
  className?: string
  text?: string
  type?: 'submit' | 'reset' | 'button'
}

export default function Button({
  onClick,
  className,
  text,
  type,
}: ButtomProps) {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={` w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 focus:outline-none ${className}`}
      >
        {text}
      </button>
    </>
  )
}
