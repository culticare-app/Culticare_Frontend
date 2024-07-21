import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Nav = () => {
    return ( 
        <View style={styles.navWrap}>
            <View style={styles.nav} onpress>
                <Image style={styles.navimg} source={require('../assets/images/nav/record.png')} />
                <Text style={styles.navtest}>감정기록</Text>
            </View>
            <View style={styles.nav}>
                <Image style={styles.navimg} source={require('../assets/images/nav/checkinfo.png')} />
                <Text style={styles.navtest}>정보 조회</Text>
            </View>
            <View style={styles.nav}>
                <Image style={styles.navimg} source={require('../assets/images/nav/checkculture.png')} />
                <Text style={styles.navtest}>문화 탐구</Text>
            </View>
            <View style={styles.nav}>
                <Image style={styles.navimg} source={require('../assets/images/nav/community.png')} />
                <Text style={styles.navtest}>커뮤니티</Text>
            </View>
            <View style={styles.nav}>
                <Image style={styles.navimg} source={require('../assets/images/nav/mypage.png')} />
                <Text style={styles.navtest}>마이페이지</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navWrap: {
        zIndex: 1,
        flexDirection: 'row',
        height: 88,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        padding: 10
    },
    nav: {
        width: "20%",
        alignItems: "center"
    }, 
    navimg: {
        width: 24,
        marginBottom: 5
    }, 
    navtest : {
        fontSize: 10
    }
});

export default Nav;