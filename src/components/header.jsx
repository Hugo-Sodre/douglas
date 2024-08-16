import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import Douglas from "./sections/douglas"; // Certifique-se de que este componente está correto

const products = [
  { name: "Educação", path: "/educacao" },
  { name: "Transparência", path: "/transparencia" },
  { name: "Desburocratização", path: "/desburocratizacao" },
  { name: "Mobilidade", path: "/mobilidade" },
  { name: "Projetos de Lei", path: "/projetos-de-lei" },
  { name: "Releases", path: "/releases" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#094A24] shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-around p-6 lg:px-8"
        aria-label="Global"
      >
        <Link to="/" className="flex items-center">
          <img
            fetchpriority="high"
            width={400}
            height={156}
            alt="marcelatrópia"
            className="w-full max-w-[200px] h-[50px]"
            src="./logodouglas.png"
            sizes="(max-width: 800px) 100vw, 800px"
            data-rocket-lazy-bg-d6b2f2a8-5b33-4573-89b0-13b07cec684b="loaded"
          />
        </Link>

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
          <Link to="/" className="font-semibold leading-6 text-white">
            Início
          </Link>

          <Link to="/douglas" className="font-semibold leading-6 text-white hover:text-white">
            Douglas
          </Link>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 font-semibold leading-6 text-white hover:text-white focus:outline-none">
              Mandato
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                  <Link
                    key={item.name}
                    to={item.path}
                    className="group relative flex items-center rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link to="/lideranca" className="font-semibold leading-6 text-white hover:text-purple-800/80">
            Liderança
          </Link>

          <Link to="/noticias" className="font-semibold leading-6 text-white hover:text-purple-800/80">
            Notícia
          </Link>

          <Link to="/prestacao-de-contas" className="font-semibold leading-6 text-white hover:text-purple-800/80">
            Prestação de contas
          </Link>
        </Popover.Group>

        <Link to="/receber-chave" className="hidden lg:flex font-bold text-white bg-purple-800/80 rounded-md p-4 px-6 leading-4">
          Receber <br /> A Chave
        </Link>
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
                <Link to="/" className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-cyan-600 hover:bg-gray-50">
                  Início
                </Link>
                <Link to="/marcela" className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50">
                  Marcela
                </Link>
                <Link to="/releases" className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50">
                  Releases
                </Link>
                <Link to="/projetos-de-lei" className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50">
                  Projetos de Lei
                </Link>
                <Link to="/noticias" className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50">
                  Notícias
                </Link>
                <Link to="/programa-de-lideranca" className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50">
                  Programa de Liderança
                </Link>
                <Link to="/lideranca" className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50">
                  Liderança
                </Link>
                <Link to="/prestacao-de-contas" className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50">
                  Prestação de Contas
                </Link>
                <Link to="/transparencia" className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50">
                  Transparência
                </Link>
                <Link to="/educacao" className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50">
                  Educação
                </Link>
                <Link to="/desburocratizacao" className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50">
                  Desburocratização
                </Link>
                <Link to="/mobilidade" className="-mx-3 block rounded-lg pl-5 text-lg font-bold leading-7 text-orange-500 hover:bg-gray-50">
                  Mobilidade
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;
