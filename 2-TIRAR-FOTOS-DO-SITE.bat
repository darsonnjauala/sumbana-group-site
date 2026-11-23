@echo off
title B-WOS Studio - Sessao Fotografica Automatica
echo ===================================================
echo [B-WOS] A fotografar todas as paginas do website...
echo ===================================================

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRO] O Node.js nao foi encontrado no teu computador!
    echo Por favor instala o Node.js em: https://nodejs.org
    pause
    exit /b
)

if not exist node_modules (
    echo [AVISO] O ambiente ainda nao foi preparado.
    echo Da dois cliques primeiro em 1-VER-SITE.bat para preparar a maquina.
    pause
    exit /b
)

node scripts\capture-screenshots.mjs

echo ===================================================
echo [B-WOS] Sessao concluida! A abrir pasta de fotos...
echo ===================================================
explorer screenshots
timeout /t 5
