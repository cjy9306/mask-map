import React, { useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Store from './Store';
import { renderToString } from 'react-dom/server';
import MapInfo from './MapInfo';
import styled from 'styled-components';

const MapContainer = styled.div`
	width: 100%;

	@media only screen and (min-width: 621px) {
		height: ${window.innerHeight - 60}px;
		margin-top: 60px;
	}

	@media only screen and (max-width: 620px) {
		height: ${window.innerHeight - 40}px;
		margin-top: 40px;
	}
`;

let overlayedStores = [];
let overlayes = [];
let map = null;

const MaskMap = () => {
	const markStores = async (lat, lng) => {
		try {
			const url =
				'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=' + lat + '&lng=' + lng + '&m=2000';
			const result = await (await axios.get(url, { timeout: 10 * 1000 })).data;
			let position = null;
			let content = '';
			for (let i = 0; i < result.count; i++) {
				if (overlayedStores[result.stores[i].code] !== undefined) {
					continue;
				}

				position = new window.kakao.maps.LatLng(result.stores[i].lat, result.stores[i].lng);

				content = renderToString(<Store store={result.stores[i]} key={result.stores[i].code} />);
				console.log(content);
				const customOverlay = new window.kakao.maps.CustomOverlay({
					position,
					content: content
				});

				overlayedStores[result.stores[i].code] = result.stores[i];
				overlayes.push(customOverlay);
				customOverlay.setMap(map);
			}
		} catch (e) {
			alert('서버로부터 마스크 정보를 불러올 수 없습니다. 잠시 후 다시 시도해 주십시오.');
		}
	};

	const onSearch = keyword => {
		if (keyword === '') return;

		const ps = new window.kakao.maps.services.Places();

		try {
			ps.keywordSearch(keyword, async (data, status, pagination) => {
				if (status === window.kakao.maps.services.Status.OK) {
					// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
					// LatLngBounds 객체에 좌표를 추가합니다
					var bounds = new window.kakao.maps.LatLngBounds();
					let lat = 0;
					let lng = 0;
					for (var i = 0; i < data.length; i++) {
						bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
						lat = Number(lat) + Number(data[i].y);
						lng = Number(lng) + Number(data[i].x);
					}

					lat = Number(lat) / data.length;
					lng = Number(lng) / data.length;

					markStores(lat, lng);

					// 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
					map.setBounds(bounds);
				}
			});
		} catch (e) {
			alert('장소 검색 중 에러가 발생하였습니다. 잠시 후 다시 시도해 주십시오.');
		}
	};

	const onRefresh = async () => {
		overlayedStores = [];
		const center = map.getCenter();
		for (let i = 0; i < overlayes.length; i++) {
			overlayes[i].setMap(null);
		}
		overlayes = [];
		markStores(center.getLat(), center.getLng());
	};

	useEffect(() => {
		const container = document.getElementById('map');
		const defaultLat = 37.555299445604334;
		const defaultLng = 126.9736589530062;
		const options = {
			// 서울역 근처 세팅
			center: new window.kakao.maps.LatLng(defaultLat, defaultLng),
			level: 4
		};

		map = new window.kakao.maps.Map(container, options);

		const zoomControl = new window.kakao.maps.ZoomControl();
		map.addControl(zoomControl, window.kakao.maps.ControlPosition.BOTTOMRIGHT);

		markStores(defaultLat, defaultLng);
		window.kakao.maps.event.addListener(map, 'dragend', async () => {
			const center = map.getCenter();

			markStores(center.getLat(), center.getLng());
		});
	}, []);

	return (
		<div>
			<Header onSearch={onSearch} onRefresh={onRefresh} />
			<MapInfo />
			<MapContainer id="map"></MapContainer>
		</div>
	);
};

export default MaskMap;
