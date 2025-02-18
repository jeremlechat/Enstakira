#! venv_3.12_Enstakira/bin/python

import requests
import csv
import json
import os

# 🔹 Remplace par ton URL Google Sheets exporté en CSV
url = "https://docs.google.com/spreadsheets/d/1I1rFkgxYQB0SCurecU4vFkUKIfPezUHcUyf8Y0qUiRc/export?format=csv"

# 🔹 Télécharger les données
response = requests.get(url)
response.raise_for_status()  # Vérifie si la requête a réussi

# 🔹 Lire les données CSV
lines = response.text.splitlines()
reader = csv.reader(lines)


# Charger l'ancien fichier JSON s'il existe
json_file_path = "score.json"
if os.path.exists(json_file_path):
    with open(json_file_path, "r", encoding="utf-8") as json_file:
        existing_data = json.load(json_file)
else:
    existing_data = {"labels": [], "dataValues": []}

next(reader)
for row in reader:
    _, pseudo, _ = row
    if pseudo not in existing_data["labels"]:
        existing_data["labels"].append(pseudo)
        existing_data["dataValues"].append(0)

with open(json_file_path, "w", encoding="utf-8") as json_file:
    json.dump(existing_data, json_file, indent=4, ensure_ascii=False)

print("Les scores ont été mis à jour dans score.json ✅")
