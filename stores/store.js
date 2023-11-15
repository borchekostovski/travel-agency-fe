import { defineStore } from 'pinia';

export const mapStore = defineStore('filter', {
  state: () => ({
    selectedFilter: null,
    where: '',
    when: '',
    who: '',
  }),
  persist: true,
  actions: {
    setFilter(item) {
      this.selectedFilter = item;
    },
    updateWhere(where) {
      this.where = where;
    },
    updateWhen(when) {
      this.when = when;
    },
    updateWho(who) {
      this.who = who;
    },
  },
});
