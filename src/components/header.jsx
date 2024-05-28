import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "Educação",
  },
  {
    name: "Transparência",
  },
  {
    name: "Desburocratização",
  },
  {
    name: "Mobilidade",
  },
  {
    name: "Projetos de Lei",
  },
  {
    name: "Releases",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-orange-500 shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-around p-6 lg:px-8"
        aria-label="Global"
      >
        <img
          fetchpriority="high"
          width={800}
          height={156}
          alt="marcelatrópia"
          data-srcset="https://marcelatropia.com.br/wp-content/uploads/2022/03/marcelatropia.com.br-elementor-header-15866-logo-marcela-900x176.png 900w,   https://marcelatropia.com.br/wp-content/uploads/2022/03/marcelatropia.com.br-elementor-header-15866-logo-marcela-768x150.png 768w,   https://marcelatropia.com.br/wp-content/uploads/2022/03/marcelatropia.com.br-elementor-header-15866-logo-marcela.png 1200w"
          data-src="https://marcelatropia.com.br/wp-content/uploads/2022/03/marcelatropia.com.br-elementor-header-15866-logo-marcela-900x176.png"
          data-sizes="(max-width: 800px) 100vw, 800px"
          className="w-full max-w-[200px]"
          src="https://marcelatropia.com.br/wp-content/uploads/2022/03/marcelatropia.com.br-elementor-header-15866-logo-marcela-900x176.png"
          sizes="(max-width: 800px) 100vw, 800px"
          srcSet="https://marcelatropia.com.br/wp-content/uploads/2022/03/marcelatropia.com.br-elementor-header-15866-logo-marcela-900x176.png 900w,   https://marcelatropia.com.br/wp-content/uploads/2022/03/marcelatropia.com.br-elementor-header-15866-logo-marcela-768x150.png 768w,   https://marcelatropia.com.br/wp-content/uploads/2022/03/marcelatropia.com.br-elementor-header-15866-logo-marcela.png 1200w"
          data-rocket-lazy-bg-d6b2f2a8-5b33-4573-89b0-13b07cec684b="loaded"
        />

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-8">
          <a href="#" className="font-semibold leading-6 text-purple-800/80">
            Início
          </a>

          <a
            href="#"
            className="font-semibold leading-6 text-white hover:text-purple-800/80"
          >
            Marcela
          </a>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 font-semibold leading-6 text-white hover:text-purple-800/80 focus:outline-none">
              Mandato
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-full min-w-[150px] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 focus:outline-none">
                {products.map((item) => (
                  <span
                    key={item.name}
                    className="group relative flex items-center  rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    {item.name}
                  </span>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="#"
            className="font-semibold leading-6 text-white hover:text-purple-800/80"
          >
            Liderança
          </a>

          <a
            href="#"
            className="font-semibold leading-6 text-white hover:text-purple-800/80"
          >
            Noticia
          </a>

          <a
            href="#"
            className="font-semibold leading-6 text-white hover:text-purple-800/80"
          >
            Prestação de contas
          </a>
        </Popover.Group>

        <button className="hidden lg:flex font-bold text-white bg-purple-800/80 rounded-md p-4 px-6 leading-4">
          Receber <br /> A Chave
        </button>
      </nav>

      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-black/80" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white shadow-md max-w-[240px] px-4 py-2">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 ml-auto"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-1 py-2">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-cyan-600 hover:bg-gray-50"
                >
                  Início
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50"
                >
                  Marcela
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50"
                >
                  Releases
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50"
                >
                  Projetos de Lei
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50"
                >
                  Notícias
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50"
                >
                  Programa de Liderança
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50"
                >
                  Liderança
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50"
                >
                  Prestação de Contas
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50"
                >
                  Transparência
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50"
                >
                  Educação
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50"
                >
                  Desburocratização
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50"
                >
                  Mobilidade
                </a>
              </div>
              {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg pl-5.5 text-base font-bold leading-7 text-white hover:bg-gray-50"
                >
                  redes sociais
                </a>
              </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
