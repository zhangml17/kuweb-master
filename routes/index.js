var express = require('express');
var router = express.Router();
var child_process = require('child_process');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('install');
});

router.post('/',function(req,res){
  
  //定义参数值

  var masterNode = req.body['master_node'];
  var sshPwd = req.body['ssh_pwd'];
  var nodeNode = req.body['node_node'];
  var virtualIP = req.body['virtual_ip'];
  var haStrategy = req.body['ha_strategy'];
  var cniStrategy = req.body['cni_strategy'];
  var profixStrategy = req.body['profix_strategy'];
  var kubernetVersion = req.body['version'];

  //定义参数

  var M = '-m';
  var N = '-n';
  var P = '-p';
  var A = '-a';
  var V = '-v';
  var C = '-c';
  var X = '-x';
  var K = '-k';


  if(nodeNode == ""){
    N = "";
  }

  if(virtualIP == ""){
    V = "";
  }

  console.log('=================================');

  console.log('master:'+masterNode);
  console.log('SSH:'+sshPwd);
  console.log('node:'+nodeNode);
  console.log('virtual ip:'+virtualIP);
  console.log('HA:'+haStrategy);
  console.log('ser:'+profixStrategy);
  console.log('CNI:'+cniStrategy);
  console.log('Kuber:'+kubernetVersion);

  console.log('=================================');
   
 child_process.execFile('/root/kuweb-master/init.sh',[M,masterNode,N,nodeNode,P,sshPwd,A,haStrategy,V,virtualIP,C,cniStrategy,X,profixStrategy,K,kubernetVersion],function(err,stdout,stderr){
// child_process.execFile('./init.sh',function(err,stdout,stderr){ 
   console.log('why?');
   console.log(process.env.PATH);
   if(err){
      console.log('in err');
      console.log(err);
    }else if(stdout){
      console.log('in stdout');
      console.log(stdout);
    }else if(stderr){
      console.log('in stderr');
      console.log(stderr);
    }       
   });
});


module.exports = router;
