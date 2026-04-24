import {useAppSelector} from "../app/hooks.ts";
import {useGetWeatherByCityQuery} from "../feachers/api/weatherAction.ts";

const Weather = () => {
    const city = useAppSelector(state => state.city)

    const {data, error, isLoading} = useGetWeatherByCityQuery(city, {
        skip: !city,
        // refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
        pollingInterval: 1000 * 60 * 60, //интервал повторения запроса
        skipPollingIfUnfocused: true, // если не в фокусе, то не надо делать поллинг
    })

    if (!city) {
        return <div className={'infoWeather'}>Enter city name</div>
    }

    if (isLoading) {
        return <div className={'infoWeather'}>Loading...</div>
    }

    if (error) {
        return (
            <div className={'error'}>Enter correct city name</div>
        )
    } else {
        return (
            <div className={'infoWeather'}>
                {!!data &&
                    <>
                        <p>Location: {data.country}, {data.city}</p>
                        <p>Temp: {data.temp}</p>
                        <p>Pressure: {data.pressure}</p>
                        <p>Sunset: {new Date(data.sunset).toLocaleTimeString()}</p>
                    </>}
            </div>
        );
    }
};

export default Weather;