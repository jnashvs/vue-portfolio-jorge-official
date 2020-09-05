<template>
    <div>
        <div class="new" v-for="valor in receive" :key="valor">
            <p>{{valor.title}}</p>
        </div>
        <div>
fisrt
        </div>
        <div>
hahahaha
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Footer',
    props: ['receive'],
}

</script>
