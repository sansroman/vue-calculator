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
                Pmark: false,
                opsRank: []
            }
        },
        components: {
            buttonItem
        },
        created() {

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
                this.opsRank = [];
                this.Pmark = false;
                this.Zmark = false;
            },
            esc() {
                this.exp.pop();

            },
            cal() {
                let singleMark = false;
                this.exp.forEach(function(element) {
                    if (!isNaN(element)) {
                        this.tmpval += element;
                    } else {
                        if (this.isSingleOps(element)) {
                            if (this.tmpval === "") {
                                singleMark = true;
                                this.cumPush(element);
                            } else {
                                singleMark = true;
                                this.vals.push(this.tmpval);
                                this.cumPush('*');
                                this.cumPush(element);
                                this.tmpval = "";
                            }
                        } else {
                            if (singleMark) {
                                let tmpOpt = this.ops.pop();
                                let tmpVal = this.tmpval;
                                this.tmpval = "";
                                this.singleOptArithmetic(tmpVal, tmpOpt);
                                this.vals.push(tmpVal);
                                this.cumPush(element);
                                singleMark = false;
                            } else {
                                this.vals.push(this.tmpval);
                                this.cumPush(element);
                                this.tmpval = "";
                            }
                        }

                    }
                }, this);
                this.vals.push(this.tmpval);
                while (this.ops.length > 0) {
                    let operational = this.ops.pop();
                    let svals = this.vals.pop();
                    let fvals = this.vals.pop();
                    let result = this.fourArithmetic(fvals, svals, operational);
                    this.vals.push(result);
                }
                this.exp = [this.vals[0]];
            },
            isSingleOps(ops) {
                if ('sincostanlog'.indexOf(ops) !== -1) return true;
                else return false;
            },
            cumPush(ops) {
                let tmprank = this.getOpsRank(ops);
                let max = this.opsRank[this.opsRank.length - 1] || 0;
                if (tmprank >= max) {
                    this.ops.push(ops);
                    this.opsRank.push(tmprank);
                    return;
                } else {
                    let svals = this.vals.pop();
                    let fvals = this.vals.pop();
                    let operational = this.ops.pop();
                    this.opsRank.pop();
                    let result = this.fourArithmetic(fvals, svals, operational);
                    this.vals.push(result);
                    this.cumPush(ops);
                }
            },
            getOpsRank(ops) {
                if (this.isSingleOps(ops)) return 0;
                if ('+-'.indexOf(ops) !== -1) return 1;
                else if ('*%'.indexOf(ops) !== -1) return 2;
                else return 3;
            },
            fourArithmetic(firstVal, secondVal, operational) {
                firstVal = Number(firstVal);
                secondVal = Number(secondVal);
                let result;
                switch (operational) {
                    case '+':
                        result = firstVal + secondVal;
                        break;
                    case '-':
                        result = firstVal - secondVal;
                        break;
                    case '*':
                        result = firstVal * secondVal;

                        break;
                    case '%':
                        result = firstVal / secondVal;

                        break;
                    case '^':
                        result = Math.pow(firstVal, secondVal);
                        break;
                }
                return result;
            },
            singleOptArithmetic(val, operational) {
                switch (operational) {
                    case "sin":
                        val = Math.sin(val);
                        break;
                    case "cos":
                        val = Math.cos(val);
                        break;
                    case "tan":
                        val = Math.tan(val);
                        break;
                    case "log":
                        val = Math.log2(val);
                        break;

                }
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