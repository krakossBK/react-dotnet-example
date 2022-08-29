import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import CreateUser from './components/CreateUser'
import { DisplayBoard } from './components/DisplayBoard'
import UserShowsContainer from './components/UserShowsContainer'
import { getAllUsers, createUser } from './services/UserService'

class App extends Component {

    state = {
        user: {},
        users: [],
        numberOfUsers: 0
    }

    createUser = (e) => {
        console.log('firstName=> ' + this.state.user.firstName);
        console.log('lastName=> ' + this.state.user.lastName);
        if (this.state.user.firstName === undefined || this.state.user.lastName === undefined || this.state.user.firstName.length < 3 || this.state.user.lastName.length < 3) {
            alert('lastName firstName  ==="undefined"');

        }
        else {
            createUser(this.state.user)
                .then(response => {
                    console.log(response);
                    this.setState({ numberOfUsers: this.state.numberOfUsers + 1, shows: response, loading: true, error: "" })
                });
        }

    }
    /*
     *
     * // add ProtoTypes Article

        Article.propTypes = {
            data: PropTypes.shape({
                author: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            })
        }
     * 
     * */
    getAllUsers = () => {
        getAllUsers()
            .then(users => {
               /* console.log(users)*/
                this.setState({ users: users, numberOfUsers: users.length, shows: users, loading: true, error: ""  })
            });
    }

    onChangeForm = (e) => {
        let user = this.state.user
        if (e.target.name === 'firstname') {
            user.firstName = e.target.value;
        } else if (e.target.name === 'lastname') {
            user.lastName = e.target.value;
        }
        user.email = 'krakoss@krakoss.ru';
        if (user.firstName !== null && user.lastName !== null) {
            this.setState({ user })
        }
        else {
            alert('hi hi Krakoss');
        }

    }

    render() {

        return (
            <div className="App">
                <Header></Header>
                <div className="container mrgnbtm">
                    <div className="row">
                        <div className="col-md-8">
                            <CreateUser
                                onChangeForm={this.onChangeForm}
                                createUser={this.createUser}
                            >
                            </CreateUser>
                        </div>
                        <div className="col-md-4">
                            <DisplayBoard
                                numberOfUsers={this.state.numberOfUsers}
                                getAllUsers={this.getAllUsers}
                            >
                            </DisplayBoard>
                        </div>
                    </div>
                </div>
                <div className="row mrgnbtm">
                    <Users users={this.state.users}></Users>
                </div>
                <UserShowsContainer></UserShowsContainer>
            </div>
        );
    }
}

export default App;