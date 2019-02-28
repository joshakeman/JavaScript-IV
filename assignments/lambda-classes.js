class Person {
	constructor(pArgs) {
		this.name = pArgs.name;
		this.age = pArgs.age;
		this.location = pArgs.location;
		this.gender = pArgs.gender;
	}
	speak () {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
	}
}


class Instructor extends Person {
	constructor(iArgs) {
		super(iArgs)
		this.specialty = iArgs.specialty;
		this.favLanguage = iArgs.favLanguage;
		this.catchPhrase = iArgs.catchPhrase;
	}
	demo (subject) {
		console.log(`Today we are learning about ${subject}`)
	}
	grade (student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`)
	}
}

class Student extends Person {
	constructor(sArgs) {
		super(sArgs)
		this.previousBackground = sArgs.previousBackground;
		this.className = sArgs.className;
		this.favSubjects = sArgs.favSubjects;
	}
	listsSubjects () {
		this.favSubjects.forEach(e => console.log(e));
	}

	PRAssignment (subject) {
		//do I need the this keyword on subject?
		console.log(`${this.name} has submitted a PR for ${subject}`)
	}

	sprintChallenge (subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`)
	}

}

class ProjectManager extends Instructor {
	constructor(pmArgs) {
		super(pmArgs)
		this.gradClassName = pmArgs.gradClassName;
		this.favInstructor = pmArgs.favInstructor;
	}
	standUp (slack_channel) {
		console.log(`${this.name} announces to ${slack_channel}, @channel standy times!`)
	}
	debugsCode (student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
	}
}

const stanley = new ProjectManager ({
	name: 'Stanley',
  	location: 'Placeton',
  	age: 31,
  	gender: 'male',
  	gradClassName: 'CS1',
  	favInstructor: 'Katie'
})

const charlie = new Student ({
	name: 'Charlie',
  	location: 'Townville',
  	age: 23,
  	gender: 'male',
  	previousBackground: 'Chocolate Factory Visitor',
  	className: 'Web18',
  	favSubjects: ['HTML', 'CSS', 'JS']
})

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

console.log(stanley.standUp('#Web18'))
console.log(stanley.debugsCode(charlie, "CSS"))
console.log(charlie.listsSubjects())
console.log(charlie.PRAssignment("Javascript"))
console.log(charlie.sprintChallenge("Javascript"))
console.log(fred.speak())
console.log(fred.demo("HTML"))
console.log(fred.grade(charlie, "JavaScript"))