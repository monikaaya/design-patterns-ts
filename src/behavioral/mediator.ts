// manages many-to-many relationship between objects

// Many Airplanes
class Airplane {
    land() {}
}

// Many Runways
class Runway {
    clear: boolean = true;
}

class Tower {
    clearForLanding(runway: Runway, plane: Airplane) {
        if (runway.clear) {
            console.log(`Plane ${plane} is clear for landing`);
            runway.clear = false;
        }
    }
}

const runway25A = new Runway();
const runway25B = new Runway();
const runway7 = new Runway();
const a = new Airplane();
const b = new Airplane();
const c = new Airplane();

const tower = new Tower();
tower.clearForLanding(runway7, a);
tower.clearForLanding(runway7, c);