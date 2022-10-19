<template>
    <div id="not-found-page">
        <h1>404</h1>
        <h2>找不到这个页面</h2>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#not-found-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
        circle,
        rgba(238 174 202 / 100%) 0%,
        rgba(148 187 233 / 100%) 100%
    );
    color: #fff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    & h1 {
        font-size: 128px;
        font-weight: bold;
    }

    & h2 {
        font-size: 48px;
    }
}
</style>
