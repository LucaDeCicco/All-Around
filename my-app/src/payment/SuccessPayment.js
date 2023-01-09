import axios from "axios";
import {Component} from "react";
import {wait} from "@testing-library/user-event/dist/utils";

const goHome =()=> {
    window.location.replace("/")
}

class SuccessPayment extends Component {
    constructor() {
        super();
        this.params = new URLSearchParams(window.location.search);
        this.token = JSON.parse(localStorage.getItem('user')).token;
        this.state = {
            toWait: 5,
        };
    }

    onWaiting = async () => {
        wait(1000).then(() => {
            this.setState({toWait: this.state.toWait - 1});
            this.onWaiting();
        });
    };


    componentDidMount() {
        this.onWaiting().then();
        axios
            .get(
                `http://localhost:8888/pay/${this.params.get(
                    "PayerID"
                )}/${this.params.get("paymentId")}`,
                {
                    method: "get",
                    headers: {
                        Authorization: 'Bearer ' + this.token,
                        "Access-Control-Allow-Origin": `${window.location.origin}`,
                    },
                }
            )
            .then();
    }

    render() {
            return (
                <div style={{textAlign:"center"}}>
                    <div style={{minHeight:"15em"}}></div>
                    <div><h1 style={{color:"green"}}>Successfully done!</h1> <a href={"/"}>click here</a> to go on the main page.</div>
                </div>
            );
    }
}

export default SuccessPayment;
