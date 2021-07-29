function relationship(character, affiliation) {
    return {
        character,
        affiliation, // npc, party member
        kinship: 0,
        romance: 0, // 0 - no romance, 1 - dating, 2 - bonded, -1 - ex
        flirt: 0, // only a positive number
    };
}

module.exports = relationhip;