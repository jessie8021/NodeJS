var spawn = require('child_process').spawn,
    // pwd = spawn('pwd');
  pwd = spawn('pwd', ['-g']);

pwd.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

pwd.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

pwd.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});


/*
  [ output ]


  case 1) spawn('pwd')

  >> child process exited with code 0
  >> stdout: /path

  case 2) spawn('pwd', ['-g'])

  >> child process exited with code 1
  >> stderr: pwd: illegal option -- g
  usage: pwd [-L | -P]

 */