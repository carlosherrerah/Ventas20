# Etapa de construcción
FROM node:20.11.0 as builder
WORKDIR /sources
COPY . .
RUN npm install
RUN npm run build

# Etapa de producción
FROM nginx:latest as final
COPY --from=builder /sources/dist/ventas28/ /usr/share/nginx/html
EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# C:\Dev\Ventas20>
# npm install
# ng serve
# http://localhost:4200

# docker build -t academia_bedu/ventas20:dev .
# docker run -d --name=angular -p 4200:80 academia_bedu/ventas20:dev 
# http://localhost:4200






