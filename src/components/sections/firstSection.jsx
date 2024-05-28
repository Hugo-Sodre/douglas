export default function FirstSection() {
  return (
    <div className="w-full max-h-[700px] overflow-hidden relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="fill-white absolute bottom-0"
      >
        <path
          className="elementor-shape-fill"
          d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
        />
      </svg>

      <img
        src="https://marcelatropia.com.br/wp-content/uploads/2022/04/background-topo-desktop-1-scaled.jpg"
        className="w-full h-full min-h-[400px] object-cover"
        alt="Marcela"
      />

      <div className="flex flex-col gap-1 absolute bottom-[15%] left-[5%] lg:gap-4">
        <span className="text-3xl font-bold bg-orange-500 text-white w-fit p-1 lg:text-[80px] lg:p-4">
          A vereadora
        </span>
        <span className="text-3xl font-bold bg-orange-500 text-white w-fit p-1 lg:text-[80px] lg:p-4">
          que defende a
        </span>
        <span className="text-3xl font-bold bg-white text-orange-500 w-fit p-1 lg:text-[80px] lg:p-4 lg:leading-[70px]">
          liberdade <br /> em BH!
        </span>
      </div>
    </div>
  );
}
