<template>
    <div class="buttonItem">
        <ul>
            <li v-for="item in message"><button v-on:click="keyon(item)" type="button" :style="{height:height+'px',width:width+'px',margin:margin+'px'}">{{item}}</button></li>
        </ul>
    </div>
</template>
<style>
    li {
        display: inline-block;
        list-style: none;
    }
    
    button {
        color: rgb(39, 35, 41);
        font-size: 16px;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: rgb(167, 60, 221);
        border: 1px solid #bfcbd9;
        border-color: #c4c4c4;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        padding: 10px 15px;
        border-radius: 4px;
    }
</style>
<script>
    export default {
        name: 'buttonItem',
        props: {
            message: {
                type: Array,
                required: true
            },
            height: {
                type: Number,
                default: 40
            },
            width: {
                type: Number,
                default: 60
            },
            margin: {
                type: Number,
                default: 10
            }
        },
        methods: {
            keyon(message) {
                this.$emit('btnKeyon', message);
            }
        }
    }
</script>