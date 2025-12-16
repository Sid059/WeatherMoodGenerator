// Configuration - REPLACE with your OpenWeatherMap API key
const API_KEY = '9036e011504c4df66abd1cae761a9e2d';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const loadingEl = document.getElementById('loading');
const weatherInfoEl = document.getElementById('weatherInfo');
const weatherDetailsEl = document.getElementById('weatherDetails');
const errorEl = document.getElementById('error');

const cityNameEl = document.getElementById('cityName');
const countryEl = document.getElementById('country');
const temperatureEl = document.getElementById('temperature');
const weatherIconEl = document.getElementById('weatherIcon');
const weatherDescEl = document.getElementById('weatherDescription');
const feelsLikeEl = document.getElementById('feelsLike');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('windSpeed');
const statusEl = document.getElementById('status');
const errorMessageEl = document.getElementById('errorMessage');
const retryButton = document.getElementById('retry-btn');

// ==============================================
// SEARCH FUNCTIONALITY
// ==============================================
// DOM Elements for Search
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const currentLocationBtn = document.getElementById('currentLocationBtn');
const quickCityButtons = document.querySelectorAll('.quick-city');  //nodeList of buttons


// Weather icon mapping
const WEATHER_ICONS = {
    '01d': 'fa-sun',        // clear sky day
    '01n': 'fa-moon',       // clear sky night
    '02d': 'fa-cloud-sun',  // few clouds day
    '02n': 'fa-cloud-moon', // few clouds night
    '03d': 'fa-cloud',      // scattered clouds
    '03n': 'fa-cloud',
    '04d': 'fa-cloud',      // broken clouds
    '04n': 'fa-cloud',
    '09d': 'fa-cloud-rain', // shower rain
    '09n': 'fa-cloud-rain',
    '10d': 'fa-cloud-sun-rain', // rain day
    '10n': 'fa-cloud-moon-rain', // rain night
    '11d': 'fa-bolt',       // thunderstorm
    '11n': 'fa-bolt',
    '13d': 'fa-snowflake',  // snow
    '13n': 'fa-snowflake',
    '50d': 'fa-smog',       // mist
    '50n': 'fa-smog'
};

// Get user's location and fetch weather
function getLocation() {
    showLoading('Getting your location...');
    hideError();
    hideWeather();

    if (!navigator.geolocation) {
        showError('Geolocation is not supported by your browser');
        return;
    }

    navigator.geolocation.getCurrentPosition( (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
        },
        (error) => {
            handleGeolocationError(error);
        }
    );
}

// Fetch weather data from API
async function fetchWeather(lat, lon) {
    showLoading('Fetching weather data...');

    try {
        const url = `${API_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        }

        else{
            throw new Error(error.message || 'Failed to fetch weather data');
        }
        
    } catch (error) {
        showError(`Weather data error: ${error.message}`);
        console.error('Weather fetch error:', error);
    }
}

// Display weather data
function displayWeather(data) {
     // Clear search input
    if (searchInput) {
        searchInput.value = '';
        searchInput.blur();
    }
    // Update text content
    cityNameEl.textContent = data.name;
    countryEl.textContent = data.sys.country;
    temperatureEl.textContent = Math.round(data.main.temp);
    weatherDescEl.textContent = data.weather[0].description;
    feelsLikeEl.textContent = Math.round(data.main.feels_like);
    humidityEl.textContent = data.main.humidity;
    windSpeedEl.textContent = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h

    // Update weather icon
    const iconCode = data.weather[0].icon;
    weatherIconEl.className = `fas ${WEATHER_ICONS[iconCode] || 'fa-question'}`;

    // Show weather info, hide loading
    hideLoading();
    showWeather();

    // Add visual feedback for searched city
    highlightSearchedCity(data.name);
}

// Visual feedback for searched city
function highlightSearchedCity(cityName) {
    // Remove highlight from all quick city buttons
    quickCityButtons.forEach(btn => {
        btn.classList.remove('active-city');
    });
    
    // Add highlight to matching quick city button
    const matchingButton = Array.from(quickCityButtons).find(btn => 
        btn.dataset.city.toLowerCase() === cityName.toLowerCase()
    );
    
    if (matchingButton) {
        matchingButton.classList.add('active-city');
    }
}


// Handle geolocation errors
function handleGeolocationError(error) {
    let message = 'Unable to get your location. ';
    //error.code gives a number that tells you what kind of geolocation error happened.
    switch(error.code) {
        case error.PERMISSION_DENIED:   //error.PERMISSION_DENIED is usually value 1
            message += 'Please allow location access.';
            break;
        case error.POSITION_UNAVAILABLE: //error.POSITION_UNAVAILABLE is usually value 2
            message += 'Location information is unavailable.';
            break;
        case error.TIMEOUT:              //error.TIMEOUT is usually value 3
            message += 'Location request timed out.';
            break;
        default:
            message += 'Unknown error occurred.';
    }
    
    showError(message);
}

// UI Helper Functions
function showLoading(message) {
    loadingEl.style.display = 'block';
    weatherInfoEl.hidden = true;
    weatherDetailsEl.hidden = true;
    errorEl.hidden = true;
    
    if (message) {
        statusEl.textContent = message;
    }
}

function hideLoading() {
    loadingEl.style.display = 'none';
}

function showWeather() {
    weatherInfoEl.hidden = false;
    weatherDetailsEl.hidden = false;
}

function hideWeather() {
    weatherInfoEl.hidden = true;
    weatherDetailsEl.hidden = true;
}

function showError(message) {
    hideLoading();
    hideWeather();
    errorEl.hidden = false;
    errorMessageEl.textContent = message;
}

function hideError() {
    errorEl.hidden = true;
}

// ==============================================
// TIME-BASED BACKGROUND COLORS
// ==============================================

function updateBackgroundByTime() {
    const hour = new Date().getHours();
    let gradientStart, gradientEnd;
    
    // Time-based gradients (inspired by iPhone weather)
    if (hour >= 5 && hour < 8) {        // Dawn (5am-8am)
        gradientStart = '#FF7E5F';
        gradientEnd = '#FEB47B';
    } else if (hour >= 8 && hour < 12) { // Morning (8am-12pm)
        gradientStart = '#36D1DC';
        gradientEnd = '#5B86E5';
    } else if (hour >= 12 && hour < 16) { // Noon (12pm-4pm)
        gradientStart = '#00B4DB';
        gradientEnd = '#0083B0';
    } else if (hour >= 16 && hour < 19) { // Afternoon (4pm-7pm)
        gradientStart = '#667eea';
        gradientEnd = '#764ba2';
    } else if (hour >= 19 && hour < 21) { // Evening (7pm-9pm)
        gradientStart = '#DA4453';
        gradientEnd = '#89216B';
    } else {                              // Night (9pm-5am)
        gradientStart = '#0F2027';
        gradientEnd = '#203A43';
    }

    // Update CSS variables
    document.documentElement.style.setProperty('--bg-gradient', `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`);

     // Optional: Update glass colors based on time
    const isDaytime = hour >= 6 && hour < 18;
    const glassBg = isDaytime ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.12)';
    const glassBorder = isDaytime ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)';
    
    document.documentElement.style.setProperty('--glass-bg', glassBg);
    document.documentElement.style.setProperty('--glass-border', glassBorder);
}

// Function to set up all event listeners
function setupEventListeners() {
    setupSearchListeners();  // Add search listeners

    if (retryButton) {
        // Add click event listener to retry button
        retryButton.addEventListener('click', () => {
            console.log('Retry button clicked!');
            getLocation();
        });
    }
}

// Setup search event listeners
function setupSearchListeners() {
    // Search button click
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }
    
    // Enter key in search input
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
        
        // Clear search on focus
        searchInput.addEventListener('focus', () => {
            searchInput.select();
        });
    }
    
    // Current location button
    if (currentLocationBtn) {
        currentLocationBtn.addEventListener('click', getLocation);
    }
    
    // Quick city buttons
    quickCityButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const city = e.target.dataset.city;
            searchInput.value = city;
            fetchWeatherByCity(city);
        });
    });
}

// Handle search
function handleSearch() {
    const city = searchInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }
    
    if (city.length < 2) {
        showError('Please enter at least 2 characters');
        return;
    }
    
    fetchWeatherByCity(city);
}

// Fetch weather by city name (instead of coordinates)
async function fetchWeatherByCity(city) {
    showLoading(`Searching for ${city}...`);
    
    try {
        // First try direct city search
        const url = `${API_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
        console.log('Searching for city:', city);
        
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            console.log('City found:', data.name);
            displayWeather(data);
        } else {
            // If direct search fails, try geocoding first
            await searchWithGeocoding(city);
        }
        
    } catch (error) {
        console.error('City search error:', error);
        showError(`Could not find weather for "${city}"`);
    }
}


// Initialize the app when page is ready
function init() {
    console.log('Initializing weather app...');
    
    // 1. Set time-based background
    updateBackgroundByTime();
    
    // 2. Set up all event listeners
    setupEventListeners();
    
    // 3. Start the weather fetching process
    getLocation();
    
    // 4. Update background every hour
    setInterval(updateBackgroundByTime, 60 * 60 * 1000); // Every hour
    
    console.log('Weather app initialized successfully');
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', init);