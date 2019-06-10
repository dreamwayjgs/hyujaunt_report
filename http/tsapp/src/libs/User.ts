class User {
    public id: string
    public currentLat: number
    public currentLng: number
    
    //lat, lng: 경복궁 (37.555589, 127.049051)
    constructor(userId: string, lat: number = 37.555589, lng: number = 127){
        this.id = userId
        this.currentLat = lat
        this.currentLng = lng
    }
}

export interface IUserProps {
    user: User
}

export default User