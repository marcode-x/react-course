import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css"
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 border border-black bg-white rounded-lg`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="size-6 text-black"
            onClick={() => context.closeProductDetail()}>
          </XMarkIcon>
        </div>
      </div>

    </aside>
  )
}

export default ProductDetail
