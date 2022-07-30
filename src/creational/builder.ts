// create object step-by-step with methods using the builder pattern.
class HotDog {
    constructor(
        public bun: string,
        public ketchup?: boolean,
        public mustard?: boolean,
        public kraut?: boolean
    ) { }
    
    addKetchup() {
        this.ketchup = true;
        return this
    }
    addMustard() {
        this.mustard = true;
        return this
    }
    addKraut() {
        this.kraut = true;
        return this
    }
}

// 🛑 tell me all about the object at once, in the constructor.
const yourHotDog = new HotDog('wheat', false, true, true);
console.log(yourHotDog)

// 🤪 step-by-step
const myHotDog = new HotDog('gluten free')
// method chaining
myHotDog
    .addKetchup()
    .addMustard()
    .addKraut()
console.log(myHotDog)