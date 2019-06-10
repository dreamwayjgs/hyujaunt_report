import queryString from 'query-string'
const CoordParser = require('coordinate-parser')

class GeoUtils {
    static defaultCoord: [number, number] = [37.555, 127.049] //lat, lng: 한양대ITBT (37.555589, 127.049051)
    static latAlias: string[] = ['lat', 'latitude', 'mapy', '위도']
    static lngAlias: string[] = ['lng', 'longitude', 'mapx', '경도']
    /**
     * 
     * @param latOrCoord 
     * @param optionalParams 
     */
    public static parseCoord(latOrCoord: string | number | queryString.ParsedQuery, lng?: string | number): [number, number] {
        let latLng: [number, number]
        let coordStr: string = this.defaultCoord.join(" ")

        // lat, lng ==> 'lat lng'
        if (lng) {
            coordStr = latOrCoord + " " + lng
        }

        // query parsed object
        else if (typeof latOrCoord === 'object'){
            Object.keys(latOrCoord).forEach(key => {
                if(this.latAlias.includes(key.toLowerCase())){                    
                    coordStr = latOrCoord[key] + " "
                }
                if(this.lngAlias.includes(key.toLowerCase())){                    
                    coordStr += latOrCoord[key]
                }
            })
        }

        // latOrLatLngString is something about coordinates
        else {
            if (typeof latOrCoord === 'string') {
                coordStr = latOrCoord.split(/\s*(?:;|$)\s*/).join(" ")
            }
        }
        try {
            let position = new CoordParser(coordStr)
            latLng = [Number(position.getLatitude()), Number(position.getLongitude())]            
        }
        catch (e) {
            console.log("POSITION IS NOT VALID")
            return this.defaultCoord
        }
        //check lat, lng                
        return latLng
    }
}

export default GeoUtils