# React Weather App

In this exercise, you will use state with an API to make a weather app!

The result should look like: 

![Image of result](https://github.com/evyros/react-weather-app/raw/master/result.png)


### Instructions:
1. Fork this repo to your account
2. Clone it
3. `cd react-weather-app`
4. `npm install`
5. `npm start`

### API
This is the API endpoint to get the forecast:

`https://my-json-server.typicode.com/evyros/react-weather-app/forecast`

### Further instructions:
1. Make a component named `Forecast1Day` that will contain the forecast for 1 day. This component should receive all info with props.
2. Use the API to get the JSON and loop it to display the forecast.
3. For your convenience, there is an `icons` directory with the images of all days.
4. Please note, that the API doesn't give you the day of the week in a text format. Instead, it provides the number of the day of the week (0-6). Sunday is 0, Saturday is 6. You will have to format it by yourself.