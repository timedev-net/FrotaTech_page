# Publicação da landing page FrotaTech

## Requisitos

- Linux 64 bits;
- Node.js 22.13 ou superior;
- NPM;
- Nginx ou outro proxy reverso, se quiser usar domínio e HTTPS.

## Instalação

Envie esta pasta ao servidor e execute dentro dela:

```bash
npm ci
npm run build
npm run start
```

O processo deve permanecer ativo no servidor. Para produção, pode ser
administrado com PM2 ou pelo systemd.

## Executando com PM2

Instale o PM2 uma única vez:

```bash
sudo npm install -g pm2
```

Inicie e configure a inicialização automática:

```bash
pm2 start npm --name frotatech -- run start
pm2 save
pm2 startup
```

Execute também o comando adicional exibido pelo `pm2 startup`.

## Exemplo de proxy no Nginx

```nginx
server {
    listen 80;
    server_name seudominio.com.br www.seudominio.com.br;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Depois de apontar o DNS para o servidor, use o Certbot para configurar HTTPS:

```bash
sudo certbot --nginx -d seudominio.com.br -d www.seudominio.com.br
```

## Atualizações futuras

Substitua os arquivos do projeto, preservando qualquer configuração própria do
servidor, e execute:

```bash
npm ci
npm run build
pm2 restart frotatech
```

## Arquivos da identidade visual

As imagens utilizadas pela página ficam em `public/`:

- `frotatech-symbol.png` — símbolo oficial;
- `hero-tech-bg.png` — imagem tecnológica do hero;
- `impact-tech-bg.png` — imagem da seção institucional.

