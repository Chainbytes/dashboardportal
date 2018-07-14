import React from "react";
import {Menu, Container, Segment, Header, Button, Icon, Label} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

let dashboardData = [
    {label: "Anguilla", links: "https://anguilla.atmconsole.com"},
    {label: "ATMMM", links: "https://atmmm.atmconsole.com"},
    {label: "BC Systems", links: "https://bcsystems.atmconsole.com"},
    {label: "Bittrade", links: "https://bittrade.atmconsole.com"},
    {label: "Chainbytes", links: "https://chainbytes.atmconsole.com"},
    {label: "Cream Coin", links: "https://creamcoin.atmconsole.com"},
    {label: "Hayden", links: "https://hayden.atmconsole.com"},
    {label: "Japanese", links: "https://japanese.atmconsole.com"},
    {label: "Netco Digital", links: "https://netcodigital.atmconsole.com"},
    {label: "Rocket", links: "https://rocket.atmconsole.com"},
    {label: "Silicon Prairie", links: "https://silicon-prairie.atmconsole.com"},
    {label: "Texas Kevin", links: "https://texas-kevin.atmconsole.com"},
    {label: "Zozo Coin", links: "https://zozocoin.atmconsole.com"},
    {label: "Vizitiu", links: "https://vizitiu.atmconsole.com"},
    {label: "Beeps", links: "https://beeps.atmconsole.com"},
    {label: "Bayside", links: "https://bayside.atmconsole.com"}
]
let facebookLogin = (url) => {
    window.open(url + ':4000/connect/facebook', '_blank')
}
let googleLogin = (url) => {
    window.open(url + ':4000/connect/google', '_blank')
}
let dashboardLogin = (url) => {
    window.open(url + '/#/login', '_blank')
}
let dashboardItem = dashboardData.map((data, index) => {
    return <Segment size='mini' key={index}>
        <Button onClick={() => {
            return dashboardLogin(data.links)
        }}>{data.label}
        </Button>
        <Button color='facebook' onClick={() => {
            return facebookLogin(data.links)
        }}>
            <Icon name='facebook'/> Sign in with Facebook
        </Button>
        <Button color='google plus' onClick={() => {
            return googleLogin(data.links)
        }}>
            <Icon name='google plus'/> Sign in with Google
        </Button>

    </Segment>
})
export default () => (

    <Container textAlign='center'>
        <br/>
        <Header as='h2' icon textAlign='center'>Dashboards</Header>
        <Segment.Group>
            {dashboardItem}
        </Segment.Group>
    </Container>
);
