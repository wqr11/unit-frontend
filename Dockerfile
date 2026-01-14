FROM node:22-alpine3.23 as builder

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

RUN npm i -g pnpm

RUN pnpm i

COPY . .

RUN pnpm build

FROM nginx:1.29-alpine

COPY --from=builder /app/dist /var/www/html

CMD ["nginx", "-c", "./nginx.conf", "-g", "daemon off;"]