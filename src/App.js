import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import CardList from './component/Card-list/card-list.component';
import SearchBox from './component/Search-list/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state={
      monsters: [],
      searchString:'',

    }
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response => response.json()))
    .then((users)=> this.setState
    (()=> {return {monsters:users};} ,
    () => {console.log(this.state);} )
    );
  }

  searchFuntion=(event)=>{
    const searchString = event.target.value.toLocaleLowerCase();
   this.setState(()=>
   { return {searchString}});
  }


  render(){
    const {monsters,searchString}=this.state
    const {searchFuntion}=this

    const filterMonsters = monsters.filter((monster)=>
          { return monster.name.toLocaleLowerCase().includes(searchString)});
    return (
      
      <div className="App">
        <h1 className='app-title'>Search Monsters</h1>
        <SearchBox 
        className='monsters-search-box'
        onChangeHandler={searchFuntion}
        placeholder='search'/>

        <CardList monsters={filterMonsters}/>
     </div>
    );

  }
  
}

export default App;
