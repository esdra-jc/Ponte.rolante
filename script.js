const $=id=>document.getElementById(id),clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
/* ===== ESTUDO ===== */
const S=[
["1 – Objetivo",`<p>Estabelecer os critérios para armazenamento, manuseio e preservação de bobinas de aço produzidas na ArcelorMittal Vega em estoques externos, visando a <b>segurança dos colaboradores</b> e a <b>preservação da qualidade</b> dos produtos.</p>`],
["2 – Definições",`<ul><li><b>BQ:</b> Bobina Quente. <b>BQD:</b> Bobina a Quente Decapada.</li><li><b>Nível Zero:</b> bobina direta no berço. <b>Nível Um:</b> empilhada sobre a de nível zero. <b>Nível Dois:</b> empilhada sobre a de nível um.</li><li><b>Aspecto Z:</b> aplicação para peça exposta. <b>Aspecto X:</b> aplicação para peça interna.</li><li><b>SFS:</b> São Francisco do Sul.</li><li><b>Armazenamento:</b> ato de acondicionar a bobina em espera para o próximo processo ou cliente.</li><li><b>Estoque Intermediário:</b> localizado entre as linhas de produção, onde as bobinas aguardam fabricação conforme a programação das linhas.</li><li><b>Armazéns Externos:</b> local onde as bobinas são estocadas antes do envio ao destino final ou clientes para aplicação.</li><li><b>TFA (Termo de Falta e Avaria):</b> documento emitido pelo prestador de serviço de armazenagem, relatando anomalias no produto ou na embalagem no recebimento ou durante a movimentação.</li><li><b>Áreas de Logística:</b> Gerência de Logística de Produtos SFS, Gerência de Área de Operação Logística SFS, Gerência de Área de Logística e Serviço a Clientes e Gerência de Área de Operação Portuária.</li><li><b>Áreas de Assistência Técnica:</b> Gerência de Assistência Técnica e Gerência de Assistência Técnica Auto.</li><li><b>Sletter Tubular:</b> cinta de proteção externa aplicada na bobina após embalagem.</li><li><b>Slitter de Borracha:</b> cintas ou mantas de borracha, novas ou reutilizadas, usadas para proteção quando há necessidade de empilhamento ou durante o armazenamento de BQs.</li><li><b>Pup coil e baby coil:</b> partes de uma bobina processada/beneficiada na Vega, de peso muito pequeno, exceto sucata. Pup coil: 1 a 2 t. Baby coil: 2 a 4 t.</li><li><b>Sistema Informatizado:</b> sistema para tratativa e desdobramento das não conformidades registradas no Formulário 1.</li></ul>`],
["3 – Condições normativas",`<p>Para armazenagem de bobinas produzidas na Vega em armazéns externos, cabe às <b>Áreas de Logística</b> garantir, junto às empresas responsáveis pelos armazéns contratados, condições de armazenagem e manuseio que preservem a integridade física dos produtos e a segurança dos envolvidos, conforme os critérios deste padrão.</p>`],
["3.1.1 – Galpões",`<ul><li><b>3.1.1.1</b> Iluminação adequada às dimensões, com boa visualização e identificação das bobinas para manuseio correto e seguro e segurança dos usuários.</li><li><b>3.1.1.2</b> Telhados e laterais sem aberturas que permitam infiltração de chuva ou agentes que comprometam a integridade física do produto.</li><li><b>3.1.1.3</b> Piso pavimentado, nivelado e resistente ao peso da bobina especificado pelo contratante. É <b>proibido</b> estocar onde haja contato com contaminantes químicos ou físicos: produtos de limpeza de piso, areia, pó, sobras de madeira, plástico ou outros.</li><li><b>3.1.1.4</b> Áreas organizadas, limpas e identificadas em filas e posicionamento, para fácil localização das bobinas e, se possível, controle de umidade atmosférica.</li><li><b>3.1.1.5</b> Portões de fácil movimentação, mantendo o galpão praticamente isento de entrada de umidade e sempre fechado, evitando água, névoa de chuva e umidade.</li></ul><div class="note"><b>Nota:</b> para BQs, permite-se estocagem em pátio descoberto, desde que as condições de nivelamento e resistência do piso sejam atendidas.</div>`],
["3.1.2 – Berços",`<ul><li><b>3.1.2.1</b> Devem suportar o peso máximo contratado pela ArcelorMittal Vega ou pelo beneficiador, centro de serviço e/ou cliente.</li><li><b>3.1.2.2</b> Podem ser de aço (figura 1), madeira (figura 2) e/ou borracha (figura 3). A área de contato deve ser revestida com borracha ou outro material apropriado (polipropileno, poliestireno ou similar), evitando contato direto da bobina com a estrutura do berço. BQs podem ficar em dormentes, piso regular e limpo, com apoio de madeiras ou borrachas, para evitar danos e marcas.</li><li><b>3.1.2.3</b> Dimensões e alinhamentos adequados, evitando bobina em solo irregular, com inclinação que aumente o risco de queda, rolamento ou dano.</li><li><b>3.1.2.4</b> Sem materiais pontiagudos (pregos, parafusos) ou saliências que gerem avarias externas.</li><li><b>3.1.2.5</b> Por segurança, os berços das extremidades das filas devem ser <b>fixados no piso</b> ou as <b>três primeiras bobinas</b> de cada extremidade devem ser amarradas entre si. Podem ser usados limitadores no início e no fim da fila (colunas de aço ou outro sistema que garanta a fixação), evitando o deslocamento e o desmonte da pilha causado pela força gravitacional das bobinas dos níveis superiores sobre as inferiores (figura 03, item 3.3.9).</li></ul><div class="note"><b>Nota (BQs):</b> preferencialmente em berços apropriados; se não for possível, sobre dormentes de madeira apropriados, evitando marcas e abrasão nas partes externas. Dormentes e calços devem resistir ao peso das bobinas e não ter pontos salientes. Modelos sugeridos: berço de aço revestido com borracha (fig. 01), berço de madeira com vistas lateral e superior (fig. 02) e slitter ou mantas de borracha com calços de madeira ou aço (fig. 03).</div>`],
["3.2 – Equipamentos de manuseio e acessórios",`<ul><li><b>3.2.1 Equipamentos:</b> ponte rolante, empilhadeiras ou guindastes, desde que dimensionados para o manuseio, adequados aos pesos contratados e em condições de uso.</li><li><b>3.2.2 Acessórios:</b> tenaz eletromecânica, gancho tipo “C” e aríete, cintas de nylon ou poliéster. Recomenda-se revestimento de borracha, placas de celeron ou material semelhante, principalmente nas pontas. Devem estar dimensionados, em boas condições, sem pontas, bordas agudas ou defeito eletromecânico que gere risco de acidente ou dano.</li><li><b>3.2.3 Inspeção de uso:</b> inspecionar antes e durante a operação; uso somente dentro das especificações de segurança do fabricante. <b>Não é permitido</b> cabo de aço ou corrente sem revestimento, pois causam danos.</li><li><b>3.2.4 Mão de obra:</b> operadores habilitados e capacitados conforme os requisitos do equipamento, para evitar danos ao produto e riscos de acidentes.</li></ul>`],
["3.3 – Gerenciamento da armazenagem",`<ul><li><b>3.3.1 Rastreabilidade:</b> sistemática de controle de estocagem (eletrônica ou não), com bobinas facilmente identificadas e localizadas, para inventários ou visitas técnicas.</li><li><b>3.3.2 Área de segregação:</b> bobinas não conformes identificadas e segregadas para rápida localização. Recomenda-se não estocar bobinas da ArcelorMittal junto com as de outras empresas.</li><li><b>3.3.3 Identificação:</b> etiquetas individuais externas, nas laterais e na parte superior da embalagem. Etiquetas do sentido de enrolamento e cuidados ficam nas laterais. A etiqueta “PEÇA EXPOSTA” indica que se deve evitar empilhar sobre ela.</li><li><b>3.3.4 Conservação de embalagens e bobinas:</b> ao identificar não conformidade na embalagem, bobinas mal estocadas ou rompimento de fitas que exponha o produto às intempéries, acionar a Assistência Técnica e as Áreas de Logística e proceder conforme os critérios abaixo.</li><li><b>3.3.5 Avaria leve:</b> superficial na embalagem, sem dano à bobina. Sem reparo manual, sem remoção para área segregada, sem consenso com a Logística para envio ao cliente.</li><li><b>3.3.6 Avaria moderada:</b> superfície da bobina pode estar exposta, sem danos aparentes (molhamento, oxidação, amassamentos etc.). Exige reparo manual na embalagem; sem remoção para área segregada; sem consenso para envio.</li><li><b>3.3.7 Avaria grave:</b> avaria na embalagem e na superfície exposta. Exige remoção para área ou localização segregada para avaliação da Logística, que fará consenso com a Assistência Técnica ou Assistência Técnica Auto para definir o destino. Registrar no formulário de TFA, gerenciado pela logística, com detalhamento preferencialmente fotográfico.</li><li><b>3.3.8 Distância entre filas e bobinas:</b> armazenar em forma de filas, com distância recomendada de <b>80 cm</b> entre elas, facilitando manuseio, deslocamento de pessoas, identificação e remoção sem danos e reduzindo o risco de acidentes.</li><li><b>3.3.9 Empilhamento:</b> recomenda-se que não haja contato lateral direto entre bobinas do mesmo nível, evitando avarias e amassamentos. Os berços das extremidades devem ser fixados ao chão.</li></ul>`],
["Figura 03 – Fixação da fila (A, B, C)",`<ul><li><b>A:</b> berços das extremidades fixados no piso (item 3.3.9).</li><li><b>B:</b> as três bobinas das extremidades devem estar amarradas entre si.</li><li><b>C:</b> limitadores no início e no fim da fila, como colunas de aço ou outro sistema que garanta a fixação da pilha.</li></ul><p>Objetivo: melhor segurança no empilhamento, evitando problemas de marcas e o deslocamento das bobinas.</p>`],
["Empilhamento e Figura 04",`<ul><li>É permitido empilhar até o <b>nível dois</b> (níveis zero, um e dois), exceto em áreas portuárias, onde o empilhamento é feito no máximo até o <b>nível um</b> (zero e um).</li><li>Para empilhamento do nível zero ao nível dois, recomenda-se respeitar a ordem de <b>física decrescente de peso</b>: bobina de maior peso embaixo e de menor peso em cima.</li><li>É tolerável empilhar bobina de maior peso em nível superior, desde que ela <b>não ultrapasse 20%</b> do peso da bobina inferior.</li></ul><table><tr><th>Nível</th><th>Peso</th></tr><tr><td>Nível 2</td><td>= ou menor que P</td></tr><tr><td>Nível 1</td><td>Peso P + 20%</td></tr><tr><td>Nível 0</td><td>Peso P</td></tr></table><ul><li>Recomenda-se que os cuidados das tabelas correlacionadas às larguras possam ser respeitados para evitar quedas. O controle de estocagem e o modelo devem ser acordados e validados pelas Áreas de Logística.</li><li>Se houver necessidade de modificação do modelo para estufagem em navios, contrariando as regras deste padrão, deve haver consenso entre as Áreas de Logística, a Gerência de Metalurgia de Vega, a Gerência de Assistência Técnica e a Gerência de Assistência Técnica Auto; o representante do terminal e/ou armador avalia as condições propostas.</li><li>Recomenda-se o uso de <b>separadores</b> entre bobinas empilhadas, como tiras de borracha, para evitar contato direto entre elas.</li><li>Bobinas com etiqueta “PEÇA EXPOSTA” são destinadas a aplicações de alta exigência superficial; empilhar sempre no último nível, com o menor risco possível de marcas ou amassamento por estocagem sobre elas.</li><li>Quando os estoques demandarem manuseios frequentes de bobinas “Aspecto X”, é recomendável que as bobinas “Aspecto Z” sejam estocadas em filas específicas, evitando riscos e perdas por avarias.</li></ul>`],
["Prevenção de deslocamento das pilhas",`<ul><li>Os berços das extremidades das filas devem estar <b>fixos ao chão</b>, bloqueados ou mais reforçados, para evitar a movimentação involuntária das bobinas, podendo ser impulsionadas pelo peso das bobinas dos níveis superiores.</li><li>Por segurança, recomenda-se que não se faça empilhamento de bobinas nos primeiros berços das laterais dos pátios (filas que interfaceiam áreas de passagem de pessoas comumente nos pátios).</li><li>Caso não seja possível, devido às particularidades de cada pátio e situação, deve-se formar um <b>cinturão</b> conforme a figura 5: bobinas maiores nas extremidades da base, nas extremidades inferiores e laterais dos pátios, para evitar pressão excessiva sobre bobinas de níveis inferiores e rolamento, ovalização ou amassamentos indesejáveis em bobinas menores.</li><li>Se possível, aplicar <b>barreira de proteção</b> robusta para conter eventuais quedas ou deslocamentos de bobinas de níveis superiores.</li></ul>`],
["3.4 – Inspeções e auditoria",`<ul><li>Auditorias ou inspeções nos armazéns externos poderão ocorrer mediante necessidade conforme planejamento ou solicitação das Áreas de Logística ou da Gerência de Metalurgia de Vega.</li><li>Devem utilizar o Formulário 1 – Inspeção em Armazéns Externos, verificando as condições descritas neste padrão. Desvios e desdobramentos das Não Conformidades são registrados e tratados em um Sistema Informatizado, podendo ser o Siscorp.</li><li>No recebimento de bobinas, verificar se há molhamento, oxidações, danos na embalagem ou erro de identificação entre bobina e dados da nota fiscal. Em caso de não conformidade na bobina, a área de logística e a gerenciadora de risco deverá ser acionada imediatamente através do transportador.</li><li>Se comprovado dano após recebimento e internalização em Armazém de estocagem, sem ressalva na nota fiscal ou relatório de TFA, mediante ciência e autorização das Áreas de Logística, a responsabilidade será do Armazém correlacionado.</li><li>Dano identificado no armazém externo: bobinas segregadas, com emissão de Termo de Falta e Avaria (TFA) enviado às Áreas de Logística para tratativas e análises.</li><li>A Gerência de Logística de Produtos SFS, Gerência de Área de Operação Portuária deve repassar e cobrar da contratada o cumprimento das diretrizes deste padrão e tratar os desvios conforme o distrito no PT-PRO-ATCL-05-5101 – Manifestações de Clientes no SAP QM.</li><li>Se comprovado que danos ocorreram durante armazenagem e/ou manuseio em armazém externo, o responsável será notificado e iniciará o processo de ressarcimento junto à ArcelorMittal, conduzido pelas Áreas de Logística.</li></ul>`],
["4 – Responsabilidade",`<p>Cabe à Gerência de Metalurgia de Vega manter este padrão atualizado.</p><p>Participam da fase de visto deste documento: Gerência de Produção de Bobinas Galvanizadas, Gerência de Logística de Produtos SFS, Gerência de Área de Operação Logística SFS, Gerência de Logística e Serviço a Clientes, Gerência de Área de Operação Logística, Gerência de Área de Operação Portuária, Gerência Geral de Vendas Mercado Auto, Gerência de Área de Vendas Auto, Gerência de Vendas Infraestrutura, Gerência de Vendas Indústria, Gerência de Assistência Técnica e Gerência de Assistência Técnica Auto.</p>`]];
$('acc').innerHTML=S.map(s=>`<details><summary>${s[0]}</summary><div class="bd">${s[1]}</div></details>`).join('');
$('q').oninput=e=>{const v=e.target.value.toLowerCase();document.querySelectorAll('#acc details').forEach(d=>{const m=!v||d.textContent.toLowerCase().includes(v);d.style.display=m?'':'none';d.open=!!v&&m})};

/* ===== QUIZ ===== */
const Q=[
["Qual a distância recomendada entre as filas de bobinas?","80 cm","50 cm","1,5 m","Item 3.3.8: facilita manuseio, deslocamento de pessoas e remoção sem danos."],
["Até qual nível é permitido empilhar (fora de áreas portuárias)?","Nível dois","Nível um","Nível três","Níveis zero, um e dois. Em áreas portuárias, só até o nível um."],
["Em áreas portuárias, até que nível se pode empilhar?","Nível um","Nível dois","Nível zero apenas","No porto o empilhamento vai no máximo até o nível um."],
["Quanto uma bobina mais pesada pode exceder o peso da inferior, se precisar ficar acima?","Até 20%","Até 50%","Nada, nunca pode","É tolerável, desde que não ultrapasse 20% do peso da inferior."],
["Qual acessório NÃO é permitido para movimentar bobinas?","Cabo de aço ou corrente sem revestimento","Cinta de nylon","Tenaz eletromecânica","Item 3.2.3: causam danos nas bobinas."],
["O que indica a etiqueta “PEÇA EXPOSTA”?","Evitar empilhar sobre ela","Bobina destinada a sucata","Bobina sem embalagem","Item 3.3.3. Essas bobinas devem ficar no último nível."],
["Como tratar uma avaria grave?","Segregar, consensar com a Assistência Técnica e registrar no TFA com fotos","Enviar direto ao cliente","Apenas trocar a fita","Item 3.3.7."],
["Uma avaria leve exige:","Nenhum reparo, segregação ou consenso para envio","Remoção para área segregada","Consenso com a Logística","Item 3.3.5: dano superficial na embalagem, sem dano à bobina."],
["Uma avaria moderada exige:","Reparo manual na embalagem, sem segregação","Segregação obrigatória","Descarte da bobina","Item 3.3.6: molhamento, oxidação ou amassamento sem dano aparente na bobina."],
["Como garantir a segurança nas extremidades da fila?","Berços fixados no piso ou as 3 primeiras bobinas amarradas","Deixá-los soltos","Usar só dormentes","Item 3.1.2.5."],
["Qual o peso de uma pup coil e de uma baby coil?","Pup: 1 a 2 t; baby: 2 a 4 t","Pup: 2 a 4 t; baby: 1 a 2 t","Ambas acima de 10 t","Definições do padrão."],
["O que é a posição Nível Zero?","Bobina direta no berço","Bobina sobre outra bobina","Bobina no pátio descoberto","Nível um fica sobre o zero; nível dois, sobre o um."],
["O que é o TFA?","Termo de Falta e Avaria, emitido pelo prestador de armazenagem","Tabela de Frete Auto","Teste de Fixação de Aço","Relata anomalias no recebimento ou na movimentação."],
["Qual contaminante é proibido no local de estocagem?","Areia, pó, sobras de madeira, plástico, produtos de limpeza","Nenhum","Somente água","Item 3.1.1.3."],
["Como devem ser os berços?","Sem pregos ou saliências, com contato revestido de borracha ou similar","Em aço nu","Com parafusos expostos","Itens 3.1.2.2 e 3.1.2.4."],
["Para BQs, é permitido estocar em pátio descoberto?","Sim, se nivelamento e resistência do piso forem atendidos","Nunca","Só em dias de chuva","Nota do item 3.1.1."],
["O que o armazém deve ter para a rastreabilidade?","Sistemática de controle de estocagem, eletrônica ou não","Nada","Só etiquetas","Item 3.3.1."],
["Sobre bobinas da ArcelorMittal e de outras empresas:","Recomenda-se não estocá-las juntas","Devem ficar misturadas","É obrigatório misturar","Item 3.3.2."],
["Bobinas Aspecto Z e Aspecto X:","Z é peça exposta e X é peça interna","Z é peça interna e X é peça exposta","Ambas são sucata","Se há manuseios frequentes de X, estocar as Z em filas específicas."],
["Quando acessórios e equipamentos devem ser inspecionados?","Antes e durante a operação","Só uma vez por ano","Só após acidente","Item 3.2.3."],
["Quem pode operar os equipamentos de movimentação?","Profissionais habilitados e capacitados","Qualquer pessoa","Apenas visitantes","Item 3.2.4."],
["O que usar entre bobinas empilhadas?","Separadores, como tiras de borracha","Nada","Cordas de aço","Evita contato direto entre as bobinas."],
["O que é o cinturão de bobinas?","Bobinas maiores nas extremidades inferiores e laterais do pátio","Fita de aço na embalagem","Uma cerca de madeira","Evita pressão excessiva sobre bobinas menores e rolamentos."],
["Quem mantém este padrão atualizado?","Gerência de Metalurgia de Vega","O transportador","O cliente","Item 4 – Responsabilidade."],
["Contato lateral direto entre bobinas do mesmo nível:","Recomenda-se evitar","Deve haver sempre","É obrigatório","Item 3.3.9: evita avarias e amassamentos."],
["Dano comprovado após internalização, sem ressalva na nota fiscal ou TFA:","Responsabilidade do Armazém correlacionado","Do cliente","Do transportador","Item 3.4."],
["Como deve ser a iluminação do galpão?","Adequada às dimensões, com boa visualização e identificação das bobinas","Apenas natural","Dispensável","Item 3.1.1.1."],
["Telhados e laterais do galpão devem:","Estar isentos de aberturas que permitam infiltração","Ter frestas para ventilar","Ficar abertos","Item 3.1.1.2."],
["Como devem ficar os portões do galpão?","De fácil movimentação e sempre fechados","Sempre abertos","Sem portões","Item 3.1.1.5: evita água, névoa de chuva e umidade."],
["O berço deve suportar qual peso?","O peso máximo contratado","Metade do peso da bobina","Qualquer peso","Item 3.1.2.1."],
["O piso do galpão deve ser:","Pavimentado, nivelado e resistente ao peso da bobina","De terra batida","Inclinado","Item 3.1.1.3."],
["Qual material pode revestir a área de contato do berço?","Borracha, polipropileno ou poliestireno","Aço nu","Concreto","Item 3.1.2.2."],
["Dormentes e calços devem:","Resistir ao peso e não ter pontos salientes","Ter pregos para fixar","Ser de plástico fino","Nota do item 3.1.2."],
["Quais equipamentos podem manusear bobinas?","Ponte rolante, empilhadeiras ou guindastes dimensionados","Qualquer guincho","Somente macacos","Item 3.2.1."],
["Quais são acessórios de manuseio citados?","Tenaz eletromecânica, gancho tipo C e aríete, cintas de nylon ou poliéster","Correntes soltas","Cabos de aço nus","Item 3.2.2."],
["Qual revestimento é recomendado nas pontas dos acessórios?","Borracha, celeron ou material semelhante","Nenhum","Ferro","Item 3.2.2."],
["O que significa BQD?","Bobina a Quente Decapada","Bobina Quase Defeituosa","Berço Quente Duplo","BQ é Bobina Quente."],
["O que significa SFS?","São Francisco do Sul","Serviço de Fixação de Suporte","Sistema de Frete Seguro","Definições do padrão."],
["O que é o Estoque Intermediário?","Estoque entre as linhas de produção, aguardando processo","Estoque no porto","Estoque do cliente","Definições do padrão."],
["O que são Armazéns Externos?","Locais onde as bobinas ficam antes do envio ao destino final ou clientes","Linhas de produção","Pátios da fábrica","Definições do padrão."],
["O que é o Sletter Tubular?","Cinta de proteção externa aplicada após a embalagem","Um tipo de berço","Um guindaste","Definições do padrão."],
["Para que serve o slitter de borracha?","Proteção em empilhamento ou armazenamento de BQs","Cortar bobinas","Içar bobinas","Definições do padrão."],
["Onde são registradas as não conformidades das inspeções?","Formulário 1 e Sistema Informatizado, como o Siscorp","Em lugar nenhum","Só verbalmente","Item 3.4."],
["O Formulário 1 é usado para:","Inspeção em Armazéns Externos","Pedido de compra","Controle de ponto","Item 3.4."],
["Onde ficam as etiquetas de sentido de enrolamento e cuidados?","Nas laterais das bobinas","Só no piso","Dentro do furo","Item 3.3.3."],
["Na Figura 03, o que é o item C?","Limitadores no início e no fim da fila","Berços fixados no piso","Bobinas amarradas","A: berços fixados; B: três bobinas amarradas; C: limitadores."],
["Nos primeiros berços das laterais do pátio (passagem de pessoas):","Recomenda-se não empilhar","Empilhar até o nível dois","Deixar sem fixação","Quando não for possível, formar o cinturão."],
["O que aplicar, se possível, para conter quedas de níveis superiores?","Barreira de proteção robusta","Fita adesiva","Nada","Prevenção de deslocamento das pilhas."],
["Para mudar o modelo de estufagem em navios, é preciso:","Consenso entre Logística, Metalurgia e Assistência Técnica, com avaliação do terminal ou armador","Decisão só do operador","Nada","Contrariar o padrão exige consenso e validação."],
["No recebimento de bobinas, deve-se verificar:","Molhamento, oxidação, danos na embalagem e erro de identificação","Apenas a cor","Somente o peso","Item 3.4."],
["Dano identificado no armazém externo: o que fazer?","Segregar as bobinas e emitir o TFA","Ignorar","Embarcar normalmente","Item 3.4."],
["Quem pode solicitar auditorias nos armazéns externos?","Áreas de Logística ou Gerência de Metalurgia de Vega","Qualquer visitante","Somente o cliente","Item 3.4."],
["Se o dano ocorreu durante armazenagem ou manuseio no armazém externo:","O responsável é notificado e inicia-se o ressarcimento","Nada acontece","O cliente paga","Item 3.4."],
["Qual o número deste padrão técnico?","PT-LOG-VEGA-DT-0002","PT-PRO-ATCL-05-5101","PT-LOG-SFS-0001","O PT-PRO-ATCL-05-5101 trata de manifestações de clientes no SAP QM."],
["Em que data foi a última revisão (008.0)?","24/06/2024","17/12/2010","03/07/2024","17/12/2010 é a data de criação."],
["Os berços podem ser de:","Aço, madeira ou borracha","Só vidro","Só concreto","Figuras 1, 2 e 3."],
["Bobinas não conformes devem ser:","Identificadas e segregadas para rápida localização","Misturadas ao estoque","Descartadas","Item 3.3.2."],
["Como deve ser o registro de uma avaria grave?","Detalhamento preferencialmente fotográfico","Sem registro","Só verbal","Item 3.3.7."]];
const sh=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
const ri=(a,b)=>a+Math.floor(Math.random()*(b-a+1)),fm=n=>String(Math.round(n*10)/10).replace('.',',');
const G=[
()=>{const k=ri(0,2),B=ri(10,20),A=k===0?ri(3,B):k===1?B+ri(1,Math.floor(B*.2)):Math.ceil(B*1.2)+ri(1,3),T=['Correto: o mais pesado fica embaixo','Tolerável: não passa de 20% acima','Não permitido: excede 20%'];
 return[`Uma bobina de ${A} t será empilhada sobre uma de ${B} t. Segundo o padrão:`,T[k],T[(k+1)%3],T[(k+2)%3],`${A} t sobre ${B} t. O limite tolerado é ${fm(B*1.2)} t.`]},
()=>{const P=ri(8,25);return[`A bobina inferior pesa ${P} t. Qual o peso máximo tolerado da superior (regra dos 20%)?`,fm(P*1.2)+' t',fm(P*1.5)+' t',fm(P*1.1)+' t','Tolerável até 20% acima do peso da bobina inferior.']},
()=>{const n=ri(3,8);return[`Com ${n} filas lado a lado, quantos metros de corredor somam os espaços de 80 cm entre as filas?`,fm((n-1)*.8)+' m',fm(n*.8)+' m',fm((n+1)*.8)+' m',`São ${n-1} espaços de 0,8 m entre ${n} filas.`]}];
function draw8(){let d=[];try{d=JSON.parse(localStorage.getItem('qdk'))||[]}catch(e){}
 d=d.filter(i=>i<Q.length);if(d.length<8)d=sh(Q.map((_,i)=>i));
 const t=d.splice(0,8);try{localStorage.setItem('qdk',JSON.stringify(d))}catch(e){}return t.map(i=>Q[i])}
let qs=[],qi=0,pts=0,miss=[];
function newQuiz(){qs=sh([...draw8(),...sh(G).slice(0,2).map(f=>f())]);qi=0;pts=0;miss=[];showQ()}
function showQ(){
 const b=$('cq');let best=0;try{best=+localStorage.getItem('qbest')||0}catch(e){}
 if(qi>=qs.length){try{if(pts>best)localStorage.setItem('qbest',pts)}catch(e){}
  b.innerHTML=`<h3>Resultado: ${pts} de ${qs.length}</h3><p>${pts>=9?'Excelente! Você domina o padrão.':pts>=7?'Muito bem! Revise os pontos abaixo.':'Revise a seção de estudo e tente de novo.'}</p><p class="meta">Melhor resultado neste aparelho: ${Math.max(best,pts)}</p>${miss.length?'<h3>Para revisar</h3><ul>'+miss.map(m=>`<li><b>${m[0]}</b><br>Resposta: ${m[1]}. ${m[2]}</li>`).join('')+'</ul>':''}<button class="btn" id="rq">Novo quiz (perguntas diferentes)</button>`;
  $('rq').onclick=newQuiz;return}
 const q=qs[qi],o=sh([q[1],q[2],q[3]]);
 b.innerHTML=`<div class="bar"><i style="width:${qi/qs.length*100}%"></i></div><p class="meta">Pergunta ${qi+1} de ${qs.length} · Acertos: ${pts} · Banco: ${Q.length}+ perguntas</p><h3>${q[0]}</h3>`+o.map(t=>`<button class="opt">${t}</button>`).join('')+'<div id="fb"></div>';
 b.querySelectorAll('.opt').forEach(x=>x.onclick=()=>{
  const hit=x.textContent===q[1];b.querySelectorAll('.opt').forEach(y=>{y.disabled=true;if(y.textContent===q[1])y.classList.add('ok')});
  if(hit)pts++;else{x.classList.add('no');miss.push([q[0],q[1],q[4]])}
  $('fb').innerHTML=`<div class="exp"><b>${hit?'Correto!':'Não foi dessa vez.'}</b> ${q[4]}</div><button class="btn" id="nx">${qi+1<qs.length?'Próxima':'Ver resultado'}</button>`;
  $('nx').onclick=()=>{qi++;showQ()};$('nx').focus()});
}
newQuiz();

/* ===== SIMULADOR 3D ===== */
function initSim(){
if(typeof THREE==='undefined'){$('wrap').innerHTML='<p style="padding:20px">Não foi possível carregar a biblioteca 3D (Three.js). Verifique a conexão e recarregue a página.</p>';return}
const D=2,X0=3,N=[8,7,6],K={},CW=1.2,OFF=.2,px=(lv,i)=>X0+lv+D*i,NAMES=['Externa 360°','Cabine do operador','Visão da garra','Vista de cima'];
const wrap=$('wrap'),R=new THREE.WebGLRenderer({canvas:$('gl'),antialias:true});
R.setPixelRatio(Math.min(devicePixelRatio,2));
const SC=new THREE.Scene();SC.background=new THREE.Color(0xaab4bd);SC.fog=new THREE.Fog(0xaab4bd,70,150);
const CAM=new THREE.PerspectiveCamera(55,1,.1,300);
SC.add(new THREE.HemisphereLight(0xffffff,0x56606a,.95));
const dl=new THREE.DirectionalLight(0xffffff,.8);dl.position.set(20,40,15);SC.add(dl);
const M=(c,o)=>new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:.6,metalness:.25},o));
const box=(w,h,d,m,x,y,z,p)=>{const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);(p||SC).add(o);return o};
const ST=M(0x2b343d),YL=M(0xffc21a,{roughness:.5}),UP=new THREE.Vector3(0,1,0),t1=new THREE.Vector3(),t2=new THREE.Vector3(),t3=new THREE.Vector3(),t4=new THREE.Vector3();
function lab(txt,x,y,z,sx,sy){const c=document.createElement('canvas');c.width=256;c.height=64;const g=c.getContext('2d');g.fillStyle='rgba(27,33,40,.85)';g.fillRect(0,0,256,64);g.fillStyle='#fff';g.font='bold 30px sans-serif';g.textAlign='center';g.fillText(txt,128,43);
 const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c)}));s.position.set(x,y,z);s.scale.set(sx,sy,1);SC.add(s)}
function tag(w,pe){const c=document.createElement('canvas');c.width=128;c.height=64;const g=c.getContext('2d');g.fillStyle=pe?'#ffc21a':'#fff';g.fillRect(0,0,128,64);g.strokeStyle='#1b2128';g.lineWidth=4;g.strokeRect(2,2,124,60);g.fillStyle='#1b2128';g.font='bold 28px sans-serif';g.textAlign='center';g.fillText(w+' t'+(pe?' PE':''),64,43);
 const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),depthTest:false}));s.scale.set(1.2,.6,1);s.renderOrder=5;return s}
/* cenário */
box(140,.2,60,M(0x59626b,{roughness:.95,metalness:0}),26,-.1,0);
box(22,.03,26,M(0x7d8791,{roughness:.95,metalness:0}),10,.02,0);
box(34,.03,22,M(0x6d7782,{roughness:.95,metalness:0}),38,.02,0);
box(.2,.04,20,YL,20.4,.04,0);
for(let x=0;x<=52;x+=8)[-11.2,11.2].forEach(z=>box(.6,12,.6,ST,x,6,z));
[-10.8,10.8].forEach(z=>box(56,.6,.7,M(0x4a5560),26,12,z));
box(56,13,.3,M(0xb9c1c8),26,6.5,-14);
for(let i=0;i<8;i++){box(1.5,.1,1.1,ST,px(0,i),.05,0);lab('Berço '+(i+1),px(0,i),.55,1.6,1.4,.35)}
box(.3,1.8,1.6,YL,1.7,.9,0);box(.3,1.8,1.6,YL,18.3,.9,0);
lab('ZONA DE RECEBIMENTO',37,2.6,-9.5,6,1.5);lab('ESTRUTURA DE EMPILHAMENTO',10,2.6,-9.5,6,1.5);
/* ponte, carro, garra */
const BR=new THREE.Group(),TR=new THREE.Group(),HK=new THREE.Group(),HT=new THREE.Group();SC.add(BR,HK);BR.add(TR);HK.add(HT);
box(.9,.9,22.4,YL,0,12.95,0,BR);[-10.8,10.8].forEach(z=>box(1.4,.6,1,YL,0,12.6,z,BR));
box(2,2.2,2.2,M(0x8fb7d9,{transparent:true,opacity:.5}),0,11.2,8.6,BR);
TR.position.y=13.6;box(2.2,.7,2,ST,0,0,0,TR);
box(1.6,.25,.5,YL,0,.9,0,HT);box(.2,.7,.2,ST,0,.5,0,HT);
const pin=new THREE.Mesh(new THREE.CylinderGeometry(.12,.12,1.5,16),M(0xdfe5ea,{metalness:.8}));pin.rotation.x=Math.PI/2;HK.add(pin);
const jaws=[-1,1].map(s=>{const g=new THREE.Group();g.position.set(0,0,s*.8);box(.2,.8,.14,YL,0,-.4,0,g);HK.add(g);return{g,s}});
const cabM=M(0x15191d),cabs=[0,1,2,3].map(()=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,1,6),cabM);SC.add(m);return m});
function link(m,a,b){t1.copy(b).sub(a);const l=t1.length();m.position.copy(a).addScaledVector(t1,.5);m.scale.set(1,l,1);m.quaternion.setFromUnitVectors(UP,t1.normalize())}
/* estado */
let st,run=false,last=0,sp=1,mode=0,fsOn=false;const SP=[.35,1,1.4],SN=['Fino','Normal','Rápido'];
const V=[{y:0,p:.4},{y:0,p:0},{y:0,p:0},{y:0,p:0}],Z=[28,60,65,34],LO=[8,25,25,15],HI=[80,90,90,60],T=new THREE.Vector3(12,4,0);
function reset(){
 if(st)st.coils.forEach(o=>SC.remove(o.mesh));
 const mx=$('loc').value==='p'?1:2,pe=new Set();while(pe.size<2)pe.add(ri(0,9));
 const coils=Array.from({length:10},(_,k)=>{
  const w=ri(5,15),r=.5+w*.026,o={w,r,x:26+4.5*(k%5),y:r+.1,z:k<5?-4:4,lv:-1,i:-1,pe:pe.has(k)};
  const g=new THREE.Group(),b=new THREE.Mesh(new THREE.CylinderGeometry(r,r,CW,40).rotateX(Math.PI/2),M(0x9aa6b2,{metalness:.7,roughness:.35})),
  e=new THREE.Mesh(new THREE.CylinderGeometry(r*.3,r*.3,CW+.02,24).rotateX(Math.PI/2),M(0x2a3138));g.add(b,e);
  if(pe.has(k))g.add(new THREE.Mesh(new THREE.CylinderGeometry(r*1.012,r*1.012,.12,40).rotateX(Math.PI/2),YL));
  g.add(tag(w,pe.has(k)));SC.add(g);o.mesh=g;return o});
 st={bx:12,tz:0,hx:12,hz:0,hy:8,vbx:0,vtz:0,vhy:0,hvx:0,hvz:0,car:null,score:100,t:0,cd:0,cs:0,done:false,mx,coils,jaw:0,jawT:0,occ:N.map(n=>Array(n).fill(null))};
 $('msg').textContent='';$('lv').textContent=mx===2?'2':'1 (porto)';
}
const say=m=>$('msg').textContent=m;
function pen(n,m){st.score=Math.max(0,st.score-n);say(m+' (−'+n+')')}
const free=o=>o.lv<0||o.lv>=2||!(st.occ[o.lv+1][o.i-1]||st.occ[o.lv+1][o.i]);
const hit=o=>st.coils.some(k=>k!==o&&Math.abs(o.z-k.z)<CW&&Math.hypot(o.x-k.x,o.y-k.y)<o.r+k.r-.18);
function support(x,z,r){
 const s=st;let bad='Fora do berço: alinhe com um berço ou use a zona de recebimento.';
 if(Math.abs(z)<.45)for(let lv=s.mx;lv>=0;lv--)for(let i=0;i<N[lv];i++){
  if(Math.abs(x-px(lv,i))>.25)continue;
  if(s.occ[lv][i]){bad='Posição ocupada.';continue}
  if(lv===0)return{lv,i,x:px(0,i),z:0,y:r+.1};
  const a=s.occ[lv-1][i],b=s.occ[lv-1][i+1];
  if(a&&b){const X=px(lv,i);return{lv,i,x:X,z:0,y:Math.max(...[a,b].map(q=>q.y+Math.sqrt(Math.max(0,(r+q.r)**2-(X-q.x)**2))))}}
  bad='Sem apoio: o nível '+lv+' precisa de duas bobinas embaixo.';}
 if(x>20.5&&Math.abs(z)<7.5)return{lv:-1,i:-1,x,z,y:r+.1};
 return{bad};
}
function act(){
 if(!run||st.done)return;const s=st,still=Math.hypot(s.hx-s.bx,s.hz-s.tz)<.15&&Math.hypot(s.hvx,s.hvz)<.25;
 if(!s.car){
  const o=s.coils.find(o=>Math.abs(s.hx-o.x)<.3&&Math.abs(s.hz-o.z)<.5&&Math.abs(s.hy-OFF-o.y)<.25);
  if(!o)return say('Alinhe a garra com o furo da bobina (use a visão da garra) e desça até o centro dela.');
  if(!free(o))return say('Há bobina em cima desta. Retire a de cima primeiro.');
  if(!still)return say('Aguarde o balanço parar antes de pegar.');
  if(o.lv>=0)s.occ[o.lv][o.i]=null;o.lv=o.i=-1;s.car=o;s.jawT=1;say('');
 }else{
  const o=s.car,sp=support(s.hx,s.hz,o.r);
  if(sp.bad)return say(sp.bad);
  if(o.y>sp.y+.25)return say('Abaixe mais antes de soltar a carga.');
  if(!still)return say('Carga balançando: espere estabilizar.');
  o.x=sp.x;o.y=sp.y;o.z=sp.z;o.lv=sp.lv;o.i=sp.i;if(sp.lv>=0)s.occ[sp.lv][sp.i]=o;s.car=null;s.jawT=0;say('');
  if(s.coils.every(k=>k.lv>=0))finish();
 }
}
function finish(){
 const s=st;s.done=true;let ok=0,tol=0,bad=0,pe=0;
 s.coils.forEach(o=>{
  if(o.lv>0){const m=Math.min(s.occ[o.lv-1][o.i].w,s.occ[o.lv-1][o.i+1].w);if(o.w>m*1.2){bad++;s.score-=15}else if(o.w>m){tol++;s.score-=5}else ok++}
  if(o.pe&&!free(o)){pe++;s.score-=10}});
 s.score=Math.max(0,s.score);$('sc').textContent=s.score;
 const g=s.score>=85?'Operador exemplar':s.score>=65?'Operação segura':'Precisa treinar mais';
 $('ov').style.display='flex';
 $('ov').innerHTML=`<div class="box"><h3>${g}: ${s.score} pontos</h3><p>Tempo: ${Math.round(s.t)} s.</p><ul><li>Empilhamentos corretos (mais pesada embaixo): ${ok}</li><li>Tolerados, até 20% acima (−5 cada): ${tol}</li><li>Acima de 20% (−15 cada): ${bad}</li><li>Peça exposta (PE) com bobina em cima (−10 cada): ${pe}</li></ul><button class="btn" id="again">Jogar de novo</button></div>`;
 $('again').onclick=()=>{$('ov').style.display='none';reset();run=true};run=false;
}
/* controles */
function joy(id){const e=$(id),k=e.firstElementChild,v={x:0,y:0};let pid=null;
 const mv=ev=>{const b=e.getBoundingClientRect(),rad=b.width/2;let dx=(ev.clientX-b.left-rad)/rad,dy=(ev.clientY-b.top-rad)/rad;const m=Math.hypot(dx,dy);if(m>1){dx/=m;dy/=m}
  v.x=Math.abs(dx)<.12?0:dx;v.y=Math.abs(dy)<.12?0:dy;k.style.transform=`translate(${dx*rad*.55}px,${dy*rad*.55}px)`};
 e.onpointerdown=ev=>{pid=ev.pointerId;e.setPointerCapture(pid);mv(ev);ev.preventDefault()};
 e.onpointermove=ev=>{if(ev.pointerId===pid)mv(ev)};
 e.onpointerup=e.onpointercancel=ev=>{if(ev.pointerId===pid){pid=null;v.x=v.y=0;k.style.transform=''}};return v}
const J1=joy('j1'),J2=joy('j2');
const km={arrowleft:'L',a:'L',arrowright:'R',d:'R',arrowup:'F',w:'F',arrowdown:'B',s:'B',e:'U',r:'U',pageup:'U',q:'D',f:'D',pagedown:'D',shift:'S',j:'CL',l:'CR','+':'ZI','=':'ZI','-':'ZO'};
addEventListener('keydown',e=>{if(!run)return;const k=e.key.toLowerCase();if(km[k]){K[km[k]]=1;e.preventDefault()}
 if(k===' '){e.preventDefault();if(!e.repeat)act()}if(k==='c'&&!e.repeat)cyc()});
addEventListener('keyup',e=>{const k=km[e.key.toLowerCase()];if(k)K[k]=0});
function cyc(){mode=(mode+1)%4;V[mode].y=0;V[mode].p=mode?0:.4}
function zm(f){Z[mode]=clamp(Z[mode]*f,LO[mode],HI[mode])}
const P=new Map();let pd=0;
const gl=$('gl');
gl.onpointerdown=e=>{gl.setPointerCapture(e.pointerId);P.set(e.pointerId,[e.clientX,e.clientY]);if(P.size===2){const a=[...P.values()];pd=Math.hypot(a[0][0]-a[1][0],a[0][1]-a[1][1])}};
gl.onpointermove=e=>{if(!P.has(e.pointerId))return;const o=P.get(e.pointerId),dx=e.clientX-o[0],dy=e.clientY-o[1];P.set(e.pointerId,[e.clientX,e.clientY]);
 if(P.size===2){const a=[...P.values()],d=Math.hypot(a[0][0]-a[1][0],a[0][1]-a[1][1]);if(pd)zm(pd/d);pd=d;return}
 if(mode<3){const v=V[mode];v.y-=dx*.006;v.p=mode===0?clamp(v.p+dy*.005,.05,1.45):clamp(v.p+dy*.004,-1.3,1.3)}};
gl.onpointerup=gl.onpointercancel=e=>{P.delete(e.pointerId);pd=0};
gl.onwheel=e=>{e.preventDefault();zm(e.deltaY>0?1.1:.9)};
$('hk').onclick=act;$('cm').onclick=cyc;
$('fn').onclick=()=>{sp=(sp+1)%3;$('fn').textContent='Vel: '+SN[sp]};
document.querySelectorAll('[data-k]').forEach(b=>{const k=b.dataset.k;
 b.onpointerdown=e=>{e.preventDefault();b.setPointerCapture(e.pointerId);K[k]=1;b.classList.add('on')};
 b.onpointerup=b.onpointercancel=()=>{K[k]=0;b.classList.remove('on')};b.oncontextmenu=e=>e.preventDefault()});
let cm2=0;try{cm2=+localStorage.getItem('cmode')||0}catch(e){}
const ctl=document.querySelector('.ctl');
function setCm(){ctl.classList.toggle('jy',cm2===1);$('cmode').textContent='Controle: '+(cm2?'Joystick':'Botões')}
$('cmode').onclick=()=>{cm2^=1;try{localStorage.setItem('cmode',cm2)}catch(e){}J1.x=J1.y=J2.x=J2.y=0;setCm()};setCm();
const exo=()=>(document.exitFullscreen||document.webkitExitFullscreen||(()=>0)).call(document);
function setFS(on){fsOn=on;wrap.classList.toggle('full',on);$('fs').textContent=on?'Sair':'Tela cheia';rs()}
$('fs').onclick=async()=>{
 if(!fsOn){setFS(true);try{const r=wrap.requestFullscreen||wrap.webkitRequestFullscreen;if(r)await r.call(wrap)}catch(e){}try{await screen.orientation.lock('landscape')}catch(e){}}
 else{try{if(document.fullscreenElement||document.webkitFullscreenElement)await exo()}catch(e){}try{screen.orientation.unlock()}catch(e){}setFS(false)}};
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&fsOn){try{screen.orientation.unlock()}catch(e){}setFS(false)}});
addEventListener('keydown',e=>{if(e.key==='Escape'&&fsOn&&!document.fullscreenElement)setFS(false)});
$('go').onclick=()=>{
 const ok=[...document.querySelectorAll('.ck')].every(x=>x.checked),a=$('acs');
 if(a.selectedIndex===0)return $('ovm').textContent='Selecione o acessório de içamento.';
 if(a.value==='0')return $('ovm').textContent='Não permitido: cabos de aço ou correntes sem revestimento danificam as bobinas (item 3.2.3).';
 if(!ok)return $('ovm').textContent='Complete todos os itens da inspeção antes de operar.';
 reset();run=true;$('ov').style.display='none'};
function rs(){const w=wrap.clientWidth,h=wrap.clientHeight;if(!w||!h)return;R.setSize(w,h,false);CAM.aspect=w/h;CAM.updateProjectionMatrix()}
new ResizeObserver(rs).observe(wrap);rs();
/* lógica */
const ap=(v,t,a)=>v+clamp(t-v,-a,a);
function upd(dt){
 const s=st;if(!run||s.done)return;
 s.t+=dt;s.cd=Math.max(0,s.cd-dt);s.cs=Math.max(0,s.cs-dt);
 const f=K.S?.35:SP[sp],o=s.car,a=3.5*dt*(f<1?.7:1),bk=7*dt;
 const ix=clamp((K.R?1:0)-(K.L?1:0)+J1.x,-1,1),iz=clamp((K.B?1:0)-(K.F?1:0)+J1.y,-1,1),iy=clamp((K.U?1:0)-(K.D?1:0)-J2.y,-1,1);
 s.vbx=ap(s.vbx,ix*4*f,ix?a:bk);s.vtz=ap(s.vtz,iz*2.6*f,iz?a:bk);s.vhy=ap(s.vhy,iy*1.8*f,iy?a:bk);
 const sv=[s.bx,s.tz,s.hy,s.hx,s.hz,s.hvx,s.hvz];
 s.bx=clamp(s.bx+s.vbx*dt,1.2,50.8);s.tz=clamp(s.tz+s.vtz*dt,-6.8,6.8);
 s.hy=clamp(s.hy+s.vhy*dt,o?o.r+.1+OFF:.6,11.2);
 const L=Math.max(1,12.7-s.hy),k=clamp(9.8/L,4,12),c=1.1*Math.sqrt(k);
 s.hvx+=(-k*(s.hx-s.bx)-c*s.hvx)*dt;s.hvz+=(-k*(s.hz-s.tz)-c*s.hvz)*dt;s.hx+=s.hvx*dt;s.hz+=s.hvz*dt;
 if(o){o.x=s.hx;o.y=s.hy-OFF;o.z=s.hz;
  if(hit(o)){[s.bx,s.tz,s.hy,s.hx,s.hz,s.hvx,s.hvz]=sv;s.vbx=s.vtz=s.vhy=s.hvx=s.hvz=0;o.x=s.hx;o.y=s.hy-OFF;o.z=s.hz;if(!s.cd){s.cd=1.5;pen(10,'Colisão com outra bobina!')}}
  else if(!s.cs&&(Math.abs(s.vbx)>2.6||Math.abs(s.vtz)>1.7||s.vhy<-1.2)){s.cs=2;pen(2,'Velocidade alta com carga suspensa')}}
 const d=Math.hypot(s.hx-s.bx,s.hz-s.tz);$('sw').textContent=d<.15&&Math.hypot(s.hvx,s.hvz)<.25?'estável':d<.5?'leve':'forte';
 $('sc').textContent=s.score;$('tm').textContent=Math.round(s.t);$('dn').textContent=s.coils.filter(q=>q.lv>=0).length;
}
function aim(d,v){d.normalize().applyAxisAngle(UP,v.y);t3.crossVectors(d,UP).normalize();d.applyAxisAngle(t3,v.p);CAM.lookAt(t4.copy(CAM.position).add(d))}
function sync(dt){
 const s=st;BR.position.x=s.bx;TR.position.z=s.tz;HK.position.set(s.hx,s.hy,s.hz);HT.visible=mode!==2;
 s.coils.forEach(o=>o.mesh.position.set(o.x,o.y,o.z));
 s.jaw+=(s.jawT-s.jaw)*Math.min(1,dt*6);jaws.forEach(j=>j.g.rotation.x=j.s*(1-s.jaw)*.9);
 [[-.5,-.5],[.5,-.5],[-.5,.5],[.5,.5]].forEach((q,i)=>link(cabs[i],t1.set(s.bx+q[0],13.25,s.tz+q[1]).clone(),t2.set(s.hx+q[0]*1.3,s.hy+.95,s.hz+q[1]*.3)));
 if(mode<3)V[mode].y-=(J2.x+(K.CR?1:0)-(K.CL?1:0))*dt*1.6;if(K.ZI)zm(1-dt*.8);if(K.ZO)zm(1+dt*.8);
 const v=V[mode];CAM.up.set(0,1,0);CAM.fov=55;
 if(mode===0){T.lerp(t1.set(s.hx,4,s.hz*.5),Math.min(1,dt*3));const cp=Math.cos(v.p);CAM.position.set(T.x+Z[0]*Math.sin(v.y)*cp,T.y+Z[0]*Math.sin(v.p),T.z+Z[0]*Math.cos(v.y)*cp);CAM.lookAt(T)}
 else if(mode===1){CAM.position.set(s.bx,11,8.6);aim(t2.set(s.hx,s.hy-1,s.hz).sub(CAM.position),v);CAM.fov=Z[1]}
 else if(mode===2){CAM.position.set(s.hx,s.hy+1.3,s.hz+.2);aim(t2.set(0,-1,-.25),v);CAM.fov=Z[2]}
 else{CAM.up.set(0,0,-1);CAM.position.set(s.hx,Z[3],s.hz);CAM.lookAt(s.hx,0,s.hz)}
 CAM.updateProjectionMatrix();$('vw').textContent=NAMES[mode];
}
reset();
function frame(t){const dt=Math.min(.05,(t-last)/1000||0);last=t;upd(dt);sync(dt);R.render(SC,CAM);requestAnimationFrame(frame)}
requestAnimationFrame(frame);
}
initSim();
