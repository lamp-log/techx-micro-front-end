#!/bin/bash
# host/scripts/gen-remotes-dts.sh

set -e

REMOTE_DIR="src/@types/remote"
OUT_FILE="src/@types/remotes.d.ts"

echo "// AUTO-GENERATED. DO NOT EDIT." > "$OUT_FILE"
echo "" >> "$OUT_FILE"

find "$REMOTE_DIR" -type f -name "*.d.ts" | while read -r file; do
  # Remove leading path and .d.ts extension
  rel="${file#$REMOTE_DIR/}"
  mod="remote/${rel%.d.ts}"
  import="./remote/${rel%.d.ts}"
  
  # If the file is an index, strip /index from the module name
  if [[ "$mod" == */index ]]; then
    mod="${mod%/index}"
  fi
  
  echo "declare module \"$mod\" {" >> "$OUT_FILE"
  echo "  export { default } from \"$import\";" >> "$OUT_FILE"
  echo "  export * from \"$import\";" >> "$OUT_FILE"
  echo "}" >> "$OUT_FILE"
  echo "" >> "$OUT_FILE"
done

echo "✅ remotes.d.ts generated."
