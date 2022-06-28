
# Sil-cards-template
A aplicação é uma página simples de renderização de um conjunto de cards, cada um contendo um conteúdo distinto, podendo este ser dinâmico ou não.
## Autores

- [@matheusmonteiro](https://github.com/Matheus-Mont)


## Stacks utilizadas

**Front-end:** Reactjs (Hooks), Typescript, Chakra-Ui, MirageJs e Axios

**Testes:** Jest, React Testing Library.


## Funcionalidades

* Visualização dos cards;
    * Seleção dos dados a serem visualizados através dos selects presentes nos cards;

## Um pouco da teoria

O front-end é composto por uma página única
que contém um header contendo a logo da empresa Sil-Sistemas, e um espaço
onde os cards são renderizados. O primeiro é um card contendo o número de casos
de COVID nos estados Rio de Janeiro, São Paulo e Minas Gerais. O segundo
é um conjunto de posts e seu respectivo número de visualizações, relacionados aos
termos Wallstreetbets e Bovespa. O último é um texto estático relacionado à
Trustpilot.

Os dois primeiros cards possuem conteúdo dinâmico, sendo este recuperado de uma
falsa API criada utilizando MirageJS.
## Requisitos para utilizar

* [Yarn](https://yarnpkg.com/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
## Pré-instalação

Clone o repositório para sua máquina inserindo no seu terminal o comando

```bash
  git clone git@github.com:Matheus-Mont/sil-cards-template.git
```
Navegue para a pasta onde o clone foi feito com o comando

```bash
  cd sil-cards-template
```
## Instalação

Na pasta raiz (/sil-cards-template), instale as dependências do projeto com yarn

```bash
  yarn install
```
Após o fim da instalação, inicie a aplicação:

```bash
  yarn start
```

Uma página se abrirá automaticamente no seu navegador com a aplicação carregada

OBS: Acesse pela url http://localhost:3000/
## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```
Nesse projeto ocorrem 2 tipos de testes, os de backend e os de frontend. Utilize o comando acima quando estiver em alguma das pastas indicadas.

## Feedback

Primeiramente, muito obrigado pelo seu tempo e por usar minha aplicação! 
Saiba que se você tiver algum feedback, eu vou adorar escutar!

Por favor me deixe saber por meio do meu [Linkedin](https://www.linkedin.com/in/matheusoliveiramonteiro/)
ou entre em contato pelo email: dev.matheusmonteiro@gmail.com

Até logo!