import { useInView } from "react-intersection-observer";

const product=[{
    content:"A comprehensive, integrated solution that streamlines hospital and clinic management, from patient registration to billing and reporting",
    name:'eHealth Management System (eHMS)',
    image:'https://show.moxcreative.com/techit/wp-content/uploads/sites/19/elementor/thumbs/software-engineers-working-on-project-and-programming-in-company-pgrqoj4p2w8ddsuo5r2pdrwmsa39amzmtv5c54i1fc.jpg'
},
{
    content:"A secure and reliable telemedicine solution that enables healthcare providers to offer virtual consultations to patients from anywhere.",
    name:'TeleConsult Platform',
    image:"https://show.moxcreative.com/techit/wp-content/uploads/sites/19/elementor/thumbs/workplace-of-software-engineer-pgrqoppkeqhdn2l43bx3d88uxz6tsipr6rpqi28a7s.jpg"
},
{
    content:"An intuitive app for both patients and healthcare providers to monitor health metrics, track medications, and set reminders for appointments and treatments",
    name:"Mobile Health Tracker",
    image:"https://show.moxcreative.com/techit/wp-content/uploads/sites/19/elementor/thumbs/smartphone-cellphone-networking-telephone-concept-pgrqomw1u8dio8p7jsp7nqyh5tkq5fek6dra28cgqg.jpg"
},
{
    content:"A suite of AI-powered tools that assist medical professionals in diagnosing diseases, interpreting lab results, and identifying treatment options.",
    name:"AI Diagnostics Suite",
    image:"https://show.moxcreative.com/techit/wp-content/uploads/sites/19/elementor/thumbs/computer-engineer-holds-pc-motherboard-pgrqol0dgkay10rxurvyirfjz1tzq173i4gb3of92w.jpg"
}
]

function TechContent() {
    const {ref , inView}=useInView({
        threshold:0.1,
        triggerOnce:true
    })
    return (  <>
        <div className="w-3/4 m-auto py-24  ">
        <div className=" m-auto text-center max-w-3xl py-16">
            <h6 className="text-backgroundColor max-w-4xl mt-5 m-auto text-sm py-5 tracking-wider font-bold uppercase">Our product</h6>
            <h1 className="text-3xl    font-bold tracking-wider">See what we offer</h1>
            <h6 className="mt-10 font text-sm text-gray-500 leading-loose tracking-wider  ">
        Murphy eHealth Technologies is proud to offer a range of innovative products
        designed to enhance healthcare delivery</h6></div>
        <section className="py-14">

           <div ref={ref} className={`grid lg:grid-cols-2 gap-20 ${inView? "slide-in-bottom" :" "}`}>
            {product.map((p,id)=>(
                <div key={id} className="services  ">
                    <div><img className=" w-full" src={p.image} alt="" /></div>
                    <div className="px-8 py-10 text-center">
                        <div className="py-2 text-lg font-semibold uppercase tracking-wider text-backgroundColor">{p.name}</div>
                        <div className="text-gray-500 tracking-wider leading-relaxed">{p.content}</div>
                        {/* <div className="py-5 text-backgroundColor font-bold"><button className="">Learn More</button></div> */}
                    </div>
                </div>
            ))}
           </div>
        </section>
        </div>
        </> );
}


export default TechContent;