const logout = () => {
    localStorage.clear();
    location.href = "login.html"
}
// getUserData()
window.logout = logout


// new api////////////////
const celebrityData = [
    {
        name: "John Smith",
        occupation: "Actor",
        age: 40,
        nationality: "American",
        image:"imeges/download.jpg",
        socialMedia: {
            twitter: "@johnsmith",
            instagram: "@johnsmith_official",
            facebook: "JohnSmithOfficial"
        },
        bio: "John Smith is a versatile actor known for his exceptional performances across genres. Born in New York City, he discovered his passion for acting at a young age..."
    },
    {
        name: "Emily Johnson",
        occupation: "Musician",
        age: 32,
        nationality: "British",
        image: "imeges/Emily Johnson.jpg" ,
        socialMedia: {
            twitter: "@emilymusic",
            instagram: "@emily_music",
            facebook: "EmilyJohnsonMusic"
        },
        bio: "Emily Johnson is a talented musician who has enchanted audiences worldwide with her soulful melodies. Hailing from London, she began her musical journey..."
    },
    // ... Repeat for other celebrities
    {
        name: "Michael Rodriguez",
        occupation: "Athlete",
        age: 28,
        nationality: "Spanish",
        image: "imeges/Michael Rodriguez.jpg",
        socialMedia: {
            twitter: "@michaelrodriguez",
            instagram: "@michael_rodriguez",
            facebook: "MichaelRodriguezOfficial"
        },
        bio: "Michael Rodriguez is a celebrated athlete who has brought glory to his country in various international sports events. Born in Madrid, he displayed remarkable..."
    },

    {
        name: "Alex Johnson",
        party: "Progressive Party",
        age: 52,
        nationality: "American",
        image: "imeges/Alex Johnson.jpg",
        socialMedia: {
            twitter: "@alexjohnson",
            facebook: "AlexJohnsonOfficial"
        },
        bio: "Alex Johnson is a dedicated politician known for their commitment to social progress and equality. Born in the bustling city of Washington, they embarked on a political journey..."
    },
    {
        name: "Sophia Lee",
        party: "Liberty Alliance",
        age: 45,
        nationality: "British",
        image: "imeges/Sophia Lee.jpg",
        socialMedia: {
            twitter: "@sophialee",
            facebook: "SophiaLeeOfficial"
        },
        bio: "Sophia Lee is a charismatic politician who has advocated for personal freedoms and individual rights. Hailing from London, she entered the world of politics with a vision of..."
    },
    {
        name: "Rajesh Patel",
        party: "United Front",
        age: 60,
        nationality: "Indian",
        image: "imeges/Rajesh Patel.jpg",
        socialMedia: {
            twitter: "@rajeshpatel",
            facebook: "RajeshPatelOfficial"
        },
        bio: "Rajesh Patel is a respected politician who has worked tirelessly to bridge cultural divides and foster unity in his nation. Born and raised in Mumbai, he has led initiatives..."
    }
];

celebrityData.forEach(celebrity => {
    // console.log(`Name: ${celebrity.name}`);
    // console.log(`Occupation: ${celebrity.occupation}`);
    // console.log(`Age: ${celebrity.age}`);
    // console.log(`Nationality: ${celebrity.nationality}`);
    // console.log(`Image: ${celebrity.image}`);
    // console.log(`Twitter: ${celebrity.socialMedia.twitter}`);
    // console.log(`Instagram: ${celebrity.socialMedia.instagram}`);
    // console.log(`Facebook: ${celebrity.socialMedia.facebook}`);
    // console.log(`Bio: ${celebrity.bio}`);
    // console.log('-----------------------------------');

    const main = document.getElementById("main");
    const newPost = `
        <div class="card">
            <div class="row">
                <div class="col-md-7 px-3">
                    <div class="card-block px-6">
                        <h4 class="card-title">Name: ${celebrity.name}</h4>
                        <p class="card-text">Bio: ${celebrity.bio}</p>
                        <a href="#" class="mt-auto btn btn-primary">Read More</a>
                    </div>
                </div>
                <!-- Carousel start -->
                <div class="col-md-5">
                    <div id="CarouselTest" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block" src="${celebrity.image}" alt="Celebrity Image">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of carousel -->
            </div>
        </div>`;

    // Append the new post HTML to the existing content
    main.innerHTML += newPost;
});

