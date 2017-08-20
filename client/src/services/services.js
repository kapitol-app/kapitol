import axios from 'axios';

export const fetchList = () => {
    return axios.get('http://localhost:3004/member-list')
        .then(list => {
            return list;
        })
};

export const fetchMember = (memberId) => {
    return axios({
        method: 'post',
        url: 'http://localhost:3004/members/fetch-member',
        data: {
            id: memberId
        }
    }).then((response) => {
        return response.data;
    })
};
