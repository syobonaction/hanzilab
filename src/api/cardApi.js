import { createServer, Model } from "miragejs";

export function makeServer() {
  return createServer({
    models: {
      card: Model,
    },

    routes() {
      this.namespace = "api"
  
      this.get("/cards");
    },

    seeds(server) {
      server.create('card', {
        target: '天气',
        targetPinyin: 'tiānqì',
        meaning: 'weather',
        phrasePinyin: 'Jīntiān zǎoshàng de tiānqì bù hǎo',
        phraseMeaning: 'The weather this morning is not good.',
        prefix: '今天早上的',
        suffix: '不好'
      });
      server.create('card', {
        target: '今天',
        targetPinyin: 'jīntiān',
        meaning: 'today',
        phrasePinyin: 'Jīntiān zǎoshàng de tiānqì bù hǎo',
        phraseMeaning: 'The weather this morning is not good.',
        prefix: '',
        suffix: '早上的天气不好'
      });
      server.create('card', {
        target: '早上',
        targetPinyin: 'zǎoshàng',
        meaning: 'morning',
        phrasePinyin: 'Jīntiān zǎoshang de tiānqì bù hǎo',
        phraseMeaning: 'The weather this morning is not good.',
        prefix: '今天',
        suffix: '的天气不好'
      });
    },
  });
}
