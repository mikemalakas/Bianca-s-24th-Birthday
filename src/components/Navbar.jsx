export default function Navbar() {
  return (
    <>
      <div className=" mx-2 md:mx-auto bg-[#f5ead7] p-4  md:py-8 text-5xl my-10 lg:w-[1000px] text-center">
        <h1 className="text-[#4a0000] text-5xl md:text-7xl font-lora ">
          Happy Birthday, Bub!
        </h1>
        <p className="text-3xl text-[#680404] font-tangerine font-bold">
          hope you enjoy your day
        </p>
      </div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <a href="/" className="text-gray-300 hover:text-white">
              MyApp
            </a>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="/calendar" className="text-gray-300 hover:text-white">
                Calendar
              </a>
            </li>
            <li>
              <a href="/greetings" className="text-gray-300 hover:text-white">
                Greetings
              </a>
            </li>
            <li>
              <a href="/gallery" className="text-gray-300 hover:text-white">
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
