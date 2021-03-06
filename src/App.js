import React, {Component} from 'react';
import {
    Header,
    Layout,
    Navigation,
    Drawer,
    Content,
    Card,
    CardTitle,
    CardText,
    CardActions,
    Button,
    CardMenu,
    IconButton,
    Cell,
    Grid,
    List,
    Section,
    Footer,
    FooterSection,
    FooterLinkList
} from "react-mdl";
import './App.css';

class App extends Component {
    render() {
        return (
            <div
                style={{
                height: '100vh',
                position: 'relative'
            }}>
                <Layout
                    style={{
                    backgroundColor: "#3A3A3A"
                }}>
                    <Header
                        transparent
                        title="Tristan Wilson"
                        style={{
                        color: 'white'
                    }}>
                        <Navigation>
                            <a href="/">Resume</a>
                            <a href="/">Social Media</a>
                            <a href="/">Website Links</a>
                            <a href="/">Contact Me</a>
                        </Navigation>
                    </Header>
                    <Drawer title="Tristan Wilson">
                        <Navigation>
                            <a href="/">Resume</a>
                            <a href="/">Social Media</a>
                            <a href="/">Website Links</a>
                            <a href="/">Contact Me</a>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div class="mdl-grid center-items">
                            <Layout horizontal spacing="10px" centerVertical>
                                <Grid centerVertical>
                                    <Cell>
                                        <Card
                                            shadow={0}
                                            style={{
                                            width: 'auto',
                                            height: '332px',
                                            margin: 'auto'
                                        }}>
                                            <CardTitle
                                                style={{
                                                color: '#fff',
                                                height: '176px',
                                                background: 'url(https://imgur.com/GzMqQhQ.png) center / cover'
                                            }}></CardTitle>
                                            <CardText>
                                                E-Commerce Website used for Indoor Hydroponics sales throughout Canada. This
                                                website is still under development, as we aren't currently ready to launch.
                                            </CardText>
                                            <CardActions border>
                                                <Button colored href='https://www.simplegrow.net/'>Check Out Simplegrow</Button>
                                            </CardActions>
                                            <CardMenu
                                                style={{
                                                color: '#fff'
                                            }}>
                                                <IconButton name="share"/>
                                            </CardMenu>
                                        </Card>
                                    </Cell>
                                    <Cell>
                                        <Card
                                            shadow={0}
                                            style={{
                                            width: 'auto',
                                            height: '332px',
                                            margin: 'auto'
                                        }}>
                                            <CardTitle
                                                style={{
                                                color: '#fff',
                                                height: '176px',
                                                background: 'url(https://imgur.com/TCl1Izo.png) center / cover'
                                            }}></CardTitle>
                                            <CardText>
                                                Online Ordering Website used for Android Box sales. This website was used as a
                                                way of getting information about my company, as well as purchasing my Android
                                                Box kits.
                                            </CardText>
                                            <CardActions border>
                                                <Button colored href='https://www.tekservices.net/'>Check Out TEK Services</Button>
                                            </CardActions>
                                            <CardMenu
                                                style={{
                                                color: '#fff'
                                            }}>
                                                <IconButton name="share"/>
                                            </CardMenu>
                                        </Card>
                                    </Cell>
                                    <Cell>
                                        <Card
                                            shadow={0}
                                            style={{
                                            width: 'auto',
                                            height: '332px',
                                            margin: 'auto'
                                        }}>
                                            <CardTitle
                                                style={{
                                                color: '#fff',
                                                height: '176px',
                                                background: 'url(https://imgur.com/qDdmcCd.png) center / cover'
                                            }}></CardTitle>
                                            <CardText>
                                                Link to my GitHub
                                            </CardText>
                                            <CardActions border>
                                                <Button colored href='https://github.com/tristanwilson111'>Check Out My Github</Button>
                                            </CardActions>
                                            <CardMenu
                                                style={{
                                                color: '#fff'
                                            }}>
                                                <IconButton name="share"/>
                                            </CardMenu>
                                        </Card>
                                    </Cell>
                                    <Cell>
                                        <Card
                                            shadow={0}
                                            style={{
                                            width: 'auto',
                                            height: '332px',
                                            margin: 'auto'
                                        }}>
                                            <CardTitle
                                                style={{
                                                color: '#fff',
                                                height: '176px',
                                                background: 'url(https://imgur.com/6pUjdij.png) center / cover'
                                            }}></CardTitle>
                                            <CardText>
                                                Link to my LinkedIn
                                            </CardText>
                                            <CardActions border>
                                                <Button colored href='https://www.linkedin.com/in/tristan-wilson/'>Check Out My LinkedIn</Button>
                                            </CardActions>
                                            <CardMenu
                                                style={{
                                                color: '#fff'
                                            }}>
                                                <IconButton name="share"/>
                                            </CardMenu>
                                        </Card>
                                    </Cell>
                                    <Cell>
                                        <Card
                                            shadow={0}
                                            style={{
                                            width: 'auto',
                                            height: '332px',
                                            margin: 'auto'
                                        }}>
                                            <CardTitle
                                                style={{
                                                color: '#fff',
                                                height: '176px',
                                                background: 'url(https://imgur.com/vY0RoXo.png) center / cover'
                                            }}></CardTitle>
                                            <CardText>
                                                Link to my Twitter
                                            </CardText>
                                            <CardActions border>
                                                <Button colored href='https://twitter.com/TristanW_Dev'>Check Out My Twitter</Button>
                                            </CardActions>
                                            <CardMenu
                                                style={{
                                                color: '#fff'
                                            }}>
                                                <IconButton name="share"/>
                                            </CardMenu>
                                        </Card>
                                    </Cell>
                                </Grid>
                            </Layout>
                        </div>
                    </Content>
                    <Footer size="mini">
                        <FooterSection type="left" logo="Created by Tristan Wilson">
                            <FooterLinkList>
                                <a href="mailto:tristanwilson111@gmail.com">Contact Me</a>
                            </FooterLinkList>
                        </FooterSection>
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default App;