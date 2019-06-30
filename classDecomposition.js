//----------с классом--------------
class userStore{
  constructor(name,score){
    this.name = name;
    this.score = score;
  }
  increment(){
    this.score++;
  }
}
let user1 = new userStore("Mike", 3);
user1.increment();



//-----------с конструктором----------------
let userStore = {
  increment: function(){this.score++)}
}
function userCreator(name, score){
  let newUser = Object.create(userStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
let user2 = userCreator("Mike", 3);
user2.increment();



//--------на функциях----------------
userCreator.prototype.increment = function(){this.score++; console.log(`Score of ${this.name} is ${this.score}`)}
function userCreator(name, score){
  this.name = name;
  this.score = score;
}
let user3 = new userCreator("Mike", 3);
user3.increment();