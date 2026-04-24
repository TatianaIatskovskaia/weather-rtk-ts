export interface WeatherInfo {
    city: string;
    country: string;
    temp: number;
    pressure: number;
    sunset: number;
}

export interface WeatherInfoResponse {
    name: string;
    sys: {
        country: string;
        sunset: number;
    };
    main: {
        temp: number;
        pressure: number;
    }
}