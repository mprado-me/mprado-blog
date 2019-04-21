DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )";

sudo docker stop mpradoblog_mongodb;
sudo docker stop mpradoblog_strapi;
# npm --prefix $DIR/../blog run stop;
