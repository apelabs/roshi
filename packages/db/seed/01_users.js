const user = {
  firstName: 'Jackie',
  lastName: 'Chun',
  email: 'jackie.chun@kamehouse.jp',
  password: 'kamehameha',
  avatarUrl:
    'https://orig00.deviantart.net/5bc1/f/2017/322/1/9/jackie_chun_render_by_maxiuchiha22-dbu4tsh.png',
  scopes: [
    'user_create_any',
    'user_read_own',
    'user_read_any',
    'user_update_own',
    'user_update_any',
    'user_delete_own',
    'user_delete_any',
  ],
};

db.users.save(user);
