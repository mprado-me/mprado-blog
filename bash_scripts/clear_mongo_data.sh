#!/bin/bash

read -r -p "Voce tem certeza que quer limpar o banco de dados mongo? [y/N] " response
case "$response" in
    [yY][eE][sS]|[yY]) 
        DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

        sudo rm -r $DIR/../data/mongo;
        sudo mkdir -p $DIR/../data/mongo;
        sudo touch $DIR/../data/mongo/.gitkeep;

        echo "Banco mongo limpo com sucesso"
        ;;
    *)
        echo "Banco mongo não alterado"
        ;;
esac
