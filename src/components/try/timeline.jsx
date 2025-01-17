import React from 'react';

const ParallaxComponent = () => {
  return (
    <div>
      {/* Parallax Section 1 */}
      <div className="min-h-screen flex justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
        <h1 className="font-black text-6xl">Parallax</h1>
      </div>

      {/* Sample Section */}
      <div className="p-10">
        <h2 className="font-bold text-4xl">Sample Section</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam eveniet molestias veniam, inventore sint voluptates nam provident impedit laborum ipsa vel quos amet laboriosam dolorum suscipit! Nihil eos repellendus blanditiis repellat laboriosam veniam quod maxime ab! Ea eveniet doloremque, excepturi totam, et molestias dicta accusamus quibusdam quas sunt inventore!
        </p>
      </div>

      {/* Parallax Section 2 */}
      <div className="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed"></div>

      {/* Parallax Section 3 */}
      <div className="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover"></div>
    </div>
  );
};

export default ParallaxComponent;
