from fastapi import FastAPI, Request, Form
from google.cloud import storage
from time import time

app = FastAPI()



@app.post("/api/upload")
async def read_blob_by_id(user_file = Form()):
    b_name = "loqi-loqi.appspot.com"

    fb = await user_file.read()

    return upload_blob(b_name, fb, str(time()))


def upload_blob(bucket_name, contents, destination_blob_name):

    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)
    blob.upload_from_string(data=contents, content_type="image/jpeg")
    blob.make_public()
    return blob.public_url