import React from 'react';
import { Route, Routes} from 'react-router-dom';
import SearchDemoInfoPanel
    from "./demo_info/search_demo_info/SearchDemoInfoPanel";
import DemoInfoDetailPanel
    from "./demo_info/demo_info_detail/DemoInfoDetailPanel";
import UseEffect from "./other_sample/hook/UseEffect";
import UseMemo from "./other_sample/hook/UseMemo";
import UseCallback from "./other_sample/hook/UseCallback";
import UseContext from "./other_sample/hook/UseContext";
import UseRef from "./other_sample/hook/UseRef";

const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<SearchDemoInfoPanel />} exact/>
            <Route path='/demo' element={<SearchDemoInfoPanel />} exact/>
            <Route path='/submit' element={<DemoInfoDetailPanel />} exact/>
            <Route path='/hook' element={<UseRef />} exact/>
        </Routes>
    )
}
export default AppRouter;
