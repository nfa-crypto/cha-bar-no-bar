/*
  LISTA DE PRESENTES
  ==================
  Aqui é onde você adiciona, edita ou remove presentes. Não precisa mexer em mais nada.

  Cada presente é um bloco assim:

  {
    id: "um-codigo-unico-sem-espaco",   // não repita ids! e não mude o id de um presente depois que alguém já marcar
    categoria: "Cozinha",                // Cozinha, Decoração, Cama & Banho, Utilidades, ou o que preferir
    nome: "Jogo de panelas antiaderente",
    link: "https://www.lojaexemplo.com.br/produto",  // cole aqui o link da loja
    imagem: ""                            // opcional: link de uma foto do produto (pode deixar em branco)
  },

  Pra ADICIONAR um presente novo: copie um bloco inteiro (do { até }), cole antes do
  "];" no final, e troque os valores. Não esqueça da vírgula no final de cada bloco.

  Pra REMOVER um presente: apague o bloco inteiro dele (de { até }, incluindo a vírgula).

  IMPORTANTE: depois de editar este arquivo, salve e publique de novo (veja o README.md)
  pra atualização aparecer no site pra todo mundo.
*/

const GIFTS = [
  {
    id: "edredom-oliveira-queen",
    categoria: "Cama & Banho",
    nome: "Kit 4 Peças Edredom Oliveira Queen",
    link: "https://shopee.com.br/product/296363855/5871887664?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElQAAAAzijWFkvQFzymNRT7buS9Ues_7FUW9Sz-RMXa0x_ewcMJA3C2J6nUbi84TepsTWjnwX0FnFYPgXcbn1oC1rEx0CwBVa3OKbjwc9kM4Fx_rOoh2x76Py9HnHCKGENrdcIxc74hfSyoDC5KJcORWKvzsq4DqT-FgdVC5xHIR78ZeF0SVc9iG6CwnvvJOkssp5OqNl&mmp_pid=an_18303210021&uls_trackid=55s54e6j01cb&utm_campaign=id_03e335f9428b18bc&utm_content=----&utm_medium=affiliates&utm_source=an_18303210021&utm_term=f24fiit1jtz3",
    imagem: ""
  },
  {
    id: "carrinho-organizador-kaziva",
    categoria: "Utilidades",
    nome: "Carrinho Organizador Multiuso Com Rodinhas - Kaziva",
    link: "https://shopee.com.br/product/1520238103/46458161027?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmQAAAAzGBDx65UTBU_dYYDieI1BqWbmgm0q5RXeH4jxFuXzThM1d464BJrsfMU4u9oQN8dOVNIBU7IsHZQfRBYf00kL9excqrDdX3sGj5CjKYnOha18qjHSHOi0fAzkQ2gO2bmoMGS1J3c7mkNILLec6nHQZ6fBehSCEuHSK-ZrsxhznmpGHCRG5bA5w7Z647Jr7Z3quo6wLKA&mmp_pid=an_18303210021&uls_trackid=55s54cp700ct&utm_campaign=id_c3f61ff8cf00d6f3&utm_content=----&utm_medium=affiliates&utm_source=an_18303210021&utm_term=f24fhdf7kno9",
    imagem: ""
  },
  {
    id: "porta-frios-triplo",
    categoria: "Cozinha",
    nome: "Porta Frios Triplo Organizador de Geladeira com Tampa Hermética",
    link: "https://shopee.com.br/product/486936209/58255217000?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElwAAAAwejQ0whI1LGxPWG9bqfoyPFlX3M7l_9PcOQl6SXq5Wg56AcO3gsqmrRhUe6ufrOQ7aUnqqzyuPMFvUgtiNaB1C1xnwo4RnBxA0uzGj3s_yNrb1QqfXmh-GAp7LYb6g0gnz3Tqyl0sTCPdgN2gAu67hIdNqH2_guEuecO7Qlwwy0Ba2Q3sPMTZYtZl7kKfGYbRBuDY&mmp_pid=an_18303210021&uls_trackid=55s541ml00eq&utm_campaign=id_e99c8c3435979aa5&utm_content=----&utm_medium=affiliates&utm_source=an_18303210021&utm_term=f24f8bdb9aoh",
    imagem: ""
  },
  {
    id: "jarra-vidro-suica",
    categoria: "Cozinha",
    nome: "Jarra de Vidro Suíça 1L com Tampa",
    link: "https://shopee.com.br/product/1373441778/43478135704?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmQAAAAyYK73XbP8TEYf2uE29NsiDT_qqIDf1Esyz8eO0KvRWX3FIIjR-0NkJl9V_3mrqjCXJNNwtq5g_NHlDHu4Ogd3AMm22E4oTUY0WPp0vpswVqzxgztRhK11rLIVEviwYbJi0cfuAzvoD-D_F3xy1pQOKpZEQlEhRrO6Cd20og2fJ4GxnTYaDf6Lg3-9PsANF2FheTNzQ9Q&mmp_pid=an_18303210021&uls_trackid=55s5416f01eh&utm_campaign=id_f675eef091eec54f&utm_content=----&utm_medium=affiliates&utm_source=an_18303210021&utm_term=f24f7wbb9ynp",
    imagem: ""
  },
  {
    id: "organizador-porta-talheres",
    categoria: "Cozinha",
    nome: "Organizador de Utensílios / Porta-Talheres Ajustável e Expansível",
    link: "https://shopee.com.br/product/1291752853/44427865832?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmQAAAAz4CXUpuqhq8uMAcJBCRmeaqJB1ixIkb2PdbpDPWJoiBQYdvC0JwkGishVqsLr7g7ejFIeAekFaDBQq_xVhclCsm-Sb6Ps0FnTCSVthq6dbDHqsrpqCczdqm1NJ4ScoFHqD58V-IaWAisu2-XY7po0sZ93UsP-vS0xwQG71X4F4NpS6QYvp94OiQWnO0zbH-Yr27Bi3TA&mmp_pid=an_18303210021&uls_trackid=55s53n9q00er&utm_campaign=id_7e5168e4800d09a3&utm_content=----&utm_medium=affiliates&utm_source=an_18303210021&utm_term=f24eyt7gam4j",
    imagem: ""
  },
  {
    id: "liquidificador-philips-walita",
    categoria: "Cozinha",
    nome: "Liquidificador Daily Jarra San 600W Philips Walita",
    link: "https://www.mercadolivre.com.br/p/MLB15963681?matt_tool=38524122&pdp_filters=item_id:MLB4663913192&ua=KhfM7mPsl7ZwY1dBOwOTYEerkJE__G3uIHjcNSU4asJS4W4#origin=share&sid=share&wid=MLB4663913192&action=copy",
    imagem: ""
  },
  {
    id: "mixer-2em1-turbo",
    categoria: "Cozinha",
    nome: "Mixer 2 em 1 Turbo 500W",
    link: "https://www.mercadolivre.com.br/p/MLB42760973?matt_tool=38524122&pdp_filters=item_id:MLB6762026570&ua=RGVxSK223nCuU3mmPC8J4tjz4B4EiDIKoXeLFN6HEUQlWrY#origin=share&sid=share&wid=MLB6762026570&action=copy",
    imagem: ""
  },
  {
    id: "pipoqueira-eletrica",
    categoria: "Cozinha",
    nome: "Pipoqueira Elétrica Sem Óleo 1200W",
    link: "https://www.mercadolivre.com.br/up/MLBU3838018898?matt_tool=38524122&pdp_filters=item_id:MLB4516233433&ua=O0YMH0qqdppfjHP1osyEqgvbFu7nReefnrVf4ewfbl-UXOA#origin=share&sid=share&wid=MLB4516233433&action=copy",
    imagem: ""
  },
  {
    id: "sanduicheira-mallory",
    categoria: "Cozinha",
    nome: "Sanduicheira Elétrica Mallory Classic Grill 2 em 1",
    link: "https://www.mercadolivre.com.br/p/MLB24163113?matt_tool=38524122&pdp_filters=item_id:MLB4306362589&ua=MhcuN_edyDFbaIAxHaEMfBH-3UNmdTrQh3DwDDvuNaqPD1g#origin=share&sid=share&wid=MLB4306362589&action=copy",
    imagem: ""
  },
  {
    id: "air-fryer-quad-fry-elgin",
    categoria: "Cozinha",
    nome: "Fritadeira Elétrica Air Fryer Quad Fry 4,2L Elgin",
    link: "https://www.mercadolivre.com.br/p/MLB52868715?matt_tool=38524122&pdp_filters=item_id:MLB6848618542&ua=vPAfQkxRhOCXptUnd7RpjG_5xWP8ta5-wj-INLBhRyB9JNM#origin=share&sid=share&wid=MLB6848618542&action=copy",
    imagem: ""
  },
  {
    id: "cesto-roupa-suja",
    categoria: "Cama & Banho",
    nome: "Cesto de Roupa Suja",
    link: "https://s.shopee.com.br/4AxwoOmWiU",
    imagem: ""
  },
  {
    id: "lencol",
    categoria: "Cama & Banho",
    nome: "Lençol",
    link: "https://s.shopee.com.br/6VLvgaKplB",
    imagem: ""
  },
  {
    id: "cabideiro",
    categoria: "Utilidades",
    nome: "Cabideiro",
    link: "https://shopee.com.br/product/359168917/22892838967?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElwAAAAy3Y2z3YAt-SJMqOY_IsHPqmS85hNEUvjyHdrmqGHGAGg96FmByDvTFuJFgY4dUltI42NjCJMvezATNbSduprj6DSoNlcftdATrfpYzjp4sIiUjdMUnSlY3JcCZm_UWGmGyN0yWctITy8rLIMxU3r_9aJyJ0HAvm0cJ62EQV03iNkLCV6nMt_mbuccd2AEF0_gZIJA&mmp_pid=an_18395720153&uls_trackid=55tm1fug02ct&utm_campaign=id_a3edd5ab3094ac9f&utm_content=----&utm_medium=affiliates&utm_source=an_18395720153&utm_term=f35v1no32gd5",
    imagem: ""
  },
  {
    id: "dispenser",
    categoria: "Utilidades",
    nome: "Dispenser",
    link: "https://shopee.com.br/product/1483446294/58210789911?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmQAAAAyPMN2JIZaeE-wNvXOkmKMLZ52rY3Wai2xkKcaD31wBV-brknEc0Hv3k_Fb7YvFbNI0GAzj-D3PxzbhIXKOHSu8UiXPVMm5qT1t5OKONOPB9pPe8swWwtkbfAqKRWroOlQ5ceMmgGHYX4cAD4CT5xpAmYNFeyOz3A4eO2aWvQ0JOBEE6M2CHVsC18Ab5UotCTRQKH6J8Q&mmp_pid=an_18395720153&uls_trackid=55tjf3c600k8&utm_campaign=id_7c0b6ee3d157bbbb&utm_content=----&utm_medium=affiliates&utm_source=an_18395720153&utm_term=f33zmnvvqtdd",
    imagem: ""
  },
  {
    id: "kit-vassoura",
    categoria: "Utilidades",
    nome: "Kit Vassoura",
    link: "https://shopee.com.br/product/1341692534/20998330719?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmQAAAAwQMvTEAK0nLLH-JDPEZVI0dq7MG-9WyP9mEXFbO0u2GVlHQtYl3PSBLDsCo1_k6_VH6Mp3Y0hnCvIf_8YeCDBwS1svC5w_JIkErN6WkB14oc3n4fyL3FSevalH70a-3jcadQCschjDJ_rmfQnTbZQTypTDU61l_gZ_W-ObG1P_DqxNID_JIMBFDCNYWtuZNYb-56f0ug&mmp_pid=an_18303210021&uls_trackid=55sc8u1400il&utm_campaign=id_dd59dab3f3b2b12b&utm_content=----&utm_medium=affiliates&utm_source=an_18303210021&utm_term=f29mdm5cptm5",
    imagem: ""
  },
  {
    id: "ferro-passar",
    categoria: "Utilidades",
    nome: "Ferro de Passar",
    link: "https://www.amazon.com.br/Electrolux-BR-CNF1-ESI10-FERRO/dp/B09K3FNS7W/ref=asc_df_B09K3FNS7W?mcid=2e393b56d1f33a6891b0d2d39e9f9c3f&tag=googleshopp00-20&linkCode=df0&hvadid=709964506301&hvpos=&hvnetw=g&hvrand=15040291638725610473&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100591&hvtargid=pla-1594523021205&hvocijid=15040291638725610473-B09K3FNS7W-&hvexpln=0&language=pt_BR",
    imagem: ""
  },
  {
    id: "panela-pressao",
    categoria: "Cozinha",
    nome: "Panela de Pressão",
    link: "https://www.amazon.com.br/Borracha-Panela-Press%C3%A3o-Rochedo-Original/dp/B0FCMTYXYQ/ref=asc_df_B0FCMTYXYQ?mcid=598e0e77065037f8bd603d57a9beeb04&tag=googleshopp00-20&linkCode=df0&hvadid=759181789176&hvpos=&hvnetw=g&hvrand=12456488097637969082&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198088&hvtargid=pla-2441419184282&psc=1&hvocijid=12456488097637969082-B0FCMTYXYQ-&hvexpln=0&language=pt_BR",
    imagem: ""
  },
  {
    id: "jogo-americano",
    categoria: "Cozinha",
    nome: "Jogo Americano",
    link: "https://www.mercadolivre.com.br/8-jogo-americano-juta-azul-impermeavel-limpa-facil-pvc/p/MLB26402605?pdp_filters=item_id%3AMLB3872191465",
    imagem: ""
  },
  {
    id: "jogo-de-panela-caribe",
    categoria: "Cozinha",
    nome: "Jogo de Panela Caribe Tramontina",
    link: "https://www.mercadolivre.com.br/jogo-de-panelas-caribe-com-4-pecas-bege-tramontina/p/MLB57705856?pdp_filters=item_id%3AMLB6188487886",
    imagem: ""
  },
  {
    id: "aspirador-po",
    categoria: "Utilidades",
    nome: "Aspirador de Pó",
    link: "https://www.amazon.com.br/MONDIAL-Aspirador-Turbo-Cycle-Vermelho/dp/B07JFSM214/ref=asc_df_B07JFSM214?mcid=a545cd0359a33480963866679b206a15&tag=googleshopp00-20&linkCode=df0&hvadid=709968341272&hvpos=&hvnetw=g&hvrand=4508155823556345539&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198088&hvtargid=pla-810989227094&psc=1&hvocijid=4508155823556345539-B07JFSM214-&hvexpln=0&language=pt_BR",
    imagem: ""
  },
  {
    id: "jogo-frigideira",
    categoria: "Cozinha",
    nome: "Jogo de Frigideira",
    link: "https://www.amazon.com.br/Tramontina-JOGO-FRIGIDEIRAS-CARIBE-PRETO/dp/B09W48TKX2/ref=asc_df_B09W48TKX2?mcid=12db6eb355923e958fc46e872b951cc5&tag=googleshopp00-20&linkCode=df0&hvadid=709964506241&hvpos=&hvnetw=g&hvrand=16951100188608845124&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198088&hvtargid=pla-1676373550294&psc=1&hvocijid=16951100188608845124-B09W48TKX2-&hvexpln=0&language=pt_BR",
    imagem: ""
  },
  {
    id: "jogo-faca",
    categoria: "Cozinha",
    nome: "Jogo de Faca",
    link: "https://www.amazon.com.br/Facas-Pe%C3%A7as-Plenus-Tramontina-Cutelaria/dp/B07K32CH6K/ref=asc_df_B07K32CH6K?mcid=770c6a1b0ece37f9b8602d702eb86051&tag=googleshopp00-20&linkCode=df0&hvadid=709857067836&hvpos=&hvnetw=g&hvrand=4949732423617074905&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198088&hvtargid=pla-810983355288&psc=1&hvocijid=4949732423617074905-B07K32CH6K-&hvexpln=0&language=pt_BR",
    imagem: ""
  },
  {
    id: "ralador",
    categoria: "Cozinha",
    nome: "Ralador",
    link: "https://www.amazon.com.br/Ralador-Pratic-Brinox-2204-328/dp/B08KLW44S7/ref=asc_df_B08KLW44S7?mcid=1912a95a66c131abb35e5c3eda776459&tag=googleshopp00-20&linkCode=df0&hvadid=709964506241&hvpos=&hvnetw=g&hvrand=16209800987537973176&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198088&hvtargid=pla-1393294504020&psc=1&hvocijid=16209800987537973176-B08KLW44S7-&hvexpln=0&language=pt_BR",
    imagem: ""
  },
  {
    id: "tabua-corte",
    categoria: "Cozinha",
    nome: "Tábua de Corte",
    link: "https://www.mercadolivre.com.br/tabua-de-corte-saudavel-pp-aco-inox-para-cortar-dupla-face/up/MLBU3118686696?pdp_filters=item_id%3AMLB4027938361",
    imagem: ""
  },
  {
    id: "balde-retratil",
    categoria: "Utilidades",
    nome: "Kit Balde e Cesto Retrátil",
    link: "https://www.mercadolivre.com.br/kit-balde-10l-retratil-e-cesto-15l-retratil-com-rodinha/up/MLBU2990816654?pdp_filters=item_id%3AMLB3963417491",
    imagem: ""
  },
  {
    id: "porta-tempero",
    categoria: "Cozinha",
    nome: "Porta Tempero Giratório",
    link: "https://www.amazon.com.br/Condimentos-Girat%C3%B3rio-Armazenamento-Especiarias-Resistente/dp/B0GXC6KGKX",
    imagem: ""
  },
  {
    id: "porta-papel-toalha",
    categoria: "Cozinha",
    nome: "Porta Papel Toalha",
    link: "https://www.amazon.com.br/Porta-Rolos-Preto-Alum%C3%ADnio-Ganchos/dp/B0FZK41LW2/ref=asc_df_B0FZK41LW2?mcid=7bc732376db7309db2ff935fb4c1c5a7&tag=googleshopp00-20&linkCode=df0&hvadid=796541962718&hvpos=&hvnetw=g&hvrand=11082563199944995239&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198088&hvtargid=pla-2465526289166&psc=1&hvocijid=11082563199944995239-B0FZK41LW2-&hvexpln=0&language=pt_BR",
    imagem: ""
  },
  {
    id: "lixeira-banheiro",
    categoria: "Cama & Banho",
    nome: "Lixeira com Sensor (banheiro)",
    link: "https://www.mercadolivre.com.br/lixeira-sensor-inteligente-automatica-preto-de-proximidade-16-litros-cozinha-banheiro-escritorio/p/MLB67633721?pdp_filters=item_id:MLB6575031602",
    imagem: ""
  },
  {
    id: "lixeira-cozinha",
    categoria: "Cozinha",
    nome: "Lixeira de Cozinha",
    link: "https://www.amazon.com.br/Lixeira-Coza-10902-0008-Preto/dp/B077L7FQ2C?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1ZZFT5FULY4LN",
    imagem: ""
  },
  {
    id: "kit-espatulas",
    categoria: "Cozinha",
    nome: "Kit Espátulas",
    link: "https://www.mercadolivre.com.br/conjunto-utensilios-profissional-10-pecas-cozinha-silicone-cinza-escuro/p/MLB68295745?pdp_filters=item_id:MLB4617409639",
    imagem: ""
  }
];
