import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import "./styles.css"

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu overflow-y-scroll flex-col fixed right-0 border border-black bg-white rounded-lg`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="size-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}>
          </XMarkIcon>
        </div>
      </div>
      <div className='px-6'>
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>

    </aside>
  )
}

export default CheckoutSideMenu
