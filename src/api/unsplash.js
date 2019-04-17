import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.come',
    headers: {
         Authorization: 
            'Client-ID 4041fa74d3bd4b85a9901200b0525c08e82113fce85817ce3c251a3a0dc2cfec'
    }
});