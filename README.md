# VNWA - VulnerableNodeWebApplication

A vulnerable application you can use to learn main vulnerabilities and test your security applications!

 It uses MySQL + NodeJS + ExpressJS + Axios + NuxtJS.

![View Main Page](https://imagizer.imageshack.com/img923/4945/CLSIJA.png | width=50)

# Vulnerabilities and Solutions

* [VNWA wiki](https://github.com/SSANCA02/VulnerableNodeWebApplication/wiki)

## Server Setup


```bash
# go to backend directory
$ cd backend

# start backend
$ node index

# preventing NodeJS to crash
$ npm install forever -g
$ forever start index.js

#if NodeJS unexepcted token import
$ node -r esm index.js
```
## Database 

This is only a guide for those who do not have MySQL installed.
```bash
#Install mysql 
$ sudo apt-get install mysql-server
$ sudo mysql
$ sudo snap install mysql-workbench-community
#change auth_socket a mysql_native_password:
$ sudo mysql -u root -p
mysql> use mysql
mysql> SELECT User, Host, plugin FROM mysql.user;
mysql> UPDATE user SET plugin='mysql_native_password' WHERE User='root';
mysql> FLUSH PRIVILEGES;
#generate password
mysqladmin -u root password yourpassword
#if you enter the MySQL application and appears Cannot Connect to Database Sever
$ snap connect mysql-workbench-community:password-manager-service
$ snap connect mysql-workbench-community:ssh-keys

```

If you have MySQL installed, you can copy from database/db.sql.


## NuxtJS Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).