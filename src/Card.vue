<script setup>

</script>

<template>
    <div class="card">
        <div id="slot">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
#slot {
    transition: 500ms ease-in-out;
    opacity: 0;
}

.card {
    left: 0;
    top: 0;
    position: relative;
    border-radius: 5px;
    height: 200px;
    width: 200px;
    transition: 500ms ease-in-out;
}

.card:hover {
    left: 50px;
    top: 50px;
    cursor: pointer;
    box-shadow: 5px 5px 20px rgb(77, 77, 77);
    background-color: white;

}

.card:hover #slot {
    display: block;
    opacity: 1;
}
</style>