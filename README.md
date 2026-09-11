# Kika Magalhães

Site estático da marca pessoal Kika Magalhães, com portfólio autoral, páginas dos produtos CreedBuilder e Trefós e conexões com os projetos Canal Bíblia e Escola Bíblica.

## Pré-visualização local

Não há dependências complexas nem etapa de build. Na raiz do projeto, execute:

```bash
python3 -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Implantação em Produção (VPS Hostinger via Docker)

O site está preparado para ser publicado no VPS com Nginx e Traefik.

Para subir o projeto no servidor:

```bash
docker compose -f docker-compose.production.yml up -d --build
```

## Estrutura

- `/` — página principal da marca pessoal;
- `/creedbuilder/` — landing page do CreedBuilder;
- `/trefos/` — landing page do Trefós;
- `/escolabiblica/` — redirecionamento de compatibilidade para `https://escolabiblica.app.br/`;
- `/arte/` — portfólio visual, seleção do acervo e textos críticos;
- `/poesia/` — coleção curada de poemas autorais;
- `/suporte/`, `/privacidade/` e `/termos/` — páginas compartilhadas.

## Antes de publicar

1. Confirme se `contato@kikamagalhaes.com.br` e `suporte@kikamagalhaes.com.br` existem ou substitua os endereços em todos os arquivos HTML e em `assets/main.js`.
2. Acrescente gravações, instrumentos e informações musicais que você queira tornar públicas.
3. Revise nomes, descrições e recursos dos aplicativos.
4. Substitua os botões “Em breve no Google Play” pelos links oficiais.
5. Revise a política de privacidade e os termos conforme os dados e serviços realmente usados em cada aplicativo.
6. Configure os dois subdomínios na hospedagem e aponte cada um para a landing page correspondente, mantendo `/assets/` acessível.

## Subdomínios

Os registros DNS normalmente serão do tipo `CNAME` ou `A` apontando para o IP da VPS.

- `creedbuilder.kikamagalhaes.com.br` → `/creedbuilder/`
- `trefos.kikamagalhaes.com.br` → `/trefos/`

## Projetos com domínio próprio

- `canalbiblia.com` — plataforma Canal Bíblia e aplicativo Android `com.canalbiblia.app`;
- `escolabiblica.app.br` — plataforma Escola Bíblica Online.
