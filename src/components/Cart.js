import React, {Component} from "react";
import formatCurrency from "../util";

export default class Cart extends Component {
    render() {
        return (
            <div>
                <div className="cart cart-header">Cart is empty</div>
            

                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            <li>
                                <div>
                                    <img></img>
                                </div>
                                <div>
                                    <di>Title</di>
                                    <div className="right">
                                        <button>Remove</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}