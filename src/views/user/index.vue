<template>
    <nut-empty image="error" description="我的页面,程序员小哥正在开发中~">
        <div style="margin-top: 10px">
            <nut-button @click="gotoAbout" icon="find" type="success">关于我们</nut-button>
        </div>
    </nut-empty>
</template>

<script>
import router from '@/router/index.js'
export default {
    setup() {
        
    },
    methods: {
        gotoAbout(e){
            router.push({path:'/about'})
        }
    }
}
</script>