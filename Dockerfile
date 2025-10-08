FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM busybox:1.30 AS runner

WORKDIR /app

COPY --from=builder /app/dist .

EXPOSE 810

CMD ["busybox", "httpd", "-f", "p", "810"]
# Port 810 because that is today's date <3