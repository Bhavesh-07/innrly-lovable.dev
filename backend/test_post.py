import urllib.request
import json

url = "http://127.0.0.1:8000/leads"
data = {
    "source": "contact",
    "name": "Vimal Patel",
    "email": "vimal@innrly.com",
    "company": "Innrly Hotels Group",
    "phone": "+1-555-0199",
    "properties": "5",
    "message": "Testing our new MySQL python backend integration!"
}

req = urllib.request.Request(
    url,
    data=json.dumps(data).encode("utf-8"),
    headers={"Content-Type": "application/json"}
)

try:
    with urllib.request.urlopen(req) as response:
        print("Status Code:", response.getcode())
        print("Response Body:", response.read().decode("utf-8"))
except Exception as e:
    print("Error:", e)
