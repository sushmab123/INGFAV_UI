import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { FaEdit, FaPlus } from "react-icons/fa";

class FavouriteAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentPage: 0,
            todosPerPage: 5,
            name: localStorage.getItem("name"),


        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }



    componentDidMount() {

        // this.getData().then(response => {
        //     console.log(response.data)
        //     this.setState({ list: response.data });
        // });

        this.fetchData();


    }

    fetchData = () => {
        this.getData().then(response => {
            console.log(response.data);
            this.setState({ list: response.data });
        }).catch(err => {
            alert(err.response.data.message)
        });
    };


    getData = () => {
        var customerId = localStorage.getItem("customerId");

        return new Promise((resolve, reject) => {
            axios.get('http://192.168.1.100:9093/ingbank/favouriteAccounts/' + customerId, + this.state.currentPage).then(function (response) {
                sessionStorage.setItem("accountName", response.data.accountName)
                resolve(response);
                console.log(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    handleNext = () => {
        this.props.history.push("/addAccount")
    }

    handleEdit = (item) => {
        sessionStorage.setItem("favAccount", JSON.stringify(item))
        sessionStorage.setItem("favouriteAccountId", item.favouriteAccountId)
        console.log(item.favouriteAccountId)
        this.props.history.push("/editAccount")
    }


    next = () => {
        this.setState({ currentPage: this.state.currentPage + 1 }, () => {
            this.fetchData();
        });

    };
    prev = () => {
        if (this.state.currentPage >= 0) {
            this.setState({ currentPage: this.state.currentPage - 1 }, () => {
                this.fetchData();
            });
        }
    };




    render() {
        return (

            <div className="container">
                <div className="list-acc main-title">Welcome: {this.state.name}</div>
                <div className="list-acc main-title">Favorite Accounts</div>
                <span clstyle={{ float: 'right', color: 'blue', }}><button onClick={this.handleNext} className="add-button"><FaPlus />Add a new account</button></span>

                <div className="row">
                    {
                        this.state.list.map((item, i) => {
                            return (
                                <div className="col-md-4 card-list">
                                    <Card key={i}>
                                        <CardBody>
                                            <CardTitle>{item.accountName}  <span style={{ float: 'right', color: 'orange' }} onClick={() => this.handleEdit(item)}><FaEdit /></span></CardTitle>
                                            <CardSubtitle>{item.ibanNumber}</CardSubtitle>
                                            <CardText>{item.bankName}</CardText>
                                        </CardBody>
                                    </Card>


                                </div>

                            )
                        })

                    }

                </div>
                <button onClick={this.prev} className="btn btn-warning " style={{ float: "left" }} >Prev</button>
                <button onClick={this.next} className="btn btn-warning offset-md-10" style={{ float: "right" }}>Next</button>


            </div>
        );
    }
}
export default FavouriteAccount;