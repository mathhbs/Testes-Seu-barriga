# Testes-Seu-barriga
automação referente ao desafio proposto pela Warren


O objetivo da automação dese site foi mostrar um pouco dos meus conhecimentos e uma ideia do que já faço no dia a dia atualmente.

Usei o Framework Cypress pra criar a automação de dois menus do site.

Ao invés de usar o Page objects, vi que poderia usar "cypress curtom commands" para deixar o codigo mais fácil de ser modificado e de ser entendido.

Diante disso, usei o arquivo “commands.js” onde coloquei um método pra fazer o login e outro pra excluir a conta.

Adicionei mais um arquivo o “commandsTransacoes.js” com um método capaz de criar uma transação de receita pendente.

Criei também um arquivo chamado “locators.js”, onde listei todos os locators usados na execução dos testes, com a finalidade de deixar o código (contido nos arquivos “conta.js” e “CriarMovimentacao.js”) mais limpo e compreensível.


Instalei um plugin de Xpath, porque eu já tenho um dominio nelas e vi que poderia usar, da mesma forma que já uso no meu trabalho.
