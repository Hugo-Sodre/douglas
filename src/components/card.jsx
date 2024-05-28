export default function Card({ src, title, text, to }) {
  return (
    <a
      href={to}
      className="group w-full h-[400px] max-w-xs bg-white rounded-lg shadow-md overflow-hidden duration-300 hover:shadow-2xl"
    >
      <div className="w-full  relative">
        <img
          className="w-full h-full object-cover aspect-video"
          src={src}
          alt="Card representation"
        />

        <div
          className="absolute top-0 w-full h-full bg-gradient-to-b 
          from-slate-50/0 to-black/60 duration-300"
        ></div>
      </div>

      <div className="p-5">
        <div>
          <h5 className="mb-2 text-lg font-bold leading-5 text-gray-900">
            {title}
          </h5>
        </div>
        <p className="mb-3 text-xs font-normal text-gray-700">{text}</p>
      </div>
    </a>
  );
}
