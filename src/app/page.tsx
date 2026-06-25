
'use client'
import ListCheckboxes from "@/features/listCheckBoxes/ListCheckboxes";
import RatingBox from "@/features/homePage/components/RatingBox";

export default function Page() {
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
          ratingValue={3.5}
          onRatingChange={(rating) => console.log("Qualidade:", rating)}
        />

        <RatingBox
          title="Prazo"
          subtitle={"Com relação ao atendimento no prazo das solicitações efetuadas ao Posto de Serviço, qual seu nível de satisfação?"}
          id="obs_prazo"
          ratingValue={3.5}
          onRatingChange={(rating) => console.log("Prazo:", rating)}
        />

        <RatingBox
          title="Disponibilidade"
          subtitle={"Como você avalia a disponibilidade do Posto de Serviço no horário de serviço?"}
          id="obs_dispon"
          ratingValue={3.5}
          onRatingChange={(rating) => console.log("Disponibilidade:", rating)}
        />

        <RatingBox
          title="Responsabilidade"
          subtitle={"Com relação a responsabilidade de profissionais atendendo ao posto de serviço, qual seu nível de satisfação?"}
          id="obs_respon"
          ratingValue={3.5}
          onRatingChange={(rating) => console.log("Responsabilidade:", rating)}
        />
      </div>
    </div>
  );
}
