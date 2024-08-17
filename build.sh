#!/bin/bash

# Définir le répertoire temporaire pour les fichiers .stories.ts
TEMP_STORIES_DIR="temp_stories"
mkdir -p $TEMP_STORIES_DIR

# Déplacer les fichiers .stories.ts vers le répertoire temporaire
find . -name "*.stories.ts" -type f -exec mv {} $TEMP_STORIES_DIR \;

# Supprimer les fichiers .stories.ts du répertoire de base
find . -name "*.stories.ts" -type f -exec rm {} \;

# Vérifier si le répertoire `pages` ou `app` existe
if [ ! -d "./src" ] && [ ! -d "./app" ]; then
  echo "Error: Couldn't find any 'pages' or 'app' directory. Please create one under the project root."
  # Restaurer les fichiers .stories.ts
  mv $TEMP_STORIES_DIR/* .
  rmdir $TEMP_STORIES_DIR
  exit 1
fi

# Construire le projet Next.js
next build

# Restaurer les fichiers .stories.ts
find $TEMP_STORIES_DIR -name "*.stories.ts" -type f -exec mv {} ./ \;

# Supprimer le répertoire temporaire
rm -rf $TEMP_STORIES_DIR
