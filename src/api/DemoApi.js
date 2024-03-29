class DemoApi {

    searchDemoResult(data) {
        //return this.axios('post', '/gateway/demo/result', {data});
        return [{username: 'AAA',age: 20,gender: 'male',department: 'SPS'},
            {username: 'BBB',age: 20,gender: 'male',department: 'TOSC'}]
    }

    loadDemoDetails() {
        //return this.axios('get', '/gateway/demo/details');
        return {
            generalInfo: {jobNo: '23565754', status: 'Draft'},
            detailInfo: {supplier: 'USAS', office: 'HKG'}
        }
    }


    loadSizeType(liner) {
        return liner === "OOCL"? ['20GP', '20HQ'] : ['40GP', '40HQ']
    }
 }

export default new DemoApi();
