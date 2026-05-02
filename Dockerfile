# Kita sengaja pakai node:18 (bukan alpine) supaya Trivy bisa mendeteksi CVE
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY src/ ./src/

EXPOSE 3000

# Security best practice: jangan run sebagai root
USER node

CMD ["node", "src/index.js"]
