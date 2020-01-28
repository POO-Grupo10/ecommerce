import React from 'react';

import './collection-items.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItemsToCart } from '../../redux/cart/cart.actions';

const CollectionItems = ({item, addItem }) => {

    const {name, price, imageUrl} = item;

    return (
    <div className='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
             <CustomButton onClick={() => addItem(item)} inverted >Add to cart</CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemsToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItems);