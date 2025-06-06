#!/bin/bash

# Loop through all .png files in the current directory
for file in *.jpg; do
  # Skip if no .png files found
  [ -e "$file" ] || continue

  # Get filename without extension
  base="${file%.jpg}"

  # Convert to .webp
  cwebp "$file" -o "${base}.webp"

  # Rename original .png to end with 22.png
  mv "$file" "${base}22.png"
done

echo "Conversion complete."
