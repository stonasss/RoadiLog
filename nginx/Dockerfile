# busca imagem base do nginx (use :VERSAO se for necessário)
FROM nginx

# removendo a configuraçao padrão
RUN rm /etc/nginx/conf.d/default.conf

# copiando a configuração nova
COPY nginx.conf /etc/nginx/conf.d