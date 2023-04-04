<template>
    <ion-page>
        <ion-header>
			<ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
				<ion-title> {{ burger_name1 }} </ion-title>
			</ion-toolbar>
		</ion-header>
        <ion-content>
            <ion-card class="food-card">
                <ion-img :src="eb1"></ion-img>
            </ion-card>
            <div class="food-desc ion-padding">
                <div>Php {{ price }}</div>
                <span>{{ burger_name1 }}</span>
                <p> {{ burger_description }} </p>
            </div>

            <ion-item class="quantity-container">
                <ion-button color="medium" @click="decrement()">-</ion-button>
                <ion-label>{{ quantity1 }}</ion-label>
                <ion-button color="medium" @click="increment()">+</ion-button>
            </ion-item>

            <div class="beverage-container ion-padding">
                <h5>Beverages:</h5>
                <ion-select label="Choose Beverages" label-placement="floating" fill="solid" v-model="selectedBeverage">
                    <ion-select-option 
                        v-for="beverage in beverages" 
                        :key="beverage.id" :value="beverage.name"
                    > 
                            {{ beverage.name }}
                    </ion-select-option>
                </ion-select>

                <ion-radio-group class="beverage-size">
                    <ion-radio value="regular" aria-label="Regular">Regular</ion-radio>
                    <ion-radio value="large" aria-label="Large">Large</ion-radio>
                    <ion-radio value="x-large" aria-label="X-Large">X-Large</ion-radio>
                </ion-radio-group>
            </div >

            <div class="add-container ion-padding">
                <h5>Add-Ons:</h5>
                <div class="add-item">
                    <ion-row>
                        <ion-col size="3">
                            <ion-img :src="addOn1"></ion-img>
                        </ion-col>
                        <ion-col>
                            <span> {{ addOn1_name }} </span>
                            <p> {{ addOn1_desc }} </p>
                            <span class="price">Php {{ addOn1_price }} </span>
                        </ion-col>
                        <ion-col class="right">
                            <ion-checkbox aria-label="Fries"></ion-checkbox>
                            <ion-item class="add-quantity">
                                <ion-button color="medium" @click="dec1()">-</ion-button>
                                <ion-label>{{ quantity2 }}</ion-label>
                                <ion-button color="medium" @click="inc1()">+</ion-button>
                            </ion-item>
                        </ion-col>
                    </ion-row>
                </div>
                <div class="add-item">
                    <ion-row>
                        <ion-col size="3">
                            <ion-img :src="addOn2"></ion-img>
                        </ion-col>
                        <ion-col>
                            <span> {{ addOn2_name }} </span>
                            <p> {{ addOn2_desc }} </p>
                            <span class="price">Php {{ addOn2_price }} </span>
                        </ion-col>
                        <ion-col class="right">
                            <ion-checkbox aria-label="Fries" class="check"></ion-checkbox>
                            <ion-item class="add-quantity">
                                <ion-button color="medium" @click="dec2()">-</ion-button>
                                <ion-label>{{ quantity3 }}</ion-label>
                                <ion-button color="medium" @click="inc2()">+</ion-button>
                            </ion-item>
                        </ion-col>
                    </ion-row>
                </div>
            </div>

            <div class="ion-padding">
                <ion-button expand="block" class="add-order">Add to Orders</ion-button>
            </div>

        </ion-content>

    </ion-page>
        
    
</template>


<script>
	import {
		IonButtons,
		IonContent,
		IonHeader,
		IonMenu,
		IonMenuButton,
		IonPage,
		IonTitle,
		IonToolbar,
		IonInput, 
		IonItem,
		IonCard,
		IonCardContent,
		IonImg,
        IonButton,
        IonLabel,
        IonSelect,
        IonSelectOption,
        IonChip,
        IonRadio, 
        IonRadioGroup,
        IonBackButton,
        IonRow,
        IonCol,
        IonCheckbox
	} from '@ionic/vue';

    
    export default ({
		components: {
            IonButtons,
            IonContent,
            IonHeader,
            IonMenu,
            IonMenuButton,
            IonPage,
            IonTitle,
            IonToolbar,
            IonInput, 
            IonItem,
            IonCard,
            IonCardContent,
            IonImg,
            IonButton,
            IonLabel,
            IonSelect,
            IonSelectOption,
            IonChip,
            IonRadio, 
            IonRadioGroup,
            IonBackButton,
            IonRow,
            IonCol,
            IonCheckbox
		},
        props: {
			burger_name1: String,
			burger_name2: String,
			burger_name3: String,
			burger_name4: String,
			burger_description: String,
			price: Number,
            addOn1_name: String,
            addOn1_desc: String,
            addOn1_price: String,
            addOn2_name: String,
            addOn2_desc: String,
            addOn2_price: String,
			eb1: {
				type: String,
				required: true,
			},
			addOn1: {
				type: String,
				required: true,
			},
			addOn2: {
				type: String,
				required: true,
			},
			
		},
        data() {
            return {
                quantity1: 0,
                quantity2: 0,
                quantity3: 0,
                selectedBeverage: '',
                beverages: [
                    { id: 1, name: 'Coke' },
                    { id: 2, name: 'Sprite' },
                    { id: 3, name: 'Royal' },
                    { id: 4, name: 'Coke Zero' },
                    { id: 5, name: 'Mountain Dew' },
                ],
                selected: null,
                
            }
        },
        methods: {
            increment() {
                this.quantity1++;
            },
            decrement() {
                if (this.quantity1 > 0) {
                this.quantity1--;
                }
            },
            inc1() {
                this.quantity2++;
            },
            dec1() {
                if (this.quantity2 > 0) {
                this.quantity2--;
                }
            },
            inc2() {
                this.quantity3++;
            },
            dec2() {
                if (this.quantity3 > 0) {
                this.quantity3--;
                }
            }
        },
	});
</script>


<style scoped>
    .beverage-size ion-radio {
        background-color: white;
        width: 32%;
        padding: .5rem .8rem;
        margin-top: 1rem;
        font-weight: 600;
        border: 1px solid #ddd;
        border-radius: 12px;
        color: #232323;
    }


    .beverage-size ion-radio.radio-checked{
        background: #ffd000;
        color: white;
        border: none;
    }

    ion-radio::part(container) {
        --color-checked: transparent;
    }

    ion-radio::part(mark) {
        background: none;
        border-color: transparent;
    }

    .add-item ion-checkbox {
        --size: 20px;
        --checkbox-background-checked: #ffd000;
    }
    
    .add-item ion-checkbox::part(container) {
        border-radius: 6px;
        border: 1px solid #a6a6a6;
        color: #232323;
    }
    
</style>