import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React from 'react';
import { colors } from '~/theme';
import {
  Wrapper,
  TabBarWrapper,
  TouchableLabel,
  LabelTitle,
  Container,
  Title,
} from './styles';

type Props = {
  topTabBarPorps: MaterialTopTabBarProps;
};

const MyTabBar: React.FC<Props> = ({ topTabBarPorps }) => {
  const { state, descriptors, navigation } = topTabBarPorps;

  return (
    <TabBarWrapper>
      <Container>
        <Title>Movie</Title>
      </Container>
      <Wrapper>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const colorFontFocused: string = isFocused
            ? colors.text
            : colors.textSegundary;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate(route.name, {
                name: route.name,
                merge: true,
              });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableLabel
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <LabelTitle color={colorFontFocused}>{label}</LabelTitle>
            </TouchableLabel>
          );
        })}
      </Wrapper>
    </TabBarWrapper>
  );
};

export default MyTabBar;
