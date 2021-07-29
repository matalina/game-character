
function character() {
    let character = {
        id: '', // uniuqe value to identify the character easily in game terms
        name: {
            first: '',
            last: '',
            titles: [], // array of titles
        },
        stats: {
            physical: 5,
            magic: 5,
            reputation: 5,
            armor: 5,
            health: 5,
        },
        currency: 0,
        home_location: null,
        current_location: null,
        relationships: [], // array of relationships
        inventory: [], // array of items
        skills: [], // array of skills
    };

    return character;
}

module.exports = character;