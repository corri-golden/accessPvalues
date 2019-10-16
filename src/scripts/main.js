console.log("Lets get it started in here")

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

// create variables for the keys
let chris = beatles.members[1].name 
let year = beatles.history.formed
let over = beatles.history.disbanded
let birth = beatles.members[1].birth
let albums = beatles.albums[3]

// used square bracket to create the sentence
console.log(`${chris}` + " was in the Beatles from " + `${year}` + " to"  + ` ${over}` + "." + " He was born in " + `${birth}` + "." + " He contributed heavily to the " + `${albums}` + ".")



//He was born in 1942. He contributed heavily to the Magical Myster Tour Album.