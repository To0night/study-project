<template>
	<view class="right-title-comp">
		<view class="left">
			<text class="right-title-style">{{this.$props.title}}</text>
			<text class="item-info-icon-style" @click="checkRightDetail">i</text>
		</view>
		<view class="right">
			<text class="right-link-style" v-if="this.$props.right">{{this.$props.right}} ></text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"rightHeader",
		props:{
			title:{
				type:String,
				default:() => '默认title'
			},
			right:{
				type:String,
			},
		},
		data() {
			return {
				
			};
		},
		methods:{
			checkRightDetail(){
				console.log(12331123)
			}
		},
		created() {
		}
	}
</script>

<style scoped>
	.right-title-comp{
		display: flex;
		align-items: center;
		margin-bottom: 12px;
		justify-content: space-between;
		.left{
			color: #333333;
			font-weight: 600;
			font-size: 18px;
			display: flex;
			align-items: center;
			.item-info-icon-style{
				box-sizing: border-box;
				display: inline-flex;
				border-radius: 50%;
				border: 2px solid #CCCCCC;
				width: 18px;
				height: 18px;
				justify-content: center;
				align-items: center;
				color: #CCCCCC;
				font-size: 12px;
				margin-left: 16rpx;
			}
		}
		.right{
			display: flex;
			align-items: center;
			.right-link-style{
				color: #999999;
				font-weight: 400;
				font-size: 14px;
			}
		}
		
	}

</style>