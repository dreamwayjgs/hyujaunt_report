import React, { Component } from 'react';
import '../App.css'

declare var daum: any

class MapView extends Component {
  componentDidMount() {
    daum.maps.load(() => {
      console.log('다음맵 로드')
        // init location
        let lat = 37.555589
        let lng = 127.049051

        //지도 생성
        let map = new daum.maps.Map(document.getElementById('map'), {
            center: new daum.maps.LatLng(33.4863, 126.489),
            level: 3,
        });
        // daum.mapsApi.getAddress(lat, lng).then(result => {
        //     this.setState({
        //         address: result,
        //         centerLat: lat,
        //         centerLng: lng,
        //         map: map
        //     })
        // })

        //이동시 지도 중앙 좌표와 동 갱신
        // daum.maps.event.addListener(map, 'dragend', () => {
        //     let latlng = map.getCenter();

        //     daum.mapsApi.getAddress(latlng.getLat(), latlng.getLng()).then(result => {
        //         this.setState({
        //             centerLat: latlng.getLat(),
        //             centerLng: latlng.getLng(),
        //             address: result
        //         })
        //     })
        // })
    })
}

  render() {
    return (
      <div id="map">
        지도 표시 되는 공간
    </div>
    );
  }
}

export default MapView;
