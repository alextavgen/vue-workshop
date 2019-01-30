<template>
	<v-card class="mx-auto">
		<v-toolbar card dense color="transparent">
			<v-toolbar-title><h4> Alerts</h4></v-toolbar-title>
			<v-spacer></v-spacer>
			<v-text-field
					v-model="search"
					append-icon="search"
					label="Search"
					single-line
					hide-details
			></v-text-field>
			<v-btn icon>
				<v-icon>more_vert</v-icon>
			</v-btn>
			<v-switch
					v-model="open"
					label="Show Open/Closed"
					color="red"
					value="closed"
					hide-details
			></v-switch>
		</v-toolbar>
		<v-divider></v-divider>
		<v-card-text class="pa-0">
			<template>
				<v-data-table
						:headers="headers"
						:items="alerts"
						:search="search"
						hide-actions
						class="elevation-2 table-striped"
				>
					<template slot="items" slot-scope="props">
						<tr @click="props.expanded = !props.expanded">
							<td v-bind:style="{background: getColorForSeverity(props.item.severity), color:'black', 'border-top': '1px solid black'}">
								<v-btn flat icon color="red">
									<v-icon>error</v-icon>
								</v-btn>
								{{ props.item.severity}}
							</td>
							<td v-bind:style="{background: getColorForSeverity(props.item.severity), color:'black', 'border-top': '1px solid black'}">
								{{ props.item.status }}
							</td>
							<td v-bind:style="{background: getColorForSeverity(props.item.severity)}">{{ props.item.lastReceiveTime }}</td>
							<td v-bind:style="{background: getColorForSeverity(props.item.severity), color:'black', 'border-top': '1px solid black'}" class="text-xs-left">{{ props.item.duplicateCount }}</td>
							<!---v-progress-linear :value="props.item.progress" height="5" :color="props.item.color"></v-progress-linear--->
							<td v-bind:style="{background: getColorForSeverity(props.item.severity)}" class="text-xs-left alerts">{{ props.item.environment }} </td>
							<td v-bind:style="{background: getColorForSeverity(props.item.severity)}" class="text-xs-left alerts">{{ props.item.service.map(z=>z) }} </td>
							<td v-bind:style="{background: getColorForSeverity(props.item.severity)}" class="text-xs-left alerts">{{ props.item.resource }} </td>
							<td v-bind:style="{background: getColorForSeverity(props.item.severity)}" class="text-xs-left alerts">{{ props.item.event }} </td>
							<td v-bind:style="{background: getColorForSeverity(props.item.severity)}" class="text-xs-left alerts">{{ props.item.text }} </td>
							<!--td class="text-xs-right">
                              <v-btn flat icon color="grey">
                                <v-icon>edit</v-icon>
                              </v-btn>
                              <v-btn flat icon color="grey">
                                <v-icon>delete</v-icon>
                              </v-btn>
                            </td-->
						</tr>
					</template>
					<template slot="expand" slot-scope="props">
						<v-flex xs12 offset-md1>
							<v-card flat>
								<v-card-text>
									<tr lg12 sm12 xs12>
										<td width="50%">Create time:</td><td width="100%"> {{ props.item.createTime }}</td>
									</tr>
									<tr lg12 sm12 xs12>
										<td width="50%">Last receive time:</td><td width="100%"> {{ props.item.lastReceiveTime }}</td>
									</tr>
									<tr lg12 sm12 xs12>
										<td width="50%">Correlation Group:</td><td width="100%"> {{ props.item.correlate }}</td>
									</tr>
									<tr lg12 sm12 xs12>
										<td width="50%">Origin:</td><td width="100%"> {{ props.item.origin }}</td>
									</tr>
									<tr lg12 sm12 xs12>
										<td width="50%">Previous Severity:</td><td width="100%"> {{ props.item.previousSeverity }}</td>
									</tr>
									<tr lg12 sm12 xs12>
										<td width="50%">Trend Indication:</td><td width="100%"> {{ props.item.trendIndication }}</td>
									</tr>
									<tr lg12 sm12 xs12>
										<td width="50%">Type:</td><td width="100%"> {{ props.item.type }}</td>
									</tr>
								</v-card-text>
								<v-card-actions>
									<v-btn flat color="orange">Open Details</v-btn>
									<v-btn flat color="orange">Grafana</v-btn>
								</v-card-actions>
								<v-flex  v-for="result in JSON.parse(props.item.rawData)">
									<chart-slot sm12 xs12 :metric="result.comparisonResult.name" :name="result.comparisonResult.name" :from="props.item.lastReceiveTime"/>
								</v-flex>
							</v-card>
						</v-flex>
					</template>
				</v-data-table>
			</template>
			<v-divider></v-divider>
		</v-card-text>
	</v-card>
</template>

<script>
	import {ALERTA} from '../http-common';
	import {PROD} from '../http-common';
    export default {
        name: "Alerts",
		data () {
			return {
				search: '',
				alerts: null,
				loaded: false,
				headers: [
					{
						text: 'Severity',
						align: 'center',
						sortable: false,
						value: 'severity'
					},
					{
						text: 'Status',
						align: 'left',
						sortable: false,
						value: 'status'
					},
					{
						text: 'Last Receive Time',
						align: 'left',
						value: 'name'
					},
					{ text: 'Duplicates', value: 'duplicates' },
					{ text: 'Environment', value: 'environment' },
					{ text: 'Service', value: 'service'},
					{ text: 'Resource', value: 'resource' },
					{ text: 'Rule Matched', value: 'rule'},
					{ text: 'Text', value: 'text'},

				],
			};
		},
		mounted () {
			this.alerts = this.fetchAlerts()
		},
		methods: {
			getColorForSeverity(severity){
				if(severity==="major"){
					return 'rgb(249,200,109)';
				}
				if(severity==="normal"){
					return 'rgb(76,169,115)';
				}
			},
			fetchAlerts() {
				ALERTA.get('alerts?status=open&status=unknown').then(result => {
					console.log(result.data['alerts']);
					this.alerts = result.data['alerts'];
				}, error => {
					console.error(error)
				})
			}
		}

    }

</script>

<style scoped>
alerts {
	color:	black;
	border-top: 1px solid black;

}
</style>
