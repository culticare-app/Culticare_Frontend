import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Nav = () => {
    const navigation = useNavigation();
    const [page, onChangePage] = React.useState('')

    return (
        <View style={styles.navWrap}>
            <TouchableOpacity style={styles.nav} onPress={() => {navigation.navigate(''); onChangePage()}} activeOpacity={0.7}>
                <Image style={styles.navimg} source={require('../assets/images/nav/record.png')} />
                <Text style={styles.navtest}>감정기록</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav} onPress={() => {navigation.navigate(''); onChangePage()}} activeOpacity={0.7}>
                <Image style={styles.navimg} source={require('../assets/images/nav/checkinfo.png')} />
                <Text style={styles.navtest}>정보 조회</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav} onPress={() => {navigation.navigate('Join'); onChangePage()}} activeOpacity={0.7}>
                <Image style={styles.navimg} source={require('../assets/images/nav/checkculture.png')} />
                <Text style={styles.navtest}>문화 탐구</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav} onPress={() => {navigation.navigate('Community'); onChangePage('Community')}} activeOpacity={0.7}>
                <Image style={styles.navimg} source={page === 'Community' ?  require('../assets/images/nav/communitycheck.png') : require('../assets/images/nav/community.png')} />
                <Text style={styles.navtest}>커뮤니티</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav} onPress={() => {navigation.navigate('Login'); onChangePage()}} activeOpacity={0.7}>
                <Image style={styles.navimg} source={require('../assets/images/nav/mypage.png')} />
                <Text style={styles.navtest}>마이페이지</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navWrap: {
        zIndex: 1,
        flexDirection: 'row',
        height: 88,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute', // 수정: 'fixed' 대신 'absolute' 사용
        bottom: 0,
        padding: 10,
        backgroundColor: 'white', // 배경색 추가
    },
    nav: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    navimg: {
        width: 24,
        height: 24,
        marginBottom: 5
    },
    navtest: {
        fontSize: 10
    }
});

export default Nav;
