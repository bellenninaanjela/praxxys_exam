<template>
    <ion-page>
        <ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
				<ion-title> Extreme Burger </ion-title>
			</ion-toolbar>
		</ion-header>

        <ion-content class="ion-padding">
            <!-- Search Bar  -->
			<ion-searchbar placeholder="    try our Hottest Burger!"></ion-searchbar>


            <ion-grid>
				<ion-row>
					<ion-col size="6" class="col">
                        <ion-card router-link="/food/1" class="menu-card ion-no-margin">
                            <ion-img :src="eb1"></ion-img>
							<ion-card-header>
									<ion-card-title> {{ burger_name1 }} </ion-card-title>
									<ion-card-subtitle> Php {{ price }}</ion-card-subtitle>
							</ion-card-header>
                        </ion-card>
					</ion-col>
					
					<ion-col size="6" class="col">
                        <ion-card router-link="/food/2" class="menu-card ion-no-margin">
                            <ion-img :src="eb2"></ion-img>
							<ion-card-header>
									<ion-card-title> {{ burger_name2 }} </ion-card-title>
									<ion-card-subtitle> Php {{ price }}</ion-card-subtitle>
							</ion-card-header>
                        </ion-card>
					</ion-col>
					
					<ion-col size="6" class="col">
                        <ion-card router-link="/food/3" class="menu-card ion-no-margin">
                            <ion-img :src="eb3"></ion-img>
							<ion-card-header>
									<ion-card-title> {{ burger_name3 }} </ion-card-title>
									<ion-card-subtitle> Php {{ price }}</ion-card-subtitle>
							</ion-card-header>
                        </ion-card>
					</ion-col>
				</ion-row>
			</ion-grid>

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
		IonBackButton
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
		IonBackButton
		},
        props: {
			burger_name1: String,
			burger_name2: String,
			burger_name3: String,
			burger_name4: String,
			price: Number,
			eb1: {
				type: String,
				required: true,
			},
			eb2: {
				type: String,
				required: true,
			},
			eb3: {
				type: String,
				required: true,
			},
			
		},
	});
</script>