import React from 'react';
import RcTabs from 'rc-tabs';
import assign from 'object-assign';
import classnames from 'classnames';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

const prefixCls = 'kuma-tab';
const TYPESUFFIX = {
  large: 'lg',
  small: 'sm',
  filter: 'filter',
  brick: 'brick',
};

class Tabs extends RcTabs {

  render() {
    const props = this.props;
    const { onTabClick, extraContent, animated } = props;

    return (
      <RcTabs
        {...props}
        className={classnames({
          [`${prefixCls}-${TYPESUFFIX[props.type]}`]: true,
          [props.className]: !!props.className,
        })}
        renderTabBar={() => (
          <ScrollableInkTabBar
            extraContent={extraContent}
            onTabClick={onTabClick}
          />
        )}
        renderTabContent={() => <TabContent animated={animated} />}
      />
    );
  }
}


Tabs.displayName = 'uxcore-tabs';
Tabs.defaultProps = assign(RcTabs.defaultProps, {
  prefixCls,
  type: 'large',
  extraContent: null,
  animated: true,
  onTabClick() { },
  renderTabBar() { },
  renderTabContent() { },
});
Tabs.TabPane = RcTabs.TabPane;

export default Tabs;