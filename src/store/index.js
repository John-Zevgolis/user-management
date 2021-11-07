import { createStore } from 'vuex';
import axios from 'axios';
import router from '../router';

export default createStore({
  state() {
  	return {
  		users: [],
      user: null
  	};
  },
  mutations: {
  	loadUsers(state, payload) {
  		state.users = payload;
  	},
    loadUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
  	fetchUsers(context) {
  		const users = [];

  		axios('https://users-management-1570a-default-rtdb.firebaseio.com/users.json')
  		  .then(res => res.data)
  		  .then(data => {
  			  for(const key in data) {
            const user = {
              key,
              username: data[key].username,
              name: data[key].name,
              email: data[key].email
            };
  				  users.push(user);
  			  }
  			  context.commit('loadUsers', users);
  		  }, error => alert(error.message))
  		  .catch(error => alert(error.message));	
    },
    addUser(context, payload) {
    	axios.post('https://users-management-1570a-default-rtdb.firebaseio.com/users.json', payload)
    		.then(() => router.push({path: '/', query: {alert: 'User Added!'}})
        , error => alert(error.message))
    		.catch(error => alert(error.message));	
  	},
    updateUser(context, payload) {
      axios.put(`https://users-management-1570a-default-rtdb.firebaseio.com/users/${payload.id}.json`, payload.user)
        .then(() => router.push({path: '/', query: {alert: 'User Updated!'}})
        , error => alert(error.message))
        .catch(error => alert(error.message));  
    },
    fetchUser(context, payload) {
      axios(`https://users-management-1570a-default-rtdb.firebaseio.com/users/${payload}.json`)
        .then(res => res.data)
        .then(data => context.commit('loadUser', data)
        , error => alert(error.message))
        .catch(error => alert(error.message));  
    },
    deleteUser(context, payload) {
      axios.delete(`https://users-management-1570a-default-rtdb.firebaseio.com/users/${payload}.json`)
        .then(() => router.push({path: '/', query: {alert: 'User Deleted'}})
        , error => alert(error.message))
        .catch(error => alert(error.message));
    }
  },
  getters: {
  	users(state) {
  		return state.users;
  	},
    user(state) {
      return state.user;
    }
  }
})
