import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
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
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                gender={c.gender}
                birthday={c.birthday}
                job={c.job}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
