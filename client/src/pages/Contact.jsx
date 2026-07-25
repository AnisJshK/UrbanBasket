
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-20 border-t'>
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img src={assets.contact_img} className='w-full sm:max-w-120 sm:ml-40 object-cover' alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
              <p className='font-semibold text-xl text-gray-600'>Our Store</p>
              <p className='text-gray-500'>Shaitan Gali, Khatra Mahal,<br /> Andher Nagar, Shamshaan ke Saamne, <br /> Mumbai, Maharashtra, India</p>
              <p className='text-gray-500'>tel: (420) 555-0132 <br /> Email: urbanbasket@gmail.com </p>
              <p className='font-semibold text-xl text-gray-600'>Careers at Urban Basket</p>
              <p className='text-gray-500'>Learn More about our teams and job opening</p>
              <button className='cursor-pointer border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
              <p></p>
          </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact