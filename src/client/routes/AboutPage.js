
import React, { Component, PropTypes } from 'react';

import { Grid } from 'react-bootstrap';
import { NavbarCollapsible } from '../components/BootstrapNavigation';
import { Nav } from 'react-bootstrap';
import SearchResultsForm from '../containers/SearchResults/SearchResultsForm.jsx';
import CustomNavRouterLink from '../components/CustomNav/CustomNavRouterLink.jsx';

import d3 from 'd3';
import PhotoGrid from '../components/Bootstrap/Portrait.js';



function getPhotos() {
    /*
    var pData = ["other"]
    d3.tsv("./portraits.tsv",
        function(data){
            pData = data;
        }
    )
    */
    var pData = [
        {file:"./img/catnikolovski.jpeg", name:"Catherine Nikolovski", role:"Producer"},
        {file:"./img/hobsonlane.jpeg", name:"Hobson Lane", role:"Lead Data Scientist"}
    ];
    console.log(pData);
    return pData;
    
}

class AboutPage extends Component {
    
    render() {
        return (
            <div>
                <NavbarCollapsible inverse={ false }
                                   fixedTop={ true }
                                   fluid={ true }
                                   branding={ {    name: 'Behind the Curtain',    href: '#'} }
                                   params={ this.props.params }>
                    <Nav pullRight={ true } params={ this.props.params }>
                        <CustomNavRouterLink className="nav-item"
                                             name="Search"
                                             params={ this.props.params }></CustomNavRouterLink>
                        <CustomNavRouterLink className="nav-item"
                                             name="Oregon"
                                             params={ this.props.params }></CustomNavRouterLink>
                        <CustomNavRouterLink className="nav-item"
                                             name="Campaigns"
                                             params={ this.props.params }></CustomNavRouterLink>
                        <CustomNavRouterLink className="nav-item"
                                             name="Candidates"
                                             params={ this.props.params }></CustomNavRouterLink>
                        <CustomNavRouterLink className="nav-item"
                                             name="Donors"
                                             params={ this.props.params }></CustomNavRouterLink>
                        <CustomNavRouterLink className="nav-item"
                                             name="About"
                                             params={ this.props.params }></CustomNavRouterLink>
                        <CustomNavRouterLink className="nav-item"
                                             name="FAQ"
                                             params={ this.props.params }></CustomNavRouterLink>
                    </Nav>
                    <Nav pullRight={ false } params={ this.props.params }></Nav>
                </NavbarCollapsible>
                <Grid fluid={ true }
                      style={ {    marginTop: '60px',    fontWeight: '200px'} }
                      params={ this.props.params }>
                    <SearchResultsForm params={ this.props.params }></SearchResultsForm>
                </Grid>
                <PhotoGrid photos={getPhotos()}>
                </PhotoGrid>
            </div>
            );
    }
}

export default AboutPage;

