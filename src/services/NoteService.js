/*
* Will need a simple AJAX library, mock for now.
* NOTE: Will eventually have user assigned as well.
* Want to: Sort by created date? Updated date?<-- I like updated date.
*/

const notes = [
    {
        id: 1,
        title: 'Shopping list',
        text: '1. Papaya\n2. Mangos\n3. Ground beef\n4. Liquor',
        created_at: '2017-10-23 13:38:09.007314',
        updated_at: '2017-12-19 13:38:09.007314'
    },
    {
        id: 2,
        title: 'Reminders',
        text: 'Pick up the dog.\nDon\'t chew your nails.\nBe a decent human being.',
        created_at: '2017-10-23 13:38:09.007314',
        updated_at: '2017-12-18 13:38:09.007314'
    },
    {
        id: 3,
        title: 'I\'m proud of',
        text: 'Not losing my mind today.',
        created_at: '2017-11-23 13:38:09.007314',
        updated_at: '2017-12-19 13:38:09.007314'
    },
    {
        id: 4,
        title: 'A lot of text',
        text: 'This is a mindless rambling. I\'m sure you will like it. Don\'t mind me, I\'m just talking to myself. This is a mindless rambling. I\'m sure you will like it. Don\'t mind me, I\'m just talking to myself. This is a mindless rambling. I\'m sure you will like it. Don\'t mind me, I\'m just talking to myself. This is a mindless rambling. I\'m sure you will like it. Don\'t mind me, I\'m just talking to myself. This is a mindless rambling. I\'m sure you will like it. Don\'t mind me, I\'m just talking to myself. This is a mindless rambling. I\'m sure you will like it. Don\'t mind me, I\'m just talking to myself.',
        created_at: '2017-11-23 13:38:09.007314',
        updated_at: '2017-12-17 13:38:09.007314'
    }
]

const index = () => {
    // will eventually do a real thing
    // IF LOGGED IN make the req, otherwise return null
    return notes.sort((a, b) => {
        return a.updated_at < b.updated_at;
    });
}

const show = (id) => {
    // will eventually do a real thing
    return notes.find((note) => id === note.id);
}

module.exports = {
    index,
    show
}