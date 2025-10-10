FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:latest AS runner

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist .
