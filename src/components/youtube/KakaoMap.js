import React, { useRef, useEffect } from "react";

function KakaoMap() {
    const mapRef = useRef(null);

    useEffect(() => {
        const container = mapRef.current;
        const options = {
            center: new window.kakao.maps.LatLng(37.3987806, 126.9795886),
            level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다
        var markerPosition  = new window.kakao.maps.LatLng(37.3987806, 126.9795886);

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        return () => {
            map.remove();
        };
    },[]);

    return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
}

export default KakaoMap;
