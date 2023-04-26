<script>


export default {
    name: 'AppFooter',
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="footer_top">
        <span>footer top</span>
    </div>
    <div class="footer_bottom">
        <span>footer bottom</span>
    </div>
</template>

<style lang="scss">
.footer_top {
    width: 100%;
    height: 300px;
    background-color: rgba(88, 134, 146, 0.529);
}

.footer_bottom {
    width: 100%;
    height: 300px;
    background-color: rgba(172, 93, 93, 0.466);
}
</style>