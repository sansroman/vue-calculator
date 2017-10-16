<template>
  <div id="inputzone">
    <buttonItem id="numberBtn" v-on:btnKeyon="numberBtnKeyon" :message=this.numbers :height=50 :width=70></buttonItem>
    <buttonItem id="calBtn" :message=this.cals v-on:btnKeyon="calBtnKeyon" :height=50 :width=70></buttonItem>    
  </div>
</template>

<script>
    import buttonItem from './buttonItem.vue'
    export default {
        name: 'inputzone',
        data() {
            return {
                numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '00'],
                cals: ['^', 'ESC', 'C', '-', '+', 'sin', '*', '%', 'cos', 'tan', 'log', '='],
                ops: [],
                vals: [],
                exp: [],
                Zmark: false,
                Pmark: false
            }
        },
        components: {
            buttonItem
        },
        methods: {
            numberBtnKeyon(message) {
                if (message === "." && this.Pmark) return;
                if ((message === "0" || message === "00") && !this.Zmark) return;
                if (message === "." && !this.Pmark) {
                    this.Pmark = true;
                    if (!this.Zmark) this.exp.push('0');
                }
                this.exp.push(message);
                this.Zmark = true;
                this.expChanged();
            },
            calBtnKeyon(message) {
                console.log("cal:" + message);
                this.expChanged();
            },
            expChanged() {
                this.$emit('changed', this.exp);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #inputzone {
        height: 300px;
    }
    
    #numberBtn {
        width: 47%;
    }
    
    #calBtn {
        width: 45%;
    }
    
    .buttonItem {
        display: inline-block;
        height: 280px;
        margin: 10px 10px;
    }
</style>