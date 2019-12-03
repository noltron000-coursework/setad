class Setad {
	date: Date
	constructor(...args: number[]) {
		// @ts-ignore
		this.date = new Date(...args)
	}
}
