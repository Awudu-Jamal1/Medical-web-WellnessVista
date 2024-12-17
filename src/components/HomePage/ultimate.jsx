function UltimatePage() {
    return (
        <>
            <div className="relative mt-24 bg-gray-200 text-gray-500 grid justify-evenly grid-cols-2">
                <div className="bg-gray-200 py-10 ">
                    <div className="max-w-xl border text-right">
                        <h1 className="text-5xl leading-normal tracking-wide">
                            Ready For Awesome Project With Us?
                        </h1>
                        <p className="text-xl py-3 text-backgroundColor">
                            Let's Talk About Your Project.
                        </p>
                        <div>
                            <button className="text-sm uppercase tracking-widest font-bold mt-4 py-3 px-8 border text-backgroundColor border-backgroundColor">
                                Contact us
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    {/* Image with overflow beyond the div */}
                    <img 
                        className="absolute top-0  left-0  max-h-[350px] object-cover transform scale-105"
                        src="https://show.moxcreative.com/techit/wp-content/uploads/sites/19/2021/11/man-with-a-laptop-1536x1024.jpg" 
                        alt="Man with a laptop"
                    />
                </div>
            </div>
        </>
    );
}

export default UltimatePage;
