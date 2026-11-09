#!/usr/bin/env bash
# Compila la web y la copia a `.preview/`, la carpeta que sirve el servidor temporal de la red
# local (puerto 8090). Junto a la web se enlazan los borradores de marca y la página de fotos
# del cliente, que viven en el repositorio de la agencia.
set -euo pipefail
cd "$(dirname "$0")/.."
CLIENT=../../clients/fase-valtodent

npm run build
rm -rf .preview
mkdir -p .preview
cp -a dist/. .preview/
ln -sfn "$(realpath "$CLIENT/marca")" .preview/marca
ln -sfn "$(realpath "$CLIENT/fotos")" .preview/fotos
echo "Preview actualizada en .preview/"
