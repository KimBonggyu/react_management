import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : 'auto',
    hover : 'true'
  },
  table: {
    minWidth : 1080
  }
})

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
    const { classes } = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} gender={c.gender} birthday={c.birthday} job={c.job}/>)})}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
