import React, {Component} from 'react';
import Spinner from '../components/Spinner.js';
import './../utils/Array.js';
import {Link} from "react-router-dom";

class ExperimentTagsHandler extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    //this.AppStore = this.context.flux.getStore('appStore');
    //this.getFromStore();
  }

  componentDidMount () {
   // this.AppStore.addListener('change', this.getFromStore);
  }

  componentWillUnmount () {
    // this.AppStore.removeListener('change', this.getFromStore);
  }

  getFromStore () {
    this.setState({items: this.AppStore.getExperimentTags()});
  }

  render() {
    let items = this.state.items;
    let jsx;
    if (items.STORE_MISS) {
        jsx = <Spinner/>;
    } else {
       jsx = <div key="0" className="post center-box">
              <div className="tags">
              {items.map((tag, i) => {
                return <Link key={tag+i} className="tag" to="search" params={{query: tag}}>
                  {tag}
                </Link>;
              })}
              </div>
       </div>;
    }
    return jsx;
  }
}
export default ExperimentTagsHandler;
