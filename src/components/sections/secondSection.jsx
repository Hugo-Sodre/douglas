import { NewspaperIcon } from "@heroicons/react/24/outline";
import Card from "../card";

export default function SecondSection() {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-8">
      <span className="text-3xl font-bold text-orange-500">
        Fique por dentro!
      </span>

      <div className="w-full flex flex-col items-center justify-center gap-8 px-4 lg:flex-row lg:items-start">
        <Card
          title={
            "Construção de Conjuntos Habitacionais no Castelo: Solução ou Novo Problema?"
          }
          text={
            "A Prefeitura de BH anunciou a construção de conjuntos habitacionais em três áreas do Castelo, para combater o déficit habitacional. Mas essa medida não está levando em conta a criação de novos problemas, enquanto existem soluções mais simples para a falta de moradia na cidade."
          }
          to={"#"}
        
        />

        <Card
          title={
            "Emendas Impositivas em Belo Horizonte: investimentos que impactam a cidade"
          }
          text={
            "As emendas impositivas são uma importante ferramenta de alocação de recursos públicos para áreas prioritárias na cidade de Belo Horizonte. São parcelas do orçamento municipal"
          }
          to={"#"}
          
        />

        <Card
          title={
            "Vereadora Marcela Trópia reapresenta projeto de lei do bônus tecnológico para impulsionar inovação na cidade"
          }
          text={
            "No início deste ano, a vereadora Marcela Trópia retomou uma iniciativa crucial para o desenvolvimento tecnológico e econômico da cidade."
          }
          to={"#"}
         
        />
      </div>

      <button className="w-fit flex items-center gap-2 font-bold text-white bg-orange-500 rounded-md p-4 px-6 leading-4">
        <NewspaperIcon className="w-5 h-5" />
        Ver mais novidades
      </button>
    </div>
  );
}
