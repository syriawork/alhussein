@echo off
REM إعداد سريع لرفع المشروع على GitHub
SET USERNAME=<USERNAME>
SET REPO=<REPO>

IF "%USERNAME%"=="<USERNAME>" (
  echo يرجى تحرير deploy.bat وتعبئة USERNAME وREPO
  exit /b 1
)
IF "%REPO%"=="<REPO>" (
  echo يرجى تحرير deploy.bat وتعبئة USERNAME وREPO
  exit /b 1
)

git init
if errorlevel 1 goto git_error

git add .
if errorlevel 1 goto git_error

git commit -m "Initial site commit"
if errorlevel 1 goto git_error

git branch -M main
if errorlevel 1 goto git_error

git remote add origin https://github.com/%USERNAME%/%REPO%.git
if errorlevel 1 goto git_error

git push -u origin main
if errorlevel 1 goto git_error

echo.
echo تم الدفع. الآن فعّل GitHub Pages من إعدادات المستودع.
exit /b 0

:git_error
echo حدث خطأ أثناء تنفيذ git. تأكد من تثبيت Git وأنك تعمل داخل المجلد الصحيح.
exit /b 1
