<!-- 主平台 + 内容页面默认布局：顶部菜单 + 右侧固定快捷入口 + 底部footer + 中间为routerView活动路由组件 -->
<template>
    <div class="page-container w-full min-h-screen flex flex-col">
        <top-nav />
        <div ref="1" class="pt-20 flex-1">
            <router-view></router-view>
        </div>
        <common-footer />
    </div>
</template>

<script setup lang="ts">
import TopNav from '@/components/top-nav/index.vue';
import CommonFooter from '@/components/common-footer/index.vue';
</script>
