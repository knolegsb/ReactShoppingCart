import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">Products</div>
                <div className="filter-sort">
                    Order{" "}
                    <select>
                        <option>Latest</option>
                        <option>Lowest</option>
                        <option>Hightest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filter{" "}
                    <select>
                        <option>ALL</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>
            </div>
        )
    }
}