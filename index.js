import CountrySelection from './src/CountryList/CountrySelection';
import { countries } from './src/CountryList/Constants';

export { CountrySelection };


export function generateSectionData(code) {
    let country = {};
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].code == code) {
            country = countries[i];
            break;
        }
    }
    return country;
}
