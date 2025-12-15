// Real Bishkek weather data from your table
const weatherData = {
    current: {
        day: "Tuesday 16 Dec",
        temp: "4°C",
        low: "-5°C",
        weather: "Increasing cloudiness",
        feelsLike: "4°C",
        wind: "3 km/h ↑",
        humidity: "65%",
        snowChance: "5%",
        snowAmount: "0.0 mm",
        sunrise: "08:26",
        sunset: "17:28"
    },
    forecast: [
        {
            day: "Wed 17 Dec",
            temp: "2°C / 0°C",
            weather: "Light snow. Overcast.",
            feelsLike: "1°C",
            wind: "2 km/h ↑",
            humidity: "84%",
            snowChance: "65%",
            snowAmount: "38.9 mm",
            sunrise: "08:26",
            sunset: "17:28",
            hourly: ["-1°C", "0°C", "1°C", "2°C", "1°C", "0°C", "-1°C", "-2°C"]
        },
        {
            day: "Thu 18 Dec",
            temp: "3°C / 0°C",
            weather: "Light snow late. Overcast.",
            feelsLike: "1°C",
            wind: "6 km/h ↑",
            humidity: "83%",
            snowChance: "61%",
            snowAmount: "25.3 mm",
            sunrise: "08:27",
            sunset: "17:28",
            hourly: ["-2°C", "-1°C", "0°C", "1°C", "2°C", "3°C", "2°C", "1°C"]
        },
        {
            day: "Fri 19 Dec",
            temp: "2°C / 0°C",
            weather: "Snow changing to rain. Overcast.",
            feelsLike: "0°C",
            wind: "4 km/h ↑",
            humidity: "90%",
            snowChance: "58%",
            snowAmount: "12.5 mm",
            sunrise: "08:28",
            sunset: "17:29",
            hourly: ["0°C", "0°C", "1°C", "2°C", "2°C", "1°C", "0°C", "0°C"]
        },
        {
            day: "Sat 20 Dec",
            temp: "2°C / 0°C",
            weather: "Light snow late. Overcast.",
            feelsLike: "-1°C",
            wind: "7 km/h ↑",
            humidity: "93%",
            snowChance: "50%",
            snowAmount: "15.0 mm",
            sunrise: "08:28",
            sunset: "17:29",
            hourly: ["0°C", "0°C", "1°C", "2°C", "2°C", "1°C", "0°C", "-1°C"]
        },
        {
            day: "Sun 21 Dec",
            temp: "1°C / -2°C",
            weather: "Light snow. Overcast.",
            feelsLike: "-3°C",
            wind: "10 km/h ↑",
            humidity: "94%",
            snowChance: "58%",
            snowAmount: "62.8 mm",
            sunrise: "08:29",
            sunset: "17:30",
            hourly: ["-2°C", "-1°C", "0°C", "1°C", "1°C", "0°C", "-1°C", "-2°C"]
        },
        {
            day: "Mon 22 Dec",
            temp: "0°C / -8°C",
            weather: "Moderate snow. Overcast.",
            feelsLike: "-7°C",
            wind: "17 km/h ↑",
            humidity: "93%",
            snowChance: "61%",
            snowAmount: "139.1 mm",
            sunrise: "08:29",
            sunset: "17:30",
            hourly: ["-5°C", "-4°C", "-3°C", "-2°C", "-1°C", "0°C", "-1°C", "-2°C"]
        },
        {
            day: "Tue 23 Dec",
            temp: "-3°C / -12°C",
            weather: "Sunny",
            feelsLike: "-6°C",
            wind: "7 km/h ↑",
            humidity: "77%",
            snowChance: "5%",
            snowAmount: "0.0 mm",
            sunrise: "08:30",
            sunset: "17:31",
            hourly: ["-10°C", "-9°C", "-8°C", "-7°C", "-6°C", "-5°C", "-4°C", "-3°C"]
        },
        {
            day: "Wed 24 Dec",
            temp: "-4°C / -15°C",
            weather: "Sunny",
            feelsLike: "-5°C",
            wind: "5 km/h ↑",
            humidity: "75%",
            snowChance: "2%",
            snowAmount: "0.0 mm",
            sunrise: "08:30",
            sunset: "17:31",
            hourly: ["-12°C", "-11°C", "-10°C", "-9°C", "-8°C", "-7°C", "-6°C", "-5°C"]
        },
        {
            day: "Thu 25 Dec",
            temp: "-4°C / -15°C",
            weather: "Sunny",
            feelsLike: "-5°C",
            wind: "4 km/h ↑",
            humidity: "80%",
            snowChance: "3%",
            snowAmount: "0.0 mm",
            sunrise: "08:30",
            sunset: "17:32",
            hourly: ["-13°C", "-12°C", "-11°C", "-10°C", "-9°C", "-8°C", "-7°C", "-6°C"]
        }
    ]
};

// Weather advice based on conditions
function getAdvice(dayData) {
    const temp = parseInt(dayData.temp.split('/')[0]);
    const weather = dayData.weather.toLowerCase();
    const snowChance = parseInt(dayData.snowChance);
    
    let advice = "Have a great day! ";
    
    if (weather.includes("snow")) {
        if (weather.includes("moderate snow") || snowChance > 60) {
            advice = "❄️ Heavy snow expected! Wear waterproof boots, thick coat, and gloves. Be careful on roads!";
        } else if (weather.includes("light snow")) {
            advice = "🌨️ Light snow today. Wear warm clothes and bring an umbrella. Roads might be slippery!";
        } else {
            advice = "☃️ Snow in forecast. Dress warmly and wear boots. Perfect for hot chocolate!";
        }
    } else if (weather.includes("sunny")) {
        if (temp < 0) {
            advice = "☀️ Sunny but freezing! Wear layers - sunny doesn't mean warm. Beautiful day for photos!";
        } else {
            advice = "😎 Sunny day! Wear sunglasses and enjoy the sunshine. Still chilly though!";
        }
    } else if (weather.includes("cloud")) {
        if (temp < 0) {
            advice = "☁️ Cloudy and cold. Wear a cozy sweater and warm pants. Good day to stay inside!";
        } else {
            advice = "⛅ Cloudy skies. Jacket weather - not too cold but not warm either.";
        }
    }
    
    if (temp < -5) {
        advice += " EXTREME COLD: Limit time outside, wear thermal layers!";
    } else if (temp < 0) {
        advice += " Freezing temperatures - don't forget hat and gloves!";
    }
    
    return advice;
}

// Get weather icon
function getWeatherIcon(weather) {
    if (weather.includes("snow")) {
        return "❄️";
    } else if (weather.includes("sunny")) {
        return "☀️";
    } else if (weather.includes("cloud")) {
        return "☁️";
    } else if (weather.includes("rain")) {
        return "🌧️";
    } else {
        return "⛅";
    }
}

// Initialize the page
$(document).ready(function() {
    console.log("Weather app loading...");
    
    // Theme toggle
    $('#themeToggle').click(function() {
        $('body').toggleClass('dark-theme');
        const isDark = $('body').hasClass('dark-theme');
        $(this).html(isDark ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    
    // Check saved theme
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-theme');
        $('#themeToggle').html('<i class="fas fa-sun"></i> Light Mode');
    }
    
    // Fill forecast list
    const forecastList = $('#forecastList');
    weatherData.forecast.forEach(day => {
        const icon = getWeatherIcon(day.weather);
        const item = `
            <div class="forecast-item">
                <div class="day-name">${day.day}</div>
                <div class="day-temp">${day.temp}</div>
                <div class="day-weather">${icon} ${day.weather}</div>
                <div class="day-snow">${day.snowChance}% snow</div>
            </div>
        `;
        forecastList.append(item);
    });
    
    // Create day buttons
    const dayButtons = $('#dayButtons');
    weatherData.forecast.forEach((day, index) => {
        const btn = $(`
            <button class="day-btn" data-index="${index}">
                ${day.day}
            </button>
        `);
        dayButtons.append(btn);
    });
    
    // Day button click
    $('.day-btn').click(function() {
        $('.day-btn').removeClass('active');
        $(this).addClass('active');
        
        const index = $(this).data('index');
        const day = weatherData.forecast[index];
        
        // Update selected day
        $('#selectedDay').text(day.day);
        
        // Update hourly forecast
        const hours = ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM", "12 AM", "3 AM"];
        const hourlyDiv = $('#hourlyForecast');
        hourlyDiv.empty();
        
        hours.forEach((hour, i) => {
            if (i < day.hourly.length) {
                hourlyDiv.append(`
                    <div class="hour-item">
                        <div class="hour-time">${hour}</div>
                        <div class="hour-temp">${day.hourly[i]}</div>
                        <div>${getWeatherIcon(day.weather)}</div>
                    </div>
                `);
            }
        });
        
        // Update advice
        $('#weatherAdvice p').text(getAdvice(day));
    });
    
    // Select first day by default
    $('.day-btn:first').click();
    
    console.log("Weather app ready!");
});