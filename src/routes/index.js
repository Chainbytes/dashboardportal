import React from "react";
import {Menu, Container, Segment, Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

let dashboardData = [
    {label: "Anguilla", links: "https://anguilla.atmconsole.com/#/login"},
    {label: "ATMMM", links: "https://atmmm.atmconsole.com/#/login"},
    {label: "BC Systems", links: "https://bcsystems.atmconsole.com/#/login"},
    {label: "Bittrade", links: "https://bittrade.atmconsole.com/#/login"},
    {label: "Chainbytes", links: "https://chainbytes.atmconsole.com/#/login"},
    {label: "Cream Coin", links: "https://creamcoin.atmconsole.com/#/login"},
    {label: "Hayden", links: "https://hayden.atmconsole.com/#/login"},
    {label: "Japanese", links: "https://japanese.atmconsole.com/#/login"},
    {label: "Netco Digital", links: "https://netcodigital.atmconsole.com/#/login"},
    {label: "Rocket", links: "https://rocket.atmconsole.com/#/login"},
    {label: "Silicon Prairie", links: "https://silicon-prairie.atmconsole.com/#/login"},
    {label: "Texas Kevin", links: "https://texas-kevin.atmconsole.com/#/login"},
    {label: "Zozo Coin", links: "https://zozocoin.atmconsole.com/#/login"},
    {label: "Vizitiu", links: "https://vizitiu.atmconsole.com/#/login"},
    {label: "Beeps", links: "https://beeps.atmconsole.com/#/login"},
    {label: "Bayside", links: "https://bayside.atmconsole.com/#/login"}
]
let dashboardItem = dashboardData.map((data, index) => {
    return <Menu.Item href={data.links} key={index}  target='_blank'>{data.label}</Menu.Item>
})
export default () => (

    <Container textAlign='center'>
        <br/>
        <Header as='h2' icon textAlign='center'>Dashboards</Header>
        <Segment centered>
            <Menu vertical>
                {dashboardItem}
            </Menu>
        </Segment>
    </Container>
);
