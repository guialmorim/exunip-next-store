# Next Store 🏪

Uma aplicação web de um e-commerce usando [**Next.js**](https://github.com/zeit/next.js/) e [**MongoDB**](https://www.mongodb.com/), focando na simplicidade e com uma aplicabilidade no mundo real.

### Este projeto utiliza apenas Typescript [Typescript](https://www.typescriptlang.org)

## Dependencias

Este projeto utiliza as seguintes dependencias:

- `next.js` - v9.3 ou posterior requirida para **API Routes** e métodos de data fetching.
- `react` - v16.8 ou posterior para **react hooks**.
- `react-dom` - v16.8 ou posterior.
- `stripe` - para processar pagamentos.
- `mongodb` e `mongoose` - para o banco de dados.
- `chakra-ui` e `styled-components` - para estilização.
- `formik` e `yup` - para formulários e validações.
- `swr` - para gerencia de estados.

## Variáveis de Ambiente

As variáveis de ambiente [serão configuradas durante o tempo de build](https://nextjs.org/docs#build-time-configuration)

Variáveis de Ambiente neste projeto:

- `MONGODB_URI` Sua string de conexão do banco de dados (com credenciais).
- `MONGODB_DB` Nome do seu banco de dados.
- `NEXTAUTH_URL` URL da sua aplicação, para autenticação e callbacks.
- `AUTH0_CLIENT_ID` ID de cliente recebido do Auth0, você pode conseguir um [aqui](https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22button%22%7D&email=undefined)
- `AUTH0_CLIENT_SECRET` (apenas se você utiliza `express-session`) A chave para ser usada no `express-session`.
- `AUTH0_DOMAIN` (opcional, Cloudinary **apenas**) variável de ambiente para configuração de Cloudinary. Veja [aqui](https://cloudinary.com/documentation/node_integration#configuration).

## Desenvolvimento

Inicie o servidor de desenvolvimento executando o comando `yarn dev` ou `npm run dev`. Este projeto suporta as variáveis de ambiente usando um arquivo `.env`. Começe criando um arquivo `.env` ou `.env.local` com as variáveis citadas acima.

### `.env`

Incluo minhas próprias variáveis ​​de ambiente em [.env.example](.env.example) para fins de experimentação. Por favor, substitua-os pelas suas. Você pode experimentá-los em desenvolvimento, renomeando-o para`.env`.

Na produção, é recomendável definir as variáveis ​​de ambiente usando as opções fornecidas por seus provedores de nuvem / hospedagem. **Não commite `.env`**.

## Implantação (Deploy)

Este projeto pode ser implantado com [Vercel](https://vercel.com/) ou [em qualquer lugar onde Next.js pode ser implantado](https://nextjs.org/docs/deployment). Certifique-se de definir as variáveis ​​de ambiente usando as opções fornecidas por seus provedores de hospedagem.

Depois de buildar o projeto utilizando `npm run build`, simplesmente inicie o servidor com `npm run start`.

Você também pode implantar isso com provedores serverless, desde faça as configurações corretas.

## Licença

[MIT](LICENSE)
