<template>
	<view class="page">
		<view class="white-board" @click="showArea">
			123
		</view>
		<view class="pink-board">
			456
		</view>
		
		<view class="right-item-detail-list">
			<rightItemComp title="专享礼包"/>
			<view class="member-gift-list" >
				<view class="member-gift-item" v-for="item in 3">
					<img class="gift-goods-img" src="https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1440w.jpg?source=172ae18b" alt="">
					<view class="gift-item-main-info">
						<text class="gift-item-title">30天意外险赠送</text>
						<text class="gift-item-desc">纯粮酿造 醇厚浓香</text>
					</view>
					<button type="default" class="gift-item-button">去领取</button>
				</view>
			</view>
			
			<rightItemComp title="消费尊享"/>
			<view class="custom-right-area">
				123
			</view>
			
			<rightItemComp title="会员专区" right='更多好物' />
			<view class="member-goods-area">
				<view class="member-goods-item" v-for="item in 3">
					<img class="member-good-img" src="https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1440w.jpg?source=172ae18b" alt="">
					<text class="member-good-title">会员商品名字</text>
					<text class="member-good-price">9.9</text>
				</view>
			</view>
			
			<rightItemComp title="月月领券" />
			<view class="monthly-coupon-area" ref="monthly-coupon">
				<img class="monthly-coupon-img" src="https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1440w.jpg?source=172ae18b" alt="">
				<view class="monthly-coupon-main-info">
					<text class="monthly-coupon-title">30天意外险赠送</text>
					<text class="monthly-coupon-desc">纯粮酿造 醇厚浓香</text>
				</view>
				<button type="default" class="monthly-coupon-button">去领取</button>
			</view>
			
			<rightItemComp title="会员日福利" right="更多福利"/>
			<view class="custom-right-area">
				123
			</view>	
			
			<rightItemComp title="生日惊喜" />
			<view class="custom-right-area">
				123
			</view>	
	
			
		</view>
		
	
		
	</view>
</template>

<script>
	import rightItemComp from '@/component/rightHeader.vue'
	export default {
		components:{
			rightItemComp,
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			showArea(){
				console.log(this.$refs['monthly-coupon'].$el.scrollIntoView())
			}
		}
	}
</script>

<style lang="scss" scoped> 
	.page{
		background-color: black;
		.white-board{
			background-color: silver;
			margin: 0 50rpx;
			height: 140rpx;
		}
			
		.pink-board{
			background-color:  rgba(59, 62, 72, 0.7);;
			margin: 0 20rpx;
			height: 200rpx;
			margin-top: -20rpx;
			backdrop-filter: blur(6px);
		}
		
		.right-item-detail-list{
			background-color:  #F6F6F6;
			padding: 16px 22rpx;
			border-radius: 16px 16px 0 0 ;
			.member-gift-list{
				.member-gift-item{
					display: flex;
					flex-direction: row;
					border: 2rpx solid #ECBF9A;
					border-radius: 16rpx;
					padding: 25rpx;
					background-color: #FCF9F1;
					align-items: center;
					margin-bottom: 24rpx;
					.gift-goods-img{
						width: 108rpx;
						height: 108rpx;
						border-radius: 8rpx;
						margin-right: 16rpx;
					}
					.gift-item-main-info{
						display: flex;
						flex-direction: column;
						flex: 1;
						.gift-item-title{
							color: #333333;
							font-weight: 400;
							font-size: 32rpx;
						}
						.gift-item-desc{
							color: #999999;
							font-weight: 400;
							font-size: 28rpx;
						}
					}
					.gift-item-button{
						background: #C0AD7B;
						border-radius: 32rpx;
						height: 64rpx;
						color: #ffffff;
						font-size: 14px;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
				.member-gift-item:last-child{
					margin-bottom: 48rpx;
				}
			}
		
			.custom-right-area{
				width: 100%;
				height: 256rpx;
				background-color: #ECBF9A;
				border-radius: 16rpx;
				margin-bottom: 48rpx;
			}
			
			.member-goods-area{
				display: flex;
				justify-content: space-between;
				.member-goods-item{
					display: flex;
					flex-direction: column;
					width: 218rpx;
					height: 332rpx;
					border-radius: 16rpx;
					background-color: white;
					.member-good-img{
						width: 218rpx;
						height: 218rpx;
						border-radius: 16rpx 16rpx 0 0;
						margin-bottom: 8rpx;
					}
					.member-good-title{
						color: #333333;
						font-weight: 400;
						font-size: 28rpx;
					}
					.member-good-price{
						font-weight: 600;
						font-size: 32rpx;
						color: #E8380D;
						text-align: center;
					}
				}
				margin-bottom: 48rpx;
			}
			
			.monthly-coupon-area{
				display: flex;
				flex-direction: row;
				border-radius: 16rpx;
				padding: 25rpx;
				background: linear-gradient(180deg, #FFD0CC 0%, #FFE4E1 100%);
				align-items: center;
				margin-bottom: 48rpx;
				.monthly-coupon-img{
					width: 108rpx;
					height: 108rpx;
					border-radius: 8rpx;
					margin-right: 16rpx;
				}
				.monthly-coupon-main-info{
					display: flex;
					flex-direction: column;
					flex: 1;
					.monthly-coupon-title{
						color: #333333;
						font-weight: 400;
						font-size: 32rpx;
					}
					.monthly-coupon-desc{
						color: #9A1808;
						font-weight: 400;
						font-size: 28rpx;
					}
				}
				.monthly-coupon-button{
					background: #C0AD7B;
					border-radius: 32rpx;
					height: 64rpx;
					color: #ffffff;
					font-size: 14px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
				
			
		}	
	}
</style>
