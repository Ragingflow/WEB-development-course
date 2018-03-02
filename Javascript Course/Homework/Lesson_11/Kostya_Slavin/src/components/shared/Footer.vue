<template>
	<v-footer :fixed="fixed" app>
		<span>&copy; {{ date.getFullYear() }} Goole Books API</span>
	</v-footer>
</template>

<script>
	export default {
		data() {
			return {
				fixed: false,
				date: new Date()
			}
		},
	}
</script>

<style scoped>

</style>