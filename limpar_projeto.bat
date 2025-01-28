@echo off
cd "c:/Users/julli/joabe teste/avx-digital-marketing"
rmdir /s /q src
rmdir /s /q node_modules
rmdir /s /q dist
del /f /q .gitignore
del /f /q package-lock.json
del /f /q package.json
del /f /q vite.config.ts
del /f /q tsconfig.json
del /f /q netlify.toml
