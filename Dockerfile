ARG NODE_IMAGE=node:20.15.1-alpine3.20

FROM $NODE_IMAGE as base
WORKDIR /app
RUN apk --no-cache add dumb-init && mkdir -p /app && chown node:node /app
USER node

FROM base as build
COPY --chown=node:node ./package*.json ./
COPY --chown=node:node . .
RUN npm ci && npm cache clean --force
RUN npm run build && npm prune --production

FROM base as production 
WORKDIR /app
ENV APP_PORT=8080
COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist
COPY --chown=node:node . .
EXPOSE $APP_PORT
CMD ["dumb-init", "node", "dist/main"]