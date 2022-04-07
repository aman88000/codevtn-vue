<template>
<div>
    <h2>Article Component</h2>
    <h2 v-bind="$attrs">{{title}}</h2>
    <h2>Likes - {{likes}}</h2>
    <h2>Publish - {{isPublished ? 'Yes': 'No'}}</h2>
</div>
</template>

<script>
export default {
    name: 'ArticleVue',
    props: {
        title: {
            type: String,
            default: 'Article Default title',
            required: true
        },
        likes: Number,
        isPublished: Boolean
    },
    inheritAttrs: false
}
</script>

<style scoped>

</style>
