# Igreja de Cristo — Site Bootstrap 5

Primeira versão estática, mobile first, feita com Bootstrap 5.3.8 e Bootstrap Icons.

## Arquivos

- `index.html`: home com carousel, eventos, galeria resumida e contato rápido.
- `quem-somos.html`: história, missão, visão e valores.
- `eventos.html`: agenda e programação semanal.
- `galeria.html`: galeria inicial responsiva.
- `contato.html`: formulário, endereço, WhatsApp e área para mapa.
- `assets/css/styles.css`: somente o tema visual complementar à estrutura Bootstrap.
- `assets/js/main.js`: ano automático do rodapé e validação Bootstrap.
- `robots.txt` e `sitemap.xml`: base técnica de SEO.

## Antes de publicar

1. Trocar nome, endereço, telefone, e-mail e links de redes sociais.
2. Substituir `https://www.suaigreja.org.br` pelo domínio real nos HTMLs, `robots.txt` e `sitemap.xml`.
3. Trocar o WhatsApp `5548999999999` pelo número oficial.
4. Substituir imagens provisórias por fotos autorizadas da igreja e criar `assets/img/og-image.jpg`.
5. Conectar o formulário a um serviço/backend e inserir política de privacidade.
6. Inserir o Google Maps quando o endereço oficial for confirmado.

## Abrir localmente

Abra `index.html` no navegador ou use uma extensão como Live Server no VS Code.

## Galeria por eventos

A página `galeria.html` agora possui álbuns agrupados por evento e lightbox interativo:

- Clique em qualquer foto para ampliar.
- Navegue pelo álbum usando botões ou as teclas `←` e `→`.
- Pressione `Esc` para fechar.
- Cada navegação permanece dentro do evento selecionado.
