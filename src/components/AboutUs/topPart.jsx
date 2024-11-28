function TopPart() {
  return (
    <>
<div>
        <div className="h-[500px] hidden lg:block md:block relative ">
          <img
            className="absolute h-full w-full object-cover object-center"
            src="https://bucket.material-tailwind.com/magic-ai/bbe71871de8b4d6f23bb0f17a6d5aa342f3dea72677ba7238b18defa3741244d.jpg"
            alt="nature image"
          />
          <div className="absolute inset-0 h-full w-full bg-black/50"></div>
          <div className="absolute z-10 text-white top-[200px]  w-2/4  left-[400px]">
            <h1 className="text-7xl tracking-normal text-center py-5 font-bold leading-tight">
              Our Company
            </h1>
             <p className="text-xl text-center tracking-normal leading-normal text-gray-300 font-semibold capitalize">
             Health meets Technology
            </p> 
          </div>
        </div>
      </div>
    </>
  );
}

export default TopPart;
