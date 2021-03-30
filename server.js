const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id':1,
            'image':'http://placeimg.com/64/64/1',
            'name' : '김봉규',
            'birthday' : '910812',
            'gender' : '남자',
            'job' : '무직'
          },
          {
            'id':2,
            'image':'http://placeimg.com/64/64/2',
            'name' : '노라녀',
            'birthday' : '980404',
            'gender' : '여자',
            'job' : '기자'
          },
          {
            'id':3,
            'image':'http://placeimg.com/64/64/3',
            'name' : '아라미',
            'birthday' : '921203',
            'gender' : '여자',
            'job' : '학생'
          } 
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));