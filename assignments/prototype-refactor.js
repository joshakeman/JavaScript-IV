/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
	constructor(go_arg) {
		this.createdAt = go_arg.createdAt;
  		this.name = go_arg.name;
  		this.dimensions = go_arg.dimensions;
	}
	destroy() {
		  return `${this.name} was removed from the game.`
	}
}

class CharacterStats extends GameObject {
	constructor(cs_arg) {
		super(cs_arg)
		this.healthPoints = cs_arg.healthPoints;
	}
	takeDamage() {
		  return `${this.name} took damage.`

	}
}

class Humanoid extends CharacterStats {
	constructor(hu_arg) {
		super(hu_arg)
		this.team = hu_arg.team;
  		this.weapons = hu_arg.weapons;
  		this.language = hu_arg.language;
	}
	greet() {
		return `${this.name} offers a greeting in ${this.language}.`
	}
}

class Hero extends CharacterStats {
	constructor(he_arg) {
		super(he_arg)
	}
	attack(target) {
		let random_num = Math.floor(Math.random() * 10) + 1;
  		let damage_done = target.healthPoints - random_num;
  		target.healthPoints = damage_done;
  		if (damage_done <= 0) {
    		return `${this.name} launches an attack on ${target.name} and does ${random_num} points of damage! ${target.name} was killed! ` + target.destroy();
  		} else {
      		return `${this.name} launches an attack on ${target.name} and does ${random_num} points of damage! ${target.name} now has ${damage_done} health points left.`;
  		}
	}
}

class Villain extends Hero {
	constructor(v_arg) {
		super(v_arg)
	}
}

/* Created characters */

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const evilGuy = new Villain ({
  createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 3,
      height: 9,
    },
    healthPoints: 18,
    name: 'Evil Guy',
    team: 'Doooooom',
    weapons: [
      'Axe',
      'Mace',
    ],
    language: 'Evil',

});

const heroGuy = new Hero ({
  createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 8,
      height: 5,
    },
    healthPoints: 13,
    name: 'Hero Guy',
    team: 'Good',
    weapons: [
      'Sword',
      'Spear',
    ],
    language: 'Normal',

});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log(swordsman.healthPoints);
console.log(evilGuy.attack(swordsman));
console.log(swordsman.healthPoints);
console.log(evilGuy.attack(swordsman));
console.log(evilGuy.attack(swordsman));

console.log(swordsman.healthPoints);
console.log(heroGuy.attack(archer));
console.log(swordsman.healthPoints);
console.log(heroGuy.attack(archer));
console.log(heroGuy.attack(archer));