import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Trangchu from '../../components/Test/Trangchu';
import Chucnang from '../../components/Test/Chucnang';
import Lienhe from '../../components/Test/Lienhe';
class Content extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/trangchu" element={<Trangchu />} />
                    <Route path="/chucnang" element={<Chucnang />} />
                    <Route path="/lienhe" element={<Lienhe />} />
                </Routes>
            </>
        )
    }

}

export default Content