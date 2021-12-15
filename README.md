# DIO Repositório para estudos - Bootcamp - Frontend Developer

Este respositório é destinado para publicação de estudos, desafios e tarefas do Bootcamp Inter Frontend Developer

## Primeira configuração do repositório local
~~~
git config --global user.name "Henderson-dev"
~~~
~~~
git config --global user.email teconet.arte@gmail.com
~~~

## Ligando o repositório remoto ao repositório local

Para iniciar um respositório local use o terminal do Git Bash, dentro de uma pasta de trabalho digite:
~~~
git init
~~~

Para verificar se o repositório Local foi criado use:
~~~
git status
~~~

Adicionando repositório remoto ao repositório local
~~~
git remote add origin https://github.com/Henderson-dev/DIO-Bootcamp_Frontend_Developer.git
~~~

Baixando arquivos do repositório online com o repositório local
~~~
git pull origin main
~~~

## Subindo arquivos locais para a branch main no respositório online

Adicionando os arquivos modificados ao stage
~~~
git add *
~~~
~~~
git add .
~~~

Adicionando Commit aos arquivos modificados
~~~
git commit -m "Comentário do commit"
~~~

Fazendo o Push, empurando os arquivos do repositório local para o respositório remoto
~~~
git push -u origin master
~~~