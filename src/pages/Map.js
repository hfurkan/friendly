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


export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locationResult: null,
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
        this.findMe = this.findMe.bind(this)
    }



    componentDidMount() {
        this.findMe()
    }

    findMe() {
        Permissions.check("location").then(response => {
            if (response != "authorized") {
                Permissions.request('location').then(response => {
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
                            { enableHighAccuracy: true, timeout: 3000, maximumAge: 10000 })
                        this.watchID = navigator.geolocation.watchPosition(position => {
                            const newRegion = {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LONGITUDE_DELTA
                            };
                            this.setState({ busy: false });
                            this.onRegionChange(newRegion);
                        });
                    }
                });
            } else {
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
                    { enableHighAccuracy: true, timeout: 3000, maximumAge: 10000 })
            }

        })

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
                backgroundColor: 'red',
                alignItems: 'flex-end',
            }
        }
        return (
            <View style={styles.container}>

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
                <View style={[{
                    elevation: 2,
                    shadowOpacity: 0.75,
                    shadowRadius: 1,
                    shadowColor: 'grey',
                    shadowOffset: { height: 0, width: 0 }, flex: 1, marginHorizontal: 20, marginBottom: 30,
                }]}>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{ alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.7)', padding: 10 }}
                        onPress={this.findMe()}
                        >
                       
                        <Text>
                            KONUMU BUL
                        </Text>

                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,122,255,0.1)',
        borderWidth: 1,
        borderColor: 'azure',
        alignItems: 'center',
        justifyContent: 'center'
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: 'dodgerblue'
    },
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "white",
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
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
