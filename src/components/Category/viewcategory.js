import React from 'react'


import Category from '../../containers/People/Category'
import Navigation from '../Navigation';
class Viewcategory extends React.Component {


    render() {
        return (
            <section>
                <Navigation></Navigation>
                <Category></Category>

            </section>
        )
    }
}

export default Viewcategory;
