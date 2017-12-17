import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Alert,
    Permission
} from 'react-native';

import MapView from 'react-native-maps';
import Permissions from 'react-native-permissions'

const { width, height } = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


export default class FindMe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markerPosition: {
                latitude: 0,
                longitude: 0
            }
        }
    }

    watchID: ?number = null

    findMe() {
        Permissions.request('location')
            .then(response => {
                if (response === 'authorized') {
                    navigator.geolocation.getCurrentPosition((position) => {
                        var lat = parseFloat(position.coords.latitude)
                        var long = parseFloat(position.coords.longitude)

                        var initialRegion = {
                            latitude: lat,
                            longitude: long,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA
                        }

                        this.setState({ initialPosition: initialRegion })
                        this.setState({ markerPosition: initialRegion })
                    },
                        (error) => Alert.alert('Hata',
                            JSON.stringify(error)),
                        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })
                }
            });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)

    }
    render() {
        const { height: windowHeight } = Dimensions.get('window');
        const varTop = windowHeight - 110;
        const hitSlop = {
            top: 15,
            bottom: 15,
            left: 15,
            right: 15,
        }
        bbStyle = function (vheight) {
            return {
                position: 'absolute',
                top: vheight,
                left: 30,
                right: 10,
                backgroundColor: 'transparent',
                alignItems: 'flex-end',
            }
        }
        return (
            <View style={styles.container}>
                <View style={bbStyle(varTop)}>
                    <TouchableOpacity
                        hitSlop={hitSlop}
                        activeOpacity={0.7}
                        style={styles.mapButton}
                        onPress={() => this.findMe()}
                    >
                        <Text style={{ fontWeight: 'bold', color: 'black', }}>Konumum</Text>
                    </TouchableOpacity>
                </View>
                <MapView
                    style={styles.map}
                    region={this.state.initialPosition}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    followsUserLocation={true}
                    loadingEnabled={true}
                    rotateEnabled={false}
                >
                    {
                    <MapView.Marker
                        coordinate={this.state.markerPosition}>
                        <Text style={styles.text}></Text>
                        <View >
                            <View style={styles.marker}></View>
                        </View>
                    </MapView.Marker>
                     }
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 4,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,122,255,0.1)',
        borderWidth: 1,
        borderColor: 'azure',
        alignItems: 'center',
        justifyContent: 'center'
    },
    marker: {
        height: 15,
        width: 15,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50 / 2,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'dodgerblue'
    },
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    map: {
        flex: 1,
        zIndex: -1,
    },
    text: {
        textAlign: 'center',
        color: 'dodgerblue',
        fontWeight: 'bold'
    },
    mapButton: {
        width: 75,
        height: 75,
        borderRadius: 85 / 2,
        backgroundColor: 'rgba(252, 253, 253, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOpacity: 0.12,
        opacity: .5,
        zIndex: 10,
    },
});
