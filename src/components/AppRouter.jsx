import React from 'react';
import { Route, Routes} from 'react-router-dom';
import SearchDemoInfoPanel
    from "./demo_info/search_demo_info/SearchDemoInfoPanel";
import DemoInfoDetailPanel
    from "./demo_info/demo_info_detail/DemoInfoDetailPanel";
import UseParams from "./other_sample/hook/UseParams";

const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<SearchDemoInfoPanel />} exact/>
            <Route path='/demo' element={<SearchDemoInfoPanel />} exact/>
            <Route path='/submit' element={<DemoInfoDetailPanel />} exact/>
            {/*<Route path='/hook' element={<UseRef />} exact/>*/}
            <Route path="/user/:id" element={<UseParams/>} exact/>
        </Routes>
    )
}
export default AppRouter;
