<template>
	<view>
		<view class="abc">
			{{counter}}
		</view>
	</view>
</template>
<script setup>
	import {
		useCounterStore
	} from '@/stores/counter';
	const counter = useCounterStore();

	counter.count++;
	// 可以手动触发
	counter.$patch({
		count: counter.count + 1
	});
	// 或者使用 actions
	counter.increment();
</script>

<style lang="scss">
	.abc{
		background-color: red;
	}
</style>
