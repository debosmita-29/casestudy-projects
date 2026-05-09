FROM node:20-alpine AS builder
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-workspace.yaml turbo.json ./
COPY apps/web/package.json apps/web/package.json
COPY packages/shared/package.json packages/shared/package.json
COPY apps/web apps/web
COPY packages/shared packages/shared
RUN pnpm install --no-frozen-lockfile
RUN pnpm --filter web build

FROM nginx:1.27-alpine AS runtime
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 CMD wget -qO- http://localhost/ || exit 1
