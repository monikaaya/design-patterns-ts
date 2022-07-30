// Simplified API to hide low level details

// complex systems
class PlumbingSystem {
    // low level access to plumbing system
    setPressure(v: number) { }
    turnOn() { }
    turnOff() { }
}

class ElectricalSystem {
    // low level access to electrical system
    setVoltage(v: number) { }
    turnOn() { }
    turnOff() { }
}

// simplified wrapper for complex systems
class House {
    private plumbing = new PlumbingSystem();
    private power = new ElectricalSystem();

    public turnOnSystems() {
        this.power.setVoltage(120);
        this.power.turnOn()
        this.plumbing.setPressure(500);
        this.plumbing.turnOn()
    }

    public shutDown() {
        this.plumbing.turnOff()
        this.power.turnOff()
    }
}

// ugly details hidden from the end user
const client = new House();
client.turnOnSystems();
client.shutDown();