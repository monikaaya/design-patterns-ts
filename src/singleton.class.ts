// Singleton: an object that can only be instantiated once

class Settings {
    static instance: Settings;
    public readonly mode = 'dark';

    // prevent new with private constructor
    private constructor() {
        // new Settings() won't work
    }

    static getInstance(): Settings {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }
}

export  const settings = Settings.getInstance();

