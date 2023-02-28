
<template>
    <div class="container">
        <div class="title-container">
            <span class="title">Sample Title</span>
        </div>
        <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .container {
        font-family: 'Helvetica Neue', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
        display: flex;
        align-items: center;
        border: 2px solid whitesmoke;
        border-radius: 6px;
        height: fit-content;
        box-sizing: border-box;
        padding: 16px;
    }
    .title-container {
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .title {
        font-size: 2rem;
        font-weight: 600;
    }
    .icon-container {

        width: 10%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
</style>