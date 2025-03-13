import { Map as YandexMap, Placemark, YMaps } from "@pbe/react-yandex-maps";
import clsx from "clsx";
import style from "./Map.module.scss";

const Map = () => {
  return (
    <div className={clsx(style["geolocation"])}>
      <YMaps>
        <div className={clsx(style["geolocation__map"])}>
          <YandexMap
            defaultState={{ center: [55.794684, 37.735773], zoom: 17 }}
          >
            <Placemark geometry={[55.794684, 37.735773]} />
          </YandexMap>
        </div>
      </YMaps>
    </div>
  );
};

export default Map;
