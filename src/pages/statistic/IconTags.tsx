import clsx from 'clsx'

interface IconTagsProps {
  className?: string
  icon?: React.ReactNode
  count?: number
  label?: string
  colorText?: string
}

const IconTags = ({ className, icon, count, label, colorText }: IconTagsProps) => {
  return (
    <div className={`flex gap-2 cursor-pointer items-center ${className}`}>
      {icon}
      <div className={clsx('space-x-1', colorText)}>
        <span className='font-medium'>{count?.toLocaleString()}</span>
        <span>{label}</span>
      </div>
    </div>
  )
}

export default IconTags
