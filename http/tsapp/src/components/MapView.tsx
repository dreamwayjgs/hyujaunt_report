import React from 'react';
import './MapView.css'
import Map, { IMapProps } from '../libs/DaumMap' // 만약 다른 맵을 사용하고 싶다면 Default Map 에 맞춰서 클래스 작성

declare var daum: any

class MapView extends React.PureComponent<IMapProps, {}> {
  state ={
    address: "주소 없음",
    centerLat: this.props.centerLat,
    centerLng: this.props.centerLng
  }

  componentDidMount() {
    daum.maps.load(() => {
      console.log('다음맵 로드', this.props)
      //지도 생성
      let map = new Map('map', this.props.centerLat, this.props.centerLng)

      map.drawMarker(this.props.centerLat, this.props.centerLng)

      Map.getAddress(this.props.centerLat, this.props.centerLng).then(result => {
        this.setState({
          address: result,
          centerLat: this.props.centerLat,
          centerLng: this.props.centerLng,
          map: map
        })
      })

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
      <div>
        <div className="mapInfo">          
          <div className="mapInfoBody">{this.state.address} ({this.state.centerLat}, {this.state.centerLng})</div>
        </div>
        <div id="map">
          지도 표시 되는 공간
        </div>
      </div>
    );
  }
}

export default MapView;
