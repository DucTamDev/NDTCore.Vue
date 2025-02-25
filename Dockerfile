# Stage 1: Build Vue app với Vite
FROM node:22.9.0 AS builder
WORKDIR /app

# Copy file package.json và package-lock.json trước để cache dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy toàn bộ source code và build
COPY . .
RUN npm run build

# Stage 2: Dùng Nginx để serve Vue app
FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy cấu hình Nginx nếu cần (không bắt buộc)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose cổng 80
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
