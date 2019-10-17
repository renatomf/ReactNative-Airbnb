import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
} from 'react-native'

import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../assets/airbnb-logo.png';
import RoundedButton from '../components/buttons/RoundedButton';

export default class LoggedOut extends Component {
    onFacebookPress() {
        alert('Facebook button pressed');
    }

    onCreateAccountPress() {
        alert('Create Account button pressed');
    }

    onMoreOptionsPress() {
        alert('More options button pressed');
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image
                        style={styles.logo}
                        source={logo}
                    />
                    <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
                    <RoundedButton
                        text="Continue with Facebook"
                        textColor={colors.green01}
                        background={colors.white}
                        icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
                        handleOnPress={this.onFacebookPress}
                    />
                    <RoundedButton
                        text="Create Account"
                        textColor={colors.white}
                        handleOnPress={this.onCreateAccountPress}
                    />

                    <TouchableHighlight
                        style={styles.moreOptionsButton}
                        onPress={this.onMoreOptionsPress}
                    >
                        <Text style={styles.moreOptionsButtonText}>More options</Text>
                    </TouchableHighlight>
                    <View style={styles.termAndConditions}>
                        <Text style={styles.termsText}>By tapping Continue, Create Account or More options, I agree</Text>
                        <Text style={styles.termsText}>to Airbnb´s </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}> , </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Payments Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}> , </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Privacy Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}> and </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Nondiscriminationd Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>.</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.green01,
    },
    welcomeWrapper: {
        flex: 1,
        marginTop: 30,
        padding: 20,
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40,
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 20,
        zIndex: 8,
    },
    moreOptionsButton: {
        marginTop: 10,
    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16,
    },
    termAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: '600',
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,

    }
});