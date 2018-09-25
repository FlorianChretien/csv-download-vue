import Vue from 'vue';
import CsvDownload from './CsvDownload.vue';

new Vue({
    components: { CsvDownload },
    el: '#app',
    data: {
    	fields: [ 
    		'nom', 'prenom', 'age', 'porte monnaie'
    	],
    	data: [
    		{
				'nom': 'toto',
				'prenom': 'tata',
				'age': 1,
				'porte monnaie': '4€'
    		},
    		{
    			'nom': 'gigo',
    			'prenom': 'itashi',
    			'age': 8,
    			'porte monnaie': '5€'
    		},
    		{
    			'nom': 'titi',
    			'prenom': 'michel',
    			'age': 90,
    			'porte monnaie': '10€'
    		}
    	],
    	status: 'Ready to download :)'
    },
    methods: {
    	lauchCsv(){
    		document.getElementById('csv').click();
    	}
    }
})