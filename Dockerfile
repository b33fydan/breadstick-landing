# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Install deps from lockfile (includes devDeps needed for tsc + vite build)
COPY package.json package-lock.json ./
RUN npm ci

# Build the Vite app -> /app/dist
COPY . .
RUN npm run build

# ---- Serve stage ----
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
