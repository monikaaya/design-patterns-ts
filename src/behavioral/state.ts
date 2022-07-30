// The object behaves differently based on a finite number of states

class Monkey {
    think(mood: string) {
        // swtich hell
        switch(mood) {
            case 'speak':
                return '🙊'
            case 'hear':
                return '🙉'
            case 'see':
            default:
                return '🙈'
        }
    } 
}

// the idea is related to finite state machines
interface State {
    think(): string;
}

class HappyState implements State {
    think() {
        return 'I am happy 😊'
    }
}

class SadState implements State {
    // same method different outcome
    think() {
        return 'I am sad 😢'
    }
}

class Human {
    state: State = new HappyState();

    think() {
        return this.state.think();
    }

    setState(state: State) {
        this.state = state;
    }
}
