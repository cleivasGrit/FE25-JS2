class Animal {
    private readonly type: string;
    readonly hasFur: boolean;

    constructor(type: string, hasFur: boolean) {
        this.type = type;
        this.hasFur = hasFur;

    }
    setType(newType: string) {
        this.type = newType;
    }
}

const animal = new Animal('Frog', false);

// animal.hasFur = true;
animal.setType('squirrel')
console.log(animal)
// console.log(animal.type)

// Car class

class Car {
    public readonly make: string;
    public readonly model: string;
    public readonly year: number;

    private readonly doorLockCode: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;

        this.doorLockCode = this.generateDoorLockCode();
    }

    private generateDoorLockCode() {
        return Math.round(Math.random() * 1000000);
    }

    public openAllDoors() {
        console.log('opening doors with ', this.doorLockCode)
    }
}

const car = new Car('BMW', 'M3', 2016);
console.log(car.make, car.model, car.year)
car.openAllDoors()
