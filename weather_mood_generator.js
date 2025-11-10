const weatherMoodMap = {
    "clear sky": [
        "energetic", "joyful", "adventurous", "optimistic", "playful",
        "radiant", "inspired", "sociable", "confident", "carefree",
        "vibrant", "motivated", "excited", "blissful", "enthusiastic",
        "liberated", "cheerful", "upbeat", "sunny", "exuberant"
    ],
    rainy: [
        "cozy", "thoughtful", "creative", "melancholic", "reflective",
        "nostalgic", "dreamy", "pensive", "calm", "introspective",
        "romantic", "serene", "contemplative", "mellow", "meditative",
        "sentimental", "philosophical", "imaginative", "tranquil", "wistful"
    ],
    cloudy: [
        "focused", "calm", "peaceful", "restless", "balanced",
        "neutral", "contemplative", "steady", "grounded", "patient",
        "observant", "mindful", "composed", "reserved", "thoughtful",
        "measured", "even-keeled", "subdued", "collected", "centered"
    ],
    stormy: [
        "introspective", "creative", "focused", "calm", "intense",
        "passionate", "dramatic", "powerful", "awed", "humbled",
        "cathartic", "transformative", "renewed", "purified", "vigilant",
        "respectful", "humbled", "rebellious", "fervent", "resolute"
    ],
    snowy: [
        "cozy", "peaceful", "joyful", "adventurous", "magical",
        "childlike", "wonder-filled", "serene", "hopeful", "renewed",
        "pure", "quiet", "still", "blessed", "festive",
        "enchanted", "pristine", "hushed", "grateful", "awestruck"
    ],
    windy: [
        "energetic", "free-spirited", "unpredictable", "changeable", "invigorated",
        "spontaneous", "whimsical", "unburdened", "refreshed", "dynamic",
        "unrestrained", "liberated", "airy", "light", "breezy",
        "scattered", "restless", "animated", "stirred", "awakened"
    ],
    foggy: [
        "mysterious", "contemplative", "uncertain", "dreamy", "introspective",
        "veiled", "hidden", "secretive", "puzzled", "searching",
        "ambiguous", "enigmatic", "obscure", "hazy", "uncertain",
        "suspended", "liminal", "transitional", "uncertain", "expectant"
    ],
    hot: [
        "languid", "relaxed", "slow-paced", "sun-drenched", "lethargic",
        "indolent", "siesta-like", "drowsy", "mellow", "heated",
        "passionate", "fiery", "intense", "sultry", "slow-burning",
        "torpid", "listless", "sun-soaked", "heavy", "slow-moving"
    ],
    cold: [
        "crisp", "alert", "refreshed", "sharp", "invigorated",
        "clear-headed", "brisk", "awake", "stimulated", "tingling",
        "shivery", "bracing", "frosty", "numb", "isolated",
        "withdrawn", "hibernating", "preserved", "still", "waiting"
    ],
    humid: [
        "heavy", "slow", "oppressed", "sticky", "weighed-down",
        "muggy", "sultry", "steamy", "tropical", "languorous",
        "sweaty", "uncomfortable", "patient", "enduring", "resigned",
        "slow-moving", "thick", "dense", "saturated", "immersed"
    ]
};

const timeWeatherActivities = {
    morning: {
        "clear sky": [
            "perfect for morning yoga in the park",
            "excellent for sunrise photography",
            "ideal for breakfast picnics outdoors",
            "wonderful for early bird gardening",
            "great for morning jogging or cycling",
            "perfect for reading with morning coffee on the patio",
            "excellent for farmers market visits",
            "ideal for outdoor meditation sessions",
            "wonderful for washing the car while it's cool",
            "great for planning your day in the fresh air"
        ],
        rainy: [
            "perfect for cozy reading with morning tea",
            "excellent for baking breakfast pastries",
            "ideal for journaling with coffee",
            "wonderful for organizing your day indoors",
            "great for catching up on morning podcasts",
            "perfect for gentle indoor stretching",
            "excellent for planning your weekly schedule",
            "ideal for sorting through morning emails",
            "wonderful for preparing a slow breakfast",
            "great for indoor plant care"
        ],
        cloudy: [
            "perfect for museum visits without crowds",
            "excellent for coffee shop writing sessions",
            "ideal for library research in the quiet hours",
            "wonderful for indoor exercise classes",
            "great for grocery shopping early",
            "perfect for planning trips online",
            "excellent for focused work sessions",
            "ideal for organizing your workspace",
            "wonderful for cooking a elaborate breakfast",
            "great for catching up on reading"
        ],
        snowy: [
            "perfect for building snowmen before it melts",
            "excellent for making hot chocolate breakfast",
            "ideal for winter photography at dawn",
            "wonderful for reading by the morning fire",
            "great for planning indoor activities",
            "perfect for baking morning treats",
            "excellent for organizing winter gear",
            "ideal for gentle snow shoveling exercise",
            "wonderful for writing morning pages",
            "great for planning spring projects"
        ],
        cold: [
            "perfect for making hearty breakfast soups",
            "excellent for brisk morning walks",
            "ideal for visiting warm cafes early",
            "wonderful for reading by the window",
            "great for indoor exercise routines",
            "perfect for organizing winter clothing",
            "excellent for planning warm vacations",
            "ideal for baking warm breakfast breads",
            "wonderful for morning meditation",
            "great for catching up on correspondence"
        ],
        hot: [
            "perfect for early morning swimming",
            "excellent for outdoor yoga before it heats up",
            "ideal for gardening in the cool hours",
            "wonderful for reading in shaded spots",
            "great for outdoor breakfast on the patio",
            "perfect for visiting air-conditioned spaces early",
            "excellent for preparing cool summer drinks",
            "ideal for planning indoor afternoon activities",
            "wonderful for morning photography",
            "great for organizing summer gear"
        ],
        humid: [
            "perfect for early pool visits",
            "excellent for air-conditioned mall walks",
            "ideal for indoor exercise with fans",
            "wonderful for reading in cool basements",
            "great for preparing refreshing breakfasts",
            "perfect for organizing indoor spaces",
            "excellent for planning dehumidifying projects",
            "ideal for indoor plant maintenance",
            "wonderful for catching up on movies",
            "great for online learning in comfort"
        ],
        windy: [
            "perfect for flying kites in open fields",
            "excellent for dramatic morning photography",
            "ideal for beach walks with crashing waves",
            "wonderful for drying laundry early",
            "great for refreshing outdoor exercise",
            "perfect for listening to uplifting music",
            "excellent for cleaning outdoor spaces",
            "ideal for visiting wind-powered attractions",
            "wonderful for planning outdoor adventures",
            "great for organizing outdoor storage"
        ],
        foggy: [
            "perfect for mysterious morning photography",
            "excellent for writing morning poetry",
            "ideal for quiet introspection",
            "wonderful for planning creative projects",
            "great for gentle indoor activities",
            "perfect for reading atmospheric novels",
            "excellent for meditation in the quiet",
            "ideal for organizing thoughts and ideas",
            "wonderful for listening to ambient music",
            "great for studying maps for future trips"
        ]
    },
    afternoon: {
        "clear sky": [
            "perfect for lunch picnics in the park",
            "excellent for afternoon hiking adventures",
            "ideal for outdoor sports and games",
            "wonderful for gardening in full sun",
            "great for beach trips and swimming",
            "perfect for outdoor reading sessions",
            "excellent for photography in golden light",
            "ideal for visiting outdoor attractions",
            "wonderful for farmers market shopping",
            "great for cycling through scenic routes"
        ],
        rainy: [
            "perfect for baking afternoon treats",
            "excellent for board games with family",
            "ideal for movie marathons with snacks",
            "wonderful for creative writing sessions",
            "great for organizing closets and spaces",
            "perfect for trying new recipes in the kitchen",
            "excellent for online courses and learning",
            "ideal for indoor crafts and DIY projects",
            "wonderful for catching up on podcasts",
            "great for planning future projects"
        ],
        cloudy: [
            "perfect for museum or gallery visits",
            "excellent for shopping and exploring malls",
            "ideal for coffee shop working sessions",
            "wonderful for photography without harsh light",
            "great for visiting indoor attractions",
            "perfect for library research and studying",
            "excellent for planning weekend getaways",
            "ideal for indoor rock climbing or bowling",
            "wonderful for cooking classes or workshops",
            "great for home organization projects"
        ],
        snowy: [
            "perfect for afternoon sledding adventures",
            "excellent for making hot chocolate breaks",
            "ideal for winter photography in soft light",
            "wonderful for reading by the fireplace",
            "great for baking holiday cookies",
            "perfect for organizing winter gear",
            "excellent for planning ski trips",
            "ideal for indoor exercise routines",
            "wonderful for writing winter stories",
            "great for planning spring garden layouts"
        ],
        cold: [
            "perfect for making hearty stews and soups",
            "excellent for visiting warm cafes with books",
            "ideal for brisk afternoon walks",
            "wonderful for hot tea tasting sessions",
            "great for visiting indoor botanical gardens",
            "perfect for learning knitting or crochet",
            "excellent for board game tournaments",
            "ideal for visiting local libraries",
            "wonderful for planning summer vacations",
            "great for indoor yoga sessions"
        ],
        hot: [
            "perfect for swimming pool relaxation",
            "excellent for visiting air-conditioned museums",
            "ideal for making frozen smoothies and treats",
            "wonderful for siesta-style napping",
            "great for indoor movie theater visits",
            "perfect for reading in air-conditioned comfort",
            "excellent for visiting water parks",
            "ideal for making summer salads",
            "wonderful for indoor plant care",
            "great for planning evening activities"
        ],
        humid: [
            "perfect for water sports and swimming",
            "excellent for air-conditioned mall walking",
            "ideal for making refreshing tropical drinks",
            "wonderful for indoor ice skating rinks",
            "great for organizing and cleaning indoors",
            "perfect for reading in cool basements",
            "excellent for movie marathon sessions",
            "ideal for cold food preparation",
            "wonderful for indoor gardening projects",
            "great for planning dehumidifying improvements"
        ],
        windy: [
            "perfect for flying kites in open parks",
            "excellent for dramatic landscape photography",
            "ideal for sailing or windsurfing adventures",
            "wonderful for drying laundry quickly outdoors",
            "great for beach combing with ocean breezes",
            "perfect for listening to uplifting music playlists",
            "excellent for cleaning outdoor patio areas",
            "ideal for visiting wind farms or turbines",
            "wonderful for outdoor photography sessions",
            "great for organizing outdoor storage spaces"
        ],
        foggy: [
            "perfect for mysterious photography outings",
            "excellent for writing atmospheric poetry",
            "ideal for visiting historic sites in mist",
            "wonderful for introspection and deep thinking",
            "great for watching mystery films indoors",
            "perfect for exploring familiar neighborhoods anew",
            "excellent for mindfulness meditation practice",
            "ideal for planning creative art projects",
            "wonderful for listening to ambient soundtracks",
            "great for studying travel maps and guides"
        ]
    },
    evening: {
        "clear sky": [
            "perfect for sunset watching",
            "excellent for evening walks in golden hour",
            "ideal for outdoor dinners on the patio",
            "wonderful for stargazing preparations",
            "great for evening photography",
            "perfect for reading in the twilight",
            "excellent for outdoor social gatherings",
            "ideal for gentle evening exercise",
            "wonderful for gardening in cooler temperatures",
            "great for planning tomorrow's adventures"
        ],
        rainy: [
            "perfect for cozy reading by lamplight",
            "excellent for baking comfort foods",
            "ideal for family game nights indoors",
            "wonderful for journaling and reflection",
            "great for organizing digital photos",
            "perfect for watching favorite movies",
            "excellent for trying new dinner recipes",
            "ideal for indoor meditation practice",
            "wonderful for virtual social gatherings",
            "great for planning weekend activities"
        ],
        cloudy: [
            "perfect for cozy restaurant dinners",
            "excellent for evening museum events",
            "ideal for coffee shop reading sessions",
            "wonderful for indoor concert or theater visits",
            "great for planning future travel adventures",
            "perfect for board game cafes with friends",
            "excellent for cooking elaborate dinners",
            "ideal for home organization projects",
            "wonderful for craft and DIY sessions",
            "great for online course learning"
        ],
        snowy: [
            "perfect for building snow lanterns",
            "excellent for making hot chocolate by the fire",
            "ideal for winter evening photography",
            "wonderful for reading winter novels cozily",
            "great for baking warm evening treats",
            "perfect for planning ski weekend getaways",
            "excellent for organizing winter photographs",
            "ideal for knitting or crafting by the heater",
            "wonderful for making hearty winter soups",
            "great for stargazing through clear cold air"
        ],
        cold: [
            "perfect for making warm comfort foods",
            "excellent for visiting cozy wine bars",
            "ideal for brisk evening walks under stars",
            "wonderful for hot tea and book sessions",
            "great for visiting warm indoor venues",
            "perfect for learning new recipes indoors",
            "excellent for board game nights with family",
            "ideal for organizing winter clothing",
            "wonderful for planning tropical vacations",
            "great for indoor yoga and stretching"
        ],
        hot: [
            "perfect for evening swimming sessions",
            "excellent for outdoor cinema experiences",
            "ideal for making frozen cocktails",
            "wonderful for sunset beach walks",
            "great for stargazing on warm nights",
            "perfect for reading on breezy balconies",
            "excellent for outdoor dining experiences",
            "ideal for visiting evening farmers markets",
            "wonderful for making summer salads",
            "great for planning cool morning activities"
        ],
        humid: [
            "perfect for evening pool parties",
            "excellent for air-conditioned restaurant visits",
            "ideal for making refreshing tropical drinks",
            "wonderful for indoor movie theater cooling off",
            "great for organizing home in cool comfort",
            "perfect for reading in air-conditioned rooms",
            "excellent for online shopping for summer gear",
            "ideal for cold dinner preparations",
            "wonderful for indoor plant care sessions",
            "great for planning dehumidifier improvements"
        ],
        windy: [
            "perfect for evening kite flying under stars",
            "excellent for dramatic sunset photography",
            "ideal for beach bonfire gatherings",
            "wonderful for listening to wind chimes",
            "great for cozy indoor music sessions",
            "perfect for planning outdoor adventures",
            "excellent for cleaning patio areas",
            "ideal for visiting waterfront restaurants",
            "wonderful for stargazing with clear skies",
            "great for organizing outdoor equipment"
        ],
        foggy: [
            "perfect for mysterious evening walks",
            "excellent for writing atmospheric stories",
            "ideal for cozy mystery movie nights",
            "wonderful for introspection and planning",
            "great for listening to ambient music",
            "perfect for photography with street lamps",
            "excellent for meditation in the quiet",
            "ideal for planning creative projects",
            "wonderful for reading ghost stories",
            "great for studying maps for future trips"
        ]
    },
    night: {
        "clear sky": [
            "perfect for stargazing and astronomy",
            "excellent for night photography",
            "ideal for moonlit walks",
            "wonderful for outdoor fire pit gatherings",
            "great for planning future adventures",
            "perfect for reading under porch lights",
            "excellent for listening to night sounds",
            "ideal for gentle nighttime meditation",
            "wonderful for writing late-night thoughts",
            "great for dreaming big dreams"
        ],
        rainy: [
            "perfect for listening to rain sounds",
            "excellent for reading mystery novels",
            "ideal for late-night baking sessions",
            "wonderful for organizing digital files",
            "great for online learning in peace",
            "perfect for writing poetry or stories",
            "excellent for planning tomorrow's schedule",
            "ideal for gentle stretching before bed",
            "wonderful for listening to calming music",
            "great for reflecting on the day"
        ],
        cloudy: [
            "perfect for cozy indoor movie marathons",
            "excellent for late-night reading sessions",
            "ideal for organizing photo albums quietly",
            "wonderful for planning dream vacations",
            "great for online shopping for future projects",
            "perfect for writing in a journal",
            "excellent for learning new skills online",
            "ideal for gentle indoor exercise",
            "wonderful for organizing home spaces",
            "great for planning weekend activities"
        ],
        snowy: [
            "perfect for watching snow fall silently",
            "excellent for making midnight hot chocolate",
            "ideal for reading by fireplace glow",
            "wonderful for planning winter getaways",
            "great for organizing winter photographs",
            "perfect for writing winter-themed stories",
            "excellent for gentle yoga by candlelight",
            "ideal for planning spring garden layouts",
            "wonderful for listening to quiet music",
            "great for reflecting on seasonal changes"
        ],
        cold: [
            "perfect for making warm bedtime tea",
            "excellent for reading under warm blankets",
            "ideal for organizing winter clothing",
            "wonderful for planning warm vacations",
            "great for online research for future trips",
            "perfect for writing letters to friends",
            "excellent for gentle pre-sleep meditation",
            "ideal for organizing digital collections",
            "wonderful for listening to audiobooks",
            "great for planning cozy weekend plans"
        ],
        hot: [
            "perfect for late-night swimming",
            "excellent for stargazing on warm nights",
            "ideal for outdoor movie watching",
            "wonderful for making frozen treats",
            "great for planning cool morning activities",
            "perfect for reading on a breezy balcony",
            "excellent for listening to summer night sounds",
            "ideal for gentle stretching in cool indoors",
            "wonderful for writing summer memories",
            "great for dreaming of tropical escapes"
        ],
        humid: [
            "perfect for late-night pool cooling off",
            "excellent for air-conditioned movie watching",
            "ideal for organizing in cool comfort",
            "wonderful for planning dehumidifying projects",
            "great for online learning in air conditioning",
            "perfect for reading in the coolest room",
            "excellent for gentle indoor exercises",
            "ideal for cold snack preparation",
            "wonderful for planning autumn activities",
            "great for reflecting on summer experiences"
        ],
        windy: [
            "perfect for listening to wind howl outside",
            "excellent for dramatic night photography",
            "ideal for planning outdoor adventures",
            "wonderful for cozy indoor music sessions",
            "great for organizing outdoor equipment",
            "perfect for writing adventure stories",
            "excellent for planning windy day activities",
            "ideal for gentle meditation with wind sounds",
            "wonderful for reading epic novels",
            "great for dreaming of sailing trips"
        ],
        foggy: [
            "perfect for mysterious night contemplation",
            "excellent for writing atmospheric poetry",
            "ideal for reading ghost stories",
            "wonderful for planning mysterious adventures",
            "great for studying maps of foggy places",
            "perfect for listening to ambient soundscapes",
            "excellent for gentle yoga in the quiet",
            "ideal for organizing creative ideas",
            "wonderful for planning photography projects",
            "great for dreaming of misty landscapes"
        ]
    }
};

// storing weatherMoodMap object keys in array for easy access
const weatherConditionsArr = Object.keys(weatherMoodMap);

// function to generate random weather, mood, activity based on time of day
function generateWeatherMoodActivity() {
    const timeOfDay = getCurrentTimeOfDay();
    const timeBasedGreeting = getTimeBasedGreeting();
    const weather = weatherConditionsArr[Math.floor(Math.random() * weatherConditionsArr.length)];
    const mood = weatherMoodMap[weather][Math.floor(Math.random() * weatherMoodMap[weather].length)];

    let activity;
    // Checking if the time-weather combination exists
    if (timeWeatherActivities[timeOfDay] && timeWeatherActivities[timeOfDay][weather]){
        activity = timeWeatherActivities[timeOfDay][weather][Math.floor(Math.random() * timeWeatherActivities[timeOfDay][weather].length)];
    }
    else {
        // Fallback to a default activity
        activity = "perfect for adapting to the conditions and finding joy in the moment";
    }

    return `${timeBasedGreeting}\nThis ${timeOfDay} with ${weather} weather brings a ${mood} feeling ${activity}.`;
}

// function to get current time of the day
function getCurrentTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "morning";
    else if (hour >= 12 && hour < 17) return "afternoon";
    else if (hour >= 17 && hour < 20) return "evening";
    else return "night";
}

// function to get time-based greeting
function getTimeBasedGreeting() {
    const timeOfDay = getCurrentTimeOfDay();
    const greetings = {
        morning: "Good morning! 🌅",
        afternoon: "Hello there! 🌞",
        evening: "Good evening! 🌇",
        night: "Good night! 🌙"
    };
    return greetings[timeOfDay];
}

// Example usage
console.log(generateWeatherMoodActivity());