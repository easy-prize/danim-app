import User from '../api/user/user.service';

test('회원가입', async () => {
  console.log(
    await User.signup(
      'userId',
      'PASSW0RD',
      '다날귀욤',
      'danieluhm2004@gmail.com',
      '01095637570',
      'YXNkZg=='
      )
    );
});

test('로그인', async () => {
  console.log(
    await User.login(
      'userId',
      'PASSW0RD',
      )
    );
});
