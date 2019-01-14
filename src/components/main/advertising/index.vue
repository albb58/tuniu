<template>
    <div>
        <m-head></m-head>
        <m-adv></m-adv>
    </div>
</template>
<script>
import adv from './advertising'
import head from '@C/head/head'
export default {
    components : {
        MAdv : adv,
        MHead : head
    }
}
</script>


