# mprado-blog

## Setup

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

### Gerando o certificado ssl

Não esquecer de remover o redirect de http -> https

```
./init-letsencrypt.sh 0 marco.pdsv@gmail.com mprado.me,www.mprado.me;
```
