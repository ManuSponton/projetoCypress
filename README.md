# Arquitetura de Testes

## Pastas

- environments - podemos configurar um arquivo para cada ambiente diferente que os testes vão rodar. A diferenciação será implementada no arquivo plugins/index.js e assim, podemos customizar cada script dentro do package.json.
- integration/features - contém todos os cenários de negócio, escritos em gherkin. A lib que traduz esta semântica para o código é o Cucumber que é configurado no arquivo plugins/index.js.
Este cenários, normalmente, são mapeados juntos com o PO e cobrem os critérios de aceite.
- support/contextTestFiles - dentro desta pasta estão todos os arquivos que dão suporte ao teste agrupados por contexto de negócio. Desta forma, quando eu precisar dar manutenção na feature de searchPage, por exemplo, sei que tudo o que dá suporte a ela está dentro de contextTestFiles/SearchPage.
Esta abordagem, no meu ponto de vista, facilita e agiliza a manutenção de testes, além de deixar os arquivos muito mais organizados.
- steps_definitions - contém todos os steps responsáveis por executar as regras de negócio descritas nos arquivos .feature. Ele está separado em uma pasta diferente, pois o Cypress só consegue vincular uma feature a um step desta forma. 

## Nomenclatura

Todos os arquivos relacionados possuem o mesmo nome da funcionalidade para facilitar a identificação na manutenção.
Também gosto de seguir o padrão camel case, quando o nome possui mais de uma palavra.
As váriaveis e funcões seguem o camel padrão common case.

## Extensão de Arquivos

- .data - contém todos os dados que serão validados nos testes.
- .element - contém todos os elementos da página.
- .function - contém todas as funções que executam ações dentro da aplicação e que são chamadas nos steps.

## support/contextTestFiles/Common

Sempre que existe elementos e dados que podem ser utilizados em qualquer lugar do código, gosto de deixar dentro de arquivos em comuns para evitar duplicidade de código. 
Isto também serve, para constantes, verbos http, endpoints, etc. 
Além de evitar a duplicidade de código facilita a manutenção, uma vez que, caso necessário, alterar algo que é utilizado em vários lugares, precisarei alterar em um único arquivo.

## Arquivo Commands 

O Cypress possui uma API que permite criar comandos personalizados. Desta forma, é possível criar funções de comportamentos desejáveis em todos os cenários de testes, facilitando seu reuso e manutenção.
Esta é uma boa prática que a própria ferramenta recomenda em sua documentação.

## Artefatos de Testes

No arquivo Cypress.json é possível ativar a geração de vídeos, através do parâmetros "video" e também configurar o relatório de execução dos testes através dos parâmetros "reporter" e reporterOptions.

Na pasta "resultFailedTests" deixei exemplos de report e vídeo de um cenário com falha.
Estes artefatos podem ser publicados, em caso de falha, no ambiente de CI.

# Informações Adicionais

Adicionei a este projeto o eslint para automatizar a identificação de inconsistências que poderiam ser pegas em code review manual. 
Adicionei o arquivo Dockerfile para simular a criação de um container para um ambiente de CI.