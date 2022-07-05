/* 框架组件全局注册 */
import type { App } from 'vue';
import { Scrollbar } from './Scrollbar';
import { Description } from './Description';
import { PageFooter, PageWrapper } from './Page';
import { LazyContainer, ScrollContainer, CollapseContainer } from './Container';

const componentList = [
  Scrollbar,
  PageFooter,
  PageWrapper,
  Description,
  LazyContainer,
  ScrollContainer,
  CollapseContainer,
];

/* 全局组件自动注册文件 */
const install = (app: App): void => {
  componentList.forEach((component) => {
    app.component(component.name, component);
  });
};

export default install;
