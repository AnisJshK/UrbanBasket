
import { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';4
import ProductItem from '../components/ProductItem'

const Products = () => {
    const {products} = useContext(ShopContext)
    const [showFilter,setShowFilter] = useState(false);
    const [filterProducts,setFilterProducs] = useState([]);
    const [category,setCategory] = useState([]);
    const [subCategory,setSubCategory] = useState([]);

    const toggleCategory = (e) => {
        if(category.includes(e.target.value)){
            setCategory(prev=>prev.filter(item => item != e.target.value))
        }
        else{
            setCategory(prev => [...prev,e.target.value])
        }
    }
    
    const toggleSubCategory = (e) =>{
        if(subCategory.includes(e.target.value)){
            setSubCategory(prev=>prev.filter(item=>item!=e.target.value))
        }else{
            setSubCategory(prev=>[...prev,e.target.value])
        }
    }

    useEffect(()=>{
        setFilterProducs(products);
    },[])

    

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t mt-20 ml-10'>
        <div className='min-w-60'>
    <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 '>FILTERS
        <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
    </p>
    {/* category filter  */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6  rounded-2xl shadow-green-600/30 shadow-xl ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>Categories</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                    <input type="checkbox" className='w-3' value={'Men'}  onChange={toggleCategory}/> Men
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} /> Women
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} /> Kids
                </p>
            </div>
        </div>
        {/* SUB-CATEGORY */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 rounded-2xl shadow-green-600/30 shadow-xl ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>Type</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                    <input type="checkbox" className='w-3' value={'Top-wear'}  onChange={toggleSubCategory}/> Top-wear
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" className='w-3' value={'Bottom-wear'} onChange={toggleSubCategory}/> Bottom-Wear
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" className='w-3' value={'Winter-wear'} onChange={toggleCategory}/> Winter-Wear
                </p>
            </div>
        </div>
    </div>
    {/* Right Side */}
    <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'}/>
            {/* Product Sort */}
            <select className='border border-gray-300 text-sm px-2 m-2 rounded-xl shadow-2xl shadow-green-600/30'>
                <option value="relavent">Sort by: Relavent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to</option>
            </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
                filterProducts.map((item,index)=>(
                    <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Products