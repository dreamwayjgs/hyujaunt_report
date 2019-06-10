declare var daum: any

class DaumMap {
    private map: any    

    constructor(elem: string, lat: number, lng: number){
        this.map = new daum.maps.Map(document.getElementById(elem), {
            center: new daum.maps.LatLng(lat, lng),
            level: 3
        })
    }

}

export class MapApis {
    static async getAddress(lat: number, lng: number) {
        let result = await this.coord2AddressDaum(lat, lng);
        return result;
    }

    static coord2AddressDaum(lat: number, lng: number) {
        return new Promise(resolve => {
            let geocoder = new daum.maps.services.Geocoder()
            geocoder.coord2Address(lng, lat, (result: any, status: string) => {
                if (status === daum.maps.services.Status.OK) {
                    console.log(lat, lng, result[0].address.address_name)
                    resolve(result[0].address.address_name)
                }
                resolve("해당 위치 주소 없음")
            })
        })
    }

    get markerImage() {
        let icon = new daum.maps.MarkerImage(
            'http://localimg.daum-img.net/localimages/07/2009/map/icon/blog_icon01_on.png',
            new daum.maps.Size(31, 35),
            {
                offset: new daum.maps.Point(16, 34),
                alt: "마커 이미지 예제",
                shape: "poly",
                coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33"
            }
        )
        return icon
    }
   
}

export interface IMarkerProps {
    lat: number
    lng: number
}
export default DaumMap;