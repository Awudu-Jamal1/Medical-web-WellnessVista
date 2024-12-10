import React from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressBar = () => {
    const {ref , inView}=useInView({
        threshold:0.1,
        triggerOnce:true
    })
  return (
    <div ref={ref} className={`${inView? "slide-in-right" :" "}`}>
      <section className=" m-auto  rounded-md  ">
        <section className=" gap-x-6">
          {[
            {
              name: 'Technical Skill',
              score: 8.0,
              color: 'red',
              percentage: 80,
            },
            {
              name: 'Creativity',
              score: 8.5,
              color: 'red',
              percentage: 85,
            },
            {
              name: 'Teamwork',
              score: 9.0,
              color: 'green',
              percentage: 90,
            },
            
          ].map((item, index) => (
            <div
              key={index}
              className={` py-3 ${index > 0 ? 'border-t border-gray-100' : ''}`}
            >
              
              <div className="space-y-3 flex-1">
                <div className="flex items-center">
                  <h4 className=" font-semibold text-md mr-auto text-gray-600 flex items-center">
                    {item.name}
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg> */}
                  </h4>
                  <span
                    className={`px-2 py-1 rounded-lg bg-${item.color}-50 text-gray-600 font-semibold text-xs`}
                  >
                    {item.score} / 10
                  </span>
                </div>
                <div className="overflow-hidden bg-blue-50 h-4 rounded-md w-full">
                  <span
                    className="h-full bg-backgroundColor w-full block rounded-md"
                    style={{ width: `${item.percentage}%` }}
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </section>
        
      </section>
    </div>
  );
};

export default ProgressBar;
