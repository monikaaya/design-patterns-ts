export const settings = Object.freeze({
    mode: 'dark',
})

// other code cannot add new properties
// settings.time_zone = 'India' // Object.preventExtenstions

// other code cannot delete existing properties
// delete settings.mode // Object.seal

// other code cannot change value of existing properties
// settings.mode = "light" // writable: false
