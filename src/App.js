import React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from "./Components/Modal"
import Search from "./Components/Search"
import UserList from "./Components/UserList"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mangNguoiDung: [],
      searchList: [],
      isSearch: false
    }
  }

  componentDidMount = () => {
    this.getLocalStorage();
  }

  setLocalStorage = (arr) => {
    localStorage.setItem("userList", JSON.stringify(arr));
  }

  getLocalStorage = () => {
    const data = localStorage.getItem("userList");
    const dataParse = JSON.parse(data);
    if (dataParse) {
      this.setState({
        mangNguoiDung: dataParse
      })
    }
    else {
      this.setState({
        mangNguoiDung: []
      })
    }
  }

  getUser = (user) => {
    const mangMoi = [...this.state.mangNguoiDung, user];
    this.setState({
      mangNguoiDung: mangMoi
    }, () => {
      this.setLocalStorage(this.state.mangNguoiDung);
    })
  }

  onDeleteUSer = (userID) => {
    const userListAfterDelete = this.state.mangNguoiDung.filter((user) => {
      return user.maND !== userID;
    })
    this.setState({
      mangNguoiDung: userListAfterDelete
    }, () => {
      this.setLocalStorage(this.state.mangNguoiDung);
    })
  }

  onSearchUser = (keyWord) => {
    const searchList = this.state.mangNguoiDung.filter((user) => {
      return user.hoTen.indexOf(keyWord) !== -1;
    })
    if (keyWord.length !== 0) {
      this.setState({
        searchList: searchList,
        isSearch: true
      })
    }
    else {
      this.setState({
        searchList: [],
        isSearch: false
      })
    }
  }

  render() {
    return (
      <div className="App container">
        <Typography className="App__heading" variant="h3" component="h2" gutterBottom>
          Quản Lý Người Dùng
        </Typography>
        <Modal getUser={this.getUser} />
        <Search onSearchUser={this.onSearchUser} />
        {
          this.state.isSearch ? (this.state.searchList.length !== 0 ? <UserList userList={this.state.searchList} onDeleteUser={this.onDeleteUSer} /> : "Không tìm thấy người dùng cần tìm kiếm") : <UserList userList={this.state.mangNguoiDung} onDeleteUser={this.onDeleteUSer} />
        }
      </div>
    );
  }
}

export default App;
