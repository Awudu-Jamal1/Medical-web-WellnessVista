import IntroContact from "./intro";

function MainContact() {
  return (
    <>
      <div>
        <div>
          <IntroContact />
        </div>
        {/* <div className="h-72 hidden lg:block md:block">
    <img className="absolute h-full w-full object-cover object-center" src="https://bucket.material-tailwind.com/magic-ai/bbe71871de8b4d6f23bb0f17a6d5aa342f3dea72677ba7238b18defa3741244d.jpg" alt="nature image" />
    <div className="absolute inset-0 h-full w-full bg-black/50"></div>  
    </div> */}
        <section className="bg-white py-20 px-2 lg:py-[20px] overflow-hidden max-w- relative ">
          <div className="container mx-auto py-8">
            <div className="flex flex-wrap lg:justify-around ">
              <div className="w-full lg:w-2/4 xl:w-4/12   px-4">
                <div className="max-w-[570px] mb-12 lg:mb-0">
                  {/* <span className="block mb-4 text-base text-primary font-semibold">
               Contact Us
               </span> */}
                  <h2
                    className="
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                  >
                    GET IN TOUCH WITH US
                  </h2>
                  <p className="text-md text-gray-600 font-semibold  leading-relaxed mb-9">
                    Get in touch with Murphy today! Whether you have questions
                    or need support, we’re here to help you every step of the
                    way.
                  </p>
                  <div className="my-8 grid gap-6  text-backgroundColor">
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                      Princess House, Princess Way, Swansea, SA1 3LW
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                      +44 (0) 1792001374
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                      info@mehtltd.co.uk
                      </p>
                    </div>
                    {/* <div className="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6">
              <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd"></path>
            </svg>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">Open Support Ticket </p>
          </div> */}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                  <form>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Your Phone"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        rows="6"
                        placeholder="Your Message"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="
                        w-full
                        text-white
                        bg-backgroundColor
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                  <div>
                    <span className="absolute -top-10 -right-9 z-[-1]">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                    <span className="absolute -right-10 top-[90px] z-[-1]">
                      <svg
                        width="34"
                        height="134"
                        viewBox="0 0 34 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="31.9993"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 31.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 31.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 31.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 31.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 31.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 31.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 31.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 31.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 31.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 31.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 17.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 17.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 17.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 17.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 17.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 17.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 17.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 17.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 17.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 17.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 2.66536 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 2.66536 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 2.66536 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 2.66536 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 2.66536 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 2.66536 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 2.66536 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 2.66536 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 2.66536 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 2.66536 1.66665)"
                          fill="#13C296"
                        />
                      </svg>
                    </span>
                    <span className="absolute -left-7 -bottom-7 z-[-1]">
                      <svg
                        width="107"
                        height="134"
                        viewBox="0 0 107 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="104.999"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 104.999 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 104.999 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 104.999 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 104.999 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 104.999 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 104.999 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 104.999 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 104.999 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 104.999 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 104.999 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 90.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 90.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 90.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 90.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 90.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 90.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 90.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 90.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 90.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 90.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 75.6654 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 31.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 75.6654 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 31.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 75.6654 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 31.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 75.6654 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 31.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 75.6654 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 31.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 75.6654 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 31.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 75.6654 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 31.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 75.6654 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 31.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 75.6654 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 31.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 75.6654 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 31.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 60.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 17.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 60.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 17.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 60.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 17.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 60.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 17.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 60.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 17.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 60.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 17.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 60.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 17.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 60.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 17.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 60.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 17.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 60.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 17.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 46.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 2.66536 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 46.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 2.66536 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 46.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 2.66536 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 46.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 2.66536 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 46.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 2.66536 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 46.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 2.66536 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 46.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 2.66536 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 46.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 2.66536 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 46.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 2.66536 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 46.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 2.66536 1.66665)"
                          fill="#13C296"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MainContact;
