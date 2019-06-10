import GeoUtils from './GeoUtils'

class User {
    public id: string
    public currentLat: number
    public currentLng: number
    public isValid: boolean = false
           
    /**
     * 
     * @param userId Valid 한 유저 아이디여야 한다
     * @param lat 
     * @param lng 
     */
    constructor(userId: string, lat: number = GeoUtils.defaultCoord[0], lng: number = GeoUtils.defaultCoord[1], isValid: boolean = true){
        this.id = userId
        this.currentLat = lat
        this.currentLng = lng
        this.isValid = isValid
    }
}

export interface IUserProps {
    user: User
}

export default User