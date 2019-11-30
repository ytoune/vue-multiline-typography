const main = async () => {}

main().catch(x => {
	console.log('# something happens.')
	console.error(x)
	if ('undefined' === typeof process) return
	process.exit(1)
})
