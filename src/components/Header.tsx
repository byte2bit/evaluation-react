import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 z-10">
            <div className="flex justify-between items-center p-2 bg-white border-gray-200 dark:bg-gray-900">
                <Image src="/logo.png" alt="Logo Núcleo" width={107} height={24} />
                <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-xl font-semibold whitespace-nowrap font-white dark:text-white">
                        Avaliação de Nível de Serviço</span>
                </Link>
                <div className="flex items-center gap-3">
                    <svg className="ms-1 h-5 w-5 fill-white hover:fill-yellow-200" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                    </svg>
                    <div className="text-white me-6">
                        <p className="mb-1 demandante">{ /* demandantes.nome */ }</p>
                        <p className="demandante">{/* { demandantes.email } */}</p>
                        
                        <p className="mb-1 hidden"><b>Nome: </b>{/* { dados.nome }*/} </p>
                        <p className="hidden"><b>Email: </b>{/* { dados.email } */}</p>
                    </div>
                </div>
            </div>
            <nav className="bg-gray-600 text-white">
                <div className="flex flex-wrap items-center justify-between 2xl:mx-auto px-4">

                    <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Abrir menu principal</span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul
                            className="text-sm flex flex-col p-4 md:px-0 md:py-2 mt-4 border  text-white rounded-lg md:items-center md:justify-center md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <span className="block px-3 rounded-sm md:bg-transparent hover:text-yellow-200"
                                    aria-current="page">
                                    <Link href="/">
                                        <svg className="ms-1 h-5 w-5 fill-white hover:fill-yellow-200" viewBox="0 0 576 512">
                                            <path
                                                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1v16.2c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1-1.4.1-2.8.1-4.2.1L416 512h-24c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.7h-32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24z" />
                                        </svg>
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <span className="block px-3 rounded-sm md:bg-transparent hover:text-yellow-200"
                                    aria-current="page">
                                    <Link href="/registros">Registros</Link>
                                </span>
                            </li>
                            <li>
                                <span className="block px-3 text-white rounded-sm md:border-0 hover:text-yellow-200  ">
                                    <Link href="/colabs">Lista de profissionais</Link>
                                </span>
                            </li>
                            <li v-if="admin">
                                <span className="block px-3 text-white rounded-sm  md:border-0 hover:text-yellow-200  ">
                                    <Link href="/inserir">Inserir profissional</Link>
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
}