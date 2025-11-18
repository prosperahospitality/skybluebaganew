import React from 'react'
import Image from 'next/image'

const Process = () => {
    return (
        <div className='relative flex w-full justify-center item-center mb-32 lg:my-16'>
            <div className='w-[90%] lg:w-[80%] mx-auto z-30'>
                <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-5 py-'>
                    <div className='flex flex-col w-full gap-2'>
                        <span className='text-[#333333] text-xl font-semibold'>What We Offer</span>
                        <h2 className='text-2xl md:text-4xl  font-bold w-full lg:w-[90%] text-[#333333]'>Relax in Spacious AC Deluxe Rooms in Goa</h2>
                        {/* <p className='text-gray-500 text-sm mt-2'>At Hotel Sky Blue Baga, indulge in the authentic flavors of <span className='font-semibold text-md'>Gujarati Thali</span> for just <span className='font-semibold text-md'>₹99/-</span> and <span className='font-semibold text-md'>Punjabi Thali</span> for <span className='font-semibold text-md'>₹150/-</span>. Our <span className='font-semibold text-md'>AC Hall</span> offers a comfortable and aesthetic setting, perfect for enjoying traditional meals with fresh ingredients and spices that transport you to the heart of Gujarat and Punjab. With expertly crafted thalis, we ensure an unmatched dining experience. Located in Goa, near Goa, our <span className='font-semibold text-md'>AC Dining Hall</span> provides the perfect ambiance for a memorable meal that will leave you craving more!</p> */}
                        <p className='text-gray-500 text-sm mt-2'>At <span className='font-semibold text-md'>Hotel Sky Blue Baga</span>, relax in our <span className='font-semibold text-md'>spacious and comfortable Deluxe Rooms</span> equipped with modern amenities and air-conditioning for a refreshing stay. Perfect for families, couples, or solo travelers, our rooms offer a cozy ambiance after a day of exploring Goa. With thoughtful interiors, plush bedding, and convenient facilities, our Deluxe Rooms ensure a relaxing and memorable experience, combining comfort, style, and convenience all in one.</p>
                    </div>
                    <div className='w-full grid grid-cols-2 gap-5'>
                        <div className='p-2 h-60 bg-white shadow-xl rounded-xl flex flex-col justify-between gap-1'>

                            {/* <img src="/img/rest1.jpeg" className='object-fill md:object-cover h-full w-full rounded-xl' alt='google' /> */}
                            <div className='h-full w-full rounded-xl flex justify-center items-center mt-0'>
                                {/* <img src="/img/rest1.jpeg" 
                                className='object-fill md:object-cover h-[12rem] w-full rounded-xl' 
                                alt='google' /> */}
                                <div className="w-full h-[12rem] relative group overflow-hidden rounded-xl">
                                    <Image
                                        src={'/img/landing1.jpg'}
                                        width={800}
                                        height={800}
                                        alt="special-tours"
                                        className="w-full h-full object-fill lg:object-cover transition-all group-hover:scale-105 aspect-[300/300]"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-0 w-full">
                                <h2 className='text-sm md:text-lg font-semibold text-[#800000] text-center'>Room 1</h2>
                            </div>

                        </div>
                        <div className='p-2 h-60 bg-white shadow-xl rounded-xl flex flex-col justify-between gap-1'>

                            {/* <img src="/img/gujratiThali.jpg" className='object-fill md:object-cover h-full w-full rounded-xl' alt='meta' /> */}

                            <div className='h-full w-full rounded-xl flex justify-center items-center mt-0'>
                                {/* <img src="/img/gujratiThali.jpg" 
                                className='object-fill md:object-cover h-[12rem] w-full rounded-xl' 
                                alt='google' 
                                /> */}
                                <div className="w-full h-[12rem] relative group overflow-hidden rounded-xl">
                                    <Image
                                        src={'/img/landing2.jpg'}
                                        width={800}
                                        height={800}
                                        alt="special-tours"
                                        className="w-full h-full object-fill lg:object-cover transition-all group-hover:scale-105 aspect-[300/300]"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-0 w-full">
                                <h2 className='text-sm md:text-lg font-semibold text-[#800000] text-center'>Room 2</h2>
                            </div>

                        </div>
                        <div className='p-2 h-60 bg-white shadow-xl rounded-xl flex flex-col justify-between gap-1'>

                            {/* <img src="/img/punjabiThali.avif" className='object-fill md:object-cover h-full w-full rounded-xl' alt='amazon' /> */}

                            <div className='h-full w-full rounded-xl flex justify-center items-center mt-0'>
                                {/* <img src="/img/punjabiThali.avif" 
                                className='object-fill md:object-cover h-[12rem] w-full rounded-xl' 
                                alt='google' /> */}
                                <div className="w-full h-[12rem] relative group overflow-hidden rounded-xl">
                                    <Image
                                        src={'/img/landing3.jpg'}
                                        width={800}
                                        height={800}
                                        alt="special-tours"
                                        className="w-full h-full object-fill lg:object-cover transition-all group-hover:scale-105 aspect-[300/300]"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-0 w-full">
                                <h2 className='text-sm md:text-lg font-semibold text-[#800000] text-center'>Room 3</h2>
                            </div>


                        </div>
                        <div className='p-2 h-60 bg-white shadow-xl rounded-xl flex flex-col justify-between gap-1'>
                            {/* <img src="/img/rest2.jpeg" className='object-fill md:object-cover h-full w-full rounded-xl' alt='linked' /> */}

                            <div className='h-full w-full rounded-xl flex justify-center items-center mt-0'>
                                {/* <img src="/img/rest2.jpeg" 
                                className='object-fill md:object-cover h-[12rem] w-full rounded-xl' 
                                alt='google' /> */}
                                <div className="w-full h-[12rem] relative group overflow-hidden rounded-xl">
                                    <Image
                                        src={'/img/landing4.jpg'}
                                        width={800}
                                        height={800}
                                        alt="special-tours"
                                        className="w-full h-full object-cover transition-all group-hover:scale-105 aspect-[300/300]"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-0 w-full">
                                <h2 className='text-sm md:text-lg font-semibold text-[#800000] text-center'>Room 4</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-[20%] lg:top-0 lg:bottom-0 lg:my-auto right-0 w-[70%] lg:w-[50%] h-48 lg:h-52 bg-[#38B6FF] rounded-l-2xl'></div>
        </div>
    )
}

export default Process