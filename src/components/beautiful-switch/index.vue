<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    const wrapper = document.querySelector(
        '.beautiful-btn__wrapper'
    ) as HTMLElement;
    // 先给容器设置一个css变量并附初始值
    wrapper.style.setProperty('--groove-left', '12px');
    // 获取按钮元素
    const btns = document.getElementsByClassName(
        'btn'
    ) as unknown as HTMLElement[];
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function (e) {
            wrapper.style.setProperty(
                '--groove-left',
                `calc(12px + ${i * 50}%)`
            );
            resetBtn(btns); // 初始化所有按钮类名
            setTimeout(() => {
                btns[i].className = 'btn active'; // 给被点击的按钮添加选中样式，注意不要丢了原始样式
            }, 500);
        });
    }
    // 初始化所有按钮类名的方法
    function resetBtn(buttons: HTMLElement[]) {
        for (let i = 0; i < buttons.length; i++) {
            setTimeout(() => {
                buttons[i].className = 'btn';
            }, 100);
        }
    }
});
</script>

<template>
    <div id="2" class="beautiful-btn__wrapper">
        <div class="btn active">按钮1</div>
        <div class="btn">按钮2</div>
    </div>
</template>

<style lang="scss">
.beautiful-btn__wrapper {
    --groove-left: 12px;

    position: relative;
    width: 380px;
    height: 80px;
    padding: 12px 16px;
    border-radius: 12px; // 圆角
    overflow: hidden; // 超出隐藏
    background-color: #e2e6eb; // 背景色
    box-shadow: -10px -10px 15px #f5f9fd, 10px 10px 15px #d8dbe5; // 阴影（阴影可以添加多条，别告诉我你不知道！！）

    &::before {
        content: '';
        position: absolute;
        top: 12px; // 同上
        width: calc(50% - 16px - 8px);
        height: calc(100% - 24px);
        border-radius: 12px;
        box-shadow: inset 8px 8px 6px #d9dce6, inset -5px -5px 15px #f5f9fd,
            inset -5px -5px 15px #f5f9fd, inset 7px 7px 6px #d9dce6;

        /* ...其他属性 */
        left: var(--groove-left); // 使用css变量

        /* ...其他属性 */
        transition: left 1s cubic-bezier(0.82, 0.12, 0.18, 0.88); // 添加过渡效果，贝塞尔曲线
    }

    & .btn {
        float: left;
        display: flex; // 弹性布局
        align-items: center; // 列居中
        justify-content: center; // 行居中
        width: 50%;
        height: 100%;
        padding: inherit; // 偷懒内边距继承了父元素，也可以自己修改
        color: #aaa; // 默认文字颜色是灰色，随便选了个色号
        cursor: pointer; // 鼠标经过图标为小手
        transition: color 0.4s linear; // 添加文字颜色过渡效果
        animation: txtOutScale 0.6s linear; // 添加按钮未选中动画，注意时间
    }

    & .active {
        color: #111;
        transform: scale(1.1); // 修改选中状态原始缩放为1.1
        animation: txtEnterScale 0.4s linear; // 添加按钮选中动画，注意时间
    }
}

@keyframes txtEnterScale {
    0% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.15);
    }

    100% {
        transform: scale(1.1);
    }
}

/* 按钮未选中缩放动画 */
@keyframes txtOutScale {
    0% {
        transform: scale(1.1);
    }

    80% {
        transform: scale(0.95);
    }

    100% {
        transform: scale(1);
    }
}
</style>
