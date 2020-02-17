import React from 'react'


import Sign from '../../containers/People/Sign'
import Navigation from '../Navigation';
class ViewSign extends React.Component {


    render() {
        return (
            <section>
                <Navigation></Navigation>
                <Sign></Sign>

            </section>
        )
    }
}

export default ViewSign;
