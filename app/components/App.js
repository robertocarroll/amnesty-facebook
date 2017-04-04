import {Marionette} from '../../vendor/vendor';
import {Backbone} from '../../vendor/vendor';
import LangModel from './models/LangModel';
import LangCollection from './collections/LangCollection';
import ItemView from './views/ItemView';


export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new ItemView());
  }
});
