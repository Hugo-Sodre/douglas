export default function ThirdSection() {
  return (
    <div
      className="w-full relative min-h-[200px] bg-contain bg-[#f36f21] lg:min-h-[500px] flex flex-col 
      items-center gap-8 px-8
      bg-[url('https://marcelatropia.com.br/wp-content/uploads/2022/03/marcelatropia.com.br-novo-inicio-whatsapp.webp')]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full lg:absolute top-0 fill-white"
      >
        <path
          className="elementor-shape-fill"
          d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"
        />
      </svg>

      <img
        loading="lazy"
        decoding="async"
        width={924}
        height={1071}
        alt="Marcela"
        data-srcset="https://marcelatropia.com.br/wp-content/webp-express/webp-images/uploads/2022/03/marcelatropia.com.br-novo-inicio-marcela-whatsapp.png.webp 924w,  https://marcelatropia.com.br/wp-content/webp-express/webp-images/uploads/2022/03/marcelatropia.com.br-novo-inicio-marcela-whatsapp-777x900.png.webp 777w,  https://marcelatropia.com.br/wp-content/webp-express/webp-images/uploads/2022/03/marcelatropia.com.br-novo-inicio-marcela-whatsapp-768x890.png.webp 768w"
        data-src="https://marcelatropia.com.br/wp-content/webp-express/webp-images/uploads/2022/03/marcelatropia.com.br-novo-inicio-marcela-whatsapp.png.webp"
        data-sizes="(max-width: 924px) 100vw, 924px"
        className="-mb-8 lg:mb-0 lg:absolute bottom-0 max-w-[250px] lg:max-w-md lg:mx-0 lg:left-[10%] "
        src="https://marcelatropia.com.br/wp-content/webp-express/webp-images/uploads/2022/03/marcelatropia.com.br-novo-inicio-marcela-whatsapp.png.webp"
        sizes="(max-width: 924px) 100vw, 924px"
        srcSet="https://marcelatropia.com.br/wp-content/webp-express/webp-images/uploads/2022/03/marcelatropia.com.br-novo-inicio-marcela-whatsapp.png.webp 924w,  https://marcelatropia.com.br/wp-content/webp-express/webp-images/uploads/2022/03/marcelatropia.com.br-novo-inicio-marcela-whatsapp-777x900.png.webp 777w,  https://marcelatropia.com.br/wp-content/webp-express/webp-images/uploads/2022/03/marcelatropia.com.br-novo-inicio-marcela-whatsapp-768x890.png.webp 768w"
      />

      <div className="w-full lg:absolute lg:left-[20%] lg:top-2/4 -translate-y-2/4 flex flex-col items-center gap-8">
        <p className="w-fit px-4 text-3xl bg-orange-500 text-white text-center font-bold lg:text-orange-500 lg:text-[40px] lg:bg-transparent">
          Problemas na <br /> cidade? Me mande <br /> no Whatsapp!
        </p>

        <button className="w-fit flex items-center gap-2 font-bold text-white bg-green-500 rounded-md p-4 px-6 leading-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
          Ver mais novidades
        </button>
      </div>
    </div>
  );
}
