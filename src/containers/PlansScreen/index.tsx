import React, { useState } from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, LayoutAnimation, NativeScrollEvent, NativeSyntheticEvent, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import MapView, { Callout, LatLng, MapPressEvent, MapViewProps, Marker, Polygon, Polyline } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import Button from "../../library/components/Button";

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>


const PlansScreen: React.FC<Props> = ({ navigation }) => {
	const [cordinitis, setCodinites] = useState<Array<LatLng>>([])

	const handleMapsPress = (event: MapPressEvent): void => {
		console.log("event.nativeEvent=>>", event.nativeEvent)
		if (event.nativeEvent) {
			const { coordinate, action } = event.nativeEvent
			if (action == 'marker-press') {
				const cord = [...cordinitis];
				const data = cord.filter((item) => {
					if (item.latitude == coordinate.latitude && item.longitude == coordinate.longitude) return false
					return true
				})
				setCodinites(data)
				return
			}
			setCodinites((prev) => [...prev, coordinate])
		}
	}

	console.log("cordinitis", cordinitis);

	return <SafeAreaView style={{ flex: 1 }}>
		<View style={{ flex: 1, }}>
			<MapView
				//    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
				style={styles.map}
				region={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121,
				}}
				onPress={handleMapsPress}
			>
				{cordinitis.length > 0 && cordinitis.map((item: LatLng, index: number) =>
					<Marker
						key={index}
						coordinate={item}
						draggable={true}
					/>
				)}
				{/* {cordinitis.length > 1 &&
                    <MapViewDirections
                        origin={cordinitis[0]}
                        destination={cordinitis[1]}
                    apikey={GOOGLE_MAP_KEY}
                    />
                } */}

				<Polyline
					coordinates={cordinitis}
					strokeColor={'red'}
					strokeWidth={3}
				/>

			</MapView>
			<Button
				title="Clear All markers"
				onPress={() => setCodinites([])}
				containerStyle={styles.buttonContainer}
			/>
		</View>

	</SafeAreaView>
}

export default PlansScreen

