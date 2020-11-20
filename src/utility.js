import { v4 as uuidv4 } from 'uuid';

const chillHop = () => {
    return [
        {
            name : "Slim Bobby",
            picture:
                "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            artist: "Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10454",
            id: uuidv4(),
            active: false
        },
        {
            name : "Reflection",
            picture:
                "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            id: uuidv4(),
            active: false
        },
        {
            name : "Aqueduct",
            picture:
                "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            artist: "Leavv",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9921",
            id: uuidv4(),
            active: false
        },
        {
            name : "The End",
            picture:
                "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
            artist: "Philanthrope, Fujitsu",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8518",
            id: uuidv4(),
            active: false
        },
        {
            name : "Trenches",
            picture:
                "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            artist: "Philanthrope, Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10247",
            id: uuidv4(),
            active: false
        },
        {
            name : "Cloud Dance",
            picture:
                "https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg",
            artist: "Blue Wednesday, Ian Ewing",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8930",
            id: uuidv4(),
            active: false
        },
        {
            name : "Butterfly",
            picture:
                "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
            artist: "Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10021",
            id: uuidv4(),
            active: false
        }
    ]
}

export default chillHop;