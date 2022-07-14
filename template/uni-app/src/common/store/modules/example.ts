import { defineStore } from 'pinia';

interface ExampleState {
  count: number;
}

export const useExampleStore = defineStore({
	id: 'example',
  state: (): ExampleState => ({
    count: 0,
  }),
  getters: {
    getCount(): number {
      return this.count
		}	
  },
	actions: {
		setCount(count: number): void {
			this.count = count
		},
	}
})