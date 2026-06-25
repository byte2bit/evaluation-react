"use client";

import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    /** Controla a visibilidade do modal. */
    isOpen: boolean;
    /** Função de callback para fechar o modal. */
    onClose: () => void;
    /** Função de callback para a ação de "enviar". */
    onSend: () => void;
    /** Título a ser exibido no cabeçalho do modal. */
    title?: string;
    /** Conteúdo a ser renderizado dentro do corpo do modal. */
    children: ReactNode;
}

export default function Modal({
    isOpen,
    onClose,
    onSend,
    title = "Revisão",
    children,
}: ModalProps) {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    if (!isOpen) {
        return null;
    }

    return createPortal(
        // Overlay
        <div
            id="large-modal-overlay"
            tabIndex={-1}
            aria-hidden="false"
            onClick={onClose}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 md:inset-0 h-full"
        >
            <div
                className="relative w-full max-w-7xl max-h-full"
                onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal o feche
            >
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow-sm">
                    {/* Modal header */}
                    <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t border-gray-200 bg-gray-300">
                        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 md:p-5 space-y-4">{children}</div>
                    {/* Modal footer */}
                    <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b">
                        <button
                            type="button"
                            onClick={onSend}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Enviar
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}