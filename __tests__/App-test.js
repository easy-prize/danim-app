import Activity from '../api/activity/activity.service';
import User from '../api/user/user.service';

// test('회원가입', async () => {
//   console.log(
//     await User.signup(
//       'userId',
//       'PASSW0RD',
//       '다날귀욤',
//       'danieluhm2004@gmail.com',
//       '01095637570',
//       'YXNkZg=='
//       )
//     );
// });

test('로그인', async () => {
  console.log(
    await User.login(
      'userId',
      'PASSW0RD',
      )
    );
});

test('엑티비티 추가', async () => {
  console.log(
    await Activity.addActivity(
      '다날지역',
      '디스크립션',
      '이미지',
      '다날 여행사'
    )
  )
});

test('내 엑티비티', async () => {
  console.log(
    await Activity.getMyActivity()
  );
});

test('엑티비티 가져오기', async () => {
  console.log(
    await Activity.getActivityById('5dfe479077130a70d1eadf77')
  );
});

test('엑티비티 검색', async () => {
  console.log(
    await Activity.getActivitySearch('다날지역')
  );
});
