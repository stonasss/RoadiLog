FROM node

WORKDIR /tmp/react

COPY . .

RUN npm i

#bugfix - enquanto usamos o CRA para buildar
#RUN chmod a+x /tmp/react/node_modules/.bin/react-scripts 

RUN npm run build

RUN mkdir -p /var/www/html

RUN mv dist/* /var/www/html 

WORKDIR /

RUN rm -rf /tmp/react
