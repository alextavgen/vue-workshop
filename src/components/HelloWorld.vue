<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex>
        <span>Reactive Message {{reactiveMessage}}</span>
      </v-flex>


      <v-flex>
        <span v-if="visible">Computed Message {{computedMessage}}</span>
      </v-flex>

      <v-flex>
        <span>NonReactive Message {{nonReactiveMessage}}</span>
      </v-flex>

      <v-flex>
        <span>Time Now {{now()}}</span>
      </v-flex>

      <v-flex md12>
        <div>
          <v-btn small @click="increaseReactiveMessage">Increase Counter of Reactive</v-btn>
          <v-btn small @click="reactiveMessage += 1"> Inline Increase Counter of Reactive</v-btn>
        </div>

        <div>
          <v-btn small @click="increaseNonReactiveMessage">Increase Counter of Non-Reactive</v-btn>
        </div>

        <div>
          <v-btn small @click="visible = ! visible">Visibility for Computed Message </v-btn>
        </div>

        <v-flex>
          <span v-if="returnedMessage">Returned from Component {{returnedMessage}}</span>
        </v-flex>

        <numerical-values-component v-if="showChildComponent" :counter="reactiveMessage"> </numerical-values-component>
        <custom-card v-if="showChildComponent" :counter="reactiveMessage" @customEvent="handleEvent"></custom-card>
        <div>
          <v-btn small @click="showChildComponent = ! showChildComponent">Custom Component Show </v-btn>
        </div>

      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  import NumericalValuesComponent from './NumericalValuesComponent'
  import CustomCard from './cards//CustomCard'
  export default {
    components: {NumericalValuesComponent, CustomCard},
    data () {
      return {
          returnedMessage: null,
          reactiveMessage: 0,
          visible: true,
          showChildComponent: false
      }
    },
    computed: {
        //cached, so no updates on rerender
        computedMessage () {
            return 100 - this.reactiveMessage;
        }
    },
    methods: {
        increaseReactiveMessage(){
            console.log(this.reactiveMessage);
            this.reactiveMessage = this.reactiveMessage +1;
        },
        increaseNonReactiveMessage(){
            console.log(this.nonReactiveMessage);
            this.nonReactiveMessage = this.nonReactiveMessage +1;
        },
        now () {
            return Date.now()
        },
        handleEvent(message) {
            this.showChildComponent = false;
            this.returnedMessage = message;
        }
    },
    created() {
      this.nonReactiveMessage = 0;
    },
    mounted () {
      this.reactiveMessage = 3;
    },
  }
</script>

<style>

</style>
