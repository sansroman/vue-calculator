<template>
  <div id="displayarea">
    {{displayExp}}
  </div>
</template>

<script>
    export default {
        name: 'displayarea',
        props: {
            exp: {
                type: Array,
                required: true,
                default: function() {
                    return ['0'];
                }
            }
        },
        data() {
            return {}
        },
        computed: {
            displayExp: function() {
                let str = "";

                this.exp.forEach(function(element) {
                    str += element;
                }, this);
                return str;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #displayarea {
        height: 160px;
        background-color: #f59674;
    }
</style>