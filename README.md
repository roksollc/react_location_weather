# React Final Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Welcome to the Final Project for the React course. Great job making it this far! This final project requires an understanding of several topics you've learned throughout this course. It is designed to mimic requirements you'll encounter in your career, so it may be challenging and require several hours to complete. Don't forget, you can always review past lessons and search the internet for help. Good luck!

---

## Project Structure

The shell of the application has been started for you. It contains skeletons of all of the relevant components that you'll need to complete this project.

### WorldCities

The `WorldCities` component has been provided for you. It contains JSON files with most of the world's countries, states/regions, and cities, as well as functions to access the data. The relevant imports have been added for you to the `CitySelector` component.

### GeoLocationService

The `GeoLocationService` is meant to acquire the geographic coordinates (latitude and longitude) of a specified city in the world. In order to implement that functionality, you will need to sign up for a free developer account at _MapQuest_ to use their `Geocoding API`.

[Signup for a free MapQuest Developer Account](https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register).

To get instructions on how to use the API, go to [MapQuests's Geocoding API documentation](https://developer.mapquest.com/documentation/geocoding-api/).


### WeatherService

The `WeatherService` is meant to acquire weather data, both current and hourly, for specified geographic coordinates (latitude and longitude). In order to implement that functionality, you will need to sign up for a free account at _OpenWeatherMap_ to use their API.

[Signup for a free account at OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

To get instructions on how to use the API:

- Go to the [current weather data API documentation](https://openweathermap.org/current) to get current weather by geographic coordinates.

- Go to the [5 day weather forecast data API documentation]() to get 3-hour weather data by geographic coordinates.

<div class="panel panel-danger">
    <div class="panel-heading">
        <h3 class="panel-title">Caution!</h3>
    </div>
    <div class="panel-body">
        <p>The OpenWeatherMap API allows you to request weather data by specifying a city, in addition to geographic coordinates. However, the aim of this project is to utilize <em>two</em> APIs, so use the geographic location version of the API.</p>
    </div>
</div>


---

## Requirements

### Step 1

You need a mechanism to select a city for which to request geographic coordinate and weather data using the APIs.

One common approach for acquiring the city is to use three selectors:

- The user must first specify a **country** before the state/region selector has any data.

- The user must then select a **state/region** of the selected country before the city selector has data.

- The user can then choose a **city** of the selected state/region.

Collecting input from the user to select a city should be on its own route. In other words, **one route** should be responsible for collecting input from the user, while the **other route** (or routes) should be used to display the weather of the selected city.

The `CitySelector` component is meant for this requirement.

---

### Step 2

Create another route for the weather. The `WeatherDashboard` component is meant for this requirement.

Display the selected city and state/region on this page. This is only meant to be temporary, but it will help you to ensure you're passing data around properly.

---

### Step 3

Now that you're able to select a city and pass it to the new route (with the `WeatherDashboard`), you'll next need to get the city's geographic coordinates using the `MapQuest Geolocation API`.

The `GeolocationService` is meant to be used to implement the logic to acquire the coordinates.

Once you successfully obtain the city's coordinates, display the latitude and longitude values below the city on the page. This will help you verify that all is working properly.

---

### Step 4

Now that you're able to select a city and get its geographic coordinates via the _MapQuest Geolocation API_, you'll next need to get the weather data for the city using the `OpenWeatherMap API`.

The `WeatherService` is meant to be used to implement the logic to acquire the weather data.

You are welcome to implement a single route (page) to display both the current and hourly weather data, or a route for each.

The API will return quite a bit of data, so you can print the response to the console to view it and determine how to access the data you need, as well as diagnose any errors.

---

### Step 5

Now that you're able to select a city and get its geographic coordinates and weather data, you'll need to present the data on the page. Display the weather data how you'd like.

**NOTE**: <em>OpenWeatherMap</em> also provides images that you can use on your page. You can learn how to use them on their <a target="_blank" href="https://openweathermap.org/weather-conditions">Weather Conditions documentation page</a>.
