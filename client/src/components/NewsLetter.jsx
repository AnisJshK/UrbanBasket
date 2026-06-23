
const NewsLetter = () => {
    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }
  return (
    <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">Subscribe now and get 20% off </p>
        <p className="text-gray-400 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis eveniet vel similique eos maxime alias nihil ipsam doloribus, molestiae dolores amet a blanditiis saepe fuga aperiam, ab sed laborum?
        </p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-2xl">
            <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your Email"/>
            <button type="submit"  className="bg-green-600 text-white text-xs px-10 py-4 cursor-pointer rounded-2xl hover:bg-green-800">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetter