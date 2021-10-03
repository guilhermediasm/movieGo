import React from 'react';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { IconShop } from '~/assets';
import { NavigationActions, Routes, Stacks } from '~/navigation';
import { useShop } from '~/stores';
import { colors } from '~/theme';
import { isEmpty } from '~/utils';
import {
  Container,
  CountBuyShop,
  Go,
  Header,
  LabelTitle,
  TabBarWrapper,
  Title,
  TouchableIconShop,
  TouchableLabel,
  ViewCountBuyShop,
  Wrapper,
} from './styles';

type Props = {
  topTabBarPorps: MaterialTopTabBarProps;
};

const MyTabBar: React.FC<Props> = ({ topTabBarPorps }) => {
  const { state, descriptors, navigation } = topTabBarPorps;

  const shop = useShop();

  const navigationShop = () => {
    NavigationActions.navigate(Stacks.MODAL, {
      screen: Routes.SHOPPING,
    });
  };

  return (
    <TabBarWrapper>
      <Header>
        <Container>
          <Title>Movie</Title>
          <Go>Go</Go>
        </Container>
        <TouchableIconShop onPress={() => navigationShop()}>
          {!isEmpty(shop.buyMovie) && (
            <ViewCountBuyShop>
              <CountBuyShop>{shop.buyMovie.length}</CountBuyShop>
            </ViewCountBuyShop>
          )}

          <IconShop />
        </TouchableIconShop>
      </Header>
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
