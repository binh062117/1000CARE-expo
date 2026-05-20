import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import Colors from '../Colors/Colors';
import { Image } from '../index';

const { width } = Dimensions.get('window');

export class SliderBox extends Component {
  static defaultProps = {
    openImage: null,
    imageZoom: [],
    onCurrentItemPressed: null,
    parentWidth: null,
    dotColor: Colors.lightGrey,
    inactiveDotColor: Colors.white,
    dotStyle: null,
    paginationBoxVerticalPadding: 0,
    circleLoop: false,
    autoplay: false,
    paginationBoxStyle: {},
    resizeMethod: 'resize',
    resizeMode: 'cover',
    ImageComponentStyle: {},
    imageLoadingColor: Colors.primary,
    firstItem: 0,
    containerStyle: {},
    autoplayInterval: 5000,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentItem: props.firstItem || 0,
      loading: [],
    };
    this.scrollView = React.createRef();
  }

  componentDidMount() {
    if (this.props.autoplay) {
      this.startAutoplay();
    }
  }

  componentWillUnmount() {
    this.stopAutoplay();
  }

  startAutoplay = () => {
    this.autoplayTimer = setInterval(() => {
      const { items } = this.props;
      if (!items || items.length === 0) return;
      
      let nextItem = this.state.currentItem + 1;
      if (nextItem >= items.length) {
        nextItem = 0;
      }
      
      this.scrollToIndex(nextItem);
    }, this.props.autoplayInterval);
  };

  stopAutoplay = () => {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  };

  scrollToIndex = (index) => {
    const pWidth = this.props.parentWidth || width;
    if (this.scrollView.current) {
      this.scrollView.current.scrollTo({ x: index * pWidth, animated: true });
    }
    this.setState({ currentItem: index });
  };

  onScroll = (event) => {
    const pWidth = this.props.parentWidth || width;
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / pWidth);
    if (index !== this.state.currentItem) {
      this.setState({ currentItem: index });
      if (this.props.onSnapToItem) {
        this.props.onSnapToItem(index);
      }
    }
  };

  onCurrentItemPressedHandler = () => {
    const { openImage, imageZoom, onCurrentItemPressed } = this.props;
    if (openImage) openImage(imageZoom);
    if (onCurrentItemPressed) onCurrentItemPressed(this.state.currentItem);
  };

  renderItem = (item, index) => {
    const {
      ImageComponentStyle = {},
      disableOnPress,
      resizeMethod,
      resizeMode,
      imageLoadingColor,
      containerStyle,
      parentWidth,
    } = this.props;

    const pWidth = parentWidth || width;

    return (
      <View key={index} style={[styles.item, containerStyle, { width: pWidth }]}>
        <TouchableOpacity
          disabled={disableOnPress}
          onPress={this.onCurrentItemPressedHandler}
          activeOpacity={1}>
          {item.image && (
            <Image
              {...this.props}
              style={[
                { height: ImageComponentStyle.height || 200 },
                styles.image,
                ImageComponentStyle,
              ]}
              heightImage={ImageComponentStyle.height || 200}
              widthImage={pWidth}
              source={
                typeof item.image === 'string'
                  ? { uri: item.image }
                  : item.image
              }
              resizeMethod={resizeMethod}
              resizeMode={resizeMode}
              onLoadEnd={() => {
                this.setState(prevState => {
                  const loading = [...prevState.loading];
                  loading[index] = true;
                  return { loading };
                });
              }}
            />
          )}
          {item.body}
        </TouchableOpacity>
        {!this.state.loading[index] && (
          <ActivityIndicator
            size="large"
            color={imageLoadingColor}
            style={{ position: 'absolute', alignSelf: 'center', top: (ImageComponentStyle.height || 200) / 2 - 20 }}
          />
        )}
      </View>
    );
  };

  render() {
    const { items, parentWidth } = this.props;
    if (!items) return null;
    const pWidth = parentWidth || width;

    return (
      <View style={{ height: this.props.ImageComponentStyle.height || 200 }}>
        <ScrollView
          ref={this.scrollView}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.onScroll}
          onScrollBeginDrag={this.stopAutoplay}
          onScrollEndDrag={this.props.autoplay ? this.startAutoplay : null}
        >
          {items.map((item, index) => this.renderItem(item, index))}
        </ScrollView>
      </View>
    );
  }
}

export default SliderBox;
