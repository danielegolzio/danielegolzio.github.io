import os
import random
import json

dir = "../pictures/"

images = [f for f in os.listdir(dir) if f.lower().endswith(".jpg")]

random.shuffle(images)

with open("images.json", "w") as file:
    json.dump(images, file)