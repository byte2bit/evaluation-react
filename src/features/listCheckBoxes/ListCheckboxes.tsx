'use client'

import { useState } from "react";

export default function ListCheckboxes() {
    // Mock de estados que antes vinham do Vue (colabStore, colabs, selectedColabs)
    // Ajuste depois para usar suas Props, Context API ou requisições
    const [isLoading, setIsLoading] = useState(false);
    const [colabs, setColabs] = useState<{ colab: string }[]>([
        { colab: 'Profissional A' },
        { colab: 'Profissional B' },
    ]);
    const [selectedColabs, setSelectedColabs] = useState<string[]>([]);

    const allCheckBoxesSelected = colabs.length > 0 && selectedColabs.length === colabs.length;

    const toggleAllSelection = () => {
        if (allCheckBoxesSelected) {
            setSelectedColabs([]);
        } else {
            setSelectedColabs(colabs.map(c => c.colab));
        }
    };

    const toggleColabSelection = (colabName: string) => {
        if (selectedColabs.includes(colabName)) {
            setSelectedColabs(selectedColabs.filter(c => c !== colabName));
        } else {
            setSelectedColabs([...selectedColabs, colabName]);
        }
    };

    
    return (
        <div className="w-[268]">
            {/* equivalente ao v-if(variavel) no Vue. É um operador ternário (var ? sim : não) */}
            {isLoading ? (
                <div className="flex justify-center items-center py-8">
                    <span>Carregando lista de colaboradores...</span>
                </div>
            ) : (
                <>
                        <div className="mb-4">
                            {/* onChange é obrigatório em inputs para bind bidirecional, 
                            assim como value, ou checked nesse caso*/}
                        <input
                            type="checkbox"
                            id="toggle-all"
                            onChange={toggleAllSelection}
                            checked={allCheckBoxesSelected}
                            className="w-3 h-3 accent-pink-500"
                        />
                        <label htmlFor="toggle-all" className="ms-2 font-bold cursor-pointer">Todos</label>
                    </div>

                        {/* for do Vue é .map no React */}
                    {colabs.map((colab, index) => (
                        <div key={index} className="line-colabs my-2">
                            {/* checked e onChange obrigatórios */}
                            <input
                                type="checkbox"
                                id={`checkbox-${colab.colab}`}
                                className="w-3 h-3 accent-pink-500"
                                checked={selectedColabs.includes(colab.colab)}
                                onChange={() => toggleColabSelection(colab.colab)}
                            />
                            <label htmlFor={`checkbox-${colab.colab}`} className="ms-2 cursor-pointer">
                                {index + 1} - {colab.colab}
                            </label>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}
