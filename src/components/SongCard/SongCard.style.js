import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    inner_container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    info_container: {
        flexDirection: 'row',
        flex: 1,
    },
    content_container: {
        flexDirection: 'row',
    },
    artist: {
        fontSize: 15,
        paddingLeft: 1,
    },
    year: {
        fontSize: 12,
        marginLeft: 10,
        paddingTop: 3,
        colo: 'gray',
        fontWeight: 'bold',
    },
    soldout_container: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        paddingTop: 6,
        paddingLeft: 9,
        height: 30,
        width: 70,
    },
    soldout_title: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 12,
    },
});