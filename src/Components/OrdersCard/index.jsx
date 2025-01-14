import { XMarkIcon } from '@heroicons/react/24/solid'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center mb-2.5 border border-black w-80 p-4 rounded-lg">
      <div className='flex flex-col w-full'>
        <div className='flex items-center mb-2'>
          <CalendarDaysIcon className='h-6 w-6 text-black mr-2' />
          <span className='font-light'>01.02.25</span>
        </div>
        <div className='flex items-center'>
          <ShoppingBagIcon className='h-6 w-6 text-black mr-2' />
          <span className='font-light'>{totalProducts} Articles</span>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <span className='font-medium text-2xl'>${totalPrice}</span>
        <ArrowTopRightOnSquareIcon className='h-6 w-6 text-black cursor-pointer' />
      </div>
    </div>
  );


}

export default OrdersCard
