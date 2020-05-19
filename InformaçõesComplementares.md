# Linguagem/Framework escolhido: Cypress/Cucumber/JavaScript

Cypress é uma ferramenta de teste open source escrita inteiramente em javascript que acessa o browser da mesma forma que seria feito manualmente por um usuário. 
Sua promessa é de uma experiência completa em relação a testes de ponta a ponta com fácil instalação, criação de testes, manutenção, depuração e geração de evidências.

Este ano, mais uma vez, apareceu no Radar de Tecnologias como "ADOTE", o que demonstra a grande aceitação e visibilidade que a ferramenta tem ganhado na comunidade de automatização.

Considerando alguns pilares de tomada de decisão, quando falamos de ferramenta de automatização E2E, como:
- Curva de Aprendizagem
- Facilidade de Criação de Testes
- Facilidade de Manutenção
- Integração DevOps

Vemos que o Cypress atende a todos os critérios para adoção de uma ferramenta.
Abaixo falo um pouco mais sobre isso:

## Curva de Aprendizagem

O Cypress possui poucos passos para instalação e configuração do projeto inicial, liberando o QA para investir mais tempo na arquitetura do projeto.

## Facilidade de Criação de Testes

O próprio site do Cypress disponibiliza um tutorial para iniciantes além de um arcabouço de exemplos de testes.

## Facilidade de Manutenção

Por possuir log de resultados, vídeos e screenshots da execução dos testes, entre outros recursos, o Cypress também possibilita a depuração e manipulação de elementos em tempo real.
Além disso, por ser escrito em javascript abre muitas possibilidades de resolução de problemas ou implementação de cenários adversos com o uso puro do javascript.

## Integração DevOps

É totalmente possível integrar o Cypress com ambientes de integração contínua a partir de determinadas parametrizações e configurações. 
No projeto que eu estou atualmente, executamos os testes com Cypress no ambiente de íntegração contínua através do Azure, onde executamos steps que instalam as dependências necessárias para a execução do Cypress,rodam os testes e geram os relatórios e vídeos da execução. Se algum teste falhar, publicamos os artefatos de testes no próprio Azure.

# Importante

Por ser tratar de uma aplicação que não tenho controle, fiz muito uso de classes e xpath. Acredito que essa não seja uma boa prática, então, em projetos controlados, juntos com os devs definimos um padrão de elemento que será único e exclusivo para o uso de testes em todas as camadas da pirâmide para facilitar a automatização dos cenários.