import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { SCREEN_WIDTH, sizeHeight, sizeWidth } from '../../assets/responsive';
import { bgBlack2, MainColor } from '../../assets/colors';

export default class Banner extends Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);

        this.state = {
            indexOf: 0,
        };
    }

    //setIndex
    handleSetIndex = (e) => {
        const viewSize = e.nativeEvent.layoutMeasurement.width;
        const contentOffset = e.nativeEvent.contentOffset.x;
        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({
            indexOf: selectedIndex,
        });
    };

    componentDidMount = () => {
        this.interval = setInterval(() => {
            this.setState(prev => ({ indexOf: prev.indexOf === this.props.dataBanner.length - 1 ? 0 : prev.indexOf + 1 }),
                () => {
                    this.scrollRef.current.scrollTo({
                        animatde: true,
                        y: 0,
                        x: SCREEN_WIDTH * this.state.indexOf,
                    });
                }
            );
        }, 3000);
    }

    componentWillUnmount() {
        // Clear the interval right before component unmount
        clearInterval(this.interval);
    }
    render() {
        return (
            <View style={styles.Container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onMomentumScrollEnd={this.handleSetIndex}
                    ref={this.scrollRef}
                >
                    {
                        this.props.dataBanner.map((item, index) => {
                            return (
                                <View style={styles.BoxImage} key={index}>
                                    <Image style={styles.Image} source={item.image} />
                                </View>
                            );
                        })
                    }
                </ScrollView>
                <View style={styles.BoxCircle}>
                    {
                        this.props.dataBanner.map((item, index) => {
                            return (
                                <View key={index} style={[styles.Circle, { backgroundColor: index === this.state.indexOf ? MainColor : bgBlack2 }]} />
                            );
                        })
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {

    },
    BoxImage: {
        width: SCREEN_WIDTH,
        height: sizeWidth(45),
    },
    Image: {
        resizeMode: 'stretch',
        width: SCREEN_WIDTH,
        height: '100%',
    },
    BoxCircle: {
        position: 'absolute',
        bottom: 15,
        // borderWidth: 1,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    Circle: {
        width: sizeWidth(2),
        height: sizeWidth(2),
        borderRadius: 20 / 2,
        marginHorizontal: 3,
    },
});
