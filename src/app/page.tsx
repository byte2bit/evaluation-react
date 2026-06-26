
'use client'
import { useState } from "react";
import ListCheckboxes from "@/features/listCheckBoxes/ListCheckboxes";
import RatingBox from "@/features/homePage/components/RatingBox";
import Modal from "@/features/homePage/components/Modal";
import TabelaResumoModal from "@/features/homePage/components/TabelaResumoModal";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock de dados que viriam do estado da aplicação
  const [selectedColabs] = useState(['Profissional A', 'Profissional B']);

  // Estado elevado para gerenciar as avaliações e observações
  const [ratings, setRatings] = useState({
    qualidade: 3.5,
    prazo: 4,
    disponibilidade: 5,
    responsabilidade: 3,
  });

  const [observations, setObservations] = useState({
    obs_qualidade: "",
    obs_prazo: "",
    obs_dispon: "",
    obs_respon: "",
  });

  const handleRatingChange = (category: keyof typeof ratings, rating: number) => {
    setRatings(prev => ({ ...prev, [category]: rating }));
    console.log(`${category}: ${rating}`);
  };

  const handleObsChange = (category: keyof typeof observations, obs: string) => {
    setObservations(prev => ({ ...prev, [category]: obs }));
  };

  const handleSave = () => {
    console.log("Salvando dados...");
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex text-xs">
      <div className="bg-zinc-200 -mt-4 -ms-4 me-4 p-4">
        <ListCheckboxes />
      </div>
      <div className="flex flex-col md:flex-nowrap md:flex-row flex-wrap gap-4">

        <RatingBox
          title="Qualidade"
          subtitle={"Como você avalia a qualidade do Serviço Prestado?"}
          id="obs_qualidade"
          ratingValue={ratings.qualidade}
          obsValue={observations.obs_qualidade}
          onRatingChange={(rating) => handleRatingChange('qualidade', rating)}
          onObsChange={(obs) => handleObsChange('obs_qualidade', obs)}
        />

        <RatingBox
          title="Prazo"
          subtitle={"Com relação ao atendimento no prazo das solicitações efetuadas ao Posto de Serviço, qual seu nível de satisfação?"}
          id="obs_prazo"
          ratingValue={ratings.prazo}
          obsValue={observations.obs_prazo}
          onRatingChange={(rating) => handleRatingChange('prazo', rating)}
          onObsChange={(obs) => handleObsChange('obs_prazo', obs)}
        />

        <RatingBox
          title="Disponibilidade"
          subtitle={"Como você avalia a disponibilidade do Posto de Serviço no horário de serviço?"}
          id="obs_dispon"
          ratingValue={ratings.disponibilidade}
          obsValue={observations.obs_dispon}
          onRatingChange={(rating) => handleRatingChange('disponibilidade', rating)}
          onObsChange={(obs) => handleObsChange('obs_dispon', obs)}
        />

        <RatingBox
          title="Responsabilidade"
          subtitle={"Com relação a responsabilidade de profissionais atendendo ao posto de serviço, qual seu nível de satisfação?"}
          id="obs_respon"
          ratingValue={ratings.responsabilidade}
          obsValue={observations.obs_respon}
          onRatingChange={(rating) => handleRatingChange('responsabilidade', rating)}
          onObsChange={(obs) => handleObsChange('obs_respon', obs)}
        />
      </div>

      {/* Botão para abrir o modal */}
      <button onClick={handleOpenModal} className="bg-blue-500 text-white p-2 rounded self-start">
        Abrir Resumo
      </button>

      <Modal isOpen={isModalOpen} onSend={handleSave} onClose={handleCloseModal}>
        <div className="modal-dados flex">
          <div className="flex flex-col">
            <h2 className="mb-4 font-bold">Colaborador(es) selecionado(s):</h2>
            <div className="flex flex-col flex-wrap md:max-h-150 md:max-w-230 overflow-auto me-12">
              <ul className="text-sm">
                {selectedColabs.map((colab, index) => (
                  <li className="me-4" key={index}>
                    {index + 1} - {colab}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <TabelaResumoModal
            avaliacao={3.8} // Mock
            nivel="Bom" // Mock
            desc="5%" // Mock
            postData={{
              nota_qualidade: ratings.qualidade,
              obs_qualidade: observations.obs_qualidade,
              nota_dispon: ratings.disponibilidade,
              obs_dispon: observations.obs_dispon,
              nota_respon: ratings.responsabilidade,
              obs_respon: observations.obs_respon,
              obs_prazo: observations.obs_prazo,
            }}
          />
        </div>
      </Modal>
    </div>
  );
}
