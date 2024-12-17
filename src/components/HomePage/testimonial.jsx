import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './reviewsData';
import Quote from '../../assets/img/blockquote.svg';
import parallaxImage from '../../assets/img/parallax1.png';

const Testimonials = () => {
  return (
    <div 
      className="min-h-screen flex justify-center items-center bg-fixed bg-no-repeat bg-cover bg-center" 
      style={{ backgroundImage: `url(${parallaxImage})` }}
    >

    
    <section className=" w-3/4 m-auto py-36">
      <div className="text-center py-10 max-w-3xl m-auto">
        <h2 className='text-sm py-2 tracking-widest uppercase text-white font-bold'>Testimonial</h2>
        <p className='text-3xl text-white tracking-wider font-semibold'>What They Say.</p>
      </div>

      <div className="slider-container py-5 hidden md:hidden lg:block">
        <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote" />
          <img className="bottom-quote quote" src={Quote} alt="quote" />
        </blockquote>

        <Splide
      options={{
        autoplay: true,
        speed: 1000,
        rewind: true,
        rewindByDrag: true,
        gap: '1rem',
        padding: '1rem',
        perPage: 2,  // Default: Show 2 slides on larger screens
        breakpoints: {
          1024: {
            perPage: 2,  // Show 2 slides on larger screens (tablets, laptops)
          },
          640: {
            perPage: 1,  // Show 1 slide on smaller screens (mobile)
          },
        },
      }}
    >
          {reviews.map((review) => (
            <SplideSlide key={review.id} className="">
              <img className="review-img" src={review.image} alt="" />
              <div className="content">
                <p className="text-sm tracking-wide leading-relaxed font- text-gray-600">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="text-backgroundColor text-md font-semibold">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="slider-container py-5 lg:hidden">
        <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote" />
          <img className="bottom-quote quote" src={Quote} alt="quote" />
        </blockquote>

        <Splide
      options={{
        autoplay: true,
        speed: 1000,
        rewind: true,
        rewindByDrag: true,
        gap: '1rem',
        padding: '1rem',
        perPage: 1,  // Default: Show 2 slides on larger screens
        
      }}
    >
          {reviews.map((review) => (
            <SplideSlide key={review.id} className="">
              <img className="review-img" src={review.image} alt="" />
              <div className="content">
                <p className="text-sm tracking-wide leading-relaxed font- text-gray-600">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="text-backgroundColor text-md font-semibold">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>



    </section>
    </div>
  );
};

export default Testimonials;