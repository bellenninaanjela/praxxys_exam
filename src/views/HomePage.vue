<template>
	<!-- <sidemenu></sidemenu> -->

	<ion-page id="main-content">
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title> {{ acc_points }} Points </ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content class="ion-padding">
			<ion-grid>
				<ion-row>
					<ion-col size="4" class="col">
						<img src="../img/burger.png" alt="fast food logo">
					</ion-col>
					<ion-col size="8" class="col">
						<small>Annyeong, {{ first_name }}! </small>
						<h5>What do you want to eat?</h5>
					</ion-col>
				</ion-row>
			</ion-grid>

			<!-- Search Bar  -->
			<ion-searchbar placeholder="    try our new Veggie Burgers"></ion-searchbar>

			<!-- today's special -->
			<div class="specials">
				<ion-text>Today's Specials!</ion-text>
				<swiper
					:slides-per-view="1.2"
					:space-between="0"
					@swiper="onSwiper"
					@slideChange="onSlideChange"
				>
					<swiper-slide>
						<ion-card>
							<ion-card-content>
								<!-- <img src="../img/special/burger.png" alt="fast food logo"> -->
								<ion-img :src="special1"></ion-img>
							</ion-card-content>
						</ion-card>
					</swiper-slide>

					<swiper-slide>
						<ion-card>
							<ion-card-content>
								<!-- <img src="../img/special/burger.png" alt="fast food logo"> -->
								<ion-img :src="special2"></ion-img>
							</ion-card-content>
						</ion-card>
					</swiper-slide>

					<swiper-slide>
						<ion-card>
							<ion-card-content>
								<!-- <img src="../img/special/burger.png" alt="fast food logo"> -->
								<ion-img :src="special3"></ion-img>
							</ion-card-content>
						</ion-card>
					</swiper-slide>

					<swiper-slide>
						<ion-card>
							<ion-card-content>
								<!-- <img src="../img/special/burger.png" alt="fast food logo"> -->
								<ion-img :src="special4"></ion-img>
							</ion-card-content>
						</ion-card>
					</swiper-slide>
				</swiper>
			</div>

			<!-- Category  -->
			<div class="category">
				<ion-text>Category</ion-text>
				<swiper
					:slides-per-view="1.2"
					:space-between="0"
					@swiper="onSwiper"
					@slideChange="onSlideChange"
				>
				
					<swiper-slide>
						<ion-card router-link="/category/1" class="card">
							<ion-img :src="cate1"></ion-img>
							<ion-card-header class="card-title">
								<div>
									<ion-card-title class="cate-title">Extreme Burger</ion-card-title>
									<ion-card-subtitle class="cate-title"> {{ eb_count }} Recipes</ion-card-subtitle>
								</div>
							</ion-card-header>
						</ion-card>
					</swiper-slide>

					<swiper-slide>
						<ion-card router-link="/category/2" class="card">
							<ion-img :src="cate2"></ion-img>
							<ion-card-header class="card-title">
								<div>
									<ion-card-title class="cate-title">Burger Combo</ion-card-title>
									<ion-card-subtitle class="cate-title"> {{ bc_count }}  Recipes</ion-card-subtitle>
								</div>
							</ion-card-header>
						</ion-card>
					</swiper-slide>

					<swiper-slide>
						<ion-card router-link="/category/3" class="card">
							<ion-img :src="cate3"></ion-img>
							<ion-card-header class="card-title">
								<div>
									<ion-card-title class="cate-title">Veggie Burger</ion-card-title>
									<ion-card-subtitle class="cate-title"> {{ vb_count }}  Recipes</ion-card-subtitle>
								</div>
							</ion-card-header>
						</ion-card>
					</swiper-slide>

				</swiper>
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
		IonImg 
	} from '@ionic/vue';

	import { 
		Swiper,
		SwiperSlide 
	} from 'swiper/vue';

	import 'swiper/css';

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
		Swiper,
		SwiperSlide,
		IonCard,
		IonCardContent,
		IonImg 
		},
		setup() {
			const onSwiper = (swiper) => {
				console.log(swiper);
			};
			const onSlideChange = () => {
				console.log('slide change');
			};
			return {
				onSwiper,
				onSlideChange,
			};
		},
		props: {
			first_name: String,
			last_name: String,
			acc_points: Number,
			eb_count: Number,
			bc_count: Number,
			vb_count: Number,
			special1: {
				type: String,
				required: true,
			},
			special2: {
				type: String,
				required: true,
			},
			special3: {
				type: String,
				required: true,
			},
			special4: {
				type: String,
				required: true,
			},
			cate1: {
				type: String,
				required: true,
			},
			cate2: {
				type: String,
				required: true,
			},
			cate3: {
				type: String,
				required: true,
			},
		},
		
	});
</script>


<style scoped>
	ion-searchbar {
		--background: #f3f3f3;
		--placeholder-color: #747474;
		--icon-color: #b40000;
		--border-radius: 8px;
	}

	ion-card-title.cate-title, ion-card-subtitle.cate-title {
		color: white;
	}
	ion-card-subtitle.cate-title {
		font-size: 12px;
	}

</style>