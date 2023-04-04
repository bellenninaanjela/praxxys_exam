<template>
    <ion-menu content-id="main-content">
		<ion-header>
			<ion-toolbar>
				<ion-title></ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content class="ion-padding">
            <ion-list>
                <ion-item router-link="/">
                    Home
                </ion-item>
                <ion-item router-link="/category/1">
                    Order Now!
                </ion-item>
                <ion-item router-link="/">
                    My Orders
                </ion-item>
            </ion-list>
        </ion-content>
	</ion-menu>
</template>

<script>
    import {
		IonContent,
		IonHeader,
		IonMenu,
		IonTitle,
		IonToolbar,
        IonList,
        IonItem
	} from '@ionic/vue';

    export default ({
		components: {
		IonContent,
		IonHeader,
		IonMenu,
		IonTitle,
		IonToolbar,
        IonList,
        IonItem,
		},
    });
</script>