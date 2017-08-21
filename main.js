//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (hungry) {
  this.status = "normal";
  this.color = "black";
  this.hungry = hungry;
  // this.owner = owner;
}

let sadie = new Dog(false);

let moonshine = new Dog(true);

let atticus = new Dog();

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (pet, feed, cool) {
  this.pet = pet => {
    pet.status = "happy";
  };

this.feed = feed => {
  feed.hungry = false
}

  this.cool = cool;
}

let mason = new Human("sadie", false, false);

let julia = new Human("", true, true);

// Instances of Human
// Needed: mason, julia
