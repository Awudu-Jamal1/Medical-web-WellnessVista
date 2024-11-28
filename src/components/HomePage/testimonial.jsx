import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './reviewsData';
import Quote from '../../assets/img/blockquote.svg';

const Testimonials = () => {
  return (
    <section className=" w-3/4 m-auto py-24">
      <div className="text-center py-10 max-w-3xl m-auto">
        <h2 className='text-md py-2 tracking-wider uppercase text-backgroundColor font-bold'>Testimonial</h2>
        <p className='text-5xl text-gray-600 font-semibold'>What They Say.</p>
      </div>

      <div className="slider-container py-5">
        <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote" />
          <img className="bottom-quote quote" src={Quote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <img className="review-img" src={review.image} alt="" />
              <div className="content">
                <p className="text-md font-semibold text-gray-600">{review.text}</p>
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
  );
};

export default Testimonials;