import React, { useEffect, useRef, useState } from 'react'
import { Animated, View } from 'react-native'
import { Image } from '~/common/index'
import {
  SceneMap,
  TabBar as RNTabBar,
  TabView as RNTabView,
} from 'react-native-tab-view'

import styles from './styles'
import Text from '~/common/Text/index'
import Colors from '~/common/Colors/Colors'

const TabBar = (props) => (
  <RNTabBar
    {...props}
    indicatorStyle={styles.tabBarIndicator}
    style={styles.tabBarContainer}
    renderLabel={props.renderLabel ? props.renderLabel : ({ route, focused }) => (
      <View style={styles.tabLabelContainer}>
        {route.icon && (
          <Image
            source={route.icon}
            style={styles.tabIcon}
            resizeMode="contain"
          />
        )}
        <Text
          variant='highlight2'
          color={Colors.tabBarUnderline}
          style={focused ? styles.tabBarLabelActive : styles.tabBarLabelInactive}
        >
          {route.title}
        </Text>
      </View>
    )}
  />
)

/*
* MUST set
*   ...
*   onScroll={onScroll}
*   onScrollEndDrag={onScrollEnd}
*   onMomentumScrollEnd={onScrollEnd}
*   contentContainerStyle={containerStyle}
*   ...
* For Scrollable tab content component
*
* */
const TabView = ({
  tabs,
  headerHeight,
  scrollableHeader,
  renderLabel,
  defaultTabIndex,
  diffClampHeader,
  tabStyle,
  scrollEnabled,
  ...props
}) => {
  const [index, setIndex] = useState(defaultTabIndex || 0)
  const [routes, setRoutes] = useState([])
  const [scenes, setScenes] = useState(null)

  const tabOffsets = useRef({})
  const scroll = useRef(new Animated.Value(0)).current

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scroll } } }],
    { useNativeDriver: true },
  )

  const refs = Array(10).map(() => useRef())
  useEffect(() => {
    if (!tabs || Object.keys(tabs).length === 0) return

    const syncScrollOffset = () => {
      refs.forEach((ref, i) => {
        if (i === index) return

        if (scroll._value < headerHeight && scroll._value >= 0) {
          if (ref.current && ref.current.scrollToOffset) {
            ref.current.scrollToOffset({
              offset: scroll._value,
              animated: false,
            })
            tabOffsets.current[i] = scroll._value
          }
        } else if (scroll._value >= headerHeight) {
          if (
            tabOffsets.current[i] < headerHeight ||
            tabOffsets.current[i] == null
          ) {
            if (ref.current && ref.current.scrollToOffset) {
              ref.current.scrollToOffset({
                offset: headerHeight,
                animated: false,
              })
              tabOffsets.current[i] = headerHeight
            }
          }
        }
      })
    }

    setScenes(Object.entries(tabs).reduce((acc, [key, {
      component: Component,
      props,
    }], i) => {
      const extraProps = {}

      const {
        containerStyle,
        ...otherProps
      } = props

      if (scrollableHeader) {
        extraProps.onScroll = onScroll
        extraProps.onScrollEnd = syncScrollOffset
        extraProps.ref = refs[i]
        extraProps.containerStyle = {
          ...containerStyle,
          paddingTop: headerHeight,
        }
      }

      acc[key] = () => (
        <Component
          {...extraProps}
          {...otherProps}
        />
      )
      return acc
    }, {}))
    setRoutes(Object.entries(tabs).map(([key, { title, icon }]) => ({
      key,
      icon,
      title,
    })))
  }, [tabs])

  useEffect(() => {
    if (!routes) return

    scroll.addListener(({ value }) => {
      tabOffsets.current[index] = value
    })

    return () => {
      scroll.removeAllListeners()
    }
  }, [routes, index])

  if (!routes || !scenes) return null

  const tabProps = {
    navigationState: { index, routes },
    renderScene: SceneMap(scenes),
    onIndexChange: setIndex,
  }

  if (!scrollableHeader) {
    return (
      <RNTabView
        {...tabProps}
        renderTabBar={(props) => (
          <TabBar
            tabStyle={tabStyle}
            scrollEnabled={scrollEnabled}
            {...props}
            renderLabel={renderLabel}
          />
        )}
        {...props}
      />
    )
  }

  const ScrollableHeader = () => {
    const diffClamp = diffClampHeader ? Animated.diffClamp(scroll,0,headerHeight) : scroll
    const translateY = diffClamp.interpolate({
      inputRange: [0, headerHeight],
      outputRange: [0, -headerHeight],
      extrapolate: 'clamp',
    })

    return (
      <Animated.View style={[{ transform: [{ translateY }] }, styles.headerContainer]}>
        {scrollableHeader}
      </Animated.View>
    )
  }

  const renderTabBar = props => {
    const diffClamp = diffClampHeader ? Animated.diffClamp(scroll,0,headerHeight) : scroll
    const translateY = diffClamp.interpolate({
      inputRange: [0, headerHeight],
      outputRange: [headerHeight, 0],
      extrapolateRight: 'clamp',
    })

    return (
      <Animated.View style={{ transform: [{ translateY }], zIndex: 1 }}>
        <TabBar
          {...props}
          tabStyle={tabStyle}
          scrollEnabled={scrollEnabled}
          renderLabel={renderLabel}
          indicatorStyle={styles.tabBarIndicator}
          style={styles.tabBarContainer}
        />
      </Animated.View>
    )
  }

  return (
    <>
      <ScrollableHeader />
      <RNTabView
        {...tabProps}
        renderTabBar={renderTabBar}
        {...props}
      />
    </>
  )
}

export default TabView
