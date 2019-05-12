cd ~/mprado-blog/;
git pull origin master;
sudo docker-compose down;
sudo npm --prefix strapi-app install;
sudo npm --prefix blog-app run build || (sudo npm --prefix blog-app install && sudo npm --prefix blog-app run build);
sudo docker-compose up -d;
