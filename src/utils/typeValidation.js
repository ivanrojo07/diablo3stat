/**
 * Used for custom validations
 * @param hero {String}
 * @param time {String}
 * @param classSlug {String}
 */
function HeroData (hero, time, classSlug) {
    this.hero = hero
    this.time = time
    this.classSlug = classSlug
}

export {
    HeroData
}
