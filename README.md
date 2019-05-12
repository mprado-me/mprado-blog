# mprado-blog

## Setup local

### Iniciando o strapi

```
(sudo -s source .strapi_env && npm --prefix strapi-app run start || (sudo npm --prefix strapi-app install && sudo -s source .strapi_env && npm --prefix strapi-app run start);
```

### Iniciando o blog (front-end)

```
sudo npm --prefix blog-app run start || (sudo npm --prefix blog-app install && sudo npm --prefix blog-app run start)
```

## Setup em produção (Ubuntu 16.04)

### Conectar na VM

```
ssh -i "~/.ssh/mprado_blog_key.pem" ubuntu@ec2-54-234-143-167.compute-1.amazonaws.com;
```

### Instalando o docker

```
sudo apt update -y;
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common;
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -;
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable";
sudo apt update -y;
apt-cache policy docker-ce;
sudo apt install -y docker-ce;
sudo systemctl status docker;
```

### Instalação do docker-compose

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose;
sudo chmod +x /usr/local/bin/docker-compose;
docker-compose --version;
```

### Instalação do nodejs 10.x.x

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -;
sudo apt install nodejs;
```

### Clonando o repositório

```
git clone https://github.com/marcoprado17/mprado-blog.git;
```

### Criando e preechendo as variáveis de ambiente

```
cd ~/mprado-blog;
sudo nano .mongo_env;
sudo nano .strapi_env;
```

### Gerando o certificado ssl

Alterar o arquivo do nginx para gerar o certificado ssl. Não esquecer de alterar o arquivo após a geração do certificado ssl

```
sudo ./bash_scripts/init_letsencrypt.sh 0 marco.pdsv@gmail.com mprado.me,www.mprado.me,strapi.mprado.me;
```

### Iniciando a aplicação

```
cd ~/mprado-blog;
sudo npm --prefix strapi-app install;
sudo npm --prefix blog-app run build || (sudo npm --prefix blog-app install && sudo npm --prefix blog-app run build);
sudo docker-compose up -d;
```

## Atualização do código em produção

```
ssh -i "~/.ssh/mprado_blog_key.pem" ubuntu@ec2-54-234-143-167.compute-1.amazonaws.com;
sudo /home/ubuntu/mprado-blog/bash_scripts/update_server.sh;
```
