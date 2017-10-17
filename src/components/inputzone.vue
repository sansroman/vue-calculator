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
                tmpval: '',
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
                    if (!this.Zmark) {
                        this.exp.push("0");
                    }
                }
                this.exp.push(message);
                this.Zmark = true;
                this.expChanged();
            },
            calBtnKeyon(message) {
                let singleMark = this.isSingleOps(message);
                if (!this.Zmark && !singleMark) return;
                switch (message) {
                    case "=":
                        this.cal();
                        break;
                    case "ESC":
                        this.esc();
                        break;
                    case "C":
                        this.init();
                        break;
                    default:
                        this.exp.push(message);
                        this.Zmark = false;
                        break;

                }

                this.expChanged();


            },
            expChanged() {
                this.$emit('changed', this.exp);
            },
            init() {
                this.ops = [];
                this.vals = [];
                this.tmpval = "";
                this.exp = [];
                this.Pmark = false;
                this.Zmark = false;
            },
            esc() {
                this.exp.pop();

            },
            cal() {
                let singleMark = false;
                this.exp.forEach(function(element) {
                    if (this.isNumber(element)) {
                        this.tmpval += element;
                    } else {
                        if (this.isSingleOps(element)) {
                            if (this.tmpval === "") {
                                singleMark = true;
                                this.ops.push(element);

                            } else {
                                singleMark = true;
                                this.vals.push(this.tmpval);
                                this.ops.push('*');
                                this.ops.push(element);
                                this.tmpval = "";
                            }
                        } else {
                            if (singleMark) {
                                let tmpOpt = this.ops.pop();
                                console.log(tmpOpt);
                                let tmpVal = this.tmpval;
                                this.tmpval = "";
                                switch (tmpOpt) {
                                    case "sin":
                                        tmpVal = Math.sin(tmpVal);
                                        break;
                                    case "cos":
                                        tmpVal = Math.cos(tmpVal);
                                        break;
                                    case "tan":
                                        tmpVal = Math.tan(tmpVal);
                                        break;
                                    case "log":
                                        tmpVal = Math.log2(tmpVal);
                                        break;

                                }
                                this.vals.push(tmpVal);
                                this.ops.push(element);
                                singleMark = false;
                            } else {
                                this.vals.push(this.tmpval);
                                this.ops.push(message);
                                this.tmpval = "";
                            }
                        }
                        // if (this.isSingleOps(element) && !this.singleMark) {
                        //     this.singleMark = true;
                        //     this.vals.push(this.tmpval);
                        //     this.ops.push(element);
                        //     this.tmpval = "";
                        // } else if (this.singleMark) {
                        //     let tmpOpt = this.ops.pop();
                        //     let tmpVal = this.tmpval;
                        //     this.tmpval = "";
                        //     switch (tmpOpt) {
                        //         case "sin":
                        //             tmpVal = Math.sin(tmpVal);
                        //             break;
                        //         case "cos":
                        //             tmpVal = Math.cos(tmpVal);
                        //             break;
                        //         case "tan":
                        //             tmpVal = Math.tan(tmpVal);
                        //             break;
                        //         case "log":
                        //             tmpVal = Math.log2(tmpVal);
                        //             break;

                        //     }
                        //     this.vals.push(tmpVal);
                        //     this.singleMark = false;
                        // } else {
                        //     this.vals.push(this.tmpval);
                        //     this.ops.push(element);
                        //     this.tmpval = "";
                        // }

                    }
                }, this);
                this.vals.push(this.tmpval);
                // this.init();

            },
            isSingleOps(ops) {
                if ('sincostanlog'.indexOf(ops) !== -1) return true;
                else return false;
            },
            isNumber(val) {
                if ('.00123456789'.indexOf(val) !== -1) return true;
                else return false;
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