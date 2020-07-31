from flask import Flask
import gkeepapi
from dotenv import load_dotenv
import os

load_dotenv()

keep = gkeepapi.Keep()
success = keep.login(os.getenv("Google-Email"), os.getenv("PASSWORD"))
allNotes = keep.all()
print(allNotes.title)
print(allNotes.text)

keep.sync()
