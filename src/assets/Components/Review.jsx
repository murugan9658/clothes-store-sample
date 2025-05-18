import react,{useState,useEffect,useRef} from 'react'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Reviews=[
    
    {
        name:"John Doe",
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:"https://via.placeholder.com/150",
        rating:"⭐⭐⭐⭐⭐",

    },
    {
        name:"John Doe",
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:"https://via.placeholder.com/150",
        rating:"⭐⭐⭐⭐⭐",

    },
    {
        name:"John Doe",
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:"https://via.placeholder.com/150",
        rating:"⭐⭐⭐⭐",

    },
    {
        name:"John Doe",
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:"https://via.placeholder.com/150",
        rating:"⭐⭐⭐⭐⭐",

    },

];

export default function ReviewSlide() {
    const[current,setCurrent]=useState(0);
    const timeoutRef = useRef(null);

    const nextSlide = () => {
          setCurrent((prev) => (prev + 1) % Reviews.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + Reviews.length) % Reviews.length);
    };

    const gotoSlide = (index) => {
        setCurrent(index);
    };

    useEffect(() => {
        timeoutRef.current = setTimeout( nextSlide, 3000);
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [current]);


    return(
       <div className='w-full h-64 mt-10 relative overflow-hidden'>
        <div>
             <button onClick={prevSlide} className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg'>
             <FaChevronLeft />
             </button>

             <button onClick={nextSlide} className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg'>
             <FaChevronRight />
             </button>

        </div>
        <div>

            {Reviews.map((review, index) => (
                <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === current ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='flex flex-col items-center justify-center h-full'>
                        <img src={review.image} alt={review.name} className='w-24 h-24 rounded-full mb-4' />
                        <h2 className='text-xl font-bold'>{review.name}</h2>
                        <p className='text-gray-600'>{review.review}</p>
                        <p className='text-yellow-500'>{review.rating}</p>
                    </div>
                </div>
            ))}
        </div>


       </div>

    )
}