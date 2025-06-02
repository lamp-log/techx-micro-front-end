#!/bin/bash
# host/scripts/gen-remotes-dts.sh

set -e

REMOTE_DIR="src/@types/remote"
OUT_FILE="src/@types/remotes.d.ts"
REMOTE_VITE_CONFIG="../remote/vite.config.ts"

echo "// AUTO-GENERATED. DO NOT EDIT." > "$OUT_FILE"
echo "" >> "$OUT_FILE"

# Extract lines containing expose definitions from vite.config.ts
# Updated pattern to match any amount of whitespace before the module definition
grep -E '^\s*['"'"'"]\.\/[^'"'"'"]+['"'"'"]\s*:\s*['"'"'"]' "$REMOTE_VITE_CONFIG" | while read -r line; do
  # Extract the exposed name (e.g., "./Button" -> "Button")
  exposed_name=$(echo "$line" | sed -E 's/^[[:space:]]*['"'"'"]\.\/([^'"'"'"]+)['"'"'"].*/\1/')
  
  # Extract the file path (e.g., "./src/components/Button" -> "components/Button")
  file_path=$(echo "$line" | sed -E 's/.*['"'"'"]\.\/src\/([^'"'"'"]+)['"'"'"].*/\1/')
  
  # Remove file extension if present
  file_path=$(echo "$file_path" | sed 's/\.tsx$//' | sed 's/\.ts$//')
  
  # Skip if we couldn't extract both values
  if [ -z "$exposed_name" ] || [ -z "$file_path" ]; then
    continue
  fi
  
  # The module name for imports
  mod_name="remote/${exposed_name}"
  
  # Check if the type file exists
  if [ -f "$REMOTE_DIR/${file_path}.d.ts" ]; then
    import_path="./remote/${file_path}"
    
    # Special handling for UserContext
    if [ "$exposed_name" = "UserContext" ]; then
      echo "declare module \"$mod_name\" {" >> "$OUT_FILE"
      echo "  // Re-export all named exports" >> "$OUT_FILE"
      echo "  export { UserContext, UserProvider, useUser } from \"$import_path\";" >> "$OUT_FILE"
      echo "  export type { User, UserContextType } from \"$import_path\";" >> "$OUT_FILE"
      echo "  " >> "$OUT_FILE"
      echo "  // Re-export default" >> "$OUT_FILE"
      echo "  import UserProvider from \"$import_path\";" >> "$OUT_FILE"
      echo "  export default UserProvider;" >> "$OUT_FILE"
      echo "}" >> "$OUT_FILE"
    else
      echo "declare module \"$mod_name\" {" >> "$OUT_FILE"
      echo "  export { default } from \"$import_path\";" >> "$OUT_FILE"
      echo "  export * from \"$import_path\";" >> "$OUT_FILE"
      echo "}" >> "$OUT_FILE"
    fi
    echo "" >> "$OUT_FILE"
    
    echo "  ✓ Generated types for: $mod_name"
  else
    echo "  ⚠ Warning: Type file not found for ${exposed_name} at $REMOTE_DIR/${file_path}.d.ts"
  fi
done

echo ""
echo "✅ remotes.d.ts generated from vite.config.ts"
