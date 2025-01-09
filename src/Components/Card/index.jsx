const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 px-0.5">Electronics</span>
        <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/11028230/pexels-photo-11028230.jpeg" alt="headphones" />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-2">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-sm font-medium">$300</span>
      </p>
    </div>
  )
}

export default Card
