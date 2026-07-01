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
  }
];
