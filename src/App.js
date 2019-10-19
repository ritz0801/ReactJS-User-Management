import React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from "./Components/Modal"
import Search from "./Components/Search"
import UserList from "./Components/UserList"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mangNguoiDung: []
    }
  }

  getUser = (user) => {
    
    const mangMoi = [...this.state.mangNguoiDung, user];
    this.setState({
      mangNguoiDung: mangMoi
    })
    console.log(mangMoi);
  }

  render() {
    return (
      <div className="App container">
        <Typography className="App__heading" variant="h3" component="h2" gutterBottom>
          Quản Lý Người Dùng
        </Typography>
        <Modal getUser1={this.getUser}/>
        <Search />
        <UserList />
      </div>
    );
  }
}

export default App;
