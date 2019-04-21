DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )";

sudo docker run -e MONGO_INITDB_ROOT_USERNAME=root \
                -e MONGO_INITDB_ROOT_PASSWORD=123456 \
                -e MONGO_INITDB_DATABASE=strapi \
                -p 27017:27017 \
                --name mpradoblog_mongodb \
                -d mongo:3.6.2 \
                || \
sudo docker start mpradoblog_mongodb;

sleep 5;

sudo docker run -e APP_NAME=strapi-app \
                -e DATABASE_CLIENT=mongo \
                -e DATABASE_HOST=mpradoblog_mongodb \
                -e DATABASE_PORT=27017 \
                -e DATABASE_NAME=strapi \
                -e DATABASE_USERNAME=root \
                -e DATABASE_PASSWORD=123456 \
                -e DATABASE_SSL=false \
                -e DATABASE_AUTHENTICATION_DATABASE=admin \
                -e HOST=localhost \
                -e NODE_ENV=development \
                -v $DIR/../strapi-app:/usr/src/api/strapi-app \
                -p 1337:1337 \
                --link mpradoblog_mongodb:mpradoblog_mongodb \
                --name mpradoblog_strapi \
                -d strapi/strapi \
                || \
sudo docker start mpradoblog_strapi;

npm --prefix $DIR/../blog run start || npm --prefix $DIR/../blog install; npm --prefix $DIR/../blog run start; 
