import { Skeleton } from '@mui/material'
import clsx from 'clsx'

interface IOptionSkeleton {
  count?: number
  className?: string
}

const OptionSkeleton = ({ count = 1, className }: IOptionSkeleton) => {
  return (
    <div className={clsx('flex flex-col gap-2', className)}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} className='w-full m-2 min-w-36' />
      ))}
    </div>
  )
}

export default OptionSkeleton
