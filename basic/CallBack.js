var obj = function () {};

obj.prototype.doSomething = function (arg1, arg2_) {
  var arg2 = typeof(arg2_) === 'string' ? arg2_ : null;

  var callback_ = arguments[arguments.length - 1];

  callback = (typeof(callback_) === "function"? callback_ : null);

  if(!arg2)
    return callback(new Error('second argument missing or not a string'));
  callback(arg1);
};

var test = new obj();

try{
  /*
  * [input]
  * case1: ('test', 3.55, function(err, value){})
  * case2: ('test', 'this', function(err, value){})
  * case3: ('test', function(err, value){})
  * */
  test.doSomething('test', 'this', function (err, value) {
    if(err) throw err;

    console.log(value);
  })
}catch (err) {
  /*
  * [output]
  * case1: [Error: second argument missing or not a string]
  * case2: test
  * case3: [Error: second argument missing or not a string]
  * */
  console.error(err);
}