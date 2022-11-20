FROM python


COPY requirements.txt .

RUN pip install -r requirements.txt --no-cache-dir

COPY /app /app
COPY cred.json .

ENV GOOGLE_APPLICATION_CREDENTIALS=./cred.json

CMD [ "uvicorn", "app:app", "--reload", "--host", "0.0.0.0", "--port", "3000" ]

EXPOSE 3000