#encoding: UTF-8
#language: pt

Funcionalidade: Ver lista de Pokémons
    Usuário quer ver todos os pokémons existentes e consultar seu nome, número, descrição e tipo.

    Cenário: Listagem com sucesso        
        Quando o usuário abre o aplicativo
        Então ele deve ver todos os pokémons

Funcionalidade: Filtrar lista de Pokémons
    Usuário quer filtrar a lista de pokémons pelo nome do Pokémon.

    Cenário: Filtro encontra o Pokémon desejado        
        Quando o usuário digita um nome na caixa de busca
        Então ele deve ver o pokémon desejado

    Cenário: Filtro não encontra o Pokémon desejado        
        Quando o usuário digita um nome na caixa de busca
        Então ele deve ver uma mensagem de "Pokémon não encontrado :("
        
    