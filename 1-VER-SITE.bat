@echo off
title B-WOS Studio - Visualizador Local
echo ===================================================
echo [B-WOS] A verificar ambiente de trabalho...
echo ===================================================

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRO] O Node.js nao foi encontrado no teu computador!
    echo Por favor faz o download gratuito e instala o Node.js em: https://nodejs.org
    echo Apos instalar, volta a dar dois cliques neste ficheiro.
    pause
    exit /b
)

if not exist node_modules (
    echo [B-WOS] Primeira utilizacao detectada!
    echo A instalar os componentes necessarios automaticamente...
    echo (Isto demora apenas 1 a 2 minutos, aguarda por favor...)
    call npm install
    call npx playwright install chromium
    echo [B-WOS] Instalacao concluida com sucesso!
)

echo ===================================================
echo [B-WOS] A iniciar o servidor de visualizacao local...
echo ===================================================

start http://localhost:3000
npm run dev
pause
