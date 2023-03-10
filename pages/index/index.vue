<template>
	<view>
		<view class="abc">
			{{counter}}
		</view>
		<VanButton type="primary">
			132
		</VanButton>
		<view class="">
			{{a}}
		</view>
	</view>
</template>
<script setup lang="ts">
	const counter = useCounterStore();

	counter.count++;
	// 可以手动触发
	counter.$patch({
		count: counter.count + 1
	});
	// 或者使用 actions
	counter.increment();

	const a = ref(123)

	console.log(apis.a)
</script>

<style lang="scss">
	.abc {
		background-color: red;
	}
</style>
