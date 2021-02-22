export default function Deck() {
    let id = 0;

    const cards = [
        'angular.png',
        'css.png',
        'html.png',
        'nodejs.png',
        'react.png',
        'vuejs.png',
        'python.png',
        'jenkins.png',
        'git.png',
        'docker.png',
        'mysql.png',
        'linux.png'
    ]
    .reduce((deck, img) => {
        deck.push({
            id: id++,
            img: img,
            show: false,
            matched: false
        });

        deck.push({
            id: id++,
            img: img,
            show: false,
            matched: false
        });

        return deck;

    },[])
    .sort(() => Math.random() - 0.5);

    return cards;
}
