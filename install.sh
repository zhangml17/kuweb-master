#!/bin/sh

#download nodejs
#wget https://nodejs.org/dist/v8.11.3/node-v8.11.3.tar.gz

#tar -xzvf node-v8.11.3.tar.gz

#install
#cd node-v8.11.3

#./configure && make && make install

#安装express
#npm install -g express-generator

#从github下载项目
#wget https://github.com/zhangml17/kuweb/archive/master.zip

#解压
#判断unzip解压工具是否安装
#没有，则先安装
#否则，执行:
#yum install unzip && unzip ./master.zip

#删除下载的安装包
#rm -rf node-v8.11.3.tar.gz  master.zip

#判断防火墙是否关闭
#若没有，则关闭
#否则，执行：
cd kuweb-master && npm install && npm start

