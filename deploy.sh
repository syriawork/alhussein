#!/bin/bash
# سكريبت مساعدة لتهيئة git ورفع الملفات إلى GitHub
# استبدل <USERNAME> و <REPO> بالقيم الخاصة بك

set -e

USERNAME="<USERNAME>"
REPO="<REPO>"

if [ "$USERNAME" = "<USERNAME>" ] || [ "$REPO" = "<REPO>" ]; then
  echo "Please edit deploy.sh and set USERNAME and REPO variables."
  exit 1
fi

git init
git add .
git commit -m "Initial site commit"

git branch -M main

git remote add origin https://github.com/$USERNAME/$REPO.git

git push -u origin main

echo "Files pushed. Now enable GitHub Pages in repository settings or use gh cli."
