#!/bin/sh
set -eu

DIST=dist
LINK_FILE="$DIST/links.html"
INDEX_FILE="$DIST/index.html"

if [ ! -f "$INDEX_FILE" ]; then
  echo "ERROR: $INDEX_FILE not found" >&2
  exit 1
fi
if [ ! -f "$LINK_FILE" ]; then
  echo "ERROR: $LINK_FILE not found" >&2
  exit 1
fi

# Try to extract the built CSS href from dist/index.html (looks like: href="/assets/index-xxxx.css")
css_path=$(grep -oE 'href="/?assets/[^"]+\.css"' "$INDEX_FILE" 2>/dev/null | sed 's/href="//; s/"$//' | head -n1 || true)

# Fallback: first css in dist/assets
if [ -z "$css_path" ]; then
  css_file=$(ls "$DIST"/assets/*.css 2>/dev/null | head -n1 || true)
  if [ -n "$css_file" ]; then
    css_path="/assets/$(basename "$css_file")"
  fi
fi

if [ -z "$css_path" ]; then
  echo "No built CSS found in $DIST" >&2
  exit 1
fi

# Backup and patch links.html. Use several explicit sed replacements to avoid regex portability issues.
cp "$LINK_FILE" "$LINK_FILE.bak"

# Replace common variants
sed -i \
  -e "s|href=\"/src/style.css\"|href=\"$css_path\"|g" \
  -e "s|href=\'src/style.css\'|href=\"$css_path\"|g" \
  -e "s|href=\"src/style.css\"|href=\"$css_path\"|g" \
  -e "s|href=/src/style.css|href=\"$css_path\"|g" \
  -e "s|href=src/style.css|href=\"$css_path\"|g" \
  "$LINK_FILE"

# As a last-resort, replace any occurrence of src/style.css with the css_path
sed -i "s|src/style.css|${css_path#/}|g" "$LINK_FILE" || true

echo "Patched $LINK_FILE -> $css_path"
