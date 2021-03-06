import React, { PropTypes, Component } from 'react';
import { Row } from 'react-flexbox-grid';
import SearchResultsForm from '../../containers/SearchResults/SearchResultsForm.jsx';
import NavRouterLink from './NavRouterLink.jsx';
import YearField from '../Select/Year.jsx';
import Logo from '../Logo/Logo.jsx';

const { string, array, func } = PropTypes;
class FlexNav extends Component{
  static propTypes = {
    pageType: string,
    menuItems: array,
    linkClasses: array,
    years: array,
    params: string,
    onToggleSelect: func
  }

  constructor(props){
    super(props)
    this.state = {
      selectOpts: false
    }
  }
  componentWillMount() {
    const {pageType} = this.props;
    if(pageType && pageType == 'singleResult'){
      this.setState({selectOpts:true});
    }
  }
    makeLinks() {
        let links = this.props.menuItems.map((name, index) => {
            return (
              <NavRouterLink classes={this.props.linkClasses} name={name} params={this.props.params} key={index}/>
          );

        })
        return links
    }
    render() {
        return (
            <Row center='xs' middle='xs' style={{
                backgroundColor: '#2653A5',
                position: 'fixed',
                top: '0px',
                left: '0px',
                width: '100%',
                zIndex: '1020',
                margin: '0px',
                minWidth: '320px'
            }}>

            <Row start='xs' style={{flexWrap:'nowrap',padding:'0.5rem 1rem'}}>
                  <Logo />
                  {this.makeLinks()}
                </Row>
                { this.state.selectOpts ? (
                    <YearField xs = {12} sm = {3} ref={'year'} years={this.props.years} style={{padding:'0.25rem', width:'3rem'}} onToggleSelect={this.props.onToggleSelect}/>
                ):null }

                <SearchResultsForm params={this.props.params} style={{
                    flex: '1',
                    margin: '.5rem',
                    minWidth: '350px'
                }}/>

            </Row>
        );
    }
}

export default FlexNav;