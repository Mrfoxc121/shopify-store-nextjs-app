import { useContext } from 'react'
import { CartContext } from '../context/shopContext'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import Link from "next/link";
import MiniCart from './MiniCart'

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  let cartQuantity = 0
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  })

  return (
    <header className="border-b sticky top-0 z-20 bg-white px-10">
      <div className="flex items-center justify-between max-w-6xl pt-4pb-4pb-2 mx-auto lg:m-w-sreen-xl">
        <Link legacyBehavior href="/" passHref>
          <a className=" customFont cursor-pointer text-2xl md:text-4xl py-4 font-bold"><span className='text-rose-500'>Foxes</span>  Beauty 
            <span className="pt-1 font-bold"> Boutique</span>
          </a>
        </Link>
        <p className="hidden md:inline-block md:text-sm bg-rose-200 rounded-xl shadow-sm p-2">Call: 07985324755 NOW!!!</p>
        <div className="cart flex items-center space-x-2 text-xl">
        <HiOutlineShoppingCart/>
        <a className="font-bold text-sm md:text-lg cursor-pointer"
        onClick={() => setCartOpen(!cartOpen)}>
          
            Basket ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
        </div>
        
      </div>
    </header>
  );
}
