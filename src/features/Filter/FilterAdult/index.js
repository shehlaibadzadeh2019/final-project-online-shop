import React, { Component } from 'react'
import '../FilterAdult/Filter.sass'
import Price from '../PriceFilter/price'
import {FaChevronRight} from 'react-icons/fa'
import {FaAlignRight} from 'react-icons/fa'

class FilterAdult extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isExpanded: false
        };
      }
      handleToggle(e) {
        e.preventDefault();
        this.setState({
          isExpanded: !this.state.isExpanded
        });
      } 
      render() {
        const { isExpanded } = this.state;
    return(
        <div className="filter-container col-8">
            <div className="filter-header d-flex d-lg-block p-0">

                <h1 className="filter-h1 pr-3 pl-5 pr-lg-0 pl-lg-0 pr-md-0 pl-md-3 d-none d-md-block">Categories</h1>
        
                    <button className={`btn filtered-btn btn-fltr d-flex  d-md-none ${isExpanded ? "active" : ""}`} onClick={e => this.handleToggle(e)}>
                        <h1 className="btn-filter">Filter</h1>
                      
                        <FaChevronRight className={`right_icon ${isExpanded ? "active" : ""}`}/>
                        <FaAlignRight className={`down_icon ${!isExpanded ? "active" : ""}`}/>

                    </button>
 
            </div>
            
            <form className={`category-list-form  ${isExpanded ? "active" : ""}`}>
            <div className="category-list">
                <div className="category-item-shoes  item-container">
                        <h2 className="shoes-h2 category-item-header">Shoes </h2>
                        <div className="shoes-item-container">
                            <input id="boots" type="checkbox" name="shoes" value="Boots"/> <label for="boots"> Boots</label>
                            <input id="sandals" type="checkbox" name="shoes" value="sandals"/> <label for="sandals"> Sandals</label>
                            <input id="sneakers" type="checkbox" name="shoes" value="sneakers"/> <label for="sneakers"> Sneakers</label>
                
                         </div>
                    </div>
                <div className="category-item-bags  item-container">
                        <h2 className="bags-h2 category-item-header">Bags </h2>
                        <div className="bags-item-container">
                            <input id="backpacks" type="checkbox" name="bags" value="Backpacks"/> <label for="backpacks"> Backpacks</label>
                            <input id="crossbody" type="checkbox" name="bags" value="crossbody"/> <label for="crossbody"> Crossbody</label>
                            <input id="beltbags" type="checkbox" name="bags" value="beltbags"/> <label for="beltbags"> Beltbags</label>
                         </div>
                </div>
                <div className="filter-price item-container  item-container">
                        <h2 className="price-h2 category-item-header">Filter By Price </h2>
                        <div className="price-container">
                          <Price />
                         </div>
                </div>
                <div className="filter-size  item-container">
                        <h2 className="size-h2 category-item-header">Filter By Size </h2>
                    <div className="size-container col-lg-8 col-md-11 col-12">
                        <input id="size-27" type="checkbox" name="size" value="27"/> <label for="size-27"> 27</label>
                        <input id="size-28" type="checkbox" name="size" value="28"/> <label for="size-28"> 28</label>
                        <input id="size-29" type="checkbox" name="size" value="29"/> <label for="size-29"> 29</label>
                        <input id="size-30" type="checkbox" name="size" value="30"/> <label for="size-30"> 30</label>
                        <input id="size-31" type="checkbox" name="size" value="31"/> <label for="size-31"> 31</label>
                        <input id="size-32" type="checkbox" name="size" value="32"/> <label for="size-32"> 32</label>
                        <input id="size-33" type="checkbox" name="size" value="33"/> <label for="size-33"> 33</label>
                        <input id="size-34" type="checkbox" name="size" value="34"/> <label for="size-34"> 34</label>
                        <input id="size-35" type="checkbox" name="size" value="35"/> <label for="size-35"> 35</label>
                        <input id="size-36" type="checkbox" name="size" value="36"/> <label for="size-36"> 36</label>
                        <input id="size-37" type="checkbox" name="size" value="37"/> <label for="size-37"> 37</label>
                        <input id="size-38" type="checkbox" name="size" value="38"/> <label for="size-38"> 38</label>
                        <input id="size-39" type="checkbox" name="size" value="39"/> <label for="size-39"> 39</label>
                        <input id="size-40" type="checkbox" name="size" value="40"/> <label for="size-40"> 40</label>
                        <input id="size-41" type="checkbox" name="size" value="41"/> <label for="size-41"> 41</label>
                      
                        
                </div>
                </div>
                <div className="filter-brand">
                        <h2 className="brand-h2 category-item-header">Brands </h2>
                    <div className="brand-container col-md-3 col-lg-12 pl-0">
                       <input id="bershka" type="checkbox" name="brand" value="Bershka"/> <label for="bershka"> Bershka</label>
                       <input id="mango" type="checkbox" name="brand" value="Mango"/><label for="mango"> Mango </label>
                       <input id="nike" type="checkbox" name="brand" value="Nike"/><label for="nike"> Nike</label>
                       
                    </div>
                </div>
            </div>
            <button className="filter-btn btn btn-dark" type="submit">Filter</button> 
            </form>
            </div>
      
    )}
}
export default FilterAdult