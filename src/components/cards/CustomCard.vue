<template>
	<v-layout>
		<v-flex xs12 sm6 offset-sm3>
			<v-card>
				<v-img
						src="https://www.casinocanada.online/wp-content/uploads/2016/08/playtech-logo.jpg"
						aspect-ratio="2"
				></v-img>

				<v-card-title primary-title>
					<div>
						<h3 class="headline mb-0">Pushed Counter Value</h3>
						<div>This is example of pushed Props <br>Value {{counter}}</div>
					</div>
				</v-card-title>
				<v-flex md 12 xs12 sm6>
					<div>Message to Return {{messageToReturn}}</div>
					<v-text-field
							v-model="messageToReturn"
							solo
							label="Enter Text Message To Return"
							clearable
					></v-text-field>
				</v-flex>

				<v-card-actions>
					<v-btn flat color="orange" @click.stop="pushValueBack()">Push Text Value Back</v-btn>
				</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
    export default {
        name: "CustomCard",
		props: ['counter'],
		data () {
        	return {
        		messageToReturn: null
			}
		},
		methods: {
			pushValueBack(){
				this.$emit('customEvent', this.messageToReturn);
			}
		}
    }
</script>

<style scoped>

</style>
