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
        }
    ]
}

export default chillHop;