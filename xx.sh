#! /bin/bash

#下载init.sh 文件
wget https://raw.githubusercontent.com/humstarman/ikube/master/init.sh
#添加权限
chmod 777 ./init.sh

#给定义命令参数
MASTERNODE = ""
NODENODE = ""
SSHPWD = ""
HASTRATEGY = ""

while getopts "m:n:p:a:" arg
do
  case $arg in
    m)
      MASTERNODE=$OPTARG
      ;;
    n)
      NODENODE=$OPTARG
      ;;
    p)
      SSHPWD=$OPTARG
      ;;
    a)
      HASTRATEGY=$OPTARG
      ;;
    ?) #当有不认识的选项时arg为'?'
      echo "含有未知参数"
  exit 1
  ;;
  esac
done

#执行命令
./init.sh -m $MASTERNODE -n $NODENODE -p $SSHPWD -a $HASTRATEGY

echo $MASTERNODE
