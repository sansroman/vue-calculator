<template>
  <div id="app">
    <displayarea :exp='exp'></displayarea>
    <inputzone v-on:changed="updateView"></inputzone>
  </div>
</template>
<script>
    import displayarea from './components/displayarea'
    import inputzone from './components/inputzone'
    export default {
        name: 'app',
        components: {
            displayarea,
            inputzone
        },
        methods: {
            updateView(exp) {
                this.exp = exp;
            }
        },
        data: function() {
            return {
                exp: ['0']
            }
        }
    }
</script>

<style>
    * {
        margin: 0px;
        padding: 0px;
    }
    
    #app {
        width: 600px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        margin-left: 100px;
        background-color: rebeccapurple;
        border-radius: 3%;
    }
    
    displayarea,
    inputzone {
        width: 560px;
        border: 1px solid red;
        padding: 20px;
    }
</style>