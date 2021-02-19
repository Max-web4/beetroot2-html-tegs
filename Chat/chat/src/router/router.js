import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'contacts',
            component: vContactList
          },
          {
            path: '/contact',
            name: 'contact',
            component: vContactUserInfo,
            props: true
          },
          {
            path: '/chats',
            name: 'chats',
            component: vUsersList
          },
          {
            path: '/user',
            name: 'user',
            component: vUserChat,
            props: true
          }
    ]
});

export default router;  