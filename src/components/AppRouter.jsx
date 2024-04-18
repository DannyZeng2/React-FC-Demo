import React from 'react';
import { Route, Routes} from 'react-router-dom';
import SearchDemoInfoPanel
    from "./demo_info/search_demo_info/SearchDemoInfoPanel";
import DemoInfoDetailPanel
    from "./demo_info/demo_info_detail/DemoInfoDetailPanel";
import UseParams from "./other_sample/hook/UseParams";
import UseMemo from "./other_sample/hook/UseMemo";
import EmotionDemo from "./other_sample/css_in_js/EmotionDemo";

const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<SearchDemoInfoPanel />} exact/>
            <Route path='/demo' element={<SearchDemoInfoPanel />} exact/>
            <Route path='/submit' element={<DemoInfoDetailPanel />} exact/>
            <Route path='/hook' element={<UseMemo />} exact/>
            <Route path="/user/:id" element={<UseParams/>} exact/>
            <Route path="/css" element={<EmotionDemo/>} exact/>
        </Routes>
    )
}
export default AppRouter;
