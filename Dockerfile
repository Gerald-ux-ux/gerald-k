# Stage 1: Build the application
FROM node:18-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Stage 2: Create the final image
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/package.json /app/package-lock.json ./
RUN npm install --omit=dev
COPY --from=build /app/.next ./.next
COPY --from=build /ap/.public ./.public
CMD [ "npm", "start" ]



