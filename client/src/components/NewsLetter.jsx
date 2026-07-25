

const NewsLetter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">Subscribe now and get 20% off</p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis eveniet vel similique eos maxime alias nihil ipsam doloribus, molestiae dolores amet a blanditiis saepe fuga aperiam, ab sed laborum?
      </p>

      <form 
        onSubmit={onSubmitHandler} 
        className="w-full sm:w-1/2 flex items-center justify-between mx-auto my-6 border pl-4 rounded-full overflow-hidden focus-within:border-black transition-all"
      >
        <input 
          className="w-full outline-none pr-3 text-gray-700 bg-transparent" 
          type="email" 
          placeholder="Enter your Email"
          required
        />
        <button 
          type="submit"
          className="bg-black text-white px-8 py-4 text-sm whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-300 shrink-0 cursor-pointer"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsLetter