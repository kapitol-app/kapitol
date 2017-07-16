module.exports = {
    //TODO ALL RESULTS WILL BE FETCHED FROM HTTP REQUEST TO SERVER
    fetchSearch: function (search) {
        if (search === 'members') {
            return ['paul ryan', 'rudy guiliani', 'bernie sanders', 'andre green']
        } else {
            return ['gun control', 'gun rights', 'abortion', 'a.c.a', 'campaign reform'];
        }
    }
}

