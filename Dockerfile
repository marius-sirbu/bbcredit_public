FROM oven/bun:alpine AS base


WORKDIR /app

COPY prisma ./prisma
COPY package.json bun.lockb ./
RUN bun install
RUN bun install -g prisma

COPY . .

FROM base AS builder

RUN bun run build

FROM base AS runner


WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN bun install
RUN bun run prisma:postinstall

EXPOSE 3000



CMD ["sh", "-c", "bun run server.js"]
