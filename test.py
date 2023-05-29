import requests
import json

res = requests.get("https://fakestoreapi.com/products")
obj = res.json()
# for i in obj:
#     print((i))
print(obj[0])