

# 有求必应新版构建文档

## 基建

- [x] Vite3

- [x] tailwindcss

- [x] eslint

- [x] stylelint

- [x] prettier

- [x] commitlint

- [x] husky

- [x] axios

- [x] scss/sass

## Vscode编码指引

### 插件

- Volar: Vue3语法支持(建议设置Vuter插件再当前工作区禁用，省的需要切换Vue2/3项目时切换插件)

- ESLint: JS/TS/Vue编辑器自动代码检查提示

- Prettier: 代码格式化工具(并将项目默认格式化工具设置为prettier)

- Stylelint: 样式代码检查

- Tailwind CSS IntelliSense: TailwindCSS class utils语法提示

## 不兼容IE

index.html中打一个hack，指向 https://browsehappy.com/ 提示更新浏览器

## 子平台建设方案

> 背景：[子平台方案设计](./docs/%E5%AD%90%E5%B9%B3%E5%8F%B0%E6%96%B9%E6%A1%88.pdf) 考虑到升级后系统的可维护性，我们决定选择以方案一为基础，但需要预留方案二可自定义的思路进行配置

### 具体实施细节

> 如果贯彻方案一的话，我们完全可以直接将所有子平台路由(如: /gjxq，/jjs ...)直接指向同一个页面文件，通过服务端配置来对页面组件条件渲染即可。

*但目前考虑到子平台特色后期必然会存在，所以这里可以退一步*

1. 依旧是统一设计一个首页视图，这里叫 `home.vue`，该视图作为渲染统一的首页页面存在，并可以读取外部传入（props）来进行条件渲染 / 配置化渲染（类似主题设计）。

2. 每个地市包括江西总平台，单独建立一个文件，用于【获取当前地市的主题配置】与【设置地市相关信息到全局存储中】，在地市视图中加载 `home.vue`进行渲染。这样在后期某子平台需要独立建设专属首页时，可以仅修改该地市文件内容，与统一化首页逻辑独立开来不互相影响。

3. 可在每个首页顶部点击子平台列表进行切换子平台 --> 这里本质就是跳转到对应子平台页面首页 eg: `router.push({ name: 'gjxq' })`，在子平台首页，我们会统一进行地市信息重新覆盖，并重新刷新header导航首页指向路径（可统一放到地市信息store中/专门设置一个store存储主题配置信息）

4. 根据3，由此，当用户手动输入 `xxx.com/gjxq`访问时，也可以自助进入子平台页面。

![image-20221019141845201](C:\Users\lucky\AppData\Roaming\Typora\typora-user-images\image-20221019141845201.png)

### 路由配置

由于首页页面内容具体信息在地市的首页文件中自行定义的，故此各地市首页路由也可以直接采用自动扫描的方式进行

```ts
const cityIndexPages = import.meta.globEager('./src/views/home/*.vue');

Object.keys(cityIndexPages).forEach(cityPage => {
    ... // 将文件名作为路由path/name，其余路由配置信息一致，组件指向被遍历的各地市组件即可
});
    
// ==> 自动生成如下配置信息
[
    {
        path: 'jiangxi',
        name: 'jiangxi',
        component: () => import('@/views/home/jiangxi.vue'),
        ...
    },
    {
        path: 'jdzs',
        name: 'jdzs',
        component: () => import('@/views/home/jdzs.vue'),
        ...
    },
    ...
]
```

**最终形成的总路由文件**

```ts
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'jiangxi', // 默认自动定向到江西总平台
            component: DEFAULT_LAYOUT, // 默认布局组件，首页与其他页面通用的
            children: [...appRoutes] // 其他内页路由（product/about/myInfo...）
        },
        ...subplatformRoutes, // 子平台路由（TODO:这里后面讨论再确定是否也放到上面的默认布局children中，如果针对特殊子平台顶部/底部的样式与布局也一致的化，可以直接也放到上面，否则还是需要单独拎出来）
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue'),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            meta: {
                requiresAuth: false
            },
            component: () => import('@/views/not-found/index.vue')
        }
    ],
    scrollBehavior() {
        return { top: 0 };
    }
});
```

