import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import HomeGuest from '../screens/HomeGuest';

const SplashScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulasi loading 2 detik
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/Logo_IdPlay.jpeg')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>
        );
    }

    return <HomeGuest />;
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 200,
        height: 200,
    },
});

import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();
useEffect(() => {
    const timer = setTimeout(() => {
        navigation.navigate('HomeGuest' as never);
    }, 2000);
    return () => clearTimeout(timer);
}, []);
