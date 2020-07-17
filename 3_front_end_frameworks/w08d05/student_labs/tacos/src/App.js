import React from 'react';
import Taco from './components/Taco';

class App extends React.Component {

  state = {
    url: 'http://taco-randomizer.herokuapp.com/random/?full-tack=true',
    taco: '',
    allKeys: []
  }

  searchTaco() {
    // fetch(this.state.url)
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(json => {
    //     console.log(`App -> searchTaco -> json`, json)
    //     this.setState({
    //       taco: json
    //       allKeys: Object.keys(this.state.taco)
    //     })
    //   })
    //   .catch(err => {
    //     console.log(`App -> searchTaco -> err`, err)
    //   })

    //temporary object while internet is out
    this.setState({
      taco: { "seasoning": { "url": "https://raw.github.com/sinker/tacofancy/master/seasonings/sriracha_marinade.md", "slug": "sriracha_marinade", "recipe": "Sriracha Marinade\n===================\n\nAlone on a Saturday night, I put on Iron Maiden, cubed up a pork chop and whipped this marinade together:\n\n* 2-3 Tbs sriracha sauce\n* couple pinches of Mexican Oregano\n* good shake of smokey paprika\n* tsp or so of ground ancho chile\n* pinch of salt\n\nGet this coated nicely over everything before frying or grilling on high heat.\n\ntags: vegetarian, vegan\n", "name": "Sriracha Marinade" }, "shell": { "url": "https://raw.github.com/sinker/tacofancy/master/shells/naan.md", "slug": "naan", "recipe": "naan\n=====================\n\nNaan bread can be purchased or made. It is easier to buy it at a store. \n\nNaan bread is a flatbread that tends to be fluffy and easy to tear apart. \n", "name": "naan" }, "condiment": { "url": "https://raw.github.com/sinker/tacofancy/master/condiments/cilantro_and_onion.md", "slug": "cilantro_and_onion", "recipe": "# Cilantro and Onion\n\nChop up some cilantro and onion (any variety) and  put them on any taco.\n\ntags: vegetarian, vegan", "name": "Cilantro and Onion" }, "mixin": { "url": "https://raw.github.com/sinker/tacofancy/master/mixins/traditional_taco_mixins.md", "slug": "traditional_taco_mixins", "recipe": "Traditional Taco Mixins\n(makes about 20 servings)\n\n- 1 (16 ounce) container sour cream\n- 1/4 head iceberg lettuce (rinsed, dried, shredded)\n- 1 cup shredded cheddar cheese\n- 3 diced tomatoes\n- 1 (2.25 ounce) can black olives, drained\n\nAdd ingredients to tacos in layers. \n\ntags: vegetarian\n\n", "name": "Traditional Taco Mixins" }, "base_layer": { "url": "https://raw.github.com/sinker/tacofancy/master/base_layers/chopped_pork.md", "slug": "chopped_pork", "recipe": "Chopped Pork\n=============\n\nThis is a quick and easy way to prep and cook your pork for tacos.\n\nYou need:\n\n* pork chops, boneless, don't go too crazy thick, around 1-2\" tops.\n* kitchen scissors\n\nDo you see where this is going? Cut up your chops unevenly with the scissors. Go for an average of chopped bits around 1\" in size or so, but variation is good, especially little bits. Those little bits are going to turn into crispy bits of goodness. When you..\n\nToss all this into a high-heat pan (cast iron, if you've got it) and fry it up so that it chars up real nice. The little bits will turn into little charred chunks--this is a feature, not a bug.\n\nPrior to the pan-tossing, you should spice up your pork with a good rub or marinade. If you're looking, I recommend the [sriracha marinade](/seasonings/sriracha_marinade.md).\n", "name": "Chopped Pork" } },

      allKeys: Object.keys(this.state.taco)
    })
  }

  render() {
    return (
      <div>
        <h1>Random Taco</h1>
        <button onClick={() => this.searchTaco()}>Click for taco</button>
        {
          this.state.taco === ''
            ? <p>No Tacos Yet</p>
            : <Taco
              allKeys={this.state.allKeys}
              taco={this.state.taco} />
        }

      </div>
    )
  }
}

export default App;
