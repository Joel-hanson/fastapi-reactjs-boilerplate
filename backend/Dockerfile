FROM tiangolo/uvicorn-gunicorn:python3.6

COPY ./backend/requirements.txt requirements.txt
RUN pip install -r requirements.txt --no-cache-dir

WORKDIR /app/backend

COPY ./backend /app/backend