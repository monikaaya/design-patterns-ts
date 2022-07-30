// use a function or method create objects, instead of directly using the new keyword

class IOSButton { }

class AndroidButton { }

const os = "ios";

// Without Factory
const button1 = os == "ios" ? new IOSButton() : new AndroidButton();
// duplication of the same conditional logic
const button2 = os == "ios" ? new IOSButton() : new AndroidButton();

class ButtonFactory {
    createButton(os: string): IOSButton | AndroidButton {
        if (os === 'ios') {
            return new IOSButton()
        } else {
            return new AndroidButton()
        }
    }
}

// With Factory
const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
// conditional logic is resued
const btn2 = factory.createButton(os);