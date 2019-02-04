import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

    this.search = this.search.bind(this)
    this.getData = this.getData.bind(this);
  }

  getData(){
    $.get('http://localhost:1128/repos', (data)=>{
        // if(err){
        //   console.log(err);
        //   return;
        // }
        console.log(data)
        this.setState({
          repos: data      
        })
    })


    // $.ajax({
    //   url:'http://localhost:1128/repos',
    //   contentType: 'application/json',
    //   method: 'GET', 
    //   success: (data) => {
    //     this.setState({repos: data});
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // })
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.post('http://localhost:1128/repos',term, (err)=>{
      if (err){
        console.log(err)
      }
      console.log('success!')
      this.getData();
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));