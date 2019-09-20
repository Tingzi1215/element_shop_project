<template>
<div>
   <Cart_list></Cart_list>
    <div class="pointBox">
        <div class="point" style="display: none;"><span class="act act_special">包邮</span><span></span></div>
        <div class="point">
            <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
        </div>
    </div>
    <Cart_footer></Cart_footer>
</div>
</template>

<script>
    import Cart_list from "../../components/Cart_list";
    import Cart_footer from "../../components/Cart_footer";
    export default {
        name: 'Cart_shop',
        components: {
            Cart_list,
            Cart_footer
        },
        created(){
    this.$store.dispatch(`getAllCarts`)
        }
    }
</script>

<style scoped>

</style>