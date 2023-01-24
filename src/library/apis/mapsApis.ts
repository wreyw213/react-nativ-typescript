import ApiConstants from "../constants/ApiConstants";
import { apiCall } from "./api";


export const getAreas = <T>(query: string) => apiCall<T>("GET", `https://nominatim.openstreetmap.org/search.php?q=${query}&polygon_geojson=1&format=jsonv2`);
