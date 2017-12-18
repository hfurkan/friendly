import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const icons = {
    //"home": [FontAwesome, 30, 'red'],
    "list-ul": [FontAwesome, 30, 'black'],
    //"link": [FontAwesome, 30, 'red'],
    "map-marker": [FontAwesome, 30, 'red'],
    "v-card": [Entypo, 30, 'red'],
    "home": [Entypo, 30, 'red'],
    "list": [Entypo, 30, 'red'],
    "link": [Entypo, 30, 'red'],
    "phone": [FontAwesome, 30, 'red'],
    "search": [FontAwesome, 30, 'red'],
    "layers": [Entypo, 30, 'red'],
    "switch": [Entypo, 30, 'red'],
    "flash": [Entypo, 30, 'red'],
    "cog": [Entypo, 30, 'red'],
    "heart": [Entypo, 30, 'red']


};

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
    new Promise.all(
        Object.keys(icons).map(iconName =>
            icons[iconName][0].getImageSource(
                iconName,
                icons[iconName][1],
                icons[iconName][2]
            ))
    ).then(sources => {
        Object.keys(icons)
            .forEach((iconName, idx) => iconsMap[iconName] = sources[idx]);
        resolve(true);
    })
});

export {
    iconsMap,
    iconsLoaded
};
