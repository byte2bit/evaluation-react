interface PostData {
    nota_qualidade: string | number;
    obs_qualidade?: string;
    obs_prazo?: string;
    nota_dispon: string | number;
    obs_dispon?: string;
    nota_respon: string | number;
    obs_respon?: string;
}

interface TabelaResumoModalProps {
    avaliacao: string | number;
    nivel: string;
    desc: string;
    postData: PostData;
    iQualidade?: boolean;
    iQual?: string;
    iDispon?: boolean;
    iDisp?: string;
}

export default function TabelaResumoModal({
    avaliacao,
    nivel,
    desc,
    postData,
    iQualidade,
    iQual,
    iDispon,
    iDisp,
}: TabelaResumoModalProps) {
    return (
        <div id="dados">
            <h2 className="mb-4 font-bold">Dados avaliados:</h2>
            <table className="table-fixed text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-3 py-1">Item</th>
                        <th scope="col" className="px-3 py-1">Nota / Avaliação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                        <th scope="row" className="px-3 py-1 font-light text-sm text-gray-900 whitespace-nowrap">
                            Avaliação Média
                        </th>
                        <td className="px-3 py-1 text-sm">{avaliacao}</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                        <th scope="row" className="px-3 py-1 font-light text-sm text-gray-900 whitespace-nowrap">
                            Nível de Serviço
                        </th>
                        <td className="px-3 py-1 text-sm">{nivel}</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                        <th scope="row" className="px-3 py-1 font-light text-sm text-gray-900 whitespace-nowrap">
                            Desconto Percentual na Medição
                        </th>
                        <td className="px-3 py-1 text-sm">{desc}</td>
                    </tr>
                    {/* Opcionais */}
                    <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                        <th scope="row" className="px-3 py-1 font-light text-sm text-gray-900">
                            Como você avalia a qualidade do Serviço Prestado?
                        </th>
                        <td className="px-3 py-1 text-sm">{postData.nota_qualidade}</td>
                    </tr>

                    {postData.obs_qualidade && (
                        <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                            <th scope="row" className="px-3 py-1 font-light text-sm text-gray-900">
                                Observações de Qualidade
                            </th>
                            <td className="px-3 py-1 text-sm">{postData.obs_qualidade}</td>
                        </tr>
                    )}

                    {iQualidade && iQual && (
                        <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                            <th scope="row" className="px-3 py-1 font-light text-sm text-gray-900">
                                Itens de qualidade não atendidos
                            </th>
                            <td className="px-3 py-1">
                                <span className="text-sm" dangerouslySetInnerHTML={{ __html: iQual }} />
                            </td>
                        </tr>
                    )}

                    {postData.obs_prazo && (
                        <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                            <th scope="row" className="px-3 py-1 font-light text-sm text-gray-900">
                                Com relação ao atendimento no prazo das solicitações efetuadas ao Posto de Serviço, qual seu nível de satisfação?
                            </th>
                            <td className="px-3 py-1 text-sm">{postData.obs_prazo}</td>
                        </tr>
                    )}

                    <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                        <th scope="row" className="px-3 py-1 font-light text-sm text-gray-900">
                            Como você avalia a disponibilidade do Posto de Serviço no horário de serviço?
                        </th>
                        <td className="px-3 py-1 text-sm">{postData.nota_dispon}</td>
                    </tr>

                    {postData.obs_dispon && (
                        <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                            <th scope="row" className="px-3 py-1 font-light text-sm text-gray-900">
                                Observações de Disponibilidade:
                            </th>
                            <td className="px-3 py-1 text-sm">{postData.obs_dispon}</td>
                        </tr>
                    )}

                    {iDispon && iDisp && (
                        <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                            <th scope="row" className="px-3 py-1 font-light text-sm text-gray-900">
                                Itens de disponibilidade não atendidos
                            </th>
                            <td className="px-3 py-1">
                                <span className="text-sm" dangerouslySetInnerHTML={{ __html: iDisp }} />
                            </td>
                        </tr>
                    )}

                    <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                        <th scope="row" className="px-3 py-1 font-light text-sm text-gray-900">
                            Com relação a responsabilidade de profissionais atendendo ao posto de serviço, qual seu nível de satisfação?
                        </th>
                        <td className="px-3 py-1 text-sm">{postData.nota_respon}</td>
                    </tr>

                    {postData.obs_respon && (
                        <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                            <th scope="row" className="px-3 py-1 font-light text-sm text-gray-900">
                                Observações de Responsabilidade
                            </th>
                            <td className="px-3 py-1 text-sm">{postData.obs_respon}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}