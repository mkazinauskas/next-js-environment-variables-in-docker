FROM node:15.8.0-alpine3.13 AS build
WORKDIR /build
COPY . .
RUN npm install --production && npm run build && ls -la


FROM node:15.8.0-alpine3.13 AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
COPY --from=build /build/next.config.js ./

RUN npm install next && ls -la

EXPOSE 3000
CMD npm run start