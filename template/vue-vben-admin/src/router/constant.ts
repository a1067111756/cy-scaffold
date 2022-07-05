/* 路由约定常量 */

// redirect-layout
export const REDIRECT_NAME = 'Redirect';

// parent-layout
export const PARENT_LAYOUT_NAME = 'ParentLayout';

// page-not-found-layout
export const PAGE_NOT_FOUND_NAME = 'PageNotFound';

// exception-layout
export const EXCEPTION_COMPONENT = () => import('/@/views/sys/exception/Exception.vue');

// default-layout
export const LAYOUT = () => import('/@/layouts/default/index.vue');

// parent-layout
export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: PARENT_LAYOUT_NAME,
      });
    });
};
