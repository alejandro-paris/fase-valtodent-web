#!/usr/bin/env bash
# Compila la web con la ruta base de GitHub Pages y la sube a la rama `gh-pages`.
# Se usa en lugar de un workflow de Actions mientras el token de `gh` no tenga el permiso
# `workflow`. Uso: npm run deploy
set -euo pipefail
cd "$(dirname "$0")/.."

REMOTE_URL="$(git remote get-url origin)"
OWNER_REPO="$(echo "$REMOTE_URL" | sed -E 's#.*github.com[:/]##; s#\.git$##')"
OWNER="${OWNER_REPO%%/*}"
REPO="${OWNER_REPO##*/}"

ASTRO_SITE="https://${OWNER}.github.io" ASTRO_BASE="/${REPO}" npm run build

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
cp -a dist/. "$TMP/"
touch "$TMP/.nojekyll"
(
  cd "$TMP"
  git init -q -b gh-pages
  git add -A
  git -c user.name="$(git -C "$OLDPWD" config user.name)" -c user.email="$(git -C "$OLDPWD" config user.email)" \
    commit -q -m "deploy: $(git -C "$OLDPWD" rev-parse --short HEAD)"
  git push -q --force "$REMOTE_URL" gh-pages
)
echo "Publicado en https://${OWNER}.github.io/${REPO}/"
