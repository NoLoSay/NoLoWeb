#!/bin/bash

# Créez un dossier temporaire pour la construction
TEMP_BUILD_DIR="temp_build"
mkdir -p $TEMP_BUILD_DIR

# Copiez tous les fichiers sauf ceux que vous voulez exclure dans le dossier temporaire
rsync -av --exclude='*.stories.ts' . $TEMP_BUILD_DIR --exclude="$TEMP_BUILD_DIR"

# Changez de répertoire pour le dossier temporaire
cd $TEMP_BUILD_DIR

# Exécutez la commande de build
npx next build

# Revenez au répertoire d'origine
cd ..

# Supprimez le dossier temporaire après le build
rm -rf $TEMP_BUILD_DIR
