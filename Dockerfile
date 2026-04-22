FROM node:24-alpine AS build

WORKDIR /app

ARG AMEIDE_SITE_URL=https://learn.ameide.io
ARG AMEIDE_BASE_URL=/

ENV AMEIDE_SITE_URL=${AMEIDE_SITE_URL}
ENV AMEIDE_BASE_URL=${AMEIDE_BASE_URL}

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.29-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 8080
