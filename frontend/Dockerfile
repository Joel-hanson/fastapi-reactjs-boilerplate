
FROM node:14.15-alpine
WORKDIR /app/frontend
COPY frontend/package.json /app/frontend/
RUN npm install --loglevel verbose

COPY ./frontend /app/frontend

EXPOSE 3000

CMD ["npm", "run", "start"]