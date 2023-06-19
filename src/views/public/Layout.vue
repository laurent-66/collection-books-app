<template>
    <div class="public">
        <PublicNav/>
        <RouterView />
    </div>
</template>
<script>
import PublicNav from '@/components/PublicNav.vue'
export default {
    name: 'LayouPublic',
    components: {
        PublicNav
    }
}
</script>