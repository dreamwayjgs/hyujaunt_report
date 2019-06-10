class User {
    public id: string
    public currentLat: number
    public currentLng: number
    
    //lat, lng: 경복궁 (37.555589, 127.049051)
    //lat, lng: 한양대ITBT (37.415858, 126.880064)
    constructor(userId: string, lat: number = 37.415858, lng: number = 126.880064){
        this.id = userId
        this.currentLat = lat
        this.currentLng = lng
    }
}

export interface IUserProps {
    user: User
}

export default User