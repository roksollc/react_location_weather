# React Final Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Welcome to the Final Project for the React course. Great job making it this far! This final project requires an understanding of several topics you've learned throughout this course. It is designed to mimic requirements you'll encounter in your career, so it may be challenging and require several hours to complete. Don't forget, you can always review past lessons and search the internet for help. Good luck!

---

## Project Structure

The shell of the application has been started for you. It contains skeletons of all of the relevant components that you'll need to complete this project.

---

### WorldCities & City Selector

The `WorldCities` component has been provided for you. It contains JSON files with most of the world's countries, states/regions, and cities, as well as functions to access the data. The relevant imports have been added for you to the `CitySelector` component. The `CitySelector` component is also provided for you.

---

### GeoLocationService

The `GeoLocationService` is meant to acquire the geographic coordinates (latitude and longitude) of a specified city in the world. In order to implement that functionality, you will need to sign up for a free developer account at _MapQuest_ to use their `Geocoding API`.

**[Signup for a free MapQuest Developer Account](https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register)**

When you sign up, you should be provided an `API Key`. Once you have the key, replace the placeholder (_MAPQUEST_API_KEY_) at the top of the `GeolocationService.js` file:

```js
// API Key - Change to your API_KEY
const GEO_API_KEY = "MAPQUEST_API_KEY";
```

You can [manage your MapQuest API keys on their site](https://developer.mapquest.com/user/me/apps).

You will need to add the necessary code to the `GeolocationService.js` file to acquire data from MapQuests's API. However, a skeleton is provided, and there are comments to help you. Look back throughout the lessons if you need help. The other service &mdash; _WeatherService_ (below) &mdash; has been implemented for you. You can also refer to that source code for ideas or help.

To get details on how to use the API, go to [MapQuests's Geocoding API documentation](https://developer.mapquest.com/documentation/geocoding-api/address/get//).

---

### WeatherService

The `WeatherService` is meant to acquire weather data, both current and hourly, for specified geographic coordinates (latitude and longitude). This service has been implemented for you; however, you will need to sign up for a free account at _OpenWeatherMap_ to use their API.

**[Signup for a free account at OpenWeatherMap](https://home.openweathermap.org/users/sign_up)**

When you sign up, you should be provided an `API Key`. Once you have the key, replace the placeholder (_OPEN_WEATHER_MAP_API_KEY_) at the top of the `WeatherService.js` file:

```js
// API Key - Change to your API_KEY
const WEATHER_API_KEY = "OPEN_WEATHER_MAP_API_KEY";
```

You can [manage your OpenWeatherMap API keys on their site](https://home.openweathermap.org/api_keys).

---

## Requirements

### Step 1

You need to understand the mechanism provided to you to select a city for which to request geographic coordinate and weather data using the APIs.

One common approach for acquiring the city is to use three selectors:

- The user must first specify a **country** before the state/region selector has any data. 

- The user must then select a **state/region** of the selected country before the city selector has data.

- The user can then choose a **city** of the selected state/region.

---

### Step 2

Create another route for the weather. If you're using the provided components, the `WeatherDashboard` component is meant for this requirement.

Note: The `WeatherDashboard` component uses the `CurrentWeatherDisplay` component. Be sure to finish building the `CurrentWeatherDisplay` component.

Display the selected city and state/region on this page. This is only meant to be temporary, but it will help you to ensure you're passing data around properly.

---

### Step 3

Now that you're able to select a city and pass it to the new route (with the `WeatherDashboard`), you'll next need to get the city's geographic coordinates using the `MapQuest Geolocation API`.

As mentioned earlier, you will need to implement the functionality to get the location data via the API. A skeleton (`GeolocationService.js`) has been created for you with comments to help.

Once you successfully obtain the city's coordinates, temporarily display the latitude and longitude values below the city on the page. This will help you verify that all is working properly.

---

### Step 4

Now that you're able to select a city and get its geographic coordinates via the _MapQuest Geolocation API_, you'll next need to get the weather data for the city using the `OpenWeatherMap API`.

The `WeatherService` has been implemented for you &mdash; you only need to replace the API Key and use the service. 

The example implementation of the final project, below, shows current and hourly weather data on the same page simultaneously, meaning both API calls were made. However, you may choose to separate them using separate routes &mdash; it's up to you.

The API will return quite a bit of data, so you can print the response to the console to view it and determine how to access the data you need, as well as diagnose any errors.

---

### Step 5

Now that you're able to select a city and get its geographic coordinates and weather data, you'll need to present the data on the page. The example implementation of the final project, below, illustrates some possibilities, but you are free to display the weather data how you'd like.

<div class="panel panel-success">
    <div class="panel-heading">
        <h3 class="panel-title">Additional Info!</h3>
    </div>
    <div class="panel-body">
        <p><em>OpenWeatherMap</em> also provides images that you can use on your page. You can learn how to use them on their <a target="_blank" href="https://openweathermap.org/weather-conditions">Weather Conditions</a> documentation page.</p>
    </div>
</div>

---

### Stretch Goal

If you are able to get through this project quickly enough, try adding a sub-route to the app. For example, consider the following URL:

```text
http://localhost:3000/weather/scottsdale,AZ
```

You can create a sub-route like:

```ts
<Route path={`/weather/:city,:state`} ... />
```

If the above URL were entered into the browser while running your app, it should display the weather for that city, without the need for selecting the city manually.
