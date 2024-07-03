import requests

import time

url = "https://catfact.ninja/fact"
# payload = {"text": "miss ko na siya"}

for i in range(1):

    response = requests.get(url)

    print(response.json()["fact"])

    # code = requests.get("https://http.cat/"+int.__str__(response.status_code))

    # print(code)

    time.sleep(1)
